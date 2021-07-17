import "./createPoll.css";
import Question from "./Question";
import Option from "./Options";
import {useState} from "react";
function CreatePoll()
{
    const [QuestionData, setQuestionData]=useState("");
    const [OptionsData, setOptionsData]=useState([{id:"1", value:""},{id:"2", value:""}]);
    function getData()
    {
       console.log(QuestionData);
       console.log(OptionsData);
    }
    function addMoreOption()
    {   
        let i=Math.random();
        const data={
            id:i,
            value:""
        }
        setOptionsData([...OptionsData,data]);
    }
    function onChangeData(data)
    {
        setQuestionData(data);
    }
    function changeOptionData(Data,id)
    {
       OptionsData.map((data)=>{
           if(data.id==id)
           {
               data.value=Data;
           }
       })
    }
    function deleteOptionData(id)
    {
        const filteredData = OptionsData.filter((item) => item.id !== id);
        setOptionsData([...filteredData])
    }
    return (
        <>
          <div className='createPoll'>
              <div className="createPollInside">
                 <div className="pollHeader">
                     <h1>Create Poll</h1>
                     <h3>Complete below fields to create a poll</h3>
                 </div>
                 <Question onChange={onChangeData}/>
                 {OptionsData.map((data,index)=>{
                     return <Option options={data} indexData={index} onChange={changeOptionData} onDelete={deleteOptionData}/>
                 })}
                 <button className="AddButton" onClick={addMoreOption}>Add another Option</button>
                 <hr></hr>
                 <button className="DeleteButton" onClick={getData}>Create Poll</button>
              </div>
          </div>
          
        </>
    )
}

export default CreatePoll;