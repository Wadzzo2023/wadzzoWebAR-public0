import React from "react";
import { Button } from "react-native-paper";

export const View = () => {
  return (
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
  );
};
