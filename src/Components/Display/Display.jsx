'use client'

import { useTheme } from "@emotion/react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

function Display() {
  // using search, filter, data state
  const search = useSelector((state) => state.dataSlice.search);
  const filter = useSelector((state) => state.dataSlice.filter);
  const data = useSelector((state) => state.dataSlice.data.users);
  console.log('data', data)
  console.log('filter', filter)
  console.log('search', search)
  // using theme to access breakpoints in order to show different columns on different screen sizes
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

  /* 
    * memoizing the breakpoint matching and applying dependency array as [matchesXs, matchesSm, matchesMd, matchesLg] 
    * this function will run only when dependency array variable will change to optimize the performance
    * This ensures that unnecessary re-renders are avoided
  */
  const cols = useMemo(() => {
    if (matchesLg) {
      return 4;
    } else if (matchesMd) {
      return 3;
    } else if (matchesSm) {
      return 2;
    } else {
      return 1;
    }
  }, [matchesXs, matchesSm, matchesMd, matchesLg]);

  /* 
    * memoizing the filtering of data based on search so that 
    * this filtering will run only when search variable will change
    * This ensures that unnecessary re-renders are avoided
  */
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      search === "" ? item : item[filter].toString().includes(search)
    );
  }, [search]);

  /* 
    * memomizing the component ImageList
    * so that this will remain same unless there is change in props 
    * here the props is item
    * This ensures that unnecessary re-renders are avoided
  */
  const ImageItem = React.memo(({ item }) => (
    <ImageListItem key={item.id} className="rounded-md border border-dark-bg dark:border-light-bg">
      <div className="rounded-md h-full w-full overflow-hidden ">
        <Image
          src={item.image}
          className="object-cover w-full h-full "
          alt={item.id}
          width={"600"}
          height={"600"}
        />
        <ImageListItemBar
          title={`Username : ${item.username} | Name : ${item.firstName + ' ' + item.lastName} `}
          subtitle={`E-mail: ${item.email} | Age: ${item.age}`}
          className="rounded-b-md w-full bg-black"
        />
        <h1 className="absolute text-center top-0 left-0 dark:text-green-500 text-red-500 p-2 ">{item.id}</h1>
      </div>
    </ImageListItem>
  ));

  return (
    <ImageList cols={cols} gap={15} style={{paddingLeft:"20px", paddingRight:"20px"}}>
      {filteredData.map((item) => (
        <ImageItem key={item.id} item={item}/>
      ))}
    </ImageList>
  );
}

export default Display;
