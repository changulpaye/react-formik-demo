import { MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import * as Yup from "yup";
import AppForm from "./common/AppForm";
import FormCheckbox from "./common/FormCheckbox";
import FormInput from "./common/FormInput";
import FormSelect from "./common/FormSelect";

const schema = Yup.object({
  firstName: Yup.string()

    .max(15, "Must be 15 characters or less")

    .required()
    .label("First name"),

  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required()
    .label("Last name"),

  email: Yup.string().email("Invalid email address").required().label("Email"),
  gender: Yup.string().required().label("Gender"),
  acceptedTerms: Yup.boolean()
    .required()
    .required("Terms and conditions")

    .oneOf([true], "You must accept the terms and conditions.")
});
const initialValues = { firstName: "", lastName: "", email: "", gender: "" };

const Register = () => {
  const handleSubmit = (values, form) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      form.resetForm();
    }, 400);
  };
  return (
    <AppForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      schema={schema}
    >
      <FormInput
        name="firstName"
        label="First Name"
        type="text"
        placeholder="Enter first name"
      />
      <FormInput
        name="lastName"
        label="Last Name"
        type="text"
        placeholder="Enter last name"
      />
      <FormInput
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter email Address"
      />

      <FormSelect label="Select Gender" name="gender">
        <MenuItem value={""}>Select</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </FormSelect>

      <FormCheckbox name="acceptedTerms">
        I accept the terms and conditions
      </FormCheckbox>

      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
    </AppForm>
  );
};

export default Register;
