import { Container, Row } from "react-bootstrap";

interface IHorizontal {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const Horizontal = ({ children }: IHorizontal) => {
  return (
    <Container fluid>
      <Row>{children}</Row>
    </Container>
  );
};

export default Horizontal;
