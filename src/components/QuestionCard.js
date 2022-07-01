import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from  "react" 
import KnowledgeAnswer from "./KnowledgeAnswer"
import { Checkbox, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material';

export default function QuestionCard() {

    const [cardAnswerDisplay, setCardAnswerDisplay] = useState(false)
    const [answerFormat, setAnswerFormat] = useState("Answers ▼")
    const handleDisplay = (event) => {
        event.preventDefault();
        if (answerFormat === "Answers ▼"){
            setAnswerFormat("Answers ▲")
        } else{
            setAnswerFormat("Answers ▼")
        }
        setCardAnswerDisplay(!cardAnswerDisplay);
    }

  return (
    <Card sx={{ maxWidth: 600, boxShadow: 5, m : 1}}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}

      <CardContent>
        <Typography variant="body1" color="text.secondary">
          What are Peer-to-Peer networks and Server-based networks?
        </Typography>
        <Typography 
            color="text.secondary"
            variant = "caption"
         >
        {"dd/mm/yyyy"} provided by
        </Typography>
        <Button variant="text" size="small" color="primary">Tian Yu</Button>
      </CardContent>

      <CardActions>
        <Button variant="contained" size="small" color="primary">Network</Button>
        <Button variant="contained" size="small" color="secondary">Amazon</Button>

        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Button variant="text" sx={{  }}size="large" color="primary" onClick={handleDisplay}>{answerFormat}</Button>

      </CardActions>
    
      <CardContent 
        sx = {
            cardAnswerDisplay === false ? {display : "none"} : {display : ""}
        }>
        <KnowledgeAnswer />
        <KnowledgeAnswer />
      </CardContent>

    </Card>
  );
}
