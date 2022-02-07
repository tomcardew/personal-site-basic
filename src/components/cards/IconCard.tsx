import { css, StyleSheet } from "aphrodite";
import { Col } from "react-bootstrap";

const styles = StyleSheet.create({
  vertical: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
    margin: 10,
  },
  icon: {
    height: 80,
    width: 80,
    objectFit: "contain",
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: 700,
    marginTop: 3,
  },
});

interface IIconCard {
  icon?: string;
  label?: string;
  bgColor?: string;
}

const IconCard = ({
  icon,
  label,
  bgColor = "linear-gradient(120deg, rgba(114,184,223,1) 0%, rgba(3,19,77,1) 100%)",
}: IIconCard) => {
  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={4}>
      <div
        className={css(styles.container, styles.vertical)}
        style={{
          background: bgColor,
        }}
      >
        <div className={css(styles.vertical)}>
          <img className={css(styles.icon)} src={icon} alt="" />
          <span className={css(styles.title)}>{label}</span>
        </div>
      </div>
    </Col>
  );
};

export default IconCard;
