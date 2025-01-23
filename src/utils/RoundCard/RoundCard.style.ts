import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../constants/color";

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.WHITE,
        width: '40%',
        height: '20%',
        borderRadius: '100%',
        elevation: 100,
        shadowColor: COLORS.GRAY_BOLD,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.95,

    }
});
