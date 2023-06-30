import './Error.scss'
import RickError from '../../img/rick-error.png'


function Error() {
    return (
        // <div className="container">
            <div className='error'>
                <div>
                    <h2>¡Lo sentimos!</h2>
                    <h2>Ha ocurrido un error... :(</h2>
                </div>
                <img src={RickError} alt="Error" className='errorImg' />
            </div>
        // </div>
    );
}

export default Error;