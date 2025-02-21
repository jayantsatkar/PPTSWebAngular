export interface DashboardInfo {
  header: string;
  description?: string;
  color: string;
  style: any;
}

export interface SeatBirthCertificateTorqueInfo {
  Id: string;
  Status: string;
  Unit: string;
  Program: string;
  ResultTS: string;
  FinalTorque: string;
  FinalAngle: string;
}

export interface SeatBirthCertificatePartInfo {
  Id: string;
  PartNumber: string;
  Quantity: string;
}

export interface Product {
  id?: string;
  time?: string;
  goal?: number;
  Adient?: number;
  diff?: number;
  total?: number;
  vsFord?: number;
}

export interface DownTime {
  id?: string;
  hour?: string;
  line?: string;
  reason?: string;
  description?: string;
  jobs?: number;
}

export interface MtbfData {
  Date?: string;
  Equipment?: string;
  MaintenanceType?: string;
  WorkPerformed?: string;
  PartsReplaced?: string;
  AssociatedCosts?: string;
}

export interface MttrData {
  year?: number;
  month?: string;
  value?: number;
}

export interface ScheduleReportData {
  machineNm?: string;
  expectedStartDt?: string;
  expectedEndDt?: string;
  actualStartDt?: string;
  actualEndDt?: string;
  status?: string;
}

export interface ProcessParameter {
  dateTime?: string;
  operationId?: number;
  operation?: string;
  iteration?: string;
  torque?: number;
  angle?: number;
  result?: string;
  reTrail?: number;
  channel?: number;
  program?: number;
  leakRate?: number;
  leakUom?: string;
  leakLimit?: number;
  pressure?: number;
  pressureUom?: string;
  temperature?: number;
}

export interface MyTrainingData {
  title: string;
  subCategory?: string;
  lastAccessDate?: string;
  progress?: number;
  time?: number;
}

export interface ChartInputDataObject {
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
}

export interface ScrapData {
  label: string;
  data: Array<number>;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
}
export interface PartTimeforWeek {
  partname: string;
  partnumber: number;
}
export interface PartTimeforWeek1 {
  partname1: string;
  partnumber1: number;
}

export interface Plant {
  key: string;
  value: string;
  //city: Area[];
}
export interface Area {
  key: string;
  value: string;
  //parentType:string;
}
export interface Line {
  key: string;
  value: string;
}
export interface Shift {
  key: string;
  value: string;
}
export interface MachineDisposed {
  AssetCode: string;
  SerialNumber: string;
  AssetDescription: string;
  Manufacturer: string;
  Model: string;
  Cost: number;
  PurchaseDate: string;
  DisposalDate: string;
  Status: string;
  Remarks: string;
}
export interface SparePart {
  Date: string,
  Equipment: string,
  MaintenanceType: string,
  WorkPerformed: string
  OperatorName: string,
  ConsumedPartNumber: string,
  ConsumedPartName: string,
  ConsumedQty: number,
  UOM: string,
}


