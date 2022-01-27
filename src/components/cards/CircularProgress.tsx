import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Col } from "react-bootstrap";
import { CONSTANTS } from "../../utils";

interface ICircularProgress {
    value?: number,
    label?: string,
    icon?: string
}

const CircularProgress = ({ value = 0, label, icon }: ICircularProgress) => {
  return ( 
    <Col xl={2} lg={3} md={4} sm={6} xs={6} style={{
      marginTop: 10
    }}>
      <CircularProgressbarWithChildren
        value={100}
        styles={{
          path: {
            // Path color
            stroke: CONSTANTS.COLORS.primary,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0deg)",
            transformOrigin: "center center",
            strokeWidth: 5
          },
          trail: {
            // Trail color
            stroke: CONSTANTS.COLORS.primary + "50",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Rotate the trail
            transform: 'rotate(0turn)',
            transformOrigin: 'center center',
            strokeWidth: 5
          }
        }}
      >
        {/* <span style={{ color: "#03414D", fontSize: 18, fontWeight: 700 }}>
          {value}%
        </span> */}
        <img
          style={{ width: "40%", margin: 5, marginBottom: 10 }}
          src={icon}
          alt=""
        />
        <span style={{ color: "#03414D", fontSize: "75%", fontWeight: 700 }}>
          {label}
        </span>
      </CircularProgressbarWithChildren>
    </Col>
  );
};

export default CircularProgress;
