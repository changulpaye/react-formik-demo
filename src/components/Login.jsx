import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({});

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(value) => console.log(value)}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setUser(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field type="email" name="email" placeholder="Enter Email" />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </form>
        )}
      </Formik>

      <p> {JSON.stringify(user)} </p>
    </div>
  );
}
