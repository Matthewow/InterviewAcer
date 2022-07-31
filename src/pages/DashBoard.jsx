import Sidebar from "./../components/Sidebar";
import Feed from "./../components/Feed";
import Rightbar from "./../components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./../components/Add";
import { useState, useContext } from "react";
import KnowledgePage from "./KnowledgePage";
import ProgrammingPage from "./ProgrammingPage";
import InterviewPage from "./InterviewPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function DashBoard({token, setToken}) {

  let navigate = useNavigate();

  useEffect(() => {
    if (token === "")
      navigate('/signin')
  }, [token]);
  
  const [mode, setMode] = useState("light");
  const [page, setPage] = useState("homepage");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const Content = () => {
    switch(page) {
      case "homepage":
        return (
          <>
            <Feed token = {token} setToken = {setToken}/>
            <Rightbar token = {token} setToken = {setToken}/>
          </>
        );

      case "knowledge":
        return (
          <KnowledgePage token = {token} setToken = {setToken}/>
        );

      case "interview":
          return (
            <InterviewPage token = {token} setToken = {setToken}/>
          );

      case "programming":
        return (
          <ProgrammingPage token = {token} setToken = {setToken}/>
        );

      default:
        return <></>;
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} setPage = {setPage} mode={mode} page = {page}/>
        <Content />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default DashBoard;
