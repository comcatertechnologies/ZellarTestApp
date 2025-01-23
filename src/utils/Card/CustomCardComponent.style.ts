import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../constants/color";

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.WHITE,
        width: Dimensions.get('screen').width - 30,
        height: '40%',
        elevation: 100,
        shadowColor: COLORS.GRAY,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.75,

    }
});
