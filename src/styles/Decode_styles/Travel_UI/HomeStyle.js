import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  img_bg: {
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  icon_menu: {
    width: 20,
  },
  icon_profile: {
    marginLeft: 280,
  },
  header_2: {
    marginTop: 25,
    paddingHorizontal: 40,
  },
  txt1: {
    fontSize: 40,
    color: "#522289",
    fontFamily: "jura",
  },
  txt2: {
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    fontFamily: "roboto",
    color: "#a2a2db",
  },
  body: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 40,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search_icon: {
    height: 14,
    width: 14,
  },
  txt_inp1: {
    paddingHorizontal: 20,
    fontSize: 15,
    color: "#ccccef",
  },
  scroll: {
    marginRight: -40,
    marginTop: 30,
  },
  scroll_item_1: {
    alignItems: "center",
    justifyContent: "center",
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: "#ff5c83",
    marginHorizontal: 22,
  },
  scroll_item_2: {
    alignItems: "center",
    justifyContent: "center",
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: "#ffa06c",
  },
  scroll_item_3: {
    alignItems: "center",
    justifyContent: "center",
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: "#bb32fe",
    marginLeft: 22,
  },
  travel: {
    alignItems: "center",
    justifyContent: "center",
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: "#5facdb",
  },
  recommend: {
    color: "#FFF",
    fontFamily: "poppins",
    marginTop: 50,
    fontSize: 17,
  },
  travel_1:{
    backgroundColor: "#FEFEFE",
    height: 200,
    width: 190,
    borderRadius: 15,
    padding: 5,
    marginRight:22
  },
  travel_1_img:{
    width: 180, 
    borderRadius: 10, 
    height: 130
  },
  travel_1_ins:{
    flexDirection: "row",
    width: 150,
    alignItems: "center",
  },
  tr1_bg:{
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  tr1_txt:{
    fontFamily: "jura",
    fontSize: 11,
    color: "#a2a2db",
  }
});
export default styles;
