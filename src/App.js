import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const cardData = [
    {
      title: "Alfarel Zaki",
      desc: "FrontEnd Developer"
    },
    {
      title: "Ahmad Rifal",
      desc: "FrontEnd Developer"
    },
    {
      title: "Fariz Albab",
      desc: "Fullstack Developer Kae"
    },
  ]
  
  return (
    <div>
      {cardData.map (data =>
        <div className="card">
          <p className="title">{data.title}</p>
          <p className="desc">{data.desc}</p>
        </div>
      )}
    </div>
  );
}

export default App;
