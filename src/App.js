import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      
        
        <div className="app__videos"> 
          <Video url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          channel="dougGoncalves"
          description="uma descrição bacana aqui"
          song="Aerosmith-Falling in Love"
          likes={123}
          shares={456}
          messages={789}
          />
          <Video url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          channel="dougGoncalves"
          description="uma descrição bacana aqui"
          song="Aerosmith-Falling in Love"
          likes={123}
          shares={456}
          messages={789}
          />
        </div>
    
       
    </div>
  );
}

export default App;
