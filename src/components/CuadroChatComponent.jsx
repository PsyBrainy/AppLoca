import React,{ useState } from 'react';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/system';
import { saveMensaje } from '../service/mensajesService';
import FeedMensajes from './FeedMensajesComponent';


import '../styles/style.css';
import RespuestaDialog from './RespuestaDialogComponent';


function CuadroChat(){
  
  const [largo, setLargo] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [formInput, setFormInput] = useState();
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = evt => {
    evt.preventDefault();
    saveMensaje(formInput)
    setLargo(largo + 1)
    setOpen(false)
  };
  
  const handleInput = evt => {
    setFormInput({ texto: evt.target.value , autor: "Martin"});
    

  };

  return (

    <Container sx={{ width: 600, height: 500, scroll: 'paper' } }>
      
      <CardContent>
        <div className="App">
        <FeedMensajes largo={largo} ></FeedMensajes>
        </div>
      </CardContent>

      <div>
      <RespuestaDialog 
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      handleInput={handleInput}
      open={open}
      ></RespuestaDialog>
    </div>

    </Container>
  );
}

export default CuadroChat