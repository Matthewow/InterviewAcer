import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Checkbox, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';

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

export default function QuestionDisplayCard({questioncard}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{mr:5, width: '100%'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {questioncard.userName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={questioncard.userName}
        subheader={questioncard.uploadTime.substring(0, 10)}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://catalyst-ca.net/wp-content/uploads/2021/12/top-programing-languages.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Button variant="contained" size="small" color="primary" sx={{opacity: 0.7}}>{questioncard.company}</Button>
        <Button variant="contained" size="small" color="secondary" sx={{opacity: 0.7, ml: 2}}>{questioncard.tag}</Button>
        <Typography variant="h6" color="text.primary" sx={{mt: 1}}>
          {questioncard.question_content}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
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
          {(questioncard.answers && questioncard.answers.length) ? 
          <> answers</> : 
          <Box 
            fullWidth
            sx={{
              background: '#eee',
              p: 3
            }}
          >
            <Typography align="center" fontWeight={600} color="#777" sx={{ opacity: '0.4', fontSize: '20px' }}>
              No comments yet
            </Typography>

          </Box>
          }
          
          <Stack spacing = {1} sx={{mt: 1}} justifyContent="space-between">

            <Typography variant='subtitle2' color="text.secondary">
              Add a new comment
            </Typography>

            <TextField
              fullWidth
              placeholder="Type comment here..."
              multiline
              rows={3}
            />
          </Stack>

            <Button variant='outlined' sx = {{mt: 1}}>post</Button>
            
        </CardContent>
      </Collapse>
    </Card>
  );

}
