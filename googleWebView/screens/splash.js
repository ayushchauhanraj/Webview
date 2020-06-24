import React, { Component } from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
export default function Splash(props) {
  setTimeout(() => {
    props.navigation.navigate("GoogleView");
  }, 2000);

  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/797185.png",
      }}
      style={styles.image}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://cdn4.iconfinder.com/data/icons/black-icon-social-media/512/099318-google-logo-square.png",
          }}
          style={{ height: 130, width: 130 }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
