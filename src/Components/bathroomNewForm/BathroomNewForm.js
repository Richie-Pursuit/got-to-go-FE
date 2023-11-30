import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './BathroomNewForm.scss'

const API = process.env.REACT_APP_API_URL;

const BathroomNewForm = () => {
    let navigate = useNavigate();

    const [bathroom, setBathroom] = useState({
        name: "",
        address: "",
        city: "",
        zipcode: "",
        image: ""
    })

    const addBathroom = (newBathroom) => {
        axios
        .post(`${API}/bathrooms`, newBathroom)
        .then(
            () => {
                console.log("addBathroom")
                navigate(`/bathrooms`)
            },
            (err) => console.error(err)
        )
        .catch((c) => console.warn("catch", c))
    }

    const handleTextChange = (event) => {
        setBathroom({ ...bathroom, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addBathroom(bathroom);
    };

    return (
        <div className="form-container">
            <div className="bathroomNewForm">
                <h3>NEW FORM</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            value={bathroom.name}
                            type="text"
                            onChange={handleTextChange}
                            placeholder="Name of Bathroom"
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
                            placeholder="Address of Bathroom"
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
                            placeholder="Zipcode of Bathroom"
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
                        <Link to={`/bathrooms`}>
                            <button>Nevermind!</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BathroomNewForm;
