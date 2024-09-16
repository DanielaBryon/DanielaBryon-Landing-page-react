import React from 'react'; 
import Background from "../img/fondoJumbotron.png"

 

const Jumbotron = () => {  
  return (  
      <div className='jumbotron col-xs-12' style={{ backgroundImage: `url(${Background})` }}>
    
        <h1 className="jumbo-tittle display-4">I am Daniela</h1>  
        <p className="lead">As a full stack developer, I blend technical prowess with a keen eye for usability, weaving logical solutions and visual aesthetics into every digital tapestry I create.</p>  
        <a className="btn btn-primary btn-lg" href="#" role="button">Contact me!</a>  
      </div>
  
  );  
};  

   

export default  Jumbotron;