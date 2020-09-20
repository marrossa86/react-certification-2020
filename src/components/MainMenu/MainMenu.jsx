import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Icon, Search } from "semantic-ui-react";

import "./MainMenu.scss";

const MainMenu = ({ onSetMode }) => {
  return (
    <div className="component__main-menu">
      <div className="menu-options">
        <Dropdown item icon="bars" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="theme-options">
        <Button.Group>
          <Button
            icon="sun"
            content="Light mode"
            onClick={() => onSetMode("light")}
          />
          <Button
            icon="moon"
            content="Dark mode"
            onClick={() => onSetMode("dark")}
          />
        </Button.Group>
      </div>
      <div className="user-menu">
        <Link to="/login">
          <Icon name="user" />
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
