import { Button, TextField } from '@mui/material'
import React from 'react'

const Test = ({token}) => {
  const handleSubmit = () => {
    console.log(token);
  }


  return (
    <>
    <div>Test</div>
    <TextField
  id="outlined-multiline-static"
  label="Multiline"
  multiline
  rows={4}
  defaultValue="Default Value"
/>
    </>
  )
}

export default Test