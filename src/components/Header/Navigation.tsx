import { FC } from "react";
import "./Header.css";

type Props = {
  open: boolean;
  id: string;
};

export const Navigation: FC<Props> = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open} className="navigation">
      {/* <ul>
        <li>Profile</li>
        <li>Work</li>
        <li>これまでの実績</li>
        <li>Activity</li>
        <li>DISC1</li>
        <li>Graph</li>
        <li>Video Work</li>
        <li>小説</li>
        <li>Magazine</li>
        <li>AI</li>
        <li>Create The Opportunity</li>
        <li>結婚式でディズニーを挙げました！</li>
        <li>Future</li>
        <li>FOOTER</li>
      </ul> */}
      <p className="navigationText">飛ばさずに上から見なさい</p>
    </nav>
  );
};
