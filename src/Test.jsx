import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Box, Typography, Alert, TextField, Button, Stack } from "@mui/material";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Test() {

  return (
    <>
     <Player
      autoplay
      loop
      src="https://assets4.lottiefiles.com/packages/lf20_hz4zkrb4.json"
      style={{ height: '300px', width: '300px' }}
    >
      <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
    </>

  );

}