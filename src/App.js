import React, {useState} from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  const [mode, setMode] = useState("zodiac");

  const handleChildClickZodiac = () => {
    setMode('zodiac');
  };
  const handleChildClickJob = () => {
    setMode('job');
  };
  const handleChildClickColdFlowers = () => {
    setMode('coldflowers');
  };
  const handleChildClickRedNight = () => {
    setMode('rednight');
  };

  const modeButtonHandler =[
   { name: "zodiac", handler: handleChildClickZodiac},
    { name: "job", handler: handleChildClickJob},
    { name: "coldflowers", handler: handleChildClickColdFlowers},
    { name: "rednight", handler: handleChildClickRedNight}
  ];

  return (
    <div className={`App background--general--${mode}`}>
        <div className='main-screen'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home 
                                    lightmode={mode} 
                                    modeButtonHandler={modeButtonHandler}
                                    />
                                    } />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
