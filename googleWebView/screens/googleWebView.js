import React from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "react-native";
function GoogleWebView() {
  return (
    <WebView
      source={{ uri: "https://google.com/" }}
      style={{ top: StatusBar.currentHeight }}
    />
  );
}

export default GoogleWebView;
