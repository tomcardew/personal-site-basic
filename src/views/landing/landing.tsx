import { css, StyleSheet } from "aphrodite";
import {
    CircularProgress,
    ExperienceCard,
    IconCard,
} from "../../components/cards";
import {
    Container,
    Horizontal,
    Section,
    SideMenu,
} from "../../components/layout";
import { CONSTANTS } from "../../utils";

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
});

const LandingView = () => {
    return (
        <div className={css(styles.parent)}>
            <SideMenu />
            <Container style={styles.special}>
                <Section title="About me">
                    <div>
                        I'm a Computer Systems Engineer graduated from Instituto Tecnológico de Morelia in 2021.
                        I have an special interest in web technologies, such as
                        web developing, mobile apps, backend technologies and
                        cloud computing. I'm also planning to study a master on
                        Data Science as soon as possible. <br />
                        <br /> I describe myself as a responsible, kind and
                        honest person. I work great both alone or within a team,
                        in which I have developed a sense of leadership and
                        responsability for every member of it. I don't fear
                        failure. I learn from my mistakes and if I don't know
                        how to do certain thing, I challenge myself in order to
                        be able to do what I was asked to. <br />
                        <br /> I'm always looking for a new job opportunity in which
                        I can demonstrate my skills and my talent and grow both personally and professionally.
                        I avoid attending offices at all costs, so if the job offer is remotely I'm all ears. <br />
                        <br /> I love movies, I love music, I love cats and I love to
                        roadtrip.
                    </div>
                </Section>
                <Section title="My services">
                    <Horizontal>
                        <IconCard
                            label="Web Development"
                            icon="/assets/icons/web.png"
                        />
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
                <Section title="Code skills">
                    <Horizontal>
                        <CircularProgress
                            value={90}
                            label="Javascript"
                            icon="/assets/icons/skills/javascript.png"
                        />
                        <CircularProgress
                            value={80}
                            label="Typescript"
                            icon="/assets/icons/skills/typescript.png"
                        />
                        <CircularProgress
                            value={70}
                            label="PHP"
                            icon="/assets/icons/skills/php.png"
                        />
                        <CircularProgress
                            value={80}
                            label="Python"
                            icon="/assets/icons/skills/python.png"
                        />
                        <CircularProgress
                            value={65}
                            label="Java"
                            icon="/assets/icons/skills/java.png"
                        />
                        <CircularProgress
                            value={50}
                            label="C#"
                            icon="/assets/icons/skills/csharp.png"
                        />
                        <CircularProgress
                            value={75}
                            label="Kotlin"
                            icon="/assets/icons/skills/kotlin.png"
                        />
                        <CircularProgress
                            value={85}
                            label="Swift"
                            icon="/assets/icons/skills/swift.png"
                        />
                        <CircularProgress
                            value={80}
                            label="SQL"
                            icon="/assets/icons/skills/sql.png"
                        />
                    </Horizontal>
                </Section>
                <Section title="Experience">
                    <Horizontal>
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
                    </Horizontal>
                </Section>
            </Container>
        </div>
    );
};

export default LandingView;
