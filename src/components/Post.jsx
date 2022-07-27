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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MDEditor from '@uiw/react-md-editor';
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

export default function Post( {JobData}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{m:5}}>
      <CardContent>
        <Typography variant="h4" color="primary">
          {`${JobData.company} - ${JobData.jobPosition ? JobData.jobPosition : 'Not Specified'} -  ${JobData.jobLocation}`}
        </Typography>

        <Typography variant="body1" color="primary">
          {`Posted on ${JobData.uploadTime.substring(0,10)}`}
        </Typography>

        <Typography variant="body1" color="text.primary">
          {`Location ${JobData.descriptionShort}`}
        </Typography>

      </CardContent>

      <CardActions disableSpacing>

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

        <Box sx={{m: 3}}>
        <div data-color-mode="light">
          <div className="wmde-markdown-var"> </div>
          <MDEditor.Markdown
            source={JobData.descriptionFull}
            linkTarget="_blank"/>
        </div>
        </Box>

        </CardContent>
      </Collapse>
    </Card>
  );
}
