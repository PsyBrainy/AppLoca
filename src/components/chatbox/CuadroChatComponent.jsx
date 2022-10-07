import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import { Container } from "@mui/system";
import { saveMensaje } from "../../service/mensajesService";
import FeedMensajes from "./FeedMensajesComponent";

import "../../styles/style.css";
import RespuestaDialog from "./RespuestaDialogComponent";
import { Card, CssBaseline, Typography } from "@mui/material";

function CuadroChat() {
  const [largo, setLargo] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [formInput, setFormInput] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveMensaje(formInput);
    setLargo(largo + 1);
    setOpen(false);
  };

  const handleInput = (evt) => {
    setFormInput({ texto: evt.target.value, autor: "Martin" });
  };

 

  return (
    <>
    <Typography 
    
    className="tipografhy"
          variant="h4"
          noWrap
          component="a"
          href="/"
          sx={{
            
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 1000,
            letterSpacing: '.3rem',
            color: '#AD1F00',
            textDecoration: 'none',
    marginRight: 2,
    marginLeft: "20px",
    marginTop: "20px"

            }}>
      Chat
    </Typography>;
    
    <Container sx={{ width: 600, height: 500}}>
      <CssBaseline />
      <Card>
      <CardContent>
        <div className="App">
          <FeedMensajes largo={largo}></FeedMensajes>

        </div>
      </CardContent>
      <CardContent>
      <div>
        <RespuestaDialog
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          open={open}
        ></RespuestaDialog>
      </div>
      </CardContent>
      </Card>
    </Container>
    </>
  );
}

export default CuadroChat;

