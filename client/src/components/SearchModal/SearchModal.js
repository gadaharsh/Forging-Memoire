import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: 'white',
  outline: 'none'

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
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Search Modal
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default SearchModal;
