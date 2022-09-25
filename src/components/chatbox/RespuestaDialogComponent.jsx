import React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


function RespuestaDialog(props) {
  return (
    <>
      <Button variant="contained" style={{backgroundColor: "#AD1F00"}} onClick={props.handleClickOpen}>
        Responder
      </Button>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Mensaje</DialogTitle>
        <DialogContent>
          <DialogContentText>Respuesta.</DialogContentText>
          <TextField
            margin="dense"
            id="autor"
            label="Nombre"
            fullWidth
            onChange={props.handleInput}
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button style={{backgroundColor: "#AD1F00"}} onClick={props.handleClose}>Salir</Button>
          <Button style={{backgroundColor: "#AD1F00"}} onClick={props.handleSubmit}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RespuestaDialog;

