import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Zwe Htet Paing</h1>
        <p className="w=[320px]">Yangon Postal Code by Township </p>
        <p>
          <strong>Mobile : </strong>09 996 667 894
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
