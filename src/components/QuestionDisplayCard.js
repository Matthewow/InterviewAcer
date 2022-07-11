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
import { Button, Checkbox, Divider, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { KnowledgeCommentItem } from './KnowledgeListItem';
import MDEditor from '@uiw/react-md-editor';

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

export default function QuestionDisplayCard({questioncard, setDisplayCard}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [commentsCount, setCommentCount] = React.useState(0);
  const [answersCount, setAnswersCount] = React.useState(0);
  const [commentContent, setCommentContent] = React.useState('');
  const [isCommentsDisplayed, setIsCommentsDisplayed] = React.useState(true);
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    setCommentCount(questioncard.comments.queryInfo.totalRecord);
    setAnswersCount(questioncard.answers.queryInfo.totalRecord);
    setIsLiked(questioncard.isLiked === 0? false: true)
  }, [questioncard]);
  
  const handlePostSubmit = () => {

  var url = isCommentsDisplayed ? `http://120.77.98.16:8080/knowledge_service/comment/`:`http://120.77.98.16:8080/knowledge_service/answer/`

    const requestBody = {
      "knowledgeId": questioncard.knowledgeId,
      "content": commentContent
  }
    console.log('Comment posted', commentContent);
    axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDY4MTA2LCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.ZNpIvYGf8PHyJcS-vJUZtKOdYnWnIaWIwdn1uHziBis'
    }
    })
    .then(res => {
      if (res.status === 200) {
        if (res.data.code === '00') 
            setCommentContent('');
            refreshThisCard();
      }
    })
  }

  const handleLiked = () => {

    var url = `http://120.77.98.16:8080/users_like/`
    const requestBody = {
      "id": questioncard.knowledgeId,
      "type": 0
    }

    axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDY4MTA2LCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.ZNpIvYGf8PHyJcS-vJUZtKOdYnWnIaWIwdn1uHziBis'
      }
    })
    .then(res => {
      if (res.status === 200) {
        console.log(res.data)
        if (res.data.code === '00') 
            setIsLiked(true)
        if (res.data.code === '11') 
            setIsLiked(false)
        }
    })

  }

  const refreshThisCard = () => {
    console.log('Comment posted', commentContent);
    axios.get(`http://120.77.98.16:8080/knowledge_service?uuid=${questioncard.knowledgeId}`, {
      headers: {
        'Content-Type': 'application/json',
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjNAcXEuY29tIiwiZXhwIjoxNjU4NDY4MTA2LCJpbmZvIjp7ImFkbWluIjowLCJ1c2VybmFtZSI6IjEyMyJ9fQ.ZNpIvYGf8PHyJcS-vJUZtKOdYnWnIaWIwdn1uHziBis'
    }
    })
    .then(res => {
      if (res.status === 200) {
        if (res.data.code === '00') 
          setDisplayCard(res.data.data)
      }
    })
  }


  

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
        subheader={`${questioncard.uploadTime.substring(0, 10)} ${questioncard.uploadTime.substring(11, 16)}`}
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
        <Box sx={{my: 2}}>
        <div data-color-mode="light">
          <div className="wmde-markdown-var"> </div>
          <MDEditor.Markdown
            source={questioncard.question_content}
            linkTarget="_blank"/>
        </div>
        </Box>
        {/* <Typography variant="h6" color="text.primary" sx={{mt: 1}}>
          {questioncard.question_content}
        </Typography> */}
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            checked = {isLiked}
            onChange = {handleLiked}
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
          <Stack direction='row'>
            <Button 
            disabled = {isCommentsDisplayed}
            onClick={() => {setIsCommentsDisplayed(!isCommentsDisplayed)}}>{`Comments(${commentsCount})`
            }</Button>
            <Button 
            disabled = {!isCommentsDisplayed}
            onClick={() => {setIsCommentsDisplayed(!isCommentsDisplayed)}}
            >{`Answers(${answersCount})`}</Button>
          </Stack>
          <Divider />
          
          {isCommentsDisplayed?
          <>
          {
              commentsCount === 0 ? 
              <>
                <Typography align="center" fontWeight={600} color="#777" sx={{ opacity: '0.4', fontSize: '20px', p:3, background: '#eee'}}>
                      No comments yet
                </Typography> 
              </>
                
              :
              <KnowledgeCommentItem data = {questioncard.comments.entities}/>
          }
          </>
          :
          <>
          {
              answersCount === 0 ? 
              <>
                <Typography align="center" fontWeight={600} color="#777" sx={{ opacity: '0.4', fontSize: '20px', p:3, background: '#eee'}}>
                      No answers yet
                </Typography> 
              </>
                
              :
              <KnowledgeCommentItem data = {questioncard.answers.entities}/>
          }
          </>  
        }
          


          
          
          <Stack spacing = {1} sx={{mt: 1}} justifyContent="space-between">

            <Typography variant='subtitle2' color="text.secondary">
              Add a new comment
            </Typography>

            <TextField
              fullWidth
              placeholder= {isCommentsDisplayed?"Type comment here...":"Type answer here..."}
              value={commentContent}
              multiline
              rows={3}
              onChange={(e) => {
                setCommentContent(e.target.value);
              }}
            />
          </Stack>

            <Button variant='outlined' sx = {{mt: 1}} onClick = {handlePostSubmit}>post</Button>
            
        </CardContent>
      </Collapse>
    </Card>
  );

}
