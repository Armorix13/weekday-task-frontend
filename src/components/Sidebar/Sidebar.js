import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoLg from "../../Assests/weekday.png";
import LogoSm from "../../Assests/weekdaylogo.png";
import Divider from "@mui/material/Divider";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpanded } from "../../Redux/companySlice";

const Sidebar = ({ children }) => {
  const expanded = useSelector((state) => state.company.expanded);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleExpanded());
  };
  return (
    <div className={`sidebar`}>
      <nav className={`navbar`}>
        <div className={`logo`}>
          <img
            src={expanded ? LogoLg : LogoSm}
            width={expanded ? 120 : 32}
            height={32}
            alt="logo"
          />
          <div>
            {expanded ? (
              <>
                <button onClick={handleClick} className={`buttons leftICons`}>
                  <ChevronLeftIcon />
                </button>
              </>
            ) : (
              <>
                <button onClick={handleClick} className={` rightIcon buttons`}>
                  <div className={``}>
                    <ChevronRightIcon />
                  </div>
                </button>
              </>
            )}
          </div>
        </div>

        <Divider />

        <ul className={`listitem`}>{children}</ul>

        <div className={`profile`}>
          <div className={`profileIcon`}>
            <AccountCircleIcon
              className={`profileicon`}
              style={{ fontSize: 40 }}
            />

            <div className={``}>
              <div className={`Name`}>{expanded && "Rohit"}</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
