import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";


export function MyFont(){
    const [loaded] = useFonts({
        Montserrat: require("../assets/font/Montserrat-VariableFont_wght.ttf"),
        Brolink: require("../assets/font/Brolink-Outline.ttf"),
        Kyiv: require("../assets/font/KyivTypeSans-VarGX.ttf"),
        Typometry: require("../assets/font/Typometry_Alternate.ttf"),
      });
      console.log(useFonts.Kyiv)
}
 

const styles = StyleSheet.create({
    
    Typometry:{
        fontFamily: "Typometry",
    },
    color:{
        colorLight: "rgb(239, 250, 233)",
        colorStrong: "rgb(62, 82, 65)",
        colorMidle: "rgb(166, 182, 158)",
    },
  
});
export default styles

