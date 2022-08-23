import { Col } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
import { CONSTANTS } from "../../utils";

const styles = StyleSheet.create({
  card: {
    backgroundColor: CONSTANTS.COLORS.primary + "20",
    borderRadius: 8,
    display: "flex",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    zIndex: 0,
    overflow: 'hidden',
    maxHeight: 200
  },
  image: {
    width: "60%",
    height: "60%",
    objectFit: "contain",
    margin: 20,
    // marginTop: 0,
    zIndex: 3
  },
  label: {
    color: "#FFFFFF20",
    fontSize: "5em",
    fontWeight: 700,
    position: "absolute",
    lineHeight: 0.8,
    textAlign: 'center',
    bottom: "10%",
    zIndex: 2
  },
  progress: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: CONSTANTS.COLORS.primaryDark,
    width: '100%',
    borderRadius: 8,
    height: "40%",
    bottom: 0
  }
});

interface ISkill {
value?: number,
  label: string;
  icon?: string;
}

const Skill = ({ value = 100, label, icon }: ISkill) => {
  return (
    <Col
      xl={2}
      lg={3}
      md={4}
      sm={6}
      xs={6}
      style={{
        marginTop: 10,
      }}
    >
      <div className={css(styles.card)}>
        <div className={css(styles.progress)} />
        <img className={css(styles.image)} src={icon} alt="" />
        {/* <span className={css(styles.label)} dangerouslySetInnerHTML={{ __html: label }}></span> */}
      </div>
    </Col>
  );
};

export default Skill;
