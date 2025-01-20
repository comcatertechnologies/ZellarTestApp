import { StyleSheet } from "react-native";
import COLORS from "../../constants/color";

export const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.BLUE,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioCircleSelected: {
        backgroundColor: COLORS.PRIMARY_BACKGROUND,
    },
    selectedDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: COLORS.BLUE,
    },
    radioLabel: {
        fontSize: 16,
    },
});