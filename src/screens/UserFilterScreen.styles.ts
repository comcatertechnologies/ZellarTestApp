import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../constants/color";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    marginTop: 50
  },
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  radioBtnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: COLORS.GRAY_BOLD,
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 4,
    width: Dimensions.get('screen').width - 30,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: COLORS.LIGHTGRAY,
  },
  avatar: {
    marginRight: 16,
    backgroundColor: COLORS.BLUE
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  role: {
    fontSize: 14,
    color: COLORS.DARKGRAY,
  },
  errorText: {
    fontSize: 16,
    color: COLORS.RED,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  }
});
