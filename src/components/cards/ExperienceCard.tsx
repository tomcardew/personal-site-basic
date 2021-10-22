import { StyleSheet, css } from "aphrodite";
import { Col } from "react-bootstrap";

const styles = StyleSheet.create({
  vertical: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
    margin: 10,
    minHeight: 200,
    position: "relative",
    cursor: "pointer"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
  transp: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    padding: 20,
  },
  icon: {
    height: 40,
    width: 40,
    objectFit: "contain",
    marginRight: 10,
  },
  iconTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
  timeTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
  },
  jobTitle: {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "white",
    fontSize: 22,
    fontWeight: 700,
    width: "calc(100% - 40px)"
  },
});

interface IExperienceCard {
  bgImage?: string;
  bgColor?: string;
  icon?: string;
  company?: string;
  time?: string;
  job?: string;
  url?: string;
}

const ExperienceCard = ({
  bgImage,
  bgColor,
  icon,
  company,
  time,
  job,
  url,
}: IExperienceCard) => {
  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={4}>
      <div
        className={css(styles.container, styles.vertical)}
        onClick={ () => window.open(url, "_blank") }
      >
        {bgImage && <img className={css(styles.image)} src={bgImage} alt="" />}
        <div className={css(styles.transp)} style={{
              background: bgColor ? bgColor : "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
          }}>
          <div className={css(styles.horizontal)}>
            <img className={css(styles.icon)} src={icon} alt="" />
            <span className={css(styles.iconTitle)}>{company}</span>
          </div>
          <span className={css(styles.timeTitle)}>{time}</span>
          <span className={css(styles.jobTitle)}>{job}</span>
        </div>
      </div>
    </Col>
  );
};

export default ExperienceCard;
