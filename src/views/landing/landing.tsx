import { css, StyleSheet } from "aphrodite";
import { Skill, ExperienceCard, IconCard } from "../../components/cards";
import { IconButton } from "../../components/buttons";
import {
  Container,
  Horizontal,
  Section,
  SideMenu,
} from "../../components/layout";
import { CONSTANTS, getFromLocalStorage, saveToLocalStorage } from "../../utils";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  parent: {
    backgroundColor: CONSTANTS.COLORS.primaryDark,
    boxSizing: "border-box",
    minHeight: "100vh",
    padding: 10,
    display: "flex",
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "auto",
    objectFit: "cover",
    marginBottom: 20,
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
    marginBottom: 35,
  },
  btn: {
    position: "absolute",
    bottom: 20,
    left: 20,
    width: "calc(100% - 40px)",
  },

  special: {
    marginLeft: 300,
    transition: "100ms linear all",
    "@media (max-width: 800px)": {
      marginLeft: 10,
      marginTop: 50,
    },
  },
  specialDark: {
    marginLeft: 300,
    transition: "100ms linear all",
    "@media (max-width: 800px)": {
      marginLeft: 10,
      marginTop: 50,
    },
    backgroundColor: 'black',
    color: 'white'
  },
  made: {
    position: "absolute",
    right: 20,
    bottom: 10,
    fontSize: 12,
  },
  version: {
    opacity: 0.5,
    marginLeft: 10,
  },
});

const LandingView = () => {

  const [darkMode, setDarkMode] = useState(false)
  const lightModeIcon = "assets/icons/darkmode/light.png"
  const darkModeIcon = "assets/icons/darkmode/dark.png"

  useEffect(() => {
    setDarkMode(getFromLocalStorage("darkMode") == "true")
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    saveToLocalStorage("darkMode", `${!darkMode}`)
  }

  return (
    <div className={css(styles.parent)}>
      <SideMenu darkMode={darkMode} />
      <Container style={styles.special} darkMode={darkMode}>
        <IconButton onClick={toggleDarkMode} darkMode={darkMode} icon={ darkMode ? darkModeIcon : lightModeIcon } />
        <Section darkMode={darkMode} title="About me">
          <div>
            I'm a Computer Systems Engineer graduated from Instituto Tecnológico
            de Morelia in 2020 and got my degree in 2021. I have an special
            interest in web technologies, such as web developing, mobile apps,
            backend technologies and cloud computing. I'm also planning to study
            a master on Data Science as soon as possible. <br />
            <br /> I describe myself as a responsible, kind and honest person. I
            work great both alone or within a team, in which I have developed a
            sense of leadership and responsability for every member of it. I
            don't fear failure. I learn from my mistakes and if I don't know how
            to do certain thing, I challenge myself in order to be able to do
            what I was asked to. <br />
            <br /> I'm always looking for a new job opportunity in which I can
            demonstrate my skills and my talent and grow both personally and
            professionally. I avoid attending offices at all costs, so if the
            job offer is remotely I'm all ears. <br />
            <br /> I love movies, I love music, I love cats and I love to
            roadtrip.
          </div>
        </Section>
        <Section darkMode={darkMode} title="My services">
          <Horizontal>
            <IconCard label="Web Development" icon="/assets/icons/web.png" />
            <IconCard
              label="Mobile Development"
              icon="/assets/icons/ios-development.png"
              bgColor="linear-gradient(120deg, rgba(114,223,171,1) 0%, rgba(3,77,73,1) 100%)"
            />
            <IconCard
              label="Database Management"
              icon="/assets/icons/database.png"
              bgColor="linear-gradient(120deg, rgba(223,114,114,1) 0%, rgba(77,3,3,1) 100%)"
            />
          </Horizontal>
        </Section>
        <Section darkMode={darkMode} title="Code skills">
          <Horizontal>
            <Skill
              value={80}
              label="Javascript"
              icon="/assets/icons/skills/javascript.png"
            />
            <Skill
                value={75}
              label="Typescript"
              icon="/assets/icons/skills/typescript.png"
            />
            <Skill value={50} label="PHP" icon="/assets/icons/skills/php.png" />
            <Skill value={70} label="Pyt<br/>hon" icon="/assets/icons/skills/python.png" />
            <Skill value={50} label="Java" icon="/assets/icons/skills/java.webp" />
            <Skill value={50} label="C#" icon="/assets/icons/skills/csharp.png" />
            <Skill value={70} label="Kotlin" icon="/assets/icons/skills/kotlin.png" />
            <Skill value={99} label="Swift" icon="/assets/icons/skills/swift.png" />
            <Skill value={99} label="SQL" icon="/assets/icons/skills/sql.png" />
          </Horizontal>
        </Section>
        <Section darkMode={darkMode} title="Experience">
          <Horizontal>
            <ExperienceCard
              bgImage="/assets/icons/experience/phase2.png"
              company="Phase2 Technology"
              icon="/assets/icons/phase2.png"
              time="May 2022 - Now"
              job="Mobile Developer"
              url="https://www.phase2technology.com/"
            />
            <ExperienceCard
              bgImage="/assets/icons/experience/grainchain.jpeg"
              company="GrainChain"
              icon="/assets/icons/grainchain.png"
              time="Feb 2022 - Now"
              job="iOS Developer"
              url="https://grainchain.io/"
            />
            <ExperienceCard
              bgImage="/assets/icons/experience/cinepolis.jpg"
              company="Cinépolis"
              icon="/assets/icons/cinepolis.png"
              time="Mar 2021 - Feb 2022"
              job="Fullstack Development Analyst"
              url="https://cinepolis.com/"
            />
            <ExperienceCard
              bgColor="linear-gradient(180deg, rgba(227,112,0,1) 0%, rgba(161,80,0,1) 100%)"
              company="Digital Ignition"
              icon="/assets/icons/di.png"
              time="Oct 2019 - Mar 2021"
              job="Development Coordinator"
              url="https://digitalignition.com.mx/"
            />
            <ExperienceCard
              bgImage="/assets/icons/experience/nosotras.jpg"
              company="Wikipolítica Michoacán"
              icon="/assets/icons/wikipolitica-logo.gif"
              time="Feb 2019 - 2022"
              job="Assemblyman"
              url="http://wikipoliticamich.mx/"
            />
          </Horizontal>
        </Section>
        <span className={css(styles.made)}>
          Made with{" "}
          <span
            style={{
              color: "red",
              fontSize: 16,
            }}
          >
            ♥
          </span>{" "}
          by Andrés Villagómez
          <span className={css(styles.version)}>Last update: Aug 23, 2022</span>
        </span>
      </Container>
    </div>
  );
};

export default LandingView;
