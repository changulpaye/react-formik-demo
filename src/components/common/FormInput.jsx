import { TextField } from "@material-ui/core";
import { useField } from "formik";
import React from "react";

const FormInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]

  // which we can spread on <input>. We can use field meta to show an error

  // message if the field is invalid and it has been touched (i.e. visited)

  const [field, meta] = useField(props);

  return (
    <div className="form-control">
      <label htmlFor={props.id || props.name}>{label}</label>

      {/* <input className="text-input" {...field} {...props} /> */}

      <TextField {...field} {...props} variant="outlined" />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
