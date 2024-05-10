import { Button, Collapse, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./address.css";

const Address = () => {
  const [address, setAddress] = useState({
    name: "",
    contactNo: "",
    state: "",
    city: "",
    pin: "",
    locality: "",
    houseNo: "",
    landMark: "",
  });
  const [isNew,setIsNew] = useState<boolean>(false)
  return (
    <div>
      <div className="add-addressIcon" onClick={()=>setIsNew(true)}>
        <AddIcon color="primary" /> Address
      </div>
      <Collapse in={isNew} timeout="auto" unmountOnExit>
      <div className="address-container">
        <TextField
          value={address.name}
          label="Full Name"
          className="address-input"
        />
        <TextField
          value={address.contactNo}
          label="Contact no"
          className="address-input"
        />
        <TextField
          value={address.state}
          label="State"
          className="address-input"
        />
        <TextField
          value={address.city}
          label="City"
          className="address-input"
        />
        <TextField
          value={address.houseNo}
          label="House No"
          className="address-input"
        />

        <TextField
          value={address.locality}
          label="Locality"
          className="address-input"
        />
        <TextField
          value={address.landMark}
          label="Landmark"
          className="address-input"
        />
        <div className="button-container">
          <Button variant="contained" className="save-add" onClick={()=>setIsNew(false)}>Save Address</Button>
        </div>
      </div>
      </Collapse>
     
    </div>
  );
};

export default Address;
