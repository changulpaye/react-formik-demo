import Register from "./components/Register";
import "./styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xm">
        <Register />
      </Container>
    </>
  );
}
