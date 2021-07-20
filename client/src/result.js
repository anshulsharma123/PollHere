import "./cssFile/result.css";
import {useParams} from "react-router-dom";
import QuestionDiv from "./component/questiondiv";
import ResultOption from "./component/resultOptioon";
import axios from "axios";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
function Result()
{
    let id= useParams();
    const [question , setQuestion]=useState("");
    const [total, setTotal]=useState(parseInt(0));
    let totals=0;
    const [answer,setAnswer]=useState("");
    const [options,setOptions]=useState([]);
    function mountData(data)
    {
        setOptions([...options,...data.data.Options]);
        setQuestion(data.data.Question);
        for(let i=0; i<data.data.Options.length; i++)
        {
            totals+=parseInt(data.data.Options[i].vote);
            setTotal(totals)
            if(data.data.Options[i]._id==localStorage.getItem(id.id))
            {
                setAnswer(data.data.Options[i].OptionData);
            }
        }
    }
    useEffect(async()=>{
        const data= await axios.get(`http://localhost:7000/api/poll/result/${id.id}`);
        mountData(data);
    },[])
    return (
        <>
          <div className='resultPoll'>
              <div className="resultPollInside">
                 <QuestionDiv value={question}/>
                 {options.map((data)=>{
                   return  <ResultOption option={data.OptionData} vote={data.vote} total={total}/>
                 })}
              </div>
              <div className="contentDiv">
                <div className="answerDiv">
                    <h4 className="answerHeading">Your Voted on</h4>
                    <h2 className="answer">{answer}</h2>
                </div>
              </div>
          </div>
          
        </>
    )
}

export default Result;