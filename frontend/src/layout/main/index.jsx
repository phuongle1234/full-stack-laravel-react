import React from "react";

export const MainLayout = ({ children, ...props }) => {
    
    const { last_page, current_page, Header, handleChangePage, title } = props

    return (
    <>
        <div className="content">
            <div className="row row-body">
            <h2>{ title } </h2>
            <div className="row text-end" style={{ margin: "6px -2px 20px" }} >
                { Header }
            </div>  
            <div className="sroll">
                { children }
            </div>          
            </div>
        </div>
    
        {
            ( last_page > 1 ) &&
            (
                <nav aria-label="Page navigation example text-end">
                <ul className="pagination">
                    { ( current_page > 1 ) && (<li className="page-item"><a className="page-link" data-page={1}  onClick={handleChangePage}>FIRST</a></li>) }
                    
                    { ( current_page > 1 ) && (<li className="page-item"><a className="page-link" data-page={(current_page -1)}  onClick={handleChangePage}>{ current_page -1 }</a></li>) }

                    <li className="page-item"><a className="page-link active" data-page={current_page}  onClick={handleChangePage}>{ current_page }</a></li>

                    { ( last_page >= ( current_page + 1 ) ) && (<li className="page-item primary"><a className="page-link" data-page={(current_page + 1 )}  onClick={handleChangePage}>{ current_page + 1 }</a></li>) }

                    { ( current_page < last_page ) && (<li className="page-item"><a className="page-link" data-page={last_page}  onClick={handleChangePage}>LAST</a></li>) }

                </ul>
                </nav>
            ) 
        }
  
    </>
    )
}