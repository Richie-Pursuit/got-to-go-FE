import './BathroomList.scss';
import BathroomSearchBar from '../bathroomSearchBar/BathroomSearchBar';
import BathroomCard from '../bathroomCard/BathroomCard';




const BathroomList = ( { filteredBathrooms } ) => {


    return (
        <div className = 'bathroomList'>
            <h1 className = 'bathroomList__title'> Bathrooms </h1>


            <div className = 'bathroomList__container' >
                {filteredBathrooms.map ((bathroom) => {
                    return <BathroomCard key = {bathroom.id} bathroom = {bathroom} />
                })}
            </div>
        </div>
    );
};

export default BathroomList;