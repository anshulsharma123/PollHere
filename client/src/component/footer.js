import "../cssFile/footer.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
function Footer()
{
    const style = {
        color: 'red',
        fontSize: "small"
    };
     return (
         <>
          <div className="footer">
             <h5>Made with <FavoriteIcon color="red" style={style}/> By Anshul Sharma</h5>
          </div>
         </>
     )
}
export default Footer;