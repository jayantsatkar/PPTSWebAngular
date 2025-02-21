export interface PlantFiltersQuery {
  plant: string;
  focusFactory?: string;
  zone?: string;
  line?: string;
  asset: string;
  fromDate: string;
  toDate: string;
  pageNo: string;
  pageSize: string;
  currentNodeType?: string;
  flag_preventive_calibration?: string;
  globalSearch?: string;
}
