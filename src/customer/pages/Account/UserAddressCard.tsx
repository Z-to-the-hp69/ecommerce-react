import { Radio } from "@mui/material";
import React from "react";

const UserAddressCard = () => {
  return (
    <div className="p-5 border  rounded-md flex">
      <div className="space-y-3 ">
        {/* <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        >
          <div>
            <div className="space-y-3 pt-3">
              <h1>Zwe</h1>
              <p className="w-[320px]">Yangon , Hlaing , UIT , 2183</p>
              <p>
                <strong>Mobile :</strong>
                950577017
              </p>
            </div>
          </div>
        </Radio> */}
        <h1>Zwe</h1>
        <p className="w-[320px]">Yangon , Hlaing ,UIT , 2183</p>
        <p>
          <strong>Mobile :</strong>950577818
        </p>
      </div>
    </div>
  );
};

export default UserAddressCard;
