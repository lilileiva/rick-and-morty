import './Paging.scss'


function Paging({ listLength, page, elementsPerPage, setPage, setPageTo }) {

    const currentPage = page
    const pages = []

    const createPages = (pages) => {
        for (let i = 1; i <= Math.ceil(listLength / elementsPerPage); i++) {
            pages.push(i);
        };
    }
    createPages(pages)

    const getPrevious = () => {        
        if (page > 1) setPage(page - 1)
    }

    const getNext = (pages) => {        
        if (page < pages.length) setPage(page + 1)
    }

    let next = '>'
    let back = '<'

    return (
        <>
            {
                pages.length > 1 && (
                    <div className='paging'>
                        <button onClick={() => getPrevious(pages)}>{`${back}`}</button>
                        {pages.map(page => (
                            <a className={(currentPage === page ? 'pageActive' : 'page')} key={page} onClick={() => setPageTo(page)}>{page}</a>
                        ))}
                        <button onClick={() => getNext(pages)}>{`${next}`}</button>
                    </div>
                )
            }
        </>
    );
}

export default Paging;