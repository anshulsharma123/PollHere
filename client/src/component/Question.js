import "../cssFile/Question.css"
function Question(props)
{
    function onChangeHandler(event)
    {
        props.onChange(event.target.value);
    }
    return (
        <div className="">
           <h4>Poll Question</h4>
           <textarea className="questionField" placeholder="Type your Poll Title here" onChange={onChangeHandler}></textarea>
        </div>
    )
}

export default Question;