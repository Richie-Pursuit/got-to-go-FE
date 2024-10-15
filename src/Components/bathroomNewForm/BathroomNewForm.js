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
        image: null
    });

    const handleTextChange = (event) => {
        setBathroom({ ...bathroom, [event.target.id]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', bathroom.name);
            formData.append('address', bathroom.address);
            formData.append('city', bathroom.city);
            formData.append('zipcode', bathroom.zipcode);
            formData.append('image', bathroom.image);
    
            console.log("Form Data:", formData); // Log form data
    
            await addBathroom(formData);
            navigate(`/bathrooms`);
        } catch (error) {
            console.error(error);
        }
    };
    
    
      

    const handleImageChange = (event) => {
        setBathroom({ ...bathroom, image: event.target.files[0] });
    };
    

    const addBathroom = async (formData) => {
        try {
            console.log("Sending request to backend..."); 
            await axios.post(`${API}/bathrooms`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Request successful!"); // Log after successful request
        } catch (error) {
            console.error("Error:", error); // Log errors
        }
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
                        <label htmlFor="image">Image:</label>
                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                           
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
