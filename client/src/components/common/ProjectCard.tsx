import React from "react";
import { ProjectCardProps } from "interfaces/property";
import { Folder, Description, TrackChanges } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@pankod/refine-mui";

function ProjectCard({ id, title, description, status }: ProjectCardProps) {
  return (
    <Card
      component={Link}
      to={`/projects/show/${id}`}
      sx={{
        maxWidth: "500px",
        padding: "20px",
        border: "1px solid black",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176,176,176,170)",
        },
        cursor: "pointer",
        textDecoration: "none",
      }}
      elevation={0}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
          paddingX: "5px",
        }}
      >
        <Stack direction="column" gap={1}>
          <Stack direction="row" gap={1} alignItems="flex-start">
            <Folder sx={{ fontSize: 20, color: "#11142d", marginTop: 0.5 }} />
            <Typography fontSize={16}>{title}</Typography>
          </Stack>
          <Stack direction="row" gap={1} alignItems="flex-start">
            <Description
              sx={{ fontSize: 20, color: "#11142d", marginTop: 0.5 }}
            />
            <Typography fontSize={16}>{description}</Typography>
          </Stack>
          <Stack>
            <Stack direction="row" gap={1} alignItems="flex-start">
              <TrackChanges
                sx={{ fontSize: 20, color: "#11142d", marginTop: 0.5 }}
              />
              <Typography fontSize={16}>{status}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
