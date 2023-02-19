import React, { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import { useNavigate } from "@pankod/refine-react-router-v6";
import Form from "../components/common/form";

function CreateProject() {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const [projectImage, setProjectImage] = useState({ name: "", url: "" });
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const handleImageChange = () => {};
  const onFinishHandler = async (data: FieldValues) => {
    await onFinish({ ...data, email: user.email });
  };
  return (
    <Form
      type="Create"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      projectImage={projectImage}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
    />
  );
}

export default CreateProject;
