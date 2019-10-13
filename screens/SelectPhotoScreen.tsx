import React, { useEffect, useState } from "react";
import { Button } from 'react-native-elements';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
} from "react-native";
import * as MediaLibrary from 'expo-media-library';
import HeaderIcon from "../components/HeaderIcon";
import ImageTile from "../components/SelectPhoto/ImageTile";

const { width } = Dimensions.get('window');
const MAX = 12;

export default function SelectPhotoScreen(props) {
  // Lifecycle methods
  useEffect(() => {
    getPhotos();
  }, []);

  // States
  const [photos, setPhotos] = useState([]);
  const [selected, setSelected] = useState([]);
  const [after, setAfter] = useState("");
  const [hasNextPage, setHasNextPage] = useState(true);

  // Helper methods
  const getPhotos = async () => {
    const params: any = {
      mediaType: MediaLibrary.MediaType.photo,
      first: 500,
    };
    if (after) params.after = after;
    if (!hasNextPage) return;
    const results = await MediaLibrary.getAssetsAsync(params);
    if (after === results.endCursor) return;
    setPhotos([...photos, ...results.assets]);
    setAfter(results.endCursor);
    setHasNextPage(results.hasNextPage);
  }

  // Handlers
  const onSelectImage = (index) => {
    let newSelected = Array.from(selected);

    if (newSelected.indexOf(index) === -1) {
      newSelected.push(index);
    } else {
      const deleteIndex = newSelected.indexOf(index);
      newSelected.splice(deleteIndex, 1);
    }

    if (newSelected.length > MAX) return;
    if (newSelected.length === 0) newSelected = [];
    setSelected(newSelected);
  };

  const onCliclConfirm = () => {
    // TODO: Save photos to redux state
    props.navigation.goBack();
  }

  // Render methods
  const renderImageTile = ({ item, index }) => {
    const isSelected = selected.indexOf(index) !== -1
    const selectedItemCount = selected.indexOf(index) + 1
    return (
      <ImageTile
        item={item}
        selectedItemCount={selectedItemCount}
        index={index}
        camera={false}
        selected={isSelected}
        selectImage={onSelectImage}
        badgeColor='#007aff'
      />
    )
  }

  const renderEmpty = () => {
    // TODO: photo 없을 때 디자인
    return (
      <View>
        <Text>{'No image'}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={photos}
        numColumns={4}
        renderItem={renderImageTile}
        keyExtractor={(_, index) => `${index}`}
        onEndReached={() => getPhotos()}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={renderEmpty}
        initialNumToRender={24}
        getItemLayout={(data, index) => {
          const length = width / 4;
          return { length, offset: length * index, index };
        }}
      />
      <Button
        containerStyle={styles.confirmButton}
        title="Confirm"
        onPress={onCliclConfirm}>
      </Button>
    </View>
  );
}

SelectPhotoScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Select Photos",
    headerLeft: <>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <HeaderIcon name="md-close" />
      </TouchableOpacity>
    </>,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    justifyContent: "center",
    alignContent: "center",
  }
});
