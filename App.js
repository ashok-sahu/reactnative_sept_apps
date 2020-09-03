import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import TravelAppRoute from "./src/Routings/Decode_routes/Travel_UI_Routes/navigation";

export default function App() {
  const [isFontLoad, setFontLoad] = useState(false);
  useEffect(async () => {
    await Font.loadAsync({
      roboto: require("./src/assets/fonts/Roboto-Bold.ttf"),
      poppins: require("./src/assets/fonts/Poppins-Bold.ttf"),
      jura: require("./src/assets/fonts/Jura-VariableFont_wght.ttf"),
    });
    setFontLoad(true);
  }, []);
  return (
    <>
      {isFontLoad === true ? <TravelAppRoute /> : <AppLoading />}
      <StatusBar />
    </>
  );
}
