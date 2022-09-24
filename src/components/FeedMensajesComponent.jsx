import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { getMensajes } from '../service/mensajesService';

function FeedMensajesComponent(props) {
  const [mensajesData, setMensajesData] = useState([]);

  useEffect(() => {
    getMensajes().then((data) => setMensajesData(data));
  }, [props.largo]);

  return (
    <>
      {mensajesData.map((item) => {
        return (
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEEj1frd4wZYg/profile-displayphoto-shrink_800_800/0/1602377832570?e=1669248000&v=beta&t=FehxJBPqPIxXRte0Ahg58rWLBCay4F0Qg_MmaKQw6TA"
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.texto}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.autor}
                    </Typography>
                    {" " + item.fecha}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      })}
    </>
  );
}

export default FeedMensajesComponent;
