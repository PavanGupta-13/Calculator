import React from 'react';
import "./categories.css";

const Categories = ({filterItems}) => {
    return (<>
        <div>
            <button onClick={()=>filterItems("all")}>All</button>
            <button className="bt1" onClick={()=>filterItems("breakfast")}>breakfast</button>
            <button className="bt2" onClick={()=>filterItems("lunch")}>lunch</button>
            <button className="bt3" onClick={()=>filterItems("dinner")}>dinner</button>
        </div>

    </>)
}

export default Categories;