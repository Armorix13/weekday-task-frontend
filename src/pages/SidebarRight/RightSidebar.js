import React from "react";
import "./RightSidebar.css";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toggleExpandRight } from "../../Redux/companySlice";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import Right from "./Right/Right";

const RightSidebar = () => {
  const expanded = useSelector((state) => state.company.rightexpand);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleExpandRight());
  };
  return (
    <div className={`Rightsidebar`} style={{}}>
      {expanded ? (
        <>
          <div className="inner_item">
            {expanded && (
              <>
                <button onClick={handleClick} className={`buttons leftIcons`}>
                  <ChevronLeftIcon />
                </button>
              </>
            )}
            <div className="profile1">
              <AccountCircleIcon
                className={`profileicon`}
                style={{ fontSize: 70, fontColor: "white" }}
              />
            </div>
          </div>
          <div className={`divider`}>
            <Divider />
          </div>

          <div className={`EditIcon`}>
            <EditIcon />
            <div className={"text"}>Edit Profile</div>
          </div>
        </>
      ) : (
        <div className={"EditCOntent"}>
          <button onClick={handleClick} className={`rightIcons buttons`}>
            <div className={``}>
              <ChevronRightIcon />
            </div>
          </button>

          <div>
            <Right />
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
