import React from 'react';  



const Card = ({ title, text, buttonText, image}) => {  
  return (  
    <div className="card m-8">
      <img className="card-img-top img-fluid" src={image} alt="Card cap"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn-link">{buttonText}</a>
      </div>
    </div>
  );  
};  

export default Card;