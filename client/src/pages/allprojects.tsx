import React from "react";
import { Add } from "@mui/icons-material";
// import{useList} from "@pankod/refine-core";
import { useTable } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import CustomButton from "../components/common/CustomButton";
import ProjectCard from "components/common/ProjectCard";

const AllProjects = () => {
  const navigate = useNavigate();
  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable();
  const allProjects = data?.data ?? [];
  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;
  return (
    <Box>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}></Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          All Projects
        </Typography>
        <CustomButton
          title="Add Project"
          handleClick={() => navigate("/projects/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allProjects.map((project) => (
          <ProjectCard
            key={project._id}
            id={project._id}
            title={project.title}
            status={project.status}
            description={project.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AllProjects;
