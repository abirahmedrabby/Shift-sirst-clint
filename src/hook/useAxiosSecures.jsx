import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: `http://localhost:5000`,
});

const useAxiosSecures = () => {
  const { user } = useAuth();

  axiosSecure.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken}`;

    return config;
  });

  return axiosSecure;
};

export default useAxiosSecures;
