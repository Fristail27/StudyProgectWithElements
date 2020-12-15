import React, {useState} from 'react';
import './App.css';
import Indicate from "./Components/Indicate/Indicate";
import Rating from "./Components/Rating/Rating";
import ControlIndicate from "./Components/ControlIndicate/ControlIndicate";
import Select from "./Components/Select/Select";

//12

function App() {

    let [IndicateStatus, setIndicateStatus] = useState(true)

    return (
        <div className="App">
            <div style={{marginTop: "200px", marginBottom: "50px"}}>
                < Indicate/>
                < Indicate/>
                < Indicate/>
            </div>
            < Rating/>
            <ControlIndicate status={IndicateStatus} edit={setIndicateStatus}/>
            <Select onChange={()=>{console.log(4334)}} value="select" items={[{title: "Alex", value: 1}, {
                title: "Andrew",
                value: 2
            }, {title: "Valera", value: 3}, {title: "LOL", value: 4}]}/>
        </div>
    );
}
// 123
export default App;
