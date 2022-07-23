import Sidebar from "./../components/Sidebar";
import Feed from "./../components/Feed";
import Rightbar from "./../components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./../components/Add";
import { useState, useContext } from "react";
import KnowledgePage from "./KnowledgePage";
import ProgrammingPage from "./ProgrammingPage";
import InterviewPage from "./InterviewPage";

function DashBoard() {
  const [mode, setMode] = useState("light");
  const [page, setPage] = useState("homepage");
  // const Context = React.createContexs

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
            <Feed />
            <Rightbar />
          </>
        );

      case "knowledge":
        return (
          <KnowledgePage/>
        );

      case "interview":
          return (
            <InterviewPage/>
          );

      case "programming":
        return (
          <ProgrammingPage/>
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
