import React from "react"
import ReactDOM from "react-dom"

// JSX

function MyInfo(){
  return (<div>
            <h1>Carmine</h1>
            <p>BI Engineer</p>
            <ul> Language knew
               <li>SQL</li>
               <li>Python</li>
               <li>Javascript</li>
            </ul>
         </div>)

}
ReactDOM.render( <MyInfo />, document.getElementById('root'));
