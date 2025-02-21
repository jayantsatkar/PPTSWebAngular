export interface EnterpriseFilters {
  enterprise: string | null;
  division: string | null;
  plant: string | null;
  focusFactory: string | null;
  zone: string | null;
  line: string | null;
  shift: string | null;
  asset: string | null;
  fromDate: string | null;
  toDate: string | null;
  isForward?: boolean;
  currentNodeType: string | null;
  pageNo: string | null;
  pageSize: string | null;
}
