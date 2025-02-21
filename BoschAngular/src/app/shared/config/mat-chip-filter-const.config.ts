//import {   FilterConfig,  StepsConfig,  TargetConfig,} from 'src/app/modules/model/filter-config.model';
import {FilterConfig,  StepsConfig,  TargetConfig } from '../../modules/model/filter-config.model';
import { PLANT_FILTER_TYPE, PlantFilter } from '../const/app.const';
import { FormDataModel } from '../../modules/model/form-data.model';
import { Global } from '../services/global';

const MAP_CONFIG_ON_REMOVE_CHIP: Record<string, TargetConfig> = {
  [PLANT_FILTER_TYPE.FOCUS_FACTORY]: {
    prev: 'plant',
    next: 'zone',
    level: PlantFilter.plant,
    removeNextLevel: ['focusFactory', 'zone', 'line', 'asset'],
  },
  [PLANT_FILTER_TYPE.ZONE]: {
    prev: 'focusFactory',
    next: 'line',
    level: PlantFilter.focusFactory,
    removeNextLevel: ['zone', 'line', 'asset'],
  },
  [PLANT_FILTER_TYPE.LINE]: {
    prev: 'zone',
    next: 'asset',
    level: PlantFilter.zone,
    removeNextLevel: ['line', 'asset'],
  },
  [PLANT_FILTER_TYPE.ASSET]: {
    prev: 'line',
    next: '',
    level: PlantFilter.line,
    removeNextLevel: ['asset'],
  },
};

const MAP_CONFIG_ONCHIP_EVENT: Record<string, TargetConfig> = {
  [PLANT_FILTER_TYPE.PLANT]: {
    prev: '',
    next: 'focusFactory',
    level: PlantFilter.plant,
    removeNextLevel: ['focusFactory', 'zone', 'line', 'asset'],
  },
  [PLANT_FILTER_TYPE.FOCUS_FACTORY]: {
    prev: 'plant',
    next: 'zone',
    level: PlantFilter.focusFactory,
    removeNextLevel: ['zone', 'line', 'asset'],
  },
  [PLANT_FILTER_TYPE.ZONE]: {
    prev: 'focusFactory',
    next: 'line',
    level: PlantFilter.zone,
    removeNextLevel: ['line', 'asset'],
  },
  [PLANT_FILTER_TYPE.LINE]: {
    prev: 'zone',
    next: 'asset',
    level: PlantFilter.line,
    removeNextLevel: ['asset'],
  },
  [PLANT_FILTER_TYPE.ASSET]: {
    prev: 'line',
    next: '',
    level: PlantFilter.asset,
    removeNextLevel: [],
  },
};

/**
 * Mapping of PLANT_FILTER_TYPE to their respective configurations while adding chip item
 *
 */

const FILTER_CONFIG_MAP_ADD_CHIP: Record<string, FilterConfig> = {
  [PLANT_FILTER_TYPE.PLANT]: {
    setField: 'focusFactoryId',
    resetFields: ['focusFactoryId', 'zoneId', 'lineId', 'assetId'],
    level: PlantFilter.plant,
  },
  [PLANT_FILTER_TYPE.FOCUS_FACTORY]: {
    setField: 'focusFactoryId',
    resetFields: ['zoneId', 'lineId', 'assetId'],
    level: PlantFilter.focusFactory,
  },
  [PLANT_FILTER_TYPE.ZONE]: {
    setField: 'zoneId',
    resetFields: ['lineId', 'assetId'],
    level: PlantFilter.zone,
  },
  [PLANT_FILTER_TYPE.LINE]: {
    setField: 'lineId',
    resetFields: ['assetId'],
    level: PlantFilter.line,
  },
  [PLANT_FILTER_TYPE.ASSET]: {
    setField: 'assetId',
    resetFields: [],
    level: PlantFilter.asset,
  },
};

/**
 * property field
 *
 */
const MAP_CONFIG_FOR_REMOVE_CHIP_BY_CLOSE: Record<string, FilterConfig> = {
  [PLANT_FILTER_TYPE.FOCUS_FACTORY]: {
    setField: 'plantId',
    resetFields: ['focusFactoryId', 'zoneId', 'lineId', 'assetId'],
    level: PlantFilter.focusFactory,
  },
  [PLANT_FILTER_TYPE.ZONE]: {
    setField: 'focusFactoryId',
    resetFields: ['zoneId', 'lineId', 'assetId'],
    level: PlantFilter.zone,
  },
  [PLANT_FILTER_TYPE.LINE]: {
    setField: 'zoneId',
    resetFields: ['lineId', 'assetId'],
    level: PlantFilter.line,
  },
  [PLANT_FILTER_TYPE.ASSET]: {
    setField: 'lineId',
    resetFields: ['assetId'],
    level: PlantFilter.asset,
  },
};

const MAP_CONFIG_FOR_ON_OVER_CHIP_CLICK: Record<string, FilterConfig> = {
  [PLANT_FILTER_TYPE.PLANT]: {
    setField: 'plantId',
    resetFields: ['focusFactoryId', 'zoneId', 'lineId', 'assetId'],
    level: PlantFilter.plant,
  },
  [PLANT_FILTER_TYPE.FOCUS_FACTORY]: {
    setField: 'focusFactoryId',
    resetFields: ['zoneId', 'lineId', 'assetId'],
    level: PlantFilter.focusFactory,
  },
  [PLANT_FILTER_TYPE.ZONE]: {
    setField: 'zoneId',
    resetFields: ['lineId', 'assetId'],
    level: PlantFilter.zone,
  },
  [PLANT_FILTER_TYPE.LINE]: {
    setField: 'lineId',
    resetFields: ['assetId'],
    level: PlantFilter.line,
  },
  [PLANT_FILTER_TYPE.ASSET]: {
    setField: 'assetId',
    resetFields: [],
    level: PlantFilter.asset,
  },
};

/**
 * on add find next api
 */

const MAP_CONFIG_STEPS: Record<string, StepsConfig> = {
  [PLANT_FILTER_TYPE.PLANT]: {
    prevStep: '',
    currentStep: 'plant',
    nextStep: 'focusFactory',
    level: PlantFilter.focusFactory,
  },
  [PLANT_FILTER_TYPE.FOCUS_FACTORY]: {
    prevStep: 'plant',
    currentStep: 'focusFactory',
    nextStep: 'zone',
    level: PlantFilter.zone,
  },
  [PLANT_FILTER_TYPE.ZONE]: {
    prevStep: 'focusFactory',
    currentStep: 'zone',
    nextStep: 'line',
    level: PlantFilter.line,
  },
  [PLANT_FILTER_TYPE.LINE]: {
    prevStep: 'zone',
    currentStep: 'line',
    nextStep: 'asset',
    level: PlantFilter.asset,
  },
  [PLANT_FILTER_TYPE.ASSET]: {
    prevStep: 'line',
    currentStep: 'asset',
    nextStep: 'nostep',
    level: 6,
  },
};

/**
 * propery mapping for new item added to form data model as user select the auto complete ioption from the UI
 */

const PROPERTY_FIELD: Record<string, PropertyField> = {
  plant: 'plantId',
  focusFactory: 'focusFactoryId',
  zone: 'zoneId',
  line: 'lineId',
  asset: 'assetId',
};

const TARGET_FIELD: Record<string, TargetField> = {
  plant: 'plant',
  focusFactory: 'focusFactory',
  zone: 'zone',
  line: 'line',
  asset: 'asset',
};

/**
 * type is define for type of field value
 */
type PropertyField =
  | 'plantId'
  | 'focusFactoryId'
  | 'zoneId'
  | 'lineId'
  | 'assetId';
type TargetField = 'plant' | 'focusFactory' | 'zone' | 'line' | 'asset';

/**
 * omit the chipItems model properties while updating the value
 */
type FormDataModelWithoutChipItems = Omit<FormDataModel, 'chipItems'>;

/**
 * Map PlantFilter values to their respective API functions
 */
type ApiEndpoints = Record<
  PlantFilter,
  (formDataModel: FormDataModel) => string | void
>;
const apiEndpoints: ApiEndpoints = {
  [PlantFilter.plant]: (formDataModel: FormDataModel) =>
    buildApiPath(
      Global['GET_FOCUS_FACTORY_BY_PLANTID'],
      formDataModel.divisionId,
      formDataModel.plantId
    ),
  [PlantFilter.focusFactory]: (formDataModel: FormDataModel) =>
    buildApiPath(
      Global['GET_ZONE_BY_FOCUSFACTORYID'],
      formDataModel.divisionId,
      formDataModel.plantId,
      formDataModel.focusFactoryId
    ),
  [PlantFilter.zone]: (formDataModel: FormDataModel) =>
    buildApiPath(
      Global['GET_LINE_BY_ZONEID'],
      formDataModel.divisionId,
      formDataModel.plantId,
      formDataModel.focusFactoryId,
      formDataModel.zoneId
    ),
  [PlantFilter.line]: (formDataModel: FormDataModel) =>
    buildApiPath(
      Global['GET_ASSETS_BY_LINEID'],
      formDataModel.divisionId,
      formDataModel.plantId,
      formDataModel.focusFactoryId,
      formDataModel.zoneId,
      formDataModel.lineId
    ),
  [PlantFilter.asset]: (formDataModel: FormDataModel): void => {
    console.log('Function not implemented.');
  },
};

export {
  PROPERTY_FIELD,
  FILTER_CONFIG_MAP_ADD_CHIP,
  MAP_CONFIG_FOR_REMOVE_CHIP_BY_CLOSE,
  MAP_CONFIG_FOR_ON_OVER_CHIP_CLICK,
  MAP_CONFIG_ON_REMOVE_CHIP,
  MAP_CONFIG_ONCHIP_EVENT,
  MAP_CONFIG_STEPS,
  TARGET_FIELD,
  FormDataModelWithoutChipItems,
  ApiEndpoints,
  PropertyField,
  TargetField,
  apiEndpoints,
};
/**
 * Helper function to construct API endpoint based on parameters
 * @param basePath
 * @param params
 * @returns
 */
function buildApiPath(
  basePath: string,
  ...params: (number | string)[]
): string {
  return `${basePath}${params.join('/')}`;
}
