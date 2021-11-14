import * as _ from "lodash";

const Footer = () => {
  const text = _.capitalize("love");

  return (
    <footer className="footer">
      Made with <p className="footer-red">{text}</p> in Halifax
    </footer>
  );
};

export default Footer;
