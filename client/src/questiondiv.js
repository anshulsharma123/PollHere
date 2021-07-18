import "./questiondiv.css";
function QuestionDiv(props)
{
     return (
         <>
           <div className="question">
               <h1>{props.value}</h1>
           </div>
         </>
     )
}

export default QuestionDiv;