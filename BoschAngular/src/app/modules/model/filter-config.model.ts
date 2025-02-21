//import { PlantFilter } from "src/app/shared/const/app.const";
import {PlantFilter} from '../../shared/const/app.const';
import { FormDataModel } from "./form-data.model";

export interface FilterConfig {
  setField: keyof FormDataModel | string;
  resetFields?: (keyof FormDataModel)[];
  level: PlantFilter;
}

export interface TargetConfig {
  prev: keyof FormDataModel | string;
  next: keyof FormDataModel | string;
  level: PlantFilter;
  removeNextLevel: string[];
}


export interface StepsConfig {
  prevStep?: string;
  currentStep?: string;
  nextStep?: string;
  level: PlantFilter | number;
}
