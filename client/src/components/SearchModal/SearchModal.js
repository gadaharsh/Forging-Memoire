import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Fuse from 'fuse.js';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

import "./SearchModal.css";
import data from "./Data";
import { Container } from "@material-ui/core";

const LocationText = (props) => {
  return (
    <Link to="/home" className="linkLocation">
      <div className="d-flex  ">
        <LocationOnIcon style={{ color: "#2196F3" }} />
        <p>{props.state}</p>
      </div>
    </Link>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minHeight: "40%",
  maxHeight: "60%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  innerheight: "60%",
  bgcolor: "white",
  outline: "none",
  borderRadius: "2.5%",
  overflow: "scroll",
};

const dataNoQuery = [
  {
    slno: 0,
    abb: "AN",
    name: "Andaman and Nicobar Islands",
    state: "andaman-and-nicobar",
  },
  {
    slno: 5,
    abb: "CG",
    name: "Chandigarh",
    state: "chandigarh",
  },
  {
    slno: 10,
    abb: "GA",
    name: "Goa",
    state: "goa",
  },
];

const SearchModal = (props) => {
  const getFilteredItems = (query, data) => {
    // const fuse = new Fuse(characters, {
    //   keys: [
    //     'name',
    //   ]
    // });
    // const results = fuse.search('bender');
    if (!query) {
      return dataNoQuery.map((value) => value);
    }
    return data.filter((data) =>
      data.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const [query, setQuery] = useState("");

  const filterItems = getFilteredItems(query, data);

  useEffect(() => {
    setQuery("");
  }, [props.openSearch]);

  return (
    <Modal
      open={props.openSearch}
      onClose={props.handleClose}
      onBackdropClick={props.handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Box sx={style}>
        <Grid container className="searchContainer">
          {/* <Grid item xs={1}>
            <SearchIcon  />
          </Grid> */}

          <Grid item xs={11}>
            <TextField
              id="filled-basic"
              variant="filled"
              item
              style={{ width: "100%" }}
              placeholder="Where would you like to go ?"
              onChange={(e) => setQuery(e.target.value)}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* <Input
              item
              style={{ width: "100%" }}
              placeholder="Where would you like to go ?"
              onChange={(e) => setQuery(e.target.value)}
            /> */}
          </Grid>
          <Grid item xs={1} className="close">
            <button onClick={props.handleClose} className="closeBtn">
              <CloseIcon style={{ marginTop: "25%" }} />
            </button>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <Container>
          <div className="searchText">
            <h5>Explore Best in Travel 2022</h5>
          </div>
          <Grid container className="placeContainer">
            {filterItems.map((value) => (
              <Grid item xs={6} className="place">
                <LocationText key={value.id} state={value.name} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider variant="middle" />
        <Container className="pt-2 my-1">
          <Button className="destinationbutton">View all destinations</Button>
        </Container>
      </Box>
    </Modal>
  );
};

export default SearchModal;
