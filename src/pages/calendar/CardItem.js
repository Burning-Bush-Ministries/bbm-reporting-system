import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar, ListItemAvatar, ListItemText, Divider, Typography, ListItem, List, IconButton } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const { eventRows, month } = props;

  const sortedItems = eventRows ? [...eventRows].sort((a, b) => a.dayFrom - b.dayFrom) : [];
  // Filter items based on the criteria (e.g., if primary field contains "Brunch")
  const filteredItems = sortedItems?.filter(item => item?.month.includes(month));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let dateString  = "";
  return (
    <Card>
    {filteredItems?.map((item, index) => {
        dateString = (item?.dayFrom) +' '+ ((item?.dayFrom === item?.dayTo) ? "   "  : " - " + (item?.dayTo)) +" "+item?.month+" "+ item?.region
        return (

            <Card sx={{ maxWidth: 330 }}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <Avatar height="194" src={"/static/logo.jpg"} />
                    </Avatar>}
                    // action={<IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    // </IconButton>}
                    title={item?.name} 
                    subheader={dateString}
                    // subheader={item?.dayFrom +" "+ (item?.dayFrom === item?.dayTo) ? "   "  : " - " + (item?.dayTo) +" "+item?.month+" "+ item?.year}    
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/poster/passover.png"
                    alt="Paella dish" />
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        {item?.department}
                    </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description of the event:</Typography>
                        <Typography paragraph>
                            This is the event description
                        </Typography>
                    </CardContent>
                </Collapse> */}
            </Card>
        );
    })}
    </Card>
  );
}
