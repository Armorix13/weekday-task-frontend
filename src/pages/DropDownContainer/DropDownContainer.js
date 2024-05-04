import React, { useState } from "react";
import MultiSelectDropdown from "../../components/DropDown/DropDown";
import "./dropdownstyle.css";
import InputSearch from "../../components/InputSearch/InputSearch";
import {
  EmployeRangeOptions,
  MinBasePay,
  MinExpOpt,
  OfficeRonsite,
  Rolesoptions,
} from "../../constant";

const ContainerDropDOwn = () => {
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedEmploye, setselectedEmploye] = useState([]);
  const [selectedMinExp, setselectedMinExp] = useState(null);
  const [selectedRemote, setselectedRemote] = useState([]);
  const [selectedminBaseP, setselectedminBaseP] = useState(null);

  const handleMinExp = (newOptions) => {
    setselectedMinExp(newOptions);
    console.log(newOptions);
  };
  const handleRoleChange = (newOptions) => {
    setSelectedRole(newOptions);
    console.log(newOptions);
  };

  const handleEmployeChange = (newOptions) => {
    setselectedEmploye(newOptions);
    console.log(newOptions);
  };
  const handleRemote = (newOptions) => {
    setselectedRemote(newOptions);
    console.log(newOptions);
  };
  const handleBasePay = (newOptions) => {
    setselectedminBaseP(newOptions);
    console.log(newOptions);
  };

  return (
    <div className="dropdown_style">
      <MultiSelectDropdown
        options={Rolesoptions}
        value={selectedRole}
        onChange={handleRoleChange}
        height="40px"
        width="120px"
        placeholderText="Roles"
        isMulti={true}
      />
      <MultiSelectDropdown
        options={EmployeRangeOptions}
        value={selectedEmploye}
        onChange={handleEmployeChange}
        height="40px"
        width="200px"
        placeholderText="Number of Employees"
        isMulti={true}
      />
      <MultiSelectDropdown
        options={MinExpOpt}
        value={selectedMinExp}
        onChange={handleMinExp}
        height="40px"
        width="160px"
        placeholderText="Experiences"
        isMulti={false}
      />
      <MultiSelectDropdown
        options={OfficeRonsite}
        value={selectedRemote}
        onChange={handleRemote}
        width="140px"
        height="40px"
        placeholderText="Remote"
        isMulti={true}
      />
      <MultiSelectDropdown
        options={MinBasePay}
        value={selectedminBaseP}
        onChange={handleBasePay}
        height="40px"
        width="170px"
        isMulti={false}
        placeholderText="Minimum Base Salary"
      />
      <InputSearch
        height="45px"
        width="200px"
        placeholderText="Search Company Name"
      />
    </div>
  );
};

export default ContainerDropDOwn;
