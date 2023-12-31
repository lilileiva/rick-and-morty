import './LocationsList.scss'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paging from '../Paging/Paging';
import { LocationsContext } from '../../context/apiContext';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


function LocationsList() {

    const locations = useContext(LocationsContext);
    const locationsData = locations?.apiData

    const [page, setPage] = useState(1);
    const elementsPerPage = 8
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const locationsPaged = locations?.fetchStatus === "success" ? locationsData.slice(firstPage, totalPages) : null;

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            {
                locations?.fetchStatus === "success" && <div className='listContainer'>
                    <div className="locationsList">
                        {
                            locationsPaged.map(location => (
                                <Link to={`/ubicaciones/${location.id}`}>
                                    <li className='locationCard'>
                                        <p>{location.name}</p>
                                        <p>{location.type}</p>
                                        <p>{location.dimension}</p>
                                    </li>
                                </Link>
                            ))
                        }
                    </div>
                    <Paging listLength={locationsData.length} page={page} elementsPerPage={elementsPerPage} setPage={setPage} setPageTo={setPageTo} />
                </div>
            }
            {
                locations?.fetchStatus === "loading" && <Loader />
            }
            {
                locations?.fetchStatus === "error" && <Error />
            }
        </div>
    );
}

export default LocationsList;