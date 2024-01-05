import * as React from "react";
import {Avatar, ListItemAvatar, ListItemText, Divider, ListItem, List} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function AlignItemsList(props) {
    const { eventRows } = props;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {eventRows.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={`Avatar ${index + 1}`} src={"/static/logo.jpg"} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.dayFrom}  {(item.dayFrom === item.dayTo) ? "   "  : " - " + (item.dayTo)} {item.month} 
                    <p>{item.department}</p>
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {index !== eventRows.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
