import Stack from "@mui/material/Stack";
import Paginator from "./components/Paginator.jsx";
import TiltedCard from "./components/TiltedCard.jsx";

const App = () => {
  return (
    <Stack className="App">
      <Stack style={containerStyle}>
        <h1 style={styleTitle}>Dragon Ball Z</h1>
      </Stack>
      <Stack style={styleText}>
        {/* <TiltedCard />- */}
        <Paginator />
      </Stack>
    </Stack>
  );
};

const containerStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1E1E1E",
};

const styleTitle = {
  color: "Orange",
  backgroundColor: "#1E1E1E",
  fontSize: "70px",
  textAlign: "center",
  fontFamily: "Sayan Sans",
};

const styleText = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1E1E1E",
  padding: "0 16px",
  boxSizing: "border-box",
};

export default App;
