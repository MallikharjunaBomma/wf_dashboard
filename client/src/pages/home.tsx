import React from "react";
import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import PieChart from "../components/charts/PieChart";
import TotalRevenue from "../components/charts/TotalRevenue";
const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={"#11142D"}>
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap={"wrap"} gap={4}>
        <PieChart
          title="Total Projects"
          value={684}
          series={[65, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Data Sets"
          value={1423}
          series={[796, 625]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Experaments"
          value={54}
          series={[75, 20]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      {/* <Stack mt="25px" width="100%" direction={{xs:'column', lg:'row'}}> */}
      <Stack mt="25px" width="100%" direction={{ xs: "column" }}>
        <TotalRevenue />
      </Stack>
    </Box>
  );
};

export default Home;
