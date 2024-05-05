import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyApi } from "../Api/Apilist";
import { getRawJobs } from "../Redux/companySlice";

const useInfiniteScroll = () => {
  const dispatch = useDispatch();
  const companyData = useSelector((state) => state.company.rawJobs);
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(getCompanyApi, {
        limit: limit,
        offset: offset,
      });
      if (res) {
        dispatch(getRawJobs([...companyData, ...res?.data?.jdList]));
        setOffset(offset + limit);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (
        !isLoading &&
        scrollTop + clientHeight >= scrollHeight &&
        companyData.length > 0
      ) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [companyData, isLoading, fetchData]);

  useEffect(() => {
    fetchData();
  }, []);

  return { companyData, isLoading };
};

export default useInfiniteScroll;
