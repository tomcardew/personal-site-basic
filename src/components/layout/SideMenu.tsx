import { css, StyleSheet } from "aphrodite";
import { Container } from ".";
import { CONSTANTS } from "../../utils";
import { Button, Separator } from "../buttons";
import { LogoLabel } from "../labels";
import { useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    position: "fixed",
    left: 10,
    top: 10,
    width: 290,
    zIndex: 100,
    height: "calc(100vh - 20px)",
    transition: "100ms linear all",
    alignItems: "center",
    overflowY: "auto",
    "@media (max-width: 800px)": {
      flex: 1,
      position: "absolute",
      top: 0,
      width: "100vw",
      zIndex: 100,
      height: "100vh",
      transition: "100ms linear all",
      left: "calc((100vw + 10px)*-1)",
    },
    "::-webkit-scrollbar": {
      width: 2,
    },
    "::-webkit-scrollbar-thumb": {
      background: CONSTANTS.COLORS.primary,
    },
  },
  parentOpen: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    width: "calc(100vw - 10px)",
    zIndex: 100,
    height: "100vh",
    transition: "100ms linear all",
    alignItems: "center",
    overflow: 'auto',
    "@media (min-width: 800px)": {
      flex: 1,
      position: "fixed",
      left: 10,
      top: 10,
      width: 290,
      zIndex: 100,
      height: "calc(100vh - 20px)",
      transition: "100ms linear all",
    }
  },
  parentDark: {
    backgroundColor: "black",
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "auto",
    objectFit: "cover",
    marginBottom: 20,
    maxWidth: 300,
  },
  name: {
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 30,
    paddingRight: 30,
    color: CONSTANTS.COLORS.primary,
    textAlign: "center",
    marginBottom: 5,
  },
  career: {
    fontSize: 14,
    fontWeight: 700,
    color: CONSTANTS.COLORS.primaryDark,
    textAlign: "center",
    marginBottom: 25,
  },
  careerDark: {
    color: "#FFFFFF",
  },
  btn: {
    width: "100%",
    marginBottom: 10,
  },
  btnMail: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: CONSTANTS.COLORS.primaryDark,
  },
  btnMailText: {
    color: "white",
  },
  sideButton: {
    position: "fixed",
    top: 10,
    left: -140,
    backgroundColor: CONSTANTS.COLORS.primary,
    width: 100,
    padding: 10,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0px 10px 10px 0px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    transition: "200ms linear all",
    "@media (max-width: 800px)": {
      left: 0,
    },
  },
  icon: {
    height: 20,
    width: 20,
    margin: 0,
  },
  blackBg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "white",
    zIndex: -10,
    "@media (min-width: 800px)": {
      display: "none",
    },
  },
  blackBgDark: {
    backgroundColor: 'black'
  }
});

interface ISideMenu {
  darkMode?: boolean;
}

const SideMenu = ({ darkMode = false }: ISideMenu) => {
  const analytics = getAnalytics();
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const openUrl = (path: string) => {
    window.open(path, "_blank");
  };
  return (
    <Container
      style={menu ? styles.parentOpen : styles.parent}
      darkMode={darkMode}
      minWidth={250}
    >
      {menu ? <div className={css(styles.blackBg, darkMode ? styles.blackBgDark : null)} /> : <div />}
      <div className={css(styles.sideButton)} onClick={toggleMenu}>
        <img
          className={css(styles.icon)}
          src={menu ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"}
          alt="Open my profile"
        />
      </div>
      <img
        className={css(styles.image)}
        src="/assets/images/profile-min.jpg"
        alt="Mi foto"
      />
      <span className={css(styles.name)}>Andrés Villagomez Ríos</span>
      <span className={css(styles.career, darkMode ? styles.careerDark : null)}>
        Computer Systems Engineer
      </span>
      <Button
        label="Get in touch"
        textStyle={styles.btnMailText}
        style={styles.btnMail}
        onClick={() => {
          logEvent(analytics, "get_in_touch");
          openUrl(
            "mailto:tomcar97@gmail.com?subject=Wanna%20get%20in%20touch&body=Hey!"
          );
        }}
      />
      <Button
        label="Download my resume"
        style={styles.btn}
        onClick={() => {
          logEvent(analytics, "cv_opened");
          openUrl("/assets/documents/CV-Feb2022-AndresVillagomez.pdf");
        }}
      />
      <Separator />
      <LogoLabel
        icon="/assets/icons/grainchain.png"
        label="GrainChain Inc."
        prelabel="Currently working at"
        onClick={() => openUrl("https://www.grainchain.io/")}
        marginBottom={10}
        marginTop={10}
        darkMode={darkMode}
      />
      <Separator />
      <LogoLabel
        darkMode={darkMode}
        icon={ darkMode ? '/assets/icons/cake-dark.png' : '/assets/icons/cake-light.png' }
        label="May 09, 1997"
        marginTop={10}
      />
      <LogoLabel
        icon={ darkMode ? '/assets/icons/linkedin-dark.png' : '/assets/icons/linkedin-light.png' }
        label="LinkedIn profile"
        darkMode={darkMode}
        onClick={() => {
          logEvent(analytics, "linkedin_open");
          openUrl(
            "https://www.linkedin.com/in/andr%C3%A9s-villag%C3%B3mez-7832aa181/"
          );
        }}
      />
      <LogoLabel
        icon={ darkMode ? '/assets/icons/github-dark.png' : '/assets/icons/github-light.png' }
        label="GitHub"
        darkMode={darkMode}
        onClick={() => {
          logEvent(analytics, "github_opened");
          openUrl("https://github.com/tomcardew");
        }}
      />
    </Container>
  );
};

export default SideMenu;
