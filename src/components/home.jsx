import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";


//include images into your bundle
import Imagen1 from "../img/img 1.png";
import Imagen2 from "../img/img 2.png";
import Imagen3 from "../img/img 3.png";


//create your first component
const Home = () => {    //variable con datos de la tarjeta.
  const cardData = [
    {
      
      title: "Card title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expliquemos magis sapiente, tempore debitis beatae culpa natus architecto.",
      buttonText: "Find Out More",
      image: Imagen1
    },   
    {
      title: "Card title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expliquemos magis sapiente, tempore debitis beatae culpa natus architecto.",
      buttonText: "Find Out More",
      image: Imagen2

    },
    {
      title: "Card title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expliquemos magis sapiente, tempore debitis beatae culpa natus architecto.",
      buttonText: "Find Out More",
      image: Imagen3

    },
  ];
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <h1>Some of my work</h1>
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-4" key={index}>
              <Card
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center mt-4">
        <p>Copyright © Your Website 2019</p>
      </footer>
    </div>
  );
};

export default Home;
