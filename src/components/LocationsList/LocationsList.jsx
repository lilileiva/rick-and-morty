import './LocationsList.scss'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paging from '../Paging/Paging';
import { LocationsContext } from '../../context/apiContext';


function LocationsList() {

    const locations = useContext(LocationsContext);

    const [page, setPage] = useState(1);
    const elementsPerPage = 8
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const locationsPaged = locations !== null ? locations.slice(firstPage, totalPages) : null;

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            {
                locations && <>
                    <div className="locationsList">
                        {
                            locationsPaged.map(location => (
                                <Link to={`/ubicaciones/${location.id}`}>
                                    <li className='locationCard'>
                                        {location.name}
                                        {location.type}
                                        {location.dimension}
                                    </li>
                                </Link>
                            ))
                        }
                    </div>
                    <Paging listLength={locations.length} page={page} elementsPerPage={elementsPerPage} setPage={setPage} setPageTo={setPageTo} />
                </>
            }
        </div>
    );
}

export default LocationsList;