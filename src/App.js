import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import I from "./components/image"

function App() { 
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, []);
const [place,setPlace]=useState('--')
const [temperature,setTemperature]=useState('--')

async function UpdateWeather(placename){

  const url="https://api.openweathermap.org/data/2.5/weather?q="+placename+"&appid=b9e3ad88b4ce8cff53bcd4be089e9bf5&units=metric"
  const response=await fetch(url);
  if(!response.ok){
   setTemperature("");
   setPlace("No Data Found");
   document.getElementById('buffer').style.display="none";
   document.getElementById('all').style.display="block";
  }
  else{
  await fetch(url)
   .then(res=>res.json())
   .then(function(data){
    setPlace(data.name)
    setTemperature(data.main.temp +"° Celsius")
    document.getElementById('buffer').style.display="none";
    document.getElementById('all').style.display="block";
   })
   .catch(err=>console.log(err))
  }
}
    return(
    <div>
        <div style={{display:'none'}} id="buffer">
      <img style={{borderRadius:'50%'}} src="animie.svg"></img>
     </div>
      <div id="all" onLoad={()=>{
        UpdateWeather("visakhapatnam");
        document.getElementById('all').style.display="none";
        document.getElementById('buffer').style.display="block";
      }}>
    <div className="row fl">
     <div className="col-lg-1"></div>
     <div className="col-lg-5 col-sm-12 cen" data-aos="fade-right">
       <center>
       <div className="left">
        <center><h3  style={{fontWeight:'800',color:'#4B77BE'}} className="w">The Weather App</h3></center>
         <center><h1 className="t">{temperature}</h1></center>
         <center><h3  style={{fontWeight:'800',color:'#4B77BE'}}  className="p">{place}</h3></center>
       </div>
       <div className="in">

        <input className="form-control tx" id="xt" placeholder="Enter City" />
        <button className="btn btn-primary sub" type="submit" onClick={()=>{
           var placename=document.getElementById('xt').value;
           document.getElementById('all').style.display="none";
           document.getElementById('buffer').style.display="block";
           UpdateWeather(placename);
       }}>Get weather</button>
      </div>
      </center>
    </div>

    <I />

   </div>
  </div>
    </div>
      
    )
}





export default App;









