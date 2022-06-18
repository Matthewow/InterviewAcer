import {
    Avatar,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";
  import { Box } from "@mui/system";
  
  const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });


  const Add = () => {
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    
    function handleSelection(e){
      e.preventDefault();
      console.log('You clicked submit.');
      navigate('/upload', { replace: true })
    };


    return (
      <>
        <Tooltip
          onClick={(e) => setOpen(true)}
          title="Delete"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <SytledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={300}
            height={280}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={5}
          >
            <Typography variant="h6" color="gray" textAlign="center">
              Create
            </Typography>
            <UserBox>
              <Avatar
                alt="WANG Zhao"
                src="/static/images/avatar/2.jpg"
                sx={{ width: 30, height: 30 }}
              />
              <Typography fontWeight={500} variant="span">
              WANG Zhao
              </Typography>
            </UserBox>

            <Typography color="gray">
              What do you want to creat?
            </Typography>
            

            <ButtonGroup
              sx = {{
                marginTop: 2
              }}
              fullWidth
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
            >
              <Button >
                Simple Post</Button>
              <Button onClick={handleSelection}>
                Interview Question</Button>
              <Button>Full Interview</Button>

            </ButtonGroup>
          </Box>
        </SytledModal>
      </>
    );
  };
  
  export default Add;
  