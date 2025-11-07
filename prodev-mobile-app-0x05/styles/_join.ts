import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  iconsection: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  titleTextGroup: {
    marginBottom: 30,
    alignItems: "center",
  },
  titleText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },
  subText: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  formGroup: {
    gap: 20,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  formControl: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  formPasswordControl: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  passwordControl: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  forgotPasswordText: {
    color: "#007BFF",
    fontWeight: "500",
    marginTop: 10,
    alignSelf: "flex-end",
  },
  primaryButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#555",
  },
  secondaryButtonGroup: {
    gap: 15,
  },
  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 12,
    gap: 10,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  signupgroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupTitleText: {
    color: "#555",
  },
  signupSubTitleText: {
    color: "#007BFF",
    fontWeight: "600",
  },
});