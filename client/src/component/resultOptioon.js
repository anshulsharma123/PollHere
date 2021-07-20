import "../cssFile/resultOption.css";
function ResultOption(props)
{
   let per=0;
   if(props.total!=0)
   {
     per=(props.vote/props.total)*100;
     per=per.toPrecision(2);
     per=Math.round(per);
   }
   return(
       <>
          <div className="optionMain">
              <div className="display">
                  <div className="optionHeading">
                      <h2>{props.option}</h2>
                  </div>
                  <div className="optionHeading">
                     <h3>{`${per}%`}</h3>
                 </div>
              </div>
              <div className="optionHeading">
                  <h4>{`${props.vote} vote`}</h4>
              </div>
          </div>

       </>
   )
}

export default ResultOption;