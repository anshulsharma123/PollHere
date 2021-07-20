import "./cssFile/createPoll.css";
import Question from "./component/Question";
import Option from "./component/Options";
import {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useToasts } from 'react-toast-notifications'
function CreatePoll(props)
{
    const { addToast } = useToasts()
    let history = useHistory();
    const [QuestionData, setQuestionData]=useState("");
    const [OptionsData, setOptionsData]=useState([{id:"1", value:""},{id:"2", value:""}]);
    function postData()
    {
        let Data={Question:QuestionData, OptionData:OptionsData};
        Data.Question=Data.Question.trim();
        for(let i=0; i<Data.OptionData.length; i++)
        {
            Data.OptionData[i].value=Data.OptionData[i].value.trim();
            if(Data.OptionData[i].value.length==0)
            {
                addToast("No field can be empty", {
                    appearance: 'error',
                    autoDismiss: true,
                })
                return;
            }
        }
        if(Data.Question.length==0)
        {
            addToast("No field can be empty", {
                appearance: 'error',
                autoDismiss: true,
            })
            return;
        }
        axios.post("http://localhost:7000/api/poll/data", Data)
        .then(res => {
            props.linkData(res.data._id);
            addToast("Poll created", {
                appearance: 'success',
                autoDismiss: true,
            })
            history.push("/link");
        })
        .catch(err => console.log(err.data))
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
        if(OptionsData.length>2)
        {
            const filteredData = OptionsData.filter((item) => item.id !== id);
             setOptionsData([...filteredData])
        }
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
                     return <Option options={data} indexData={index} onChange={changeOptionData} onDelete={deleteOptionData} len={OptionsData.length}/>
                 })}
                 <button className="AddButton" onClick={addMoreOption}>Add another Option</button>
                 <hr></hr>
                 <button className="createButton" onClick={postData}>Create Poll</button>
              </div>
          </div>
          
        </>
    )
}

export default CreatePoll;