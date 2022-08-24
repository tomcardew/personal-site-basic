import { css, StyleSheet } from "aphrodite";
import { CONSTANTS } from "../../utils";

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 24,
    width: 24,
    objectFit: "cover",
    marginRight: 10
  },
  label: {
    fontSize: 16,
    fontWeight: 700,
    color: CONSTANTS.COLORS.primaryDark,
  },
  labelDark: {
    color: '#FFFFFF'
  },
  prelabel: {
    fontSize: 14,
    fontWeight: 400,
    color: CONSTANTS.COLORS.primaryDark,
    textAlign: "center",
    marginBottom: 5,
  },
  prelabelDark: {
    color: '#FFFFFFD0'
  }
});

interface ILogoLabel {
  icon?: string;
  label?: string;
  prelabel?: string;
  marginTop?: string | number;
  marginBottom?: string | number;
  darkMode?: boolean;

  onClick?: () => void;
}

const LogoLabel = ({
  icon,
  label,
  prelabel,
  onClick,
  marginBottom = 20,
  marginTop = 0,
  darkMode = false
}: ILogoLabel) => {
  return (
    <div
      className={css(styles.parent)}
      style={{
        marginTop: marginTop,
      }}
    >
      {prelabel && <span className={css(styles.prelabel, darkMode ? styles.prelabelDark : null)}>{prelabel}</span>}
      <div
        className={css(styles.container)}
        style={{
          cursor: onClick ? "pointer" : "default",
          marginBottom: marginBottom,
        }}
        onClick={onClick ? onClick : () => {}}
      >
        <img className={css(styles.icon)} src={icon} alt="" />
        <span className={css(styles.label, darkMode ? styles.labelDark : null)}>{label}</span>
      </div>
    </div>
  );
};

export default LogoLabel;
