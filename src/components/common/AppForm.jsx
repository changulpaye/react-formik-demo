import { Form, Formik } from "formik";

export default function AppForm({ initialValues, schema, onSubmit, children }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
}
