import "../cssFile/nav.css";
import {Link} from "react-router-dom";
function Nav()
{
   return (
       <>
         <div className='upperLine'></div>
         <div className="pollDesc">
               <Link to="/" className="linkcomp"><h1>Poll Here</h1></Link>
               <h3>Create anonymous polls for free</h3>
         </div>
       </>
   )
}

export default Nav;