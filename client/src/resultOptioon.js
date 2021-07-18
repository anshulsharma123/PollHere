import "./questiondiv.css";
function ResultOption(props)
{
   return(
       <>
          <div className="optionMain">
              <div className="display">
                  <div className="optionHeading">
                      <h2>{props.option}</h2>
                  </div>
                  <div className="optionHeading">
                     <h2>{`${props.total==0?0:(props.vote/props.total)*100} %`}</h2>
                 </div>
              </div>
              <div className="optionHeading">
                  <h2>{`${props.vote} vote`}</h2>
              </div>
          </div>

       </>
   )
}

export default ResultOption;