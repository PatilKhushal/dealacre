'use client'

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setIsDark, setSearch } from "../../context/dataSlice";
import styled from "@emotion/styled";

const Header = () => {
  // using isDark state
  const isDark = useSelector((state) => state.dataSlice.isDark);

  // using redux dispatcher to manipulate states
  const dispatch = useDispatch();

  // manipulating dark mode
  useEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  // handling search bar onChange event which applies debouncing of 2sec to optimize performance
  const handleTextChange = (event) => {
    const timerID = setTimeout(() => {
      dispatch(setSearch(event.target.value))
    }, 500)

    return () => clearTimeout(timerID);
  }
  
  // handling dropdown onChange event
  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  // custom TextField
  const StyledTextField = styled(TextField)({
    "label.MuiFormLabel-root": {
      color: isDark ? "white" : "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: isDark ? "#E0E3E7" : "#421820",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "&.Mui-focused fieldset": {
        borderColor: isDark ? "purple" : "black",
      },
      "& input": {
        color: isDark ? "white" : "black",
      },
    },
  });
  
  // custom Dropdown
  const StyledFormControl = styled(FormControl)(({ theme }) => ({
    "& .MuiInputLabel-root": {
      color: isDark ? "white" : "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: isDark ? "#E0E3E7" : "#421820",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "&.Mui-focused fieldset": {
        borderColor: isDark ? "purple" : "black",
      },
      "& .MuiSelect-select": {
        color: isDark ? "white" : "black",
      },
    },
    "& .MuiSelect-icon": {
      color: isDark ? "white" : "black",
    },
  }));

  return (
    <div className="p-2 text-white">
      <div className="flex justify-center ">
        <h1 className="flex justify-center items-center w-full text-dark-bg dark:text-light-bg">Mock Bytes</h1>
        <div className="flex flex-col justify-center p-2 gap-2 ">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={() => dispatch(setIsDark(!isDark))}
              checked={isDark}
              name="darkModeToggle"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 outline-none ring-4 ring-blue-300 dark:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
            DarkMode
          </span>
        </div>
      </div>

      <div className="flex gap-4 mid-mobile:gap-2 p-4">
        <StyledTextField label="Search" className="w-3/4 mid-mobile:w-1/2" onChange={handleTextChange} />
        <StyledFormControl className="w-1/4 mid-mobile:w-1/2">
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={"username"}
            label="Filter"
            onChange={handleFilterChange}
          >
            <MenuItem value={"id"}>ID</MenuItem>
            <MenuItem value={"username"}>Username</MenuItem>
            <MenuItem value={"email"}>Email</MenuItem>
            <MenuItem value={"firstName"}>Name</MenuItem>
          </Select>
        </StyledFormControl>
      </div>
    </div>
  );
};

export default Header;
