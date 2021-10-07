import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RadioButton({ isChecked, text, onRadioButtonPress }) {
  const _renderCheckedView = () => {
    return isChecked ? (
      <View style={[styles.radioButtonIconInnerIcon]} />
    ) : null;
  };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onRadioButtonPress}>
      <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>
      <View style={[styles.radioButtonTextContainer]}>
        <Text style={styles.radioButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0.5,
    borderColor: "#01CCF4",
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonIcon: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#01CCF4",
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIconInnerIcon: {
    height: 25,
    width: 25,
    backgroundColor: "#01CCF4",
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  radioButtonText: {
    fontSize: 18,
  },
});