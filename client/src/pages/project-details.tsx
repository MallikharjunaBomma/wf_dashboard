import React from "react";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useParams, useNavigate } from "@pankod/refine-react-router-v6";
import {
  ChatBubble,
  Delete,
  Edit,
  Place,
  Star,
  Phone,
} from "@mui/icons-material";
import CustomButton from "components/common/CustomButton";
function ProjectDetails() {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;
  const projectDetails = data?.data ?? {};

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  const isCurrentUser = user.email === projectDetails.creator.email;
 
  const handleDeleteProject = () => {
    const response = window.confirm("Are you sure you want to delete this property?",);
    console.log(response);
    if (response) {
      mutate(
        {
          resource: "projects",
          id: id as string,
        },
        {
          onSuccess: () => {
            navigate("/projects");
          },
        }
      );
    }
  };

  return (
    <Box
      borderRadius="15px"
      padding="20px"
      bgcolor="#fcfcfc"
      width="100%"
      height="100%"
    >
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {projectDetails.title} Details
      </Typography>
      <Stack>
        <Box
          mt="20px"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          gap={4}
        >
          <Typography fontSize={16} fontWeight={700} color="#11142d">
            Project ID :
          </Typography>{" "}
          {projectDetails._id}
        </Box>
      </Stack>
      <Box
        mt="20px"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Typography fontSize={16} fontWeight={700} color="#11142d">
          Project Name :
        </Typography>{" "}
        {projectDetails.title}
      </Box>
      <Box
        mt="20px"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Typography fontSize={16} fontWeight={700} color="#11142d">
          Project Description :
        </Typography>{" "}
        {projectDetails.description}
      </Box>
      <Box
        mt="20px"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Typography fontSize={16} fontWeight={700} color="#11142d">
          Project Current Status :
        </Typography>{" "}
        {projectDetails.status}
      </Box>
      <Stack width="100%" mt="25px" direction="row" flexWrap="wrap" gap={2}>
        <CustomButton
          title={"Edit"}
          backgroundColor="#475BE8"
          color="#FCFCFC"
          fullWidth
          icon={<Edit />}
          handleClick={() => {
            if (isCurrentUser) {
              navigate(`/projects/edit/${projectDetails._id}`);
            }
          }}
        />
        <CustomButton
          title={"Delete"}
          backgroundColor={"#d42e2e"}
          color="#FCFCFC"
          fullWidth
          icon={<Delete />}
          handleClick={() => {
            handleDeleteProject();
          }}
        />
      </Stack>
    </Box>
  );
}

export default ProjectDetails;
