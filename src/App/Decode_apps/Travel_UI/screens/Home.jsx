import React from "react";
import { View, Text, ImageBackground, TextInput, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../../styles/Decode_styles/Travel_UI/HomeStyle";

const Home = (props) => {
  return (
    <ImageBackground
      source={require("../../../../assets/images/Travel_UI_decode/back.png")}
      style={styles.img_bg}
    >
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#a2a2db" style={styles.icon_menu} />
        <Icon
          name="account-circle"
          size={33}
          color="#a2a2db"
          style={styles.icon_profile}
        />
      </View>
      <View style={styles.header_2}>
        <Text style={styles.txt1}>Hello</Text>
        <Text style={styles.txt2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <View style={styles.body}>
          <Image
            source={require("../../../../assets/images/Travel_UI_decode/search.png")}
            style={styles.search_icon}
          />
          <TextInput placeholder="search here..." style={styles.txt_inp1} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Detail")}
            style={styles.travel}
          >
            <Image
              source={require("../../../../assets/images/Travel_UI_decode/p.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          <View style={styles.scroll_item_1}>
            <Icon name="office-building" color="white" size={32} />
          </View>
          <View style={styles.scroll_item_2}>
            <Icon name="bus" color="white" size={32} />
          </View>
          <View style={styles.scroll_item_3}>
            <Icon name="dots-horizontal" color="white" size={32} />
          </View>
        </ScrollView>
        <Text style={styles.recommend}>
            Recommended
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}> 
        <View style={styles.travel_1}>
            <Image source={require('../../../../assets/images/Travel_UI_decode/1.jpg')} style={styles.travel_1_img}/>
            <View style={styles.travel_1_ins}>
                <View style={styles.tr1_bg}>
                    <Text style={styles.tr1_txt}> Lorem impsum dolor sit amet, consectetuer adipscing elit,</Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
        </View>
        <View style={styles.travel_1}>
            <Image source={require('../../../../assets/images/Travel_UI_decode/2.jpg')} style={styles.travel_1_img}/>
            <View style={styles.travel_1_ins}>
                <View style={styles.tr1_bg}>
                    <Text style={styles.tr1_txt}> Lorem impsum dolor sit amet, consectetuer adipscing elit,</Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
        </View>
        <View style={styles.travel_1}>
            <Image source={require('../../../../assets/images/Travel_UI_decode/3.jpg')} style={styles.travel_1_img}/>
            <View style={styles.travel_1_ins}>
                <View style={styles.tr1_bg}>
                    <Text style={styles.tr1_txt}> Lorem impsum dolor sit amet, consectetuer adipscing elit,</Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
        </View>
        <View style={styles.travel_1}>
            <Image source={require('../../../../assets/images/Travel_UI_decode/1.jpg')} style={styles.travel_1_img}/>
            <View style={styles.travel_1_ins}>
                <View style={styles.tr1_bg}>
                    <Text style={styles.tr1_txt}> Lorem impsum dolor sit amet, consectetuer adipscing elit,</Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
        </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;
