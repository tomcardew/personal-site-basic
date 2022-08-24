import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    margin: 0,
    position: "relative",
    backgroundColor: 'white'
  },
  containerDark: {
    backgroundColor: 'black',
    color: 'white'
  }
});

interface IContainer {
  backgroundColor?: string;
  flex?: number;
  minWidth?: number;
  style?: any;
  classname?: string;
  darkMode?: boolean;

  children?: JSX.Element | JSX.Element[] | string | string[];
}

const Container = ({
  flex = 1,
  minWidth = 0,
  style,
  children,
  classname = "",
  darkMode = false
}: IContainer) => {
  return (
    <div
      className={css(styles.container, style, darkMode ? styles.containerDark : null) + ` ${classname}`}
      style={{
        flex,
        minWidth,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
