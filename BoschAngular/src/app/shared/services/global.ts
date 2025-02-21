export class Global {

  // password encryption
  public static AES_SECRET_KEY = 'G-KaNdRgUkXp2s5v8y/B?E(H+MbQeShV';
  public static INIT_VECTOR = 'encryptionIntVec';

  //public static LOGIN = 'Authentication/Post';
  public static LOGIN = 'auth/UserAuth';
  public static EXCEL = 'getHourlyData/upload';
  public static MASTERDATA = 'masterData/getFilters';
  public static EXCELE = 'energyData/upload';
  // Master Data Api
  public static USERS_LIST = 'user/GetUsersPage';
  public static USER_ROLE_LIST = 'Role/GetRoles';
  public static GETROLEID = 'Role/GetRole/';
  public static UPDATE_ROLES = 'Role/UpdateRole'
  public static USER_SKILL_LIST = 'skill/GetSkills';
  public static WORK_INSTRUCTION_LIST = 'WorkInstruction/GetWorkInstructions';
  public static MASTER_CHECKLIST = 'CheckList/GetCheckList';
  public static MASTER_BOM_LIST = 'BOM/GetBomPage';
  public static GETDATA = 'getHourlyData/getHourlyProductionData';
  public static GETPRODTABLEDATA = 'getHourlyData/getHourlyProductionTableData';
  public static GETENERGYDATA = 'energyData/getenergyData';
  public static GETENERGYBENCHMARKING = 'energyData/getEnergyBenchMarking';
  public static GETHIERARCHYNODE = 'energyData/getHierarchyNode';
  public static GETOAPQ = 'getHourlyData/getOapq';
  public static GETDOWNTIMETABLEDATA = 'getHourlyData/getDownTimeTableData';
  public static GETGEOGRAPHICALPLANTDATA = 'plant/getGMapPlant';

  /**
   * Asset Monitoring and Management
   */
  public static GETFACILITYMONITORING = 'maintenance/getFacilityMonitoring';
  public static GETSPAREPARTCONSUMPTION =
    'maintenance/getSparePartsConsumption';
  public static GETWORKORDERCOMPLETION = 'maintenance/getWorkOrderCompletion';
  public static GETASSETDETAILS = 'maintenance/getAsset';
  public static GETSCHUDULEREPORT = 'maintenance/getSchuduleReport';
  public static GETPLANTLINEASSET = 'maintenance/getPlantLineWiseAsset';
  public static GETMEANTIMETABLEDATA = 'meantimeData/getMeanTimeData';
  public static GETMEANTIMETOP5MACHINEDOWNTIMEGRAPHDATA = 'meantimeData/getMeanTimeTop5MachineDowntimeData';
  public static GETMEANTIMEEYEARLYMTBFGRAPHDATA = 'meantimeData/getMeanTimeDashboardYearlyCompareMTBFData';
  public static GETMAINTENANCESCHEDULEYEARLYDATA = 'meantimeData/getMaintenanceScheduleYearlyData';
  public static GETMEANTIMEEYEARLYMTBFBARGRAPHDATA = 'meantimeData/getMeanTimeDashboardYearlyBarGraphData';
  public static GETMEANTIMEEYEARLYMTBFGRAPHLINEDATA =
    'meantimeData/getMeanTimeDashboardYearlyLineData';

  // Breadcrumbs Filter API
  public static GET_DIVISION_BY_ENTERPRISEDID = 'getFormData/getDivisions/';
  public static GET_PLANT_BY_DIVISIONID = 'getFormData/getPlants/';
  public static GET_PLANT = 'getFormData/getPlants/';
  public static GET_FOCUS_FACTORY_BY_PLANTID = 'getFormData/getFocusFactory/';
  public static GET_ZONE_BY_FOCUSFACTORYID = 'getFormData/getZones/';
  public static GET_LINE_BY_ZONEID = 'getFormData/getLines/';

  public static GET_ASSETS_BY_LINEID = 'getFormData/getAssets/';

  //rolebased auth
  public static RoleBasedAUth = 'auth/RoleBasedAuth';
  //user details by email
  public static GetUserDataFromEmail = 'auth/GetDataFromEmail';
  //OAE Reports
  public static OAEManualDashboard_GetOAEBasedOnFilters =
    'OAEManualDashboard/GetOAEBasedOnFilters';
  public static OAEManualDashboard_Weekly =
    'OAEManualDashboard/OAEPerformanceMain';
  public static OAEManualDashboard_GetOverallLossesBasedOnFilters =
    'OAEManualDashboard/GetOverallLossesBasedOnFilters';
  public static OAEManualDashboard_Overalloaeoeeteep =
    'OAEManualDashboard/Overalloaeoeeteep';

  // Plant OAE Shift API
  public static OAEreport_plant =
    'OAEManualDashboard/Overalloaeoeeteepplantlevel';
  public static OAE_MENUAL_DASHBOARD_OVERALL_AOE_OEE_TEEP_SHIFT =
    'OAEManualDashboard/Overalloaeoeeteepshiftlevel';

  //download shift and plant data
  public static OAEshift_report_download =
    'OAEManualDashboard/OveralloaeoeeteepshiftlevelDownload';

  public static OAEplant_report_download =
    'OAEManualDashboard/OveralloaeoeeteepplantlevelDownload';

  //Operator Training
  public static GETOPERATORTRAININGPROGRESS =
    'operatorTraining/GetOperatorTrainingProgress';
  public static GETTRAININGMETRICS = 'operatorTraining/GetTrainingMetrics';
  public static GETOPERATORASSESSMENTPROGRESS =
    'operatorTraining/GetOperatorAssessmentProgress';
  public static GETTRAININGWEEKLYLINECHART =
    'operatorTraining/GetTrainingWeeklyLineChart';
  public static GETTRAININGMONTHLYLINECHART =
    'operatorTraining/GetTrainingMonthlyLineChart';
  public static GETTRAININGYEARLYLINECHART =
    'operatorTraining/GetTrainingYearlyLineChart';
  public static GETTRAININGCALCULATIONPIECHART =
    'operatorTraining/GetTrainingPercentageCompletion';
  public static GETTEAMTRAINING = 'operatorTraining/GetTeamTraining';
  public static GETTEAMATTENDANCE = 'operatorTraining/GetTeamAttendance';
  public static GETTEAMTRAININGFEEDBACK =
    'operatorTraining/GetTrainingFeedback';
  public static GETTRAININGFEEDBACKINDIVIDUAL =
    'operatorTraining/GetTrainingFeedbackIndividual';

  // Traceability Reports
  public static GETFIRSTPARTAPPROVALREPORT =
    'traceability/FirstPartApprovalReport';
  public static GETGEOLOGYREPORT =
    'traceability/GetEdtrReport';

  //Role Mnagement
  public static GET_ROLES = 'Role/GetRoles';
  public static CREATE_ROLES = 'Role/CreateRole';
  public static DELETE_ROLE = 'Role/DeleteRole';
  public static CHECK_DUPLICATE = 'Role/CheckDuplicate';

  //User management 
  public static GET_USERS = 'User/GetUsers';

  //Dashboad
  public static GET_DASHBOARD = 'Report/GetDashboardData';


}
