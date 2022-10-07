import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { getMensajes } from "../../service/mensajesService";
import Mensaje from "./MensajeComponent";

function FeedMensajes(props) {

  const [mensajesData, setMensajesData] = useState([]);

  useEffect(() => {
    getMensajes().then((data) => setMensajesData(data));
  }, [props.largo]);

  return (
    <>

      {mensajesData.map((datosMensaje) => {

        return (
          <List
            sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
          >

            <Mensaje
              texto={datosMensaje.texto}
              autor={datosMensaje.autor}
              fecha={datosMensaje.fecha}
            ></Mensaje>


            <Divider variant="inset" component="li" style={{marginLeft: "5px" , marginRight: "-130px"}}/>
          </List>
        );
      }).reverse()}
    </>
  );
}


export default FeedMensajes;

