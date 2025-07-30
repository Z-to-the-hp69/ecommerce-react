import { Delete } from "@mui/icons-material";
import { Box, Avatar, Grid, Rating, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-between ">
      <Grid container spacing={8}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              Z
            </Avatar>
          </Box>
        </Grid>

        <Grid size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg ">Zwe</p>
              <p className="opacity-70">2025-07-2T7UY:20</p>
            </div>
          </div>

          <Rating readOnly value={4} precision={1} />
          <p>Value for product,great product</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://www.highcultured.com.mm/web/image/product.image/628/image_128/11107425-MODEL-04.webp?unique=c4c27db"
              alt=""
            />
          </div>
        </Grid>
      </Grid>

      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
