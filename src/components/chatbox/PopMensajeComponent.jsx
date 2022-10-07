import React,{ useState } from 'react';

import { saveMensaje } from '../service/mensajesService';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function PopMensajeComponent(){

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
      setOpen(false)
    };
    
    const handleInput = evt => {
      setFormInput({ texto: evt.target.value , autor: "Martin"});
    };

    return(
        <div>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
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
          <Button color="success"  onClick={handleClose}>Salir</Button>
          <Button color="success"  onClick={handleSubmit}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default PopMensajeComponent