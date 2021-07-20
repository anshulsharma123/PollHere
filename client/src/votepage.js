import "./cssFile/votepage.css"
import {useState} from "react";
import { useEffect } from "react";
import { useParams , useHistory } from "react-router-dom";
import axios from "axios";
import OptionVote from "./component/optionVote";
import QuestionDiv from "./component/questiondiv";
import { useToasts } from 'react-toast-notifications'
function VotePage(props)
{
    const { addToast } = useToasts()
    let id= useParams();
    let history = useHistory();
    const [selectId, setSelectId]= useState(0);
    const [question , setQuestion]=useState("");
    const [options,setOptions]=useState([]);
    async function voteSubmit()
    {
        let Data={
            pollId:id.id,
            optionId:selectId,
        }
        if(selectId==0)
        {
            addToast("Select atleast one option", {
                appearance: 'error',
                autoDismiss: true,
            })
            return;
        }
        axios.put(`http://localhost:7000/api/poll/vote`, Data)
        .then(res => {
            localStorage.setItem(`${Data.pollId}`, Data.optionId);
            addToast("Your vote is successful submited", {
                appearance: 'success',
                autoDismiss: true,
            })
            history.push(`/result/${id.id}`);
        })
        .catch(err => console.log(err))
    }
    function mountData(data)
    {
        setOptions([...options,...data.data.Options]);
        setQuestion(data.data.Question);
    }
    useEffect(async()=>{
        let value=localStorage.getItem(id.id);
        if(value)
        {
            history.push(`/result/${id.id}`);
        }
        else
        {
            const data= await axios.get(`http://localhost:7000/api/poll/result/${id.id}`);
            mountData(data);
        }
    },[])
    return (
        <>
          <div className="votePoll">
              <div className="votePollInside">
                <QuestionDiv value={question}/>
                {options.map((data)=>{
                     return <OptionVote click={selectId} value={data.OptionData} id={data._id} pollid={id} setSelectId={setSelectId}/>
                })}
                <hr></hr>
                <button className="submitButton" onClick={voteSubmit}>Submit vote</button>
              </div>
          </div>
        </>
    )
}
export default VotePage;