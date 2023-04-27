import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function image(){
return (<div className="col-lg-5 col-sm-12 cen2" data-aos="fade-left">
<div className="right">
  <center><img className="image" src="weather.png"></img></center>
</div>
</div>);
}
export default image;