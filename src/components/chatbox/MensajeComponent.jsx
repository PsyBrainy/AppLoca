import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";


function Mensaje(props) {


  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEEj1frd4wZYg/profile-displayphoto-shrink_800_800/0/1602377832570?e=1669248000&v=beta&t=FehxJBPqPIxXRte0Ahg58rWLBCay4F0Qg_MmaKQw6TA"
        />
      </ListItemAvatar>
      <ListItemText
        primary={props.texto}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {props.autor}
            </Typography>
            {" " + props.fecha}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
export default Mensaje;
