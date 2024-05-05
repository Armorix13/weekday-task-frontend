import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import "./Container.css";
import Loader from "../../components/Loader/Loader";
import useInfiniteScroll from "../../hooks/Customhooks";
import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound/NotFound";

const Container = () => {
  const { isLoading } = useInfiniteScroll();
  const companyData = useSelector((state) => state.company.filteredJobs);
  return (
    <>
      <div className="card_container">
        {companyData.map((data) => (
          <JobCard key={data.id} Data={data} />
        ))}

        {isLoading && <Loader />}
        {companyData.length === 0 && <NotFound />}
      </div>
    </>
  );
};

export default Container;
