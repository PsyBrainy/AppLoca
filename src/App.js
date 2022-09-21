import './App.css';
import React,{ useEffect , useState } from 'react';

import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/system';
import { getMensajes } from './service/mensajesService';
import FeedMensajesComponent from './components/FeedMensajesComponent';
import PopMensajeComponent from './components/PopMensajeComponent';

function App() {

  const [mensajesData, setMensajesData] = useState([]);


  useEffect(() => {
    getMensajes().then(data => setMensajesData(data))
  }, [mensajesData])



  return (

    <Container sx={{ width: 600, height: 500, scroll: 'paper' } }>
      
      <CardContent>
        <div className="App">
          {
            mensajesData.map(item => {
              return(
                <FeedMensajesComponent mensaje={item}></FeedMensajesComponent>
              )})
          }
        </div>
      </CardContent>

      <PopMensajeComponent>
      </PopMensajeComponent>

    </Container>
  );
}

export default App;
