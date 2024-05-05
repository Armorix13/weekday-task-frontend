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
import { useDispatch, useSelector } from "react-redux";
import {
  Onsiteremote,
  SearchCompany,
  SetMinExp,
  SetminbaseSalary,
  setRole,
} from "../../Redux/companySlice";

const ContainerDropDOwn = () => {
  const dispatch = useDispatch();
  const Role = useSelector((state) => state.company.role);
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedEmploye, setselectedEmploye] = useState([]);
  const [selectedMinExp, setselectedMinExp] = useState(null);
  const [selectedRemote, setselectedRemote] = useState([]);
  const [selectedminBaseP, setselectedminBaseP] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleMinExp = (newOptions) => {
    setselectedMinExp(newOptions);
    dispatch(SetMinExp(newOptions));
  };

  const handleRoleChange = (newOptions) => {
    setSelectedRole(newOptions);
    const combinedArray = [...Role, ...newOptions];
    const uniqueValues = Array.from(new Set(combinedArray));
    dispatch(setRole(uniqueValues));
  };

  const handleEmployeChange = (newOptions) => {
    setselectedEmploye(newOptions);
  };
  const handleRemote = (newOptions) => {
    setselectedRemote(newOptions);
    dispatch(Onsiteremote(newOptions));
  };
  const handleBasePay = (newOptions) => {
    setselectedminBaseP(newOptions);
    dispatch(SetminbaseSalary(newOptions));
  };

  const handleCompany = (newOptions) => {
    setSelectedCompany(newOptions);
    dispatch(SearchCompany(newOptions));
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
        isMulti={false}
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
        onChange={handleCompany}
      />
    </div>
  );
};

export default ContainerDropDOwn;
