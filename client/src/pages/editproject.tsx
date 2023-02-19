import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues, useForm } from "@pankod/refine-react-hook-form";
import Form from "../components/common/form";

const EditProject = () => {
  const [projectImage, setProjectImage] = useState({ name: "", url: "" });
  const { data: user } = useGetIdentity();
  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const onFinishHandler = async (data: FieldValues) => {
    await onFinish({
      ...data,
      email: user.email,
    });
  };
  const handleImageChange = () => {};
  return (
    <Form
      type="Edit"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      projectImage={projectImage}
    />
  );
};

export default EditProject;
