import { useState } from "react";
import "./options.css";
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
            <input className="option" placeholder={`Add option ${props.indexData+1}`} onChange={OptionData} value={props.options.value}></input>
            <button onClick={deleteOption}>delete</button>
            {/* <i className="fa fa-trash-o"></i> */}
            {/* <i className="fa fa-trash-o DeleteButton"></i> */}
          </div>
        </>
    )
}

export default Option;