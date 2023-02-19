import React from "react";
import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button,
} from "@pankod/refine-mui";
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

function Form({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  projectImage,
}: FormProps) {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Project
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Project Name
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("title", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Project Description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write project descriptio"
              color="info"
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderRadius: 6,
              }}
              {...register("description", { required: true })}
            />
          </FormControl>
          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Project Status
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue="Initial"
                {...register("status", { required: true })}
              >
                <MenuItem value="Initial">Initial</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
                <MenuItem value="Test">Test</MenuItem>
                <MenuItem value="Ready to Deploy">Ready to Deploy</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  );
}

export default Form;
