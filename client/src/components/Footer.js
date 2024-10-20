import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
        Designed and Planned by Gaurav Malik
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
