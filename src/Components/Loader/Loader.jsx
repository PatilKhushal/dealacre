'use client'

import { useTheme } from "@emotion/react";
import {
  ImageList,
  ImageListItem,
  Skeleton,
  useMediaQuery,
} from "@mui/material";
import React, { useMemo } from "react";

// This functional component returns skeleton loader which will be shown till data is fetched from api
function Loader() {
  const data = Array(10).fill(0);

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

  return (
    <ImageList cols={cols} gap={15} className="p-8 overflow-y-auto flex-grow">
      {data.map(() => (
        <ImageListItem key={Math.random()} className="rounded-md">
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={300}
            className="rounded-md bg-gray-500"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Loader;
