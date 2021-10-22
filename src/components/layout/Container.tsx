import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    margin: 10,
    position: "relative",
  },
});

interface IContainer {
  backgroundColor?: string;
  flex?: number;
  minWidth?: number;
  style?: any;
  classname?: string;

  children?: JSX.Element | JSX.Element[] | string | string[];
}

const Container = ({
  backgroundColor = "white",
  flex = 1,
  minWidth = 0,
  style,
  children,
  classname = "",
}: IContainer) => {
  return (
    <div
      className={css(styles.container, style) + ` ${classname}`}
      style={{
        backgroundColor,
        flex,
        minWidth,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
