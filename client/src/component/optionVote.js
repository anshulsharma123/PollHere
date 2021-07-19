import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../cssFile/optionVote.css';
function OptionVote(props)
{
     async function getdata(id,pollid)
     {
          props.setSelectId(id);
     }
     let id=props.id;
     let pollid=props.pollid;
     return (
         <>
          <div className={props.click===props.id?"optionVoteClick":"optionVote"} onClick={()=>{
              getdata(id,pollid);
          }}>
                <div className={props.click===props.id?"roundVoteClick":"roundVote"}></div>
               <h2>{props.value}</h2>
          </div> 
         </>
     )
}

export default OptionVote;