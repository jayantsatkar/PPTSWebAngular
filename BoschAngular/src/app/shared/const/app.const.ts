import moment from 'moment';
import appConfig from '../../../assets/appConfig.json';

export const APP_CONSTANT = {
  FocusFactory: 'focusFactory',
  Zone: 'zone',
  Division: 'division',
  Plant: 'plant',
  Line: 'line',
  Asset: 'asset',
};

export function getDefaultFilterValue(plantIdEdenkoben: string) {
  return {
    ENTERPRISE: '1',
    DIVISION: '1',
    PLANT: plantIdEdenkoben,
    ZONE: null,
    LINE: null,
    FROMDATE: moment().subtract(1, 'days').format('YYYY-MM-DD'),
    TODATE: moment().subtract(1, 'days').format('YYYY-MM-DD'),
  };
}

const plantIdEdenkoben = appConfig.plantIdEdenkoben.toString();
export const DEFAULT_FILTER_VALUE = getDefaultFilterValue(plantIdEdenkoben);

export const MATRIX_STATIC_PROPS = {
  focusFactory: [
    {
      title: 'OAE',
      headerStyle: {
        color: '#93989e',
      },
      value: '',
      valueStyle: {
        color: '#e49dae',
      },
    },
    {
      title: 'OEE',
      headerStyle: {
        color: '#93989e',
      },
      value: '',
      valueStyle: {
        color: '#d49150',
      },
    },
    {
      title: 'TEEP',
      headerStyle: {
        color: '#93989e',
      },
      value: '',
      valueStyle: {
        color: '#dbe6fa',
      },
    },
    {
      title: 'Availability',
      headerStyle: {
        color: '#93989e',
      },
      value: '',
      valueStyle: {
        color: '#7ef3e6',
      },
    },
    {
      title: 'Performance',
      headerStyle: {
        color: '#93989e',
      },
      value: '',
      valueStyle: {
        color: '#9b78ff',
      },
    },
    {
      title: 'Quality',
      headerStyle: {
        color: '#93989e',
      },
      value: '',
      valueStyle: {
        color: '#d6ff12',
      },
    },
  ],
};

export enum PlantFilter {
  plant,
  focusFactory,
  zone,
  line,
  asset,
}

// Define constants in uppercase
export const PLANT = 'plant';
export const FOCUS_FACTORY = 'focusFactory';
export const ZONE = 'zone';
export const LINE = 'line';
export const ASSET = 'asset';

// Use these constants in the object
export const PLANT_FILTER_TYPE = {
  PLANT,
  FOCUS_FACTORY,
  ZONE,
  LINE,
  ASSET,
};
