import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const height = 260;

export default function Carousel(props) {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {props.photos.map((photo, index) => {
          return <Image key={index} style={styles.image} source={{ uri: photo.uri }} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image: {
    width: width - 30,
    height,
  },
})
