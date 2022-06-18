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
        The main difference between peer to peer and client server network is that in peer to peer network, each node can request for services and provide services while in client server network, the client nodes requests for services and server node responds with services.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnswerCard;
