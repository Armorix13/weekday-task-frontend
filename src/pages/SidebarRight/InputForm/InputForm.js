import React from "react";
import "./inputform.css";
import FormField from "../../../components/FormField/FormField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { RadioField } from "../../../components/RadioType/RadioType";

const InputForm = () => {
  const confidentialityOptions = [
    "You can feature/promote my profile with Weekday",
    "Allow only my referrer to know for reference checks",
    "Completely confidential",
  ];
  return (
    <>
      <div className={`formInput`}>
        <div>
          <div className="LabelText">What do we call you?*</div>
          <FormField
            label="Full Name"
            id="fullname"
            name="fullname"
            size={80}
          />
        </div>

        <div>
          <div className="LabelText">What do we call you?*</div>
          <FormField
            label="Last Name"
            id="lastname"
            name="lastname"
            size={80}
          />
        </div>
      </div>
      <div>
        <div className={"LabelText"}>
          What is your current salary (in LPA)?*
        </div>
        <div className="flexDirection">
          <div>
            <FormField
              label="Fixed Salary"
              id="Fixed Salary"
              name="Fixed Salary"
              size={40}
            />
          </div>

          <div>
            <FormField
              label="Fixed Salary"
              id="Fixed Salary"
              name="Fixed Salary"
              size={40}
            />
          </div>

          <div>
            <FormField
              label="Stocks per year"
              id="Stocks per year"
              name="Stocks per year"
              size={40}
            />
          </div>
        </div>

        <div>
          <FormField
            label="What is your expected cash salary (in LPA)?*"
            id="Sr"
            name="S"
            size={200}
          />
        </div>
        <div>
          <FormField
            placeholder={"Switch Jobs"}
            label="How likely are you to switch jobs?*"
            id="Sr"
            name="S"
            size={200}
          />
        </div>
        <div>
          <FormField
            placeholder={"Email Address*"}
            label="rohitreso13@gmail.com"
            id="Sr"
            name="S"
            size={200}
          />
        </div>
        <div>
          <FormField
            placeholder={"+91-8294335230"}
            label="Whatsapp Number**"
            id="Sr"
            name="S"
            size={200}
          />
        </div>

        <div className="file-upload">
          <label htmlFor="file-upload-input" className="form-label">
            Upload Resume*
          </label>
          <div className="upload-container">
            <input type="file" id="file-upload-input" className="file-input" />
            <div className="upload-icon">
              <div className={"flexDirection"}>
                <CloudUploadIcon />
                <div className="upload-text">Click to upload</div>
              </div>
              <div className="fontSm">Upload only .pdf or .doc files</div>
            </div>
          </div>
        </div>

        <div className="form-input">
          <RadioField
            label="How confidential job search to be?"
            options={confidentialityOptions}
          />
        </div>
        <div className="form-input">
          <RadioField
            label="Would you be open to giving referrals to other job-seekers in your current company?"
            options={confidentialityOptions}
          />
        </div>
      </div>
    </>
  );
};

export default InputForm;
