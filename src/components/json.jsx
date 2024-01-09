import React, { useState, useEffect } from "react";
import "./index.css";

const MyComponent = () => {
  const [randomIndex1, setRandomIndex1] = useState(null);
  const [randomIndex2, setRandomIndex2] = useState(null);
  const [randomUser1, setRandomUser1] = useState(null);
  const [randomUser2, setRandomUser2] = useState(null);
  const [showRightUserSize, setShowRightUserSize] = useState(false);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    spielStart();
  }, []);

  const spielStart = async () => {
    try {
      const response = await fetch("/assets/daten.json");
      const jsonData = await response.json();

      const newIndex1 = Math.floor(Math.random() * jsonData.person.length);
      const newIndex2 = Math.floor(Math.random() * jsonData.person.length);

      setRandomIndex1(newIndex1);
      setRandomIndex2(newIndex2);

      setRandomUser1(jsonData.person[newIndex1]);
      setRandomUser2(jsonData.person[newIndex2]);
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
    }
  };

  const buttonClick = async () => {
    try {
      const response = await fetch("/assets/daten.json");
      const jsonData = await response.json();

      // Transfer user on the right to the left
      setRandomIndex1(randomIndex2);
      setRandomUser1(randomUser2);

      // Generate a new random user on the right
      const newIndex2 = Math.floor(Math.random() * jsonData.person.length);
      
      setRandomIndex2(newIndex2);
      setRandomUser2(jsonData.person[newIndex2]);

      // Reset the flag for showing right user size
      setShowRightUserSize(false);
    } catch (error) {
      console.error("Fehler beim Abrufen der Daten:", error);
    }
  };


  const lowerButtonClick = () => {
    setShowRightUserSize(true);
    if(randomUser1.height>randomUser2.height|randomUser1.height===randomUser2.height)
    {
      setScore(score + 1);
      weiterButton();
      setHighestScore((prevHighestScore) => (score + 1 > prevHighestScore ? score + 1 : prevHighestScore));

    }
    else{
      setScore(score-score);
    }
  };


  const HigherButtonClick = () => {
    setShowRightUserSize(true);
    
    if(randomUser1.height<randomUser2.height|randomUser1.height===randomUser2.height)
    {
      setScore(score + 1);
      weiterButton();
      setHighestScore((prevHighestScore) => (score + 1 > prevHighestScore ? score + 1 : prevHighestScore));

    }
    else{
      setScore(score-score);
    }
  };

  const weiterButton = () => {
    setShowRightUserSize(false);
    buttonClick();
    
  }
  

  return (
    <div id="game">
      <p>Score: {score}  <br/>
        Highest Score: {highestScore}
      </p>
    <div id="vergleichBox">
      
      
      <div id="linkeBox">
        <h1>{randomUser1.name}</h1>
        {randomUser1 && (
          <div>
            <img className="rizzy" src={randomUser1.image} alt={randomUser1.name} />
            <p>{randomUser1.height} m</p>
            
          </div>
        )}
      </div>
      <div id="buttonBox">
      <button className="button" onClick={HigherButtonClick}>
          Higher 
        </button>
        <button className="button" onClick={lowerButtonClick}>
          Lower 
        </button>
      </div>
      <div id="rechteBox">
        <h1>{randomUser2.name}</h1>
        {randomUser2 && (
          <div>
            <img className="rizzy" src={randomUser2.image} alt={randomUser2.name} />
            <p id="geheimGroesse">
              {showRightUserSize ? `${randomUser2.height} m` : "??? m"}
            </p>
          </div>
        )}
        
      </div>
    </div>
    </div>
  );
};





export default MyComponent;