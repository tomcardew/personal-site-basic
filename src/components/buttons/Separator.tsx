import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    minHeight: 1,
    width: '100%',
    background: '#00000030',
    marginTop: 10,
    marginBottom: 10
  },
});

interface ISeparator {
  style?: any;

  onClick?: () => void
}

const Separator = ({ style }: ISeparator) => {
  return (
    <div className={css(styles.container, style)}>
    </div>
  );
};

export default Separator;
