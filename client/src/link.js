import "./link.css"
function link(props)
{
    return (
        <>
          <div className='linkMain'>
             <div className="link">
                 <h4>The link to your poll is</h4>
                 <div className="linkDiv"><h4>{`localhost:3000/result/${props.value}`}</h4></div>
                 <div className="line"></div>
                 <h4>The admin link to manage your poll is</h4>
                 <h5>Don't share this link with your participants</h5>
                 <div className="adminLinkDiv"></div>
                 <div className="buttonDiv">
                     <div className="bottomlink"><h4>Visit admin page</h4></div>
                     <div></div>
                     <div className="bottomlink2"><h4>Visit your poll</h4></div>
                 </div>
             </div>
          </div>
          
        </>
    )
}

export default link;