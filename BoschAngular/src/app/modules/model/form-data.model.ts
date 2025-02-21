import { Level } from 'src/app/shared/const/level';

export interface FormDataModel {
  curLevel: number;
  divisionId: number;
  plantId: number;
  focusFactoryId: number;
  zoneId: number;
  lineId: number;
  assetId: number;
  lastSelectedChip_iid:number
  chipItems: Level[];
}
