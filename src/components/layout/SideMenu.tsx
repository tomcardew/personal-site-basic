import { css, StyleSheet } from "aphrodite";
import { Container } from ".";
import { CONSTANTS } from "../../utils";
import { Button, Separator } from "../buttons";
import { LogoLabel } from "../labels";
import { useState } from "react";

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
    backgroundColor: 'white',
    overflowY: 'scroll',
    "@media (max-width: 800px)": {
      flex: 1,
      position: "fixed",
      top: 0,
      width: "100vw",
      zIndex: 100,
      height: "100vh",
      transition: "100ms linear all",
      left: 'calc((100vw + 10px)*-1)',
    },
    "::-webkit-scrollbar": {
      width: 2
    },
    "::-webkit-scrollbar-thumb": {
      background: CONSTANTS.COLORS.primary
    }
  },
  parentOpen: {
    flex: 1,
    position: "fixed",
    left: 0,
    top: 0,
    width: "calc(100vw - 10px)",
    zIndex: 100,
    height: "100vh",
    transition: "100ms linear all",
    alignItems: "center",
    backgroundColor: 'white',
    "@media (min-width: 800px)": {
      flex: 1,
      position: "fixed",
      left: 10,
      top: 10,
      width: 290,
      zIndex: 100,
      height: "calc(100vh - 20px)",
      transition: "100ms linear all",
    },
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
  btn: {
    width: "100%",
    marginBottom: 10,
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
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    zIndex: -10,
    "@media (min-width: 800px)": {
      display: "none"
    },
  }
});

const SideMenu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const openUrl = (path: string) => {
    window.open(path, "_blank");
  };
  return (
    <Container style={menu ? styles.parentOpen : styles.parent} minWidth={250}>
      {menu ? <div className={css(styles.blackBg)} /> : <div />}
      <div className={css(styles.sideButton)} onClick={toggleMenu}>
        <img
          className={css(styles.icon)}
          src={menu ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"}
          alt="Open my profile"
        />
      </div>
      <img
        className={css(styles.image)}
        src="https://via.placeholder.com/150"
        alt="Mi foto"
      />
      <span className={css(styles.name)}>Andrés Villagomez Ríos</span>
      <span className={css(styles.career)}>Computer Systems Engineer</span>
      <Button
        label="Download my resume"
        style={styles.btn}
        onClick={() =>
          openUrl("/assets/documents/CV-Ago2021-AndresVillagomez.pdf")
        }
      />
      <Separator />
      <LogoLabel
        icon="/assets/icons/grainchain.png"
        label="GrainChain Inc."
        prelabel="Currently working at"
        onClick={() => openUrl("https://www.grainchain.io/")}
        marginBottom={10}
        marginTop={10}
      />
      <Separator />
      <LogoLabel icon="/assets/icons/cake.svg" label="May 09, 1997" marginTop={10} />
      <LogoLabel
        icon="/assets/icons/linkedin.svg"
        label="LinkedIn profile"
        onClick={() =>
          openUrl(
            "https://www.linkedin.com/in/andr%C3%A9s-villag%C3%B3mez-7832aa181/"
          )
        }
      />
      <LogoLabel
        icon="/assets/icons/github.svg"
        label="GitHub"
        onClick={() => openUrl("https://github.com/tomcardew")}
      />
    </Container>
  );
};

export default SideMenu;
