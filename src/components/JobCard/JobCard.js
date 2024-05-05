import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./JobCard.css";
import Button from "../Button/Button";

export default function JobCard({ Data }) {
  const jobDetailsFromCompany = Data?.jobDetailsFromCompany;
  const words = jobDetailsFromCompany.split(" ");
  const trimmedJd = words.slice(0, 55).join(" ");

  return (
    <Card className="card">
      <CardContent>
        <Typography className="card_heading">
          <Typography>⏳</Typography>
          <div className="card_heading_text">Posted 10 days ago</div>
        </Typography>
        <div className="logo_info">
          <div className="logo_image">
            <img
              src={Data?.logoUrl}
              alt="Company_Logo"
              height={40}
              width={30}
            />
          </div>

          <div className="info">
            <div className="info_company">{Data?.companyName}</div>

            <div className="info_role">{Data?.jobRole}</div>
            <div className="info_country">{Data?.location}</div>
          </div>
        </div>

        <div className="salary">
          Estimated Salary: $ {Data?.minJdSalary} - $ {Data?.maxJdSalary} ✅
        </div>

        <div className="aboutCOmpany">About Company:</div>
        <div className="description">{trimmedJd}</div>
        <div className="parent-container">
          <a href={Data?.jdLink} target="_blank" className="text-container">
            View Jobs
          </a>
        </div>
        <div className="expericence">
          <div>
            <div className="min_exp">Minimum Experience</div>
            <div className="min_exp_ans">{Data?.minExp}</div>
          </div>
        </div>
        <div className="button_alignment">
          <Button text={"Easy Apply"} backgroundColor={"#55EFC4"} />
          <Button
            text={"Unlock Referal asks"}
            textColor={"white"}
            backgroundColor={"#4943DF"}
          />
        </div>
      </CardContent>
    </Card>
  );
}
