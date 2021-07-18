import "./result.css";
import {useParams} from "react-router-dom";
import QuestionDiv from "../src/questiondiv";
import ResultOption from "../src/resultOptioon";
import axios from "axios";
import { useEffect, useState } from "react";
function Result()
{
    let id= useParams();
    const [question , setQuestion]=useState("");
    const [total, setTotal]=useState(0);
    const [options,setOptions]=useState([]);
    function mountData(data)
    {
        setOptions([...options,...data.data.Options]);
        setQuestion(data.data.Question);
        for(let i=0; i<data.data.Options.length; i++)
        {
            setTotal(total+parseInt(data.data.Options[i].vote));
        }
        //console.log(data.data.Options.vote);
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
          </div>
          
        </>
    )
}

export default Result;