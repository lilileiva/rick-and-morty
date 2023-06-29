import './LocationsList.scss'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllLocations, clearStates } from '../../redux/actions'
import Paging from '../Paging/Paging';


function LocationsList() {

    const locations = useSelector(state => state.locations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLocations())
        return () => {
            dispatch(clearStates())
        }
    }, [dispatch]);

    const [page, setPage] = useState(1);
    const elementsPerPage = 8
    const totalPages = page * elementsPerPage;
    const firstPage = totalPages - elementsPerPage;
    const locationsPaged = locations.slice(firstPage, totalPages);

    const setPageTo = (page) => {
        setPage(page)
    }

    return (
        <div className='container'>
            <div className="locationsList">
                {
                    locations && locationsPaged.map(location => (
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
        </div>
    );
}

export default LocationsList;