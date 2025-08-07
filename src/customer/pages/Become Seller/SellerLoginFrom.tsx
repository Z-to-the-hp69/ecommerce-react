import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const SellerLoginFrom = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
  });
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-orange-500 pb-5">
        Login As Seller
      </h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {true && (
          <div className="space-y-2">
            <h1 className="font-medium text-sm opacity-60">
              Enter otp sent to your Email
            </h1>
            <TextField
              fullWidth
              name="otp"
              label="Otp"
              type="otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerLoginFrom;
