import Sidebar from "./components/Sidebar/Sidebar";
import { SidebarItem } from "./components/SidebarItem/SidebarItem";
import Home from "./pages/Home/Home";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import RecommendIcon from "@mui/icons-material/Recommend";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ShareIcon from "@mui/icons-material/Share";
import "./App.css";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import RightSidebar from "./pages/SidebarRight/RightSidebar";

function App() {
  const expanded = useSelector((state) => state.company.expanded);

  return (
    <div className={`Flex`}>
      <Sidebar>
        <div className={"topheading"}>
          {" "}
          {expanded ? " Looking for job" : "Job"}
        </div>
        <SidebarItem
          icon={<PersonIcon />}
          text="My applied jobs"
          active={true}
        />
        <SidebarItem icon={<SearchIcon />} text="Search jobs" alert={true} />
        <SidebarItem
          icon={<CurrencyRupeeIcon />}
          text="Search salary"
          alert={true}
        />
        <SidebarItem
          icon={<PersonAddAltIcon />}
          text="New Ask for referral"
          alert={true}
        />
        <Divider />
        <div className={"topheading"}>
          {" "}
          {expanded ? "Recommended And Earm" : "Refer"}
        </div>
        <SidebarItem
          icon={<RecommendIcon />}
          text="Recommend from shortlist"
          alert={true}
        />
        <SidebarItem
          icon={<CreditScoreIcon />}
          text="Recommend to specific company"
          alert={true}
        />
        <SidebarItem
          icon={<ShareIcon />}
          text="Refer this extension"
          alert={true}
        />
      </Sidebar>
      <Home />

      <div className={`Placeright`}>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
