
import './App.css';
import React, { useState } from 'react';
function App() {
  let [weight,setWeight] = useState(0);
  let [height,setHeight] = useState(0);
  let [bmi,setBmi] = useState('');
  let [message,setMESSAGE] = useState('');
  let calbmi=(e)=>{
    e.preventDefault();
if(weight===0 || height===0)
{
  alert("Please Enter Valid Weight and Height")
}  
else
{
  let bmi=(weight/(height*height)*703)
  setBmi(bmi.toFixed(1))

  if(bmi<25)
  {
  setMESSAGE('you are UnderWeight')
  }
  else if(bmi>=25 && bmi<30)
{
  setMESSAGE('you are healthy')
}
else
{
  setMESSAGE('you are overweight ')
}
}
}
let reload=()=>{
  window.location.reload();
}
  return (
    <div className="App">
      <div className="container">
        <form onSubmit={calbmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder='Enter Weight Value' value={weight} onChange={(e)=>setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (In)</label>
            <input type="text" placeholder='Enter Height Value' value={height} onChange={(e1)=>setHeight(e1.target.value)} />
          </div>
          <div>
            <button type='submit' className='btn'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
          <div>
            <h3>Your BMI is:{bmi}</h3>
            <p>
              {message}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
