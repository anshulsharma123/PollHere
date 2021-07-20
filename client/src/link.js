import "../src/cssFile/link.css"
import QRCode from "react-qr-code";
import { useToasts } from 'react-toast-notifications'
function Link(props)
{
  const { addToast } = useToasts()
  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      addToast("Link Copied", {
      appearance: 'success',
      autoDismiss: true,
  })
    } catch (err) {
      addToast("Failed to copy link", {
        appearance: 'error',
        autoDismiss: true,
    })
    }
  }
  const copyToClipBoardResult = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      addToast("Link Copied", {
        appearance: 'success',
        autoDismiss: true,
    })
    } catch (err) {
      addToast("Failed to copy link", {
        appearance: 'error',
        autoDismiss: true,
    })
    }
  }
    return (
        <>
          <div className='linkMain'>
             <div className="link">
                 <h4>The link to your poll is</h4>
                 <div className="linkDiv" onClick={()=>{
                 copyToClipBoard(`localhost:3000/vote/${props.value}`);
                 }}><h4 className="votelink">{'Click Here To Copy Link for Voting '}</h4></div>
                 <div className="line"></div>
                 <h4>The admin link to manage your poll is</h4>
                 <h5>Don't share this link with your participants</h5>
                 <div className="adminLinkDiv" onClick={()=>{
                    copyToClipBoardResult(`localhost:3000/result/${props.value}`);
                 }}><h4 className="votelink">{'Click Here To Copy Link for Voting '}</h4></div>
                 <div className="buttonDiv">
                     <div className="bottomlink"><h4>Visit admin page</h4></div>
                     <div></div>
                     <div className="bottomlink2"><h4>Visit your poll</h4></div>
                 </div>
             </div>
             <div className="qrCode"><QRCode value={`http://localhost:3000/vote/${props.value}`} /></div>
          </div>     
        </>
    )
}

export default Link;