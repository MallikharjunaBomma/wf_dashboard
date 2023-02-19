import { BaseKey } from "@pankod/refine-core";

export interface FormFieldProp {
  title: string;
  labelName: string;
}

export interface FormValues {
  title: string;
  description: string;
  propertyType: string;
  status: string;
  location: string;
  price: number | undefined;
}

export interface PropertyCardProps {
  id?: BaseKey | undefined;
  title: string;
  location: string;
  price: string;
  photo: string;
}
export interface ProjectCardProps {
  id?: BaseKey | undefined;
  title: string;
  description: string;
  status: string;
}
