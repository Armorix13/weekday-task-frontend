import React from "react";
import "./Right.css";
import Linkdin from "../../../Assests/Linkdin.svg";
import InputForm from "../InputForm/InputForm";

const Right = () => {
  return (
    <div>
      <div className={`heading`}>
        <div className={`top`}>
          <div className={"Profile_text"}>Your Profile</div>
          <div>
            <img src={Linkdin} alt height={20} width={20} />
          </div>
        </div>
        <div className={`textGreen`}>4/9 completed</div>
      </div>
      <InputForm />
    </div>
  );
};

export default Right;
