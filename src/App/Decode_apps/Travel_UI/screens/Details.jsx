import React, { useState } from "react";
import { View, Text, Alert, Modal, Image, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { ModalCard, ListCard } from "./index";
import styles from "../../../../styles/Decode_styles/Travel_UI/DetailsStyle";

const Details = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (visible) => {
    return setModalOpen(visible);
  };
  return (
    <ImageBackground
      source={require("../../../../assets/images/Travel_UI_decode/back2.png")}
      style={styles.backImg}
    >
      <View style={styles.div1}>
        <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={{ marginLeft: 230 }}
        />
      </View>
      <View style={styles.div2}>
        <View style={styles.div2_1}>
          <Image
            source={require("../../../../assets/images/Travel_UI_decode/p.png")}
            style={{ height: 26, width: 26 }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "roboto",
            color: "#FFF",
          }}
        >
          NYC
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#a2a2db",
            paddingHorizontal: 15,
          }}
        >
          - - - - - - - - - - - - - - - -
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "roboto",
            color: "#FFF",
          }}
        >
          IDN
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 40,
        }}
      >
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "jura",
          }}
        >
          New York
        </Text>
        <Text
          style={{
            color: "#a2a2db",
            fontFamily: "jura",
            paddingLeft: 162,
          }}
        >
          Indonesia
        </Text>
      </View>
      <Text
        style={{
          paddingHorizontal: 40,
          color: "#a2a2db",
          fontFamily: "jura",
        }}
      >
        20 June, 2021
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 50,
          marginTop: 60,
        }}
      >
        <Image
          source={require("../../../../assets/images/Travel_UI_decode/dots.png")}
          style={{ width: 18, height: 16 }}
        />
        <Image
          source={require("../../../../assets/images/Travel_UI_decode/filter.png")}
          style={{ marginLeft: 228, width: 20, height: 18 }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginVertical: 5,
        }}
      >
        <ListCard
          onPress={() => {
            openModal(true);
          }}
        />
        <ListCard
          onPress={() => {
            openModal(true);
          }}
        />
        <ListCard
          onPress={() => {
            openModal(true);
          }}
        />

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={() => {
              Alert.alert("Modal is closed");
            }}
          >
            <ModalCard
              onPress={() => {
                openModal(!modalOpen);
              }}
            />
          </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Details;
