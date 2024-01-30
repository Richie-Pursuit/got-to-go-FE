
import BathroomMap from "../bathroomMap/BathroomMap";
import './BathroomDetail.scss'


const BathroomDetail = ( {bathroom} ) => {


    const { name, address, image, zipcode, city } = bathroom;
  

    return (
        <div className='bathroomDetail'>
            <div className='bathroomDetail__grid'>
            <h1 className='bathroomDetail__name'>{console.log({name})} {name}</h1>
                <div className='bathroomDetail__img'>
                    <img src={image} alt='Bathroom' />
                </div>
                <div className='bathroomDetail__info'>
                    <p className='bathroomDetail__address'>{address}</p>
                    <p className='bathroomDetail__city'>{city}, NY</p>
                    <p className='bathroomDetail__zipcode'><span>Zipcode:</span> {zipcode}</p>
                </div>
                <div className='bathroomDetail__bio'>
                    BIO I didn't end up going to see Regina but speaking with her on the phone was an absolute delight. I called in an emergency when my friend getting married in two days had a terrible experience getting lashes at another salon. Trying…
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default BathroomDetail;