import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './BathroomEditForm.scss'

const API = process.env.REACT_APP_API_URL;

const BathroomEditForm = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const [bathroom, setBahtroom] = useState({
        name: "",
        address: "",
        city: "",
        zipcode: "",
        latitude: "",
        longitude: "",
        image: ""
    })

    const updateBathroom = (updatedBathroom) => {
        console.log('IDDD', id)
        axios
        .put(`${API}/bathrooms/${id}`, updatedBathroom)
        .then(
            () => {
                console.log("updateBathroom", id)
                navigate(`/bathrooms/${id}`)
            },
            (err) => console.error(err)
        )
        .catch((c) => console.warn("catch", c))
    }

    const handleTextChange = (event) => {
        setBahtroom({ ...bathroom, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        axios.get(`${API}/bathrooms/${id}`)
        .then((response) => setBahtroom(response.data),
        (error) => navigate(`/not-found`)
        )
    }, [id, navigate])

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBathroom(bathroom, id);
    };

    return (
        <div className="form-container">
            <div className="bathroomEditForm">
                <h3>Edit Bathroom</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            value={bathroom.name}
                            type="text"
                            onChange={handleTextChange}
                            placeholder="Name of Product"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            id="address"
                            value={bathroom.address}
                            type="text"
                            onChange={handleTextChange}
                            placeholder="Address of bathroom"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <select
                            id="city"
                            name="city"
                            value={bathroom.city}
                            placeholder="City"
                            onChange={handleTextChange}
                        >
                            <option value="">Select a borough</option>
                            <option value="New York">Manhattan</option>
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Queens">Queens</option>
                            <option value="Bronx">Bronx</option>
                            <option value="Staten Island">Staten Island</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipcode">Zipcode:</label>
                        <input
                            id="zipcode"
                            value={bathroom.zipcode}
                            type="number" 
                            onChange={handleTextChange}
                            placeholder="Zipcode of bathroom"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image Link:</label>
                        <input
                            id="image"
                            type="text"
                            pattern="http[s]*://.+"
                            required
                            value={bathroom.image}
                            placeholder="http://"
                            onChange={handleTextChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" />
                        <Link to={`/bathrooms/${id}`}>
                            <button>Nevermind!</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BathroomEditForm;
