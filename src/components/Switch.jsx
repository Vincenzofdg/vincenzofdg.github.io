import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

function MySwitch() {
  const [value, setValue] = useState(true);

  const handleClick = () => setValue(!value);

  return (
    <View style={ styles.switch }>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleClick}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MySwitch;
