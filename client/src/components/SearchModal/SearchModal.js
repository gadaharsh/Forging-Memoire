import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Input from '@mui/material/Input';

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "white",
  outline: "none",
};

const SearchModal = (props) => {
  return (
    <Modal
      open={props.openSearch}
      onClose={props.handleClose}
      onBackdropClick={props.handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={1}>
        <Input placeholder="Where would you like to go ?"  />
          <Typography id="transition-modal-description" >
            Much to do
          </Typography>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SearchModal;
