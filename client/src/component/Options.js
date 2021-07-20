import { useState } from "react";
import "../cssFile/options.css";
import logo from "../photo/download.png";
function Option(props)
{
    const [value ,setValue]=useState(props.options.value);
    function OptionData(event)
    {
        props.onChange(event.target.value,props.options.id);
        setValue(event.target.value);
    }
    function deleteOption()
    {
        props.onDelete(props.options.id);
    }
    return (
        <>
          <div className=''>
            <h4>{`Option ${props.indexData+1}`}</h4>
            <input className="option" placeholder={`Add option ${props.indexData+1}`} onChange={OptionData} value={props.options.value} required></input>
            <button  className={props.len<=2?"disable":"delete"} onClick={deleteOption}><img src={logo} className="image"></img></button>
          </div>
        </>
    )
}

export default Option;