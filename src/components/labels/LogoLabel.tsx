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
    marginBottom: 20,
  },
  icon: {
    height: 24,
    width: 24,
    objectFit: "cover",
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 700,
    color: CONSTANTS.COLORS.primaryDark,
  },
  prelabel: {
    fontSize: 14,
    fontWeight: 400,
    color: CONSTANTS.COLORS.primaryDark,
    textAlign: "center",
    marginBottom: 5,
  },
});

interface ILogoLabel {
  icon?: string;
  label?: string;
  prelabel?: string;

  onClick?: () => void;
}

const LogoLabel = ({ icon, label, prelabel, onClick }: ILogoLabel) => {
  return (
    <div className={css(styles.parent)}>
      {prelabel && <span className={css(styles.prelabel)}>{prelabel}</span>}
      <div
        className={css(styles.container)}
        style={{
          cursor: onClick ? "pointer" : "default",
        }}
        onClick={onClick ? onClick : () => {}}
      >
        <img className={css(styles.icon)} src={icon} alt="" />
        <span className={css(styles.label)}>{label}</span>
      </div>
    </div>
  );
};

export default LogoLabel;
