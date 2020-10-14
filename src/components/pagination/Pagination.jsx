import React from 'react'
import {v4} from 'uuid';
function Pagination() {
    return (
        <ul className="pagination">
            <li key={v4()}><span>1</span></li>
            <li key={v4()}><a href="#2">2</a></li>
            <li key={v4()}><a href="#3">3</a></li> 
        </ul>
    )
}

export default Pagination
