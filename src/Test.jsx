import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { Box } from "@mui/material";

export default function App() {
  // https://uiwjs.github.io/react-md-editor/
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <Box sx={{m:10}}>

      <MDEditor
        value={value}
        onChange={setValue}
      />

    </Box>
    
  );
}