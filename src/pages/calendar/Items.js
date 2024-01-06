import * as React from "react";
import {Avatar, ListItemAvatar, ListItemText, Divider, Typography, ListItem, List, IconButton } from "@mui/material";
import {
    GridList,
    GridListTile,
    makeStyles,
    Modal,
    Backdrop,
    Fade
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    gridList: {
      flexWrap: "nowrap",
      transform: "translateZ(0)"
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        backgroundcolor: "red"
      }
    },
    img: {
      outline: "none"
    }
  }));

  
export default function AlignItemsList(props) {
    const { eventRows, month } = props;
    
    const sortedItems = eventRows ? [...eventRows].sort((a, b) => a.dayFrom - b.dayFrom) : [];
    // Filter items based on the criteria (e.g., if primary field contains "Brunch")
    const filteredItems = sortedItems?.filter(item => item?.month.includes(month));

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", background: "" }}>
      {filteredItems?.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar height="194" alt={`Avatar ${index + 1}`} src={"/static/logo.jpg"} />
            </ListItemAvatar>
            <ListItemText
              primary={item?.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <p>{item?.department}</p>
                    {item?.dayFrom}  {(item?.dayFrom === item?.dayTo) ? "   "  : " - " + (item?.dayTo)} {item?.month} {item?.year}
                  </Typography>
                </React.Fragment>
              }
            />
            <IconButton aria-label="download" edge="end">
            <ListItemAvatar>
              <img width="100%" height="50" alt={`Avatar ${index + 1}`} src={"/static/poster/passover.png"} />
            </ListItemAvatar>
            </IconButton>
          </ListItem>
          {index !== eventRows.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
