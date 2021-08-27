import { FormControl, InputLabel, Select } from "@material-ui/core";
import { useField } from "formik";
import React from "react";

const FormSelects = ({ label, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl variant="outlined" className="mt-10">
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>

      <Select {...field} {...props} label={label}>
        {children}
      </Select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormControl>
  );
};

export default FormSelects;
