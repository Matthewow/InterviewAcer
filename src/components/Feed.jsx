import { Box, Stack, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { postHeader } from "../utils/fetchData";
import Post from "./Post";

const Feed = () => {

  const [Jobs, setJobs] = useState();

  const requestBody = {
    "pageFirst": 1,
    "pageSizeFirst": 22   
  }

  React.useEffect(() => {
    axios.post(`http://120.77.98.16:8080/job_service/load/`, requestBody, {
      headers: postHeader
    })
    .then(res => {
      if (res.status === 200) {
        if (res.data.code === '00') 
          setJobs(res.data.data.entities)
          console.log(res.data.data.entities)
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
