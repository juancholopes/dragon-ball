import Stack from "@mui/material/Stack";
import { useState } from "react";
import SagaDock from "./components/Paginator.jsx";
import TiltedCard from "./components/TiltedCard.jsx";

const App = () => {
  const [currentSaga, setCurrentSaga] = useState("z");
  const [currentType, setCurrentType] = useState("dragonball");

  return (
    <Stack className="App">
      <Stack style={containerStyle}>
        <h1 style={styleTitle}>Dragon Ball</h1>
      </Stack>
      <SagaDock 
        onSagaChange={setCurrentSaga} 
        currentSaga={currentSaga}
        onTypeChange={setCurrentType}
        currentType={currentType}
      />
      <Stack style={styleText}>
        <TiltedCard saga={currentSaga} type={currentType} />
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
