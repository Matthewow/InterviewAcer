import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const AnswerCard = () => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            M
          </Avatar>
        }
        title="Matthew WANG"
        subheader="June 4, 2022"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        In this article, I have listed the most important and frequently asked basic networking interview questions and answers with pictorial 
        representation for your easy understanding and remembrance. This will strive towards success steps in your career.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnswerCard;
