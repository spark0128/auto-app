import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function SellSellerInfoScreen(props) {
  const user = {
    id: "1",
    firstName: "MengHeng",
    lastName: "Lim",
    role: "private_seller"
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Seller Information</Text>
          <View style={styles.userImageContainer}>
            <Image
              style={styles.userImage}
              source={{
                uri:
                  "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/seller_image_empty.png"
              }}
            />
            <Text
              style={styles.userName}
            >{`${user.firstName} ${user.lastName}`}</Text>
            <Text style={styles.userRole}>[Private Seller]</Text>
          </View>
          <View style={styles.editButtonContainer}>
            <Image
              style={styles.editButtonImage}
              source={{
                uri:
                  "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/bg_edit.png"
              }}
            />
            <Text style={styles.editButtonName}>Edit</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 44,
    paddingBottom: 28,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 27,
    marginBottom: 27
  },
  userImageContainer: {
    width: "100%",
    // height: 210,
    paddingVertical: 25,
    backgroundColor: "#FAFBFE",
    borderColor: "#D3D3D3",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  userImage: {
    width: 62,
    height: 62,
    resizeMode: "contain",
    borderRadius: 31,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    marginBottom: 14
  },
  userName: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 7
  },
  userRole: {
    color: "#6E6E6E",
    fontSize: 12
  },
  editButtonContainer: {
    justifyContent: "center"
  }
});
