import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchModal.css";

import data from "./Data";

const LocationText = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <LocationOnIcon style={{ color: "#2196F3" }} />
      <p>{props.state}</p>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  innerheight: "60%",
  bgcolor: "white",
  outline: "none",
};

const SearchModal = (props) => {
  const dataNoQuery = [
    {
      slno: 0,
      abb: "AN",
      name: "Andaman and Nicobar Islands",
      state: "andaman-and-nicobar",
    },
    {
      slno: 1,
      abb: "AP",
      name: "Andhra Pradesh",
      state: "andhra-pradesh",
    },
    {
      slno: 2,
      abb: "AR",
      name: "Arunachal Pradesh",
      state: "arunachal-pradesh",
    },
  ];

  const getFilteredItems = (query, data) => {
    if (!query) {
      return dataNoQuery.map((value) => <LocationText state={value.name} />);
    }
    return data.filter((data) => data.name.includes(query));
  };

  const [query, setQuery] = useState("");

  const filterItems = getFilteredItems(query, data);

  return (
    <Modal
      open={props.openSearch}
      onClose={props.handleClose}
      onBackdropClick={props.handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Box sx={style}>
        <Grid container>
          <Grid item xs={10}>
            <Input
              item
              style ={{width: '100%'}}
              placeholder="Where would you like to go ?"
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>

          <Grid item xs={2}>
            <button onClick={props.handleClose} className="closeBtn">
              <CloseIcon />
            </button>
          </Grid>

          {/* <ul>
    {filterItems.map((value)=>
    <h6 key={value.id} >{value.name}</h6>
    )}
</ul> */}
          <LocationText state="Mumbai" />
        </Grid>
      </Box>
    </Modal>
  );
};

export default SearchModal;
