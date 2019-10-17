import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ListItemOptions, ListItemOptionsViewAll } from "./ListItemOptions";

export function Options(props) {
  const navigationUrl = [
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/navigation.png",
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/navigation_highlight.png"
  ];
  const blackboxUrl = [
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/blackbox.png",
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/blackbox_highlight.png"
  ];
  const smartKeyUrl = [
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/smart_key.png",
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/smart_key_highlight.png"
  ];
  const sunroofUrl = [
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/sunroof.png",
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/sunroof_highlight.png"
  ];
  const rearSensorUrl = [
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/rear_sensor.png",
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/rear_sensor_highlight.png"
  ];
  const rearCameraUrl = [
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/rear_camera.png",
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/rear_camera_highlight.png"
  ];
  const bluetoothUrl = [
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/bluetooth.png",
    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/bluetooth_highlight.png"
  ];

  const [navigation, setNavigation] = useState(navigationUrl[0]);
  const [blackbox, setBlackbox] = useState(blackboxUrl[0]);
  const [smartKey, setSmartKey] = useState(smartKeyUrl[0]);
  const [sunroof, setSunroof] = useState(sunroofUrl[0]);
  const [rearSensor, setRearSensor] = useState(rearSensorUrl[0]);
  const [rearCamera, setRearCamera] = useState(rearCameraUrl[0]);
  const [bluetooth, setBluetooth] = useState(bluetoothUrl[0]);

  const [isNavigation, setIsNavigation] = useState(false);
  const onButtonClick = () => {};

  return (
    <View style={styles.container}>
      <ListItemOptions title="Navigation" url={navigation} />
      <ListItemOptions title="Blackbox" url={blackbox} />
      <ListItemOptions title="Smart Key" url={smartKey} />
      <ListItemOptions title="Sunroof" url={sunroof} />
      <ListItemOptions title="Rear Sensor" url={rearSensor} />
      <ListItemOptions title="Rear Camera" url={rearCamera} />
      <ListItemOptions title="Bluetooth" url={bluetooth} />
      <ListItemOptionsViewAll
        title="View All"
        url="https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/options/view_all.png"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }
});
