
import React,{ useEffect , useState } from 'react';

import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/system';
import { saveMensaje } from './service/mensajesService';
import FeedMensajesComponent from './components/FeedMensajesComponent';
import PopMensajeComponent from './components/PopMensajeComponent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {


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
        <FeedMensajesComponent largo={largo} ></FeedMensajesComponent>
        </div>
      </CardContent>

      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Responder
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Mensaje</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Respuesta.
          </DialogContentText>
          <TextField
            margin="dense"
            id="autor"
            label="Nombre"
            fullWidth
            onChange={handleInput}
            variant="standard"
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Salir</Button>
          <Button onClick={handleSubmit}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>

    </Container>
  );
}

export default App;
