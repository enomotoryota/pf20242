import { FC, useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { Navigation } from "./Navigation";
import "./Header.css";
// import "./index.css";

import IMG1 from "../img/logo/logo.png";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <header className="header">
      <div className="headerLogo">
        <a href="">
          <img src={IMG1} alt="" />
        </a>
      </div>
      <ToggleButton
        open={open}
        controls="navigation"
        label="メニューを開きます"
        onClick={toggleFunction}
      />
      <Navigation id="navigation" open={open} />
    </header>
  );
};

export default Header;
