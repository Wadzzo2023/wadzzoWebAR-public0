import React from "react";
import { Platform, View as ReactNativeView } from "react-native";
import { PaperProvider, Button } from "react-native-paper";

export const View = () => {
  return (
    <PaperProvider>
      <React.Fragment>
        {/* {Platform.OS === "web" ? (
          <style type="text/css">{`
        @font-face {
          font-family: MaterialCommunityIcons;
          src: url(${require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")}) format('truetype');
        }
      `}</style>
        ) : null} */}
        <Button
          // icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </React.Fragment>
    </PaperProvider>
  );
};
