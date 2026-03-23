import React from "react";
import './Dropdown.css';
const Dropdown = (props) => {
    const Chosen = (e) => {
        props.Changed(e.target.value)
        }


    return (
        <div  className="Dropdown" >
            <label>{props.label}</label>
            <select value={props.value} onChange={Chosen}>
                {props.itens.map(item => <option key= {item}>{item}</option>)}
            </select>
        </div>
    )
}
export default Dropdown