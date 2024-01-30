import { useState, useEffect } from 'react';
import axios from 'axios';
import BathroomSearchBar from '../Components/bathroomSearchBar/BathroomSearchBar';
import BathroomList from '../Components/bathroomList/BathroomList';

const Index = () => {
    const [bathrooms, setBathrooms] = useState([]);
    const [filteredBathrooms, setFilteredBathrooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const itemsPerPage = 70; // Change this value as needed

    useEffect(() => {
        const API = process.env.REACT_APP_API_URL;
        axios
            .get(`${API}/bathrooms?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => {
                setBathrooms(res.data);
                setFilteredBathrooms(res.data);
                setTotalPages(res.headers['x-total-pages']); // Assuming backend sends total pages in response headers
            })
            .catch((error) => console.warn("Error fetching data", error));
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const renderPageButtons = () => {
        const pageButtons = [];
        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
                <button key={i} onClick={() => setCurrentPage(i)} disabled={currentPage === i}>
                    {i}
                </button>
            );
        }
        return pageButtons;
    };

    return (
        <div>
            <div className='bathroomList__searchbar'>
                <BathroomSearchBar bathrooms={bathrooms} setFilteredBathrooms={setFilteredBathrooms} />
            </div>
            <div>
                <BathroomList filteredBathrooms={filteredBathrooms} />
            </div>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {renderPageButtons()}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Index;
