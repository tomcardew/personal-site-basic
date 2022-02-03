import { css, StyleSheet } from "aphrodite";
import { CONSTANTS } from "../../utils";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40,
    backgroundColor: CONSTANTS.COLORS.primary,
    borderRadius: 10,
    cursor: 'pointer'
  },
  label: {
    fontSize: 14,
    fontWeight: 700,
    color: CONSTANTS.COLORS.primaryDark,
  },
});

interface IButton {
  label?: string;
  style?: any;
  textStyle?: any;

  onClick?: () => void
}

const Button = ({ label, style, textStyle, onClick = () => {} }: IButton) => {
  return (
    <div className={css(styles.container, style)} onClick={onClick}>
      <span className={css(styles.label, textStyle)}>{label}</span>
    </div>
  );
};

export default Button;
