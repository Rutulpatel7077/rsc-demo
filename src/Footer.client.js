import _ from "lodash";

export default function Footer() {
  const data = ["Fun", "Love", "Respect", "React", "REDSpace"];
  const pickOne = _.random(0, 4);

  return (
    <footer className="footer">
      Made with <p className="footer-red">{data[pickOne]}</p> in Halifax
    </footer>
  );
}
