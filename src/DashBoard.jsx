import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState, useContext } from "react";
import Profile from "./components/Profile";
import KnowledgePage from "./components/UploadPage";

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

      default:
        return <></>;
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
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
