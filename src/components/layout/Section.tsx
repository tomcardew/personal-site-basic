import { css, StyleSheet } from "aphrodite";
import { CONSTANTS } from "../../utils";

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
  titleView: {
    height: 10,
    width: 55,
  },
  titleLabel: {
    color: CONSTANTS.COLORS.primaryDark,
    fontWeight: 800,
    fontSize: 20,
    transition: "100ms linear all",
  },
  titleLabelDark: {
    color: 'white',
  }
});

interface ISection {
  title: string,
  darkMode?: boolean

  children?: JSX.Element | JSX.Element[] | string | string[]
}

const Section = ({ title, darkMode = false, children }: ISection) => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.titleContainer)}>
        <span className={css(styles.titleLabel, darkMode ? styles.titleLabelDark : null)}>{ title }</span>
        <img
          className={css(styles.titleView)}
          src="/assets/icons/svg.svg"
          alt=""
        />
      </div>
      <div>
        { children }
      </div>
    </div>
  );
};

export default Section;
