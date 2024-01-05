import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const items = [
  {
    avatarSrc: "/static/images/avatar/1.jpg",
    primary: "Brunch this weekend?",
    secondary: "Ali Connors — I'll be in your neighborhood doing errands this…",
  },
  {
    avatarSrc: "/static/images/avatar/2.jpg",
    primary: "Summer BBQ",
    secondary:
      "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this…",
  },
  {
    avatarSrc: "/static/images/avatar/3.jpg",
    primary: "Oui Oui",
    secondary:
      "Sandra Adams — Do you have Paris recommendations? Have you ever…",
  },
  // Add more items as needed in this format
];

export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={`Avatar ${index + 1}`} src={item.avatarSrc} />
            </ListItemAvatar>
            <ListItemText
              primary={item.primary}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.secondary}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {index !== items.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
