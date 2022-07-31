import { Box, Stack, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postHeader } from "../utils/fetchData";
import Post from "./Post";

const Feed = ({token, setToken}) => {

  const [Jobs, setJobs] = useState();
  let navigate = useNavigate();

  const requestBody = {
    "pageFirst": 1,
    "pageSizeFirst": 22   
  }

  React.useEffect(() => {
    axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/job_service/load/`, requestBody, {
      headers: postHeader(token)
    })
    .then(res => {
      if (res.status === 200) {
        if (res.data.code === '00') {
          setJobs(res.data.data.entities);
          setToken(res.data.token);
        }
        else if ((res.data.code === '97' || (res.data.code === '98')))
          navigate('/signin')
      }
    })
  }, []);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {Jobs === undefined ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {Jobs?.map((item) => (
              <Post key = {item.uuid} JobData = {item}/>
          ))}

        </>
      )}
    </Box>
  );
};

export default Feed;
