import { Injectable } from '@angular/core';
import { min } from 'rxjs';

@Injectable()
export class ProductService {
  //METHOD
  getProductsMini() {
    return Promise.resolve(this.getProductsData());
  }
  getDownTime() {
    return Promise.resolve(this.getDownTimeData());
  }
  getMtfb() {
    return Promise.resolve(this.getMtfbData());
  }
  getScrap() {
    return Promise.resolve(this.getScrapData());
  }
  getMTTR() {
    return Promise.resolve(this.getMTTRData());
  }
  getMtbf() {
    return Promise.resolve(this.getMTBFData());
  }
  getScheduleReport() {
    return Promise.resolve(this.getScheduleReportList());
  }
  getProcessParameter() {
    return Promise.resolve(this.getProcessParameterData());
  }
  getPartNumberForWeek() {
    return Promise.resolve(this.getPartNumberForWeekData());
  }
  getPartNumberScrapDetail() {
    return Promise.resolve(this.getPartNumberScrapDetailData());
  }
  getMTTF() {
    return Promise.resolve(this.getMTTFData());
  }
  getOperatorMyTraining() {
    return Promise.resolve(this.getOperatorMyTrainingData());
  }
  getPlant() {
    return Promise.resolve(this.getPlantList());
  }
  getArea() {
    return Promise.resolve(this.getAreaList());
  }
  getLine() {
    return Promise.resolve(this.getLineList());
  }
  getMachineDisposed() {
    return Promise.resolve(this.getMachineDisposedData());
  }

  getSparePartCons() {
    return Promise.resolve(this.getSparePartConsData());
  }

  //JSON LIST
  getProductsData() {
    return [
      {
        id: '1000',
        time: '06:00 - 07:00',
        target: 40,
        good: 35,
        scrap: 5,
        actual: 40,
        difference: 0,
      },
      {
        id: '1001',
        time: '07:00 - 08:00',
        target: 40,
        good: 35,
        scrap: 3,
        actual: 38,
        difference: 2,
      },
      {
        id: '1002',
        time: '08:00 - 09:00',
        target: 40,
        good: 35,
        scrap: 1,
        actual: 36,
        difference: 4,
      },
      {
        id: '1003',
        time: '09:00 - 10:00',
        target: 40,
        good: 35,
        scrap: 4,
        actual: 39,
        difference: 1,
      },
      {
        id: '1004',
        time: '10:00 - 11:00',
        target: 40,
        good: 35,
        scrap: 4,
        actual: 39,
        difference: 1,
      },
      {
        id: '1005',
        time: '11:00 - 12:00',
        target: 40,
        good: 35,
        scrap: 2,
        actual: 37,
        difference: 3,
      },
    ];
  }
  getDownTimeData() {
    return [
      {
        id: '1000',
        hour: '06:00-07:00',
        line: 'RH_MAIN',
        reason: 'Engineering - Offload Robot',
        description: 'off load robot down elevator stuck',
        jobs: 5,
      },
      {
        id: '1001',
        hour: '07:00-08:00',
        line: 'RH_MAIN',
        reason: 'Engineering - Jam Pallet',
        description: 'pallet jam understation 21',
        jobs: 4,
      },
      {
        id: '1002',
        hour: '08:00-09:00',
        line: 'RH_FSB',
        reason: 'Engineering - Build Line Electrical',
        description: 'seat would not release EU',
        jobs: 4,
      },
      {
        id: '1003',
        hour: '09:00-10:00',
        line: 'RH_FSB',
        reason: 'Engineering - Build Line Electrical',
        description: 'off load robot down elevator stuck',
        jobs: 4,
      },
      {
        id: '1004',
        hour: '10:00-11:00',
        line: 'RH_MAIN',
        reason: 'Engineering - Offload Robot',
        description: 'off load down',
        jobs: 4,
      },
      {
        id: '1005',
        hour: '11:00-12:00',
        line: 'RH_MAIN2',
        reason: 'Engineering - Offload Robot2',
        description: 'off load down2',
        jobs: 5,
      },
    ];
  }
  getDashBoardInfo() {
    return [
      {
        header: 'Program',
        description: 'S650',
        color: 'orange',
        style: {
          'border-left': '5px solid #15a4fa',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'VIN',
        description: '1FA6P8CF6R5413146',
        color: 'blue',
        style: {
          'border-left': '5px solid #ee4c7c',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'Serial',
        description: 'F00134746',
        color: 'grey',
        style: {
          'border-left': '5px solid #bfd732',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'Sequence',
        description: '100065279',
        color: 'teal',
        style: {
          'border-left': '5px solid #15a4fa',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'Broadcast',
        description: '11/13/23 13:58:37 ',
        color: 'indigo',
        style: {
          'border-left': '5px solid #ae69af',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'Built Completed',
        description: '11/14/23 - 1 ',
        color: 'grey',
        style: {
          'border-left': '5px solid orange',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'Rack',
        description: '11/14/23 09:02:13 ',
        color: 'grey',
        style: {
          'border-left': '5px solid orange',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'Ship',
        description: '11/14/23 09:11:47',
        color: 'grey',
        style: {
          'border-left': '5px solid orange',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'Consumed',
        description: '11/14/23 14:24:45',
        color: 'grey',
        style: {
          'border-left': '5px solid orange',
          'border-radius': '4px 9px 9px 4px',
        },
      },
      {
        header: 'BC Code',
        description: 'SWA D',
        color: 'grey',
        style: {
          'border-left': '5px solid orange',
          'border-radius': '4px 9px 9px 4px',
        },
      },
    ];
  }
  getMtfbData() {
    // hhtp:enpoint
    return [
      {
        Date: '2024-04-22',
        Equipment: 'Generator #1',
        MaintenanceType: 'Preventive',
        WorkPerformed: 'Checked oil levels, replaced air filter',
        PartsReplaced: 'Air filter',
        AssociatedCosts: '50',
      },
      {
        Date: '2024-04-23',
        Equipment: 'HVAC System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Investigated cooling issue, replaced capacitor',
        PartsReplaced: 'Capacitor',
        AssociatedCosts: '120',
      },
      {
        Date: '2024-04-25',
        Equipment: 'Conveyor Belt',
        MaintenanceType: 'Preventive',
        WorkPerformed: 'Inspected belt tension, lubricated bearings',
        PartsReplaced: 'Lubricant',
        AssociatedCosts: '30',
      },
      {
        Date: '2024-04-28',
        Equipment: 'Forklift #2',
        MaintenanceType: 'Preventive',
        WorkPerformed:
          'Changed engine oil, replaced hydraulic fluid Changed engine oil, replaced hydraulic fluid ',
        PartsReplaced: 'Engine oil, Hydraulic fluid',
        AssociatedCosts: '80',
      },
      {
        Date: '2024-04-30',
        Equipment: 'Boiler System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Cleared blockage in pipes, replaced valve',
        PartsReplaced: 'Valve',
        AssociatedCosts: '200',
      },
      {
        Date: '2024-04-30',
        Equipment: 'Boiler System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Cleared blockage in pipes, replaced valve',
        PartsReplaced: 'Valve',
        AssociatedCosts: '200',
      },
      {
        Date: '2024-04-30',
        Equipment: 'Boiler System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Cleared blockage in pipes, replaced valve',
        PartsReplaced: 'Valve',
        AssociatedCosts: '200',
      },
      {
        Date: '2024-04-30',
        Equipment: 'Boiler System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Cleared blockage in pipes, replaced valve',
        PartsReplaced: 'Valve',
        AssociatedCosts: '200',
      },
      {
        Date: '2024-04-30',
        Equipment: 'Boiler System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Cleared blockage in pipes, replaced valve',
        PartsReplaced: 'Valve',
        AssociatedCosts: '200',
      },
      {
        Date: '2024-04-30',
        Equipment: 'Boiler System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Cleared blockage in pipes, replaced valve',
        PartsReplaced: 'Valve',
        AssociatedCosts: '200',
      },
      {
        Date: '2024-04-30',
        Equipment: 'Boiler System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Cleared blockage in pipes, replaced valve',
        PartsReplaced: 'Valve',
        AssociatedCosts: '200',
      },
      {
        Date: '2024-04-30',
        Equipment: 'Boiler System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Cleared blockage in pipes, replaced valve',
        PartsReplaced: 'Valve',
        AssociatedCosts: '200',
      },
    ];
  }
  getMTTRData() {
    return [
      { month: 'January', year: 2023, value: 8 },
      { month: 'February', year: 2023, value: 18 },
      { month: 'March', year: 2023, value: 10 },
      { month: 'April', year: 2023, value: 8 },
      { month: 'May', year: 2023, value: 7 },
      { month: 'June', year: 2023, value: 20 },
      { month: 'July', year: 2023, value: 6 },
      { month: 'August', year: 2023, value: 24 },
      { month: 'September', year: 2023, value: 6 },
      { month: 'October', year: 2023, value: 7 },
      { month: 'November', year: 2023, value: 8 },
      { month: 'December', year: 2023, value: 4 },
      { month: 'January', year: 2022, value: 11 },
      { month: 'February', year: 2022, value: 37 },
      { month: 'March', year: 2022, value: 31 },
      { month: 'April', year: 2022, value: 23 },
      { month: 'May', year: 2022, value: 28 },
      { month: 'June', year: 2022, value: 29 },
      { month: 'July', year: 2022, value: 21 },
      { month: 'August', year: 2022, value: 54 },
      { month: 'September', year: 2022, value: 2 },
      { month: 'October', year: 2022, value: 26 },
      { month: 'November', year: 2022, value: 20 },
      { month: 'December', year: 2022, value: 39 },
    ];
  }
  getMTBFData() {
    return [
      { month: 'January', year: 2023, value: 606.78 },
      { month: 'February', year: 2023, value: 85.22 },
      { month: 'March', year: 2023, value: 184.04 },
      { month: 'April', year: 2023, value: 347.07 },
      { month: 'May', year: 2023, value: 433.21 },
      { month: 'June', year: 2023, value: 403.99 },
      { month: 'July', year: 2023, value: 288.16 },
      { month: 'August', year: 2023, value: 355.0 },
      { month: 'September', year: 2023, value: 342.76 },
      { month: 'October', year: 2023, value: 440.12 },
      { month: 'November', year: 2023, value: 428.99 },
      { month: 'December', year: 2023, value: 543.95 },
      { month: 'January', year: 2022, value: 166.6 },
      { month: 'February', year: 2022, value: 145.25 },
      { month: 'March', year: 2022, value: 130.24 },
      { month: 'April', year: 2022, value: 253.81 },
      { month: 'May', year: 2022, value: 160.96 },
      { month: 'June', year: 2022, value: 289.7 },
      { month: 'July', year: 2022, value: 486.89 },
      { month: 'August', year: 2022, value: 284.62 },
      { month: 'September', year: 2022, value: 261.28 },
      { month: 'October', year: 2022, value: 542.3 },
      { month: 'November', year: 2022, value: 349.62 },
      { month: 'December', year: 2022, value: 549.15 },
    ];
  }
  getMTTFData() {
    return [
      { month: 'January', year: 2023, value: 8 },
      { month: 'February', year: 2023, value: 18 },
      { month: 'March', year: 2023, value: 10 },
      { month: 'April', year: 2023, value: 8 },
      { month: 'May', year: 2023, value: 7 },
      { month: 'June', year: 2023, value: 20 },
      { month: 'July', year: 2023, value: 6 },
      { month: 'August', year: 2023, value: 24 },
      { month: 'September', year: 2023, value: 6 },
      { month: 'October', year: 2023, value: 7 },
      { month: 'November', year: 2023, value: 8 },
      { month: 'December', year: 2023, value: 4 },
      { month: 'January', year: 2022, value: 11 },
      { month: 'February', year: 2022, value: 37 },
      { month: 'March', year: 2022, value: 31 },
      { month: 'April', year: 2022, value: 23 },
      { month: 'May', year: 2022, value: 28 },
      { month: 'June', year: 2022, value: 29 },
      { month: 'July', year: 2022, value: 21 },
      { month: 'August', year: 2022, value: 54 },
      { month: 'September', year: 2022, value: 2 },
      { month: 'October', year: 2022, value: 26 },
      { month: 'November', year: 2022, value: 20 },
      { month: 'December', year: 2022, value: 39 },
    ];
  }
  getScheduleReportList() {
    return [
      {
        machineNm: 'ABB',
        expectedStartDt: '01-APR-2023 09:30',
        expectedEndDt: '01-APR-2023 10:30',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'SCH',
      },
      {
        machineNm: 'PSA',
        expectedStartDt: '23-MAY-2023 10:20',
        expectedEndDt: '23-MAY-2023 12:20',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'SCH',
      },
      {
        machineNm: 'JLR_SCR',
        expectedStartDt: '21-MAY-2023 12:20',
        expectedEndDt: '21-MAY-2023 13:20',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'SCH',
      },
      {
        machineNm: 'BVH2',
        expectedStartDt: '31-MAY-2023 15:20',
        expectedEndDt: '31-MAY-2023 15:25',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'SCH',
      },
      {
        machineNm: 'CATA',
        expectedStartDt: '10-MAY-2023 10:20',
        expectedEndDt: '10-MAY-2023 10:50',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'SCH',
      },
      {
        machineNm: 'OTC',
        expectedStartDt: '05-MAY-2023 10:20',
        expectedEndDt: '05-MAY-2023 15:20',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'SCH',
      },
      {
        machineNm: 'SUV 1',
        expectedStartDt: '01-JAN-2023 11:15',
        expectedEndDt: '01-JAN-2023 12:45',
        actualStartDt: '01-JAN-2023 11:20',
        actualEndDt: '01-JAN-2023 11:25',
        status: 'COM',
      },
      {
        machineNm: 'Hot Pipe',
        expectedStartDt: '01-FEB-2023 11:15',
        expectedEndDt: '01-FEB-2023 12:15',
        actualStartDt: '01-FEB-2023 11:30',
        actualEndDt: '01-FEB-2023 11:55',
        status: 'COM',
      },
      {
        machineNm: 'ACL',
        expectedStartDt: '01-APR-2023 11:15',
        expectedEndDt: '01-APR-2023 01:30',
        actualStartDt: '01-APR-2023 11:15',
        actualEndDt: '01-APR-2023 11:18',
        status: 'COM',
      },
      {
        machineNm: 'MQB1',
        expectedStartDt: '05-MAR-2023 09:30',
        expectedEndDt: '05-MAR-2023 09:40',
        actualStartDt: '05-MAR-2023 09:30',
        actualEndDt: '05-MAR-2023 09:38',
        status: 'COM',
      },
      {
        machineNm: 'MQB2',
        expectedStartDt: '01-FEB-2023 15:30',
        expectedEndDt: '01-FEB-2023 16:30',
        actualStartDt: '01-FEB-2023 15:40',
        actualEndDt: '01-FEB-2023 16:25',
        status: 'COM',
      },
      {
        machineNm: 'MQB3',
        expectedStartDt: '01-MAR-2023 18:00',
        expectedEndDt: '01-MAR-2023 18:30',
        actualStartDt: '01-MAR-2023 18:05',
        actualEndDt: '01-MAR-2023 18:10',
        status: 'COM',
      },
      {
        machineNm: 'MQB4',
        expectedStartDt: '01-APR-2023 09:30',
        expectedEndDt: '01-APR-2023 10:30',
        actualStartDt: '01-APR-2023 09:30',
        actualEndDt: 'NA',
        status: 'ONG',
      },
      {
        machineNm: 'MQB5',
        expectedStartDt: '01-APR-2023 11:25',
        expectedEndDt: '01-APR-2023 11:55',
        actualStartDt: '01-APR-2023 11:30',
        actualEndDt: 'NA',
        status: 'ONG',
      },
      {
        machineNm: 'Ohýbací linka',
        expectedStartDt: '15-MAR-2023 15:25',
        expectedEndDt: '15-MAR-2023 16:00',
        actualStartDt: '15-MAR-2023 15:30',
        actualEndDt: 'NA',
        status: 'ONG',
      },
      {
        machineNm: 'MO1',
        expectedStartDt: '20-APR-2023 16:25',
        expectedEndDt: '20-APR-2023 18:30',
        actualStartDt: '20-APR-2023 17:25',
        actualEndDt: 'NA',
        status: 'ONG',
      },
      {
        machineNm: 'YLM5',
        expectedStartDt: '15-JAN-2023 12:05',
        expectedEndDt: '15-JAN-2023 16:30',
        actualStartDt: '15-JAN-2023 13:25',
        actualEndDt: 'NA',
        status: 'ONG',
      },
      {
        machineNm: 'MFA',
        expectedStartDt: '20-APR-2023 13:05',
        expectedEndDt: '20-APR-2023 13:40',
        actualStartDt: '20-APR-2023 13:10',
        actualEndDt: 'NA',
        status: 'ONG',
      },
      {
        machineNm: 'MOPF1',
        expectedStartDt: '15-JAN-2023 19:10',
        expectedEndDt: '15-JAN-2023 19:55',
        actualStartDt: '15-JAN-2023 19:15',
        actualEndDt: 'NA',
        status: 'DOG',
      },
      {
        machineNm: 'YLM1',
        expectedStartDt: '15-APR-2023 20:15',
        expectedEndDt: '15-APR-2023 20:30',
        actualStartDt: '15-APR-2023  20:20',
        actualEndDt: 'NA',
        status: 'DOG',
      },
      {
        machineNm: 'YLM2',
        expectedStartDt: '20-JAN-2023 22:00',
        expectedEndDt: '20-JAN-2023 22:05',
        actualStartDt: '20-JAN-2023 20:05',
        actualEndDt: 'NA',
        status: 'DOG',
      },
      {
        machineNm: 'YLM3',
        expectedStartDt: '15-MAR-2023 05:40',
        expectedEndDt: '15-MAR-2023 05:44',
        actualStartDt: '15-MAR-2023 05:41',
        actualEndDt: 'NA',
        status: 'DOG',
      },
      {
        machineNm: ' YLM4',
        expectedStartDt: '15-APR-2023 08:00',
        expectedEndDt: '15-APR-2023 09:05',
        actualStartDt: '15-APR-2023 08:30',
        actualEndDt: 'NA',
        status: 'DOG',
      },
      {
        machineNm: 'PQ26CE',
        expectedStartDt: '15-MAR-2023 12:00',
        expectedEndDt: '15-MAR-2023 02:00',
        actualStartDt: '15-MAR-2023 01:40',
        actualEndDt: 'NA',
        status: 'DOG',
      },
      {
        machineNm: 'PQ26HE-1',
        expectedStartDt: '15-MAR-2023 12:05',
        expectedEndDt: '15-MAR-2023 13:00',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'DNS',
      },
      {
        machineNm: 'MOPF post',
        expectedStartDt: '15-APR-2023 14:05',
        expectedEndDt: '15-APR-2023 15:05',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'COM',
      },
      {
        machineNm: 'volné',
        expectedStartDt: '15-APR-2023 17:00',
        expectedEndDt: '15-APR-2023 19:00',
        actualStartDt: '15-APR-2023',
        actualEndDt: '15-APR-2023',
        status: 'COM',
      },
      {
        machineNm: 'JLR_CCC',
        expectedStartDt: '01-JUN-2023 15:00',
        expectedEndDt: '01-JUN-2023 16:00',
        actualStartDt: '01-JUN-2023 15:40',
        actualEndDt: '01-JUN-2023 15:45',
        status: 'COM',
      },
      {
        machineNm: 'MOPF2',
        expectedStartDt: '30-OCT-2023 15:10',
        expectedEndDt: '30-OCT-2023 17:10',
        actualStartDt: 'NA',
        actualEndDt: 'NA',
        status: 'DNS',
      },
      {
        machineNm: 'MOPF3',
        expectedStartDt: '01-SEP-2023 11:00',
        expectedEndDt: '01-SEP-2023 12:00',
        actualStartDt: '01-SEP-2023 11:00',
        actualEndDt: 'NA',
        status: 'DOG',
      },
      {
        machineNm: 'COA E562 MPI',
        expectedStartDt: '05-JUN-2023 13:10',
        expectedEndDt: '05-JUN-2023 14:10',
        actualStartDt: '05-JUN-2023 13:10',
        actualEndDt: '05-JUN-2023 13:15',
        status: 'COM',
      },
      {
        machineNm: 'SUV 2',
        expectedStartDt: '01-MAY-2023 15:10',
        expectedEndDt: '01-MAY-2023 16:10',
        actualStartDt: '01-MAY-2023 15:16',
        actualEndDt: 'NA',
        status: 'DOG',
      },
      {
        machineNm: 'XRC Yeti,Rapid',
        expectedStartDt: '05-JUN-2023 15:10',
        expectedEndDt: '05-JUN-2023 18:00',
        actualStartDt: '05-JUN-2023 15:10',
        actualEndDt: 'NA',
        status: 'DOG',
      },
    ];
  }
  getProcessParameterData() {
    return [
      {
        dateTime: '06 Mar 2022 09:30:00',
        operationId: 1301,
        operation: 'OP200: Scan Final Label',
        iteration: '1/1',
        reTrail: 1,
        channel: 1,
        program: 1,
        leakRate: 17.8,
        leakUom: 'i L/min',
        leakLimit: 30,
        pressure: 0.3,
        pressureUom: 'bar',
        temperature: 1,
        torque: 12,
        angle: 20,
        result: 'F',
      },
      {
        dateTime: '06 Mar 2022 11:30:00',
        operationId: 2,
        operation: 'OP201: Scan Final Label ',
        iteration: '1/1',
        reTrail: 1,
        channel: 1,
        program: 1,
        leakRate: 17.8,
        leakUom: 'i L/min',
        leakLimit: 34,
        pressure: 0.6,
        pressureUom: 'bar',
        temperature: 1,
        torque: 12,
        angle: 20,
        result: 'F',
      },
      {
        dateTime: '06 Apr 2022 15:00:00',
        operationId: 1249,
        operation: ' OP202: Scan Final Label',
        iteration: '1/1',
        reTrail: 1,
        channel: 1,
        program: 1,
        leakRate: 17.8,
        leakUom: 'i L/min',
        leakLimit: 20,
        pressure: 1.3,
        pressureUom: 'bar',
        temperature: 1,
        torque: 14,
        angle: 20,
        result: 'F',
      },
      {
        dateTime: '07 Mar 2022 18:30:00',
        operationId: 48,
        operation: ' OP203: Scan Final Label',
        iteration: '1/1',
        reTrail: 1,
        channel: 1,
        program: 1,
        leakRate: 18.8,
        leakUom: 'i L/min',
        leakLimit: 26,
        pressure: 0.9,
        pressureUom: 'bar',
        temperature: 1,
        torque: 14,
        angle: 26,
        result: 'F',
      },
      {
        dateTime: '08 Mar 2022 12:30:00',
        operationId: 1301,
        operation: ' OP204: Scan Final Label',
        iteration: '1/1',
        reTrail: 1,
        channel: 1,
        program: 1,
        leakRate: 19.1,
        leakUom: 'i L/min',
        leakLimit: 46,
        pressure: 0.7,
        pressureUom: 'bar',
        temperature: 1,
        torque: 18,
        angle: 24,
        result: 'S',
      },
      {
        dateTime: '08 Mar 2022 14:30:00',
        operationId: 1301,
        operation: ' OP205: Scan Final Label',
        iteration: '1/1',
        reTrail: 1,
        channel: 1,
        program: 1,
        leakRate: 6.8,
        leakUom: 'i L/min',
        leakLimit: 10,
        pressure: 2.5,
        pressureUom: 'bar',
        temperature: 1,
        torque: 16,
        angle: 25,
        result: 'S',
      },
      {
        dateTime: '09 Mar 2022 18:22:00',
        operationId: 1301,
        operation: ' OP206: Scan Final Label',
        iteration: '1/1',
        reTrail: 1,
        channel: 1,
        program: 1,
        leakRate: 17.8,
        leakUom: 'i L/min',
        leakLimit: 32,
        pressure: 0.3,
        pressureUom: 'bar',
        temperature: 1,
        torque: 14,
        angle: 41,
        result: 'S',
      },
      {
        dateTime: '06 Mar 2022 17:59:00',
        operationId: 1301,
        operation: ' OP207: Scan Final Label',
        iteration: '1/1',
        reTrail: 1,
        channel: 1,
        program: 1,
        leakRate: 25.8,
        leakUom: 'i L/min',
        leakLimit: 20,
        pressure: 0.3,
        pressureUom: 'bar',
        temperature: 1,
        torque: 12,
        angle: 20,
        result: 'F',
      },
    ];
  }
  getScrapData() {
    return [
      {
        label: '100',
        data: [22, 16, 25, 36, 17, 18, 19, 20, 21, 22],
        backgroundColor: '#D10674',
        borderColor: '#2D44E5',
        borderWidth: 0,
        borderRadius: 0,
      },
      {
        label: '200',
        data: [14, 24, 25, 16, 17, 18, 59, 20, 21, 22],
        backgroundColor: '#7B3AB8',
        borderColor: '#E98959',
        borderWidth: 0,
        borderRadius: 7,
      },
      {
        label: '300',
        data: [22, 14, 25, 16, 47, 48, 19, 70, 21, 22],
        backgroundColor: '#BB6BD9',
        borderColor: '#E98959',
        borderWidth: 0,
        borderRadius: 7,
      },
      {
        label: '400',
        data: [32, 14, 5, 16, 17, 18, 19, 20, 21, 22],
        backgroundColor: '#27AE60',
        borderColor: '#E98959',
        borderWidth: 0,
        borderRadius: 7,
      },
      {
        label: '500',
        data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        backgroundColor: '#2F6CBE',
        borderColor: '#E98959',
        borderWidth: 0,
        borderRadius: 7,
      },
      {
        label: '600',
        data: [42, 14, 15, 16, 17, 18, 19, 20, 21, 32],
        backgroundColor: '#2D9CDB',
        borderColor: '#E98959',
        borderWidth: 0,
        borderRadius: 7,
      },
      {
        label: '700',
        data: [52, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        backgroundColor: '#F2C24C',
        borderColor: '#E98959',
        borderWidth: 0,
        borderRadius: 7,
      },
      {
        label: '800',
        data: [27, 14, 15, 16, 17, 18, 19, 20, 21, 12],
        backgroundColor: '#F2994A',
        borderColor: '#E98959',
        borderWidth: 0,
        borderRadius: 7,
      },
      {
        label: '900',
        data: [39, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        backgroundColor: '#E98959',
        borderColor: '#E98959',
        borderWidth: 0,
        borderRadius: 7,
      },
    ];
  }
  getPartNumberForWeekData() {
    return {
      day: [
        {
          partname: 'PartType1',
          partnumber: 91,
        },
        {
          partname: 'PartType2',
          partnumber: 88,
        },
        {
          partname: 'PartType3',
          partnumber: 45,
        },
        {
          partname: 'PartType4',
          partnumber: 50,
        },
        {
          partname: 'PartType5',
          partnumber: 60,
        },
        {
          partname: 'PartType6',
          partnumber: 70,
        },
      ],
      week: [
        {
          partname: 'PartType1',
          partnumber: 14,
        },
        {
          partname: 'PartType2',
          partnumber: 45,
        },
        {
          partname: 'PartType3',
          partnumber: 70,
        },
        {
          partname: 'PartType4',
          partnumber: 25,
        },
        {
          partname: 'PartType5',
          partnumber: 30,
        },
        {
          partname: 'PartType6',
          partnumber: 5,
        },
      ],
      month: [
        {
          partname: 'PartType1',
          partnumber: 10,
        },
        {
          partname: 'PartType2',
          partnumber: 88,
        },
        {
          partname: 'PartType3',
          partnumber: 60,
        },
        {
          partname: 'PartType4',
          partnumber: 70,
        },
        {
          partname: 'PartType5',
          partnumber: 10,
        },
        {
          partname: 'PartType6',
          partnumber: 20,
        },
      ],
    };
  }
  getPartNumberScrapDetailData() {
    return {
      day: [
        {
          partname1: ['Surface', 'Defect'],
          partnumber1: 21,
        },
        {
          partname1: ['Excessive', 'Adhesive'],
          partnumber1: 28,
        },
        {
          partname1: ['Cured', 'Flash'],
          partnumber1: 15,
        },
        {
          partname1: ['Damage'],
          partnumber1: 38,
        },
        {
          partname1: ['Leakage'],
          partnumber1: 50,
        },
        {
          partname1: ['Burn', 'thorugh', 'folds'],
          partnumber1: 45,
        },
      ],
      week: [
        {
          partname1: ['Surface', 'Defect'],
          partnumber1: 31,
        },
        {
          partname1: ['Excessive', 'Adhesive'],
          partnumber1: 58,
        },
        {
          partname1: ['Cured', 'Flash'],
          partnumber1: 35,
        },
        {
          partname1: ['Damage'],
          partnumber1: 50,
        },
        {
          partname1: ['Leakage'],
          partnumber1: 45,
        },
        {
          partname1: ['Burn', 'thorugh', 'folds'],
          partnumber1: 65,
        },
      ],
      month: [
        {
          partname1: ['Surface', 'Defect'],
          partnumber1: 30,
        },
        {
          partname1: ['Excessive', 'Adhesive'],
          partnumber1: 24,
        },
        {
          partname1: ['Cured', 'Flash'],
          partnumber1: 46,
        },
        {
          partname1: ['Damage'],
          partnumber1: 58,
        },
        {
          partname1: ['Leakage'],
          partnumber1: 90,
        },
        {
          partname1: ['Burn', 'thorugh', 'folds'],
          partnumber1: 45,
        },
      ],
    };
  }
  // getMTTRData() {
  //     return [
  //         {
  //             "year": "2022",
  //             "data": [
  //                 { "month": "January", "value": 11 },
  //                 { "month": "February", "value": 37 },
  //                 { "month": "March", "value": 31 },
  //                 { "month": "April", "value": 23 },
  //                 { "month": "May", "value": 28 },
  //                 { "month": "June", "value": 29 },
  //                 { "month": "July", "value": 21 },
  //                 { "month": "August", "value": 54 },
  //                 { "month": "September", "value": 23 },
  //                 { "month": "October", "value": 26 },
  //                 { "month": "November", "value": 20 },
  //                 { "month": "December", "value": 39 }
  //             ]
  //         },
  //         {
  //             "year": "2023",
  //             "data": [
  //                 { "month": "January", "value": 11 },
  //                 { "month": "February", "value": 37 },
  //                 { "month": "March", "value": 31 },
  //                 { "month": "April", "value": 23 },
  //                 { "month": "May", "value": 28 },
  //                 { "month": "June", "value": 29 },
  //                 { "month": "July", "value": 21 },
  //                 { "month": "August", "value": 54 },
  //                 { "month": "September", "value": 23 },
  //                 { "month": "October", "value": 26 },
  //                 { "month": "November", "value": 20 },
  //                 { "month": "December", "value": 39 }
  //             ]
  //         }
  //     ]
  // }

  // getDownTime() {
  //     return Promise.resolve(this.getDownTimeData().slice(0, 10));
  // }
  getOperatorMyTrainingData() {
    return [
      {
        title: 'Traning 1',
        subCategory: 'Catia',
        lastAccessDate: '09-OCT-2023 09:30:00',
        progress: 78,
        time: 120,
      },
      {
        title: 'Traning 2',
        subCategory: 'Catia',
        lastAccessDate: '09-OCT-2023 09:30:00',
        progress: 58,
        time: 60,
      },
      {
        title: 'Traning 3',
        subCategory: 'Auto CAD',
        lastAccessDate: '09-OCT-2023 09:30:00',
        progress: 22,
        time: 90,
      },
      {
        title: 'Traning 4',
        subCategory: 'Reference Document',
        lastAccessDate: '09-OCT-2023 09:30:00',
        progress: 45,
        time: 240,
      },
    ];
  }
  getPlantList() {
    return [
      { key: 'Rybnik', value: 'Rybnik' },
      { key: 'Edenkoben', value: 'Edenkoben' },
      { key: 'Puebla', value: 'Puebla ll' },
      { key: 'Cambridge', value: 'Cambridge' },
      { key: 'Chakan', value: 'Chakan' },
      { key: 'Chengdu', value: 'Chengdu' },
      { key: 'Hodkowice', value: 'Hodkowice' },
      { key: 'Litchfield', value: 'Litchfield' },
      { key: 'Qingdao_CA', value: 'Qingdao_CA' },
      { key: 'Smithville', value: 'Smithville' },
    ];
  }
  getAreaList() {
    return [
      { key: '12', value: 'K1BA' },
      { key: '24', value: 'K1BB' },
    ];
  }
  getLineList() {
    return [
      { key: '12', value: 'H01' },
      { key: '24', value: 'H02' },
    ];
  }
  getMachineDisposedData() {
    return [
      {
        AssetCode: '0810',
        SerialNumber: '5867123122',
        AssetDescription: '0810 M. ZWIJANIA PŁASZCZY TECHNIMACHE-DARWIN 1,2',
        Manufacturer: 'Tecnimahe',
        Model: 'Tecnimahe22',
        Cost: 5.2,
        PurchaseDate: '9/2/2018',
        DisposalDate: '11/2/2023',
        Status: 'Disposed',
        Remarks: 'Life was expired.',
      },
      {
        AssetCode: '0812',
        SerialNumber: '21213213344',
        AssetDescription: '0812 MASZYNA DO ZWIJANIA PŁASZCZY BM001 EAGLE III',
        Manufacturer: 'Eagle',
        Model: 'Eagle344',
        Cost: 4.3,
        PurchaseDate: '10/11/2019',
        DisposalDate: '1/11/2024',
        Status: 'Disposed',
        Remarks: 'Life was expired.',
      },
      {
        AssetCode: '0815',
        SerialNumber: '31231223123',
        AssetDescription: '1555+1545+0815 LINIA DO ZWIJANIA PŁASZCZY EAGLE IV',
        Manufacturer: 'Eagle',
        Model: 'Eagle123',
        Cost: 6.5,
        PurchaseDate: '7/20/2017',
        DisposalDate: '12/20/2023',
        Status: 'Pending',
        Remarks: '',
      },
      {
        AssetCode: '0816',
        SerialNumber: '965333748',
        AssetDescription: '1556+1557+0919 -0816 LINIA DO ZWIJANIA PUSZEK VW',
        Manufacturer: 'Wrazidło',
        Model: 'Wrazidło8',
        Cost: 7.4,
        PurchaseDate: '7/23/2016',
        DisposalDate: '11/23/2023',
        Status: 'Pending',
        Remarks: '',
      },
      {
        AssetCode: '0817',
        SerialNumber: '7556573957',
        AssetDescription: '0817 LINIA DO ZWIJANIA PUSZEK PQ 35 LEIFELD',
        Manufacturer: 'Leifeld',
        Model: 'Leifeld57',
        Cost: 4.6,
        PurchaseDate: '7/11/2019',
        DisposalDate: '1/11/2024',
        Status: 'Disposed',
        Remarks: 'malfunctioning',
      },
      {
        AssetCode: '0818',
        SerialNumber: '7584585749',
        AssetDescription: '0818 MASZYNA DO ZWIJANIA PŁASZCZY COMAS M7820',
        Manufacturer: 'Comas',
        Model: 'Comas49',
        Cost: 3.8,
        PurchaseDate: '6/23/2020',
        DisposalDate: '2/23/2024',
        Status: 'Disposed',
        Remarks: 'Heavy damaged',
      },
      {
        AssetCode: '0819',
        SerialNumber: '8858392193',
        AssetDescription: '0819 ZAMYKARKA KOMPONENTÓW BODYMAKER EAGLE',
        Manufacturer: 'Eagle',
        Model: 'Eagle93',
        Cost: 5.7,
        PurchaseDate: '8/11/2018',
        DisposalDate: '3/11/2024',
        Status: 'Disposed',
        Remarks: 'Life was expired.',
      },
      {
        AssetCode: '0820',
        SerialNumber: '266332835',
        AssetDescription: '0820 BODYMARKER',
        Manufacturer: 'Moon',
        Model: 'Moon5',
        Cost: 3.6,
        PurchaseDate: '9/1/2020',
        DisposalDate: '3/1/2024',
        Status: 'Pending',
        Remarks: '',
      },
      {
        AssetCode: '0821',
        SerialNumber: '887473200',
        AssetDescription: '0821 MASZYNA DO ZWIJANIA PŁASZCZY',
        Manufacturer: 'Wrazidło',
        Model: 'Wrazidło0',
        Cost: 5.6,
        PurchaseDate: '3/13/2018',
        DisposalDate: '9/13/2023',
        Status: 'Disposed',
        Remarks: 'Heavy damaged',
      },
      {
        AssetCode: '0823',
        SerialNumber: '2378147885',
        AssetDescription: '0823 BODYMARKER',
        Manufacturer: 'Wrazidło',
        Model: 'Wrazidło85',
        Cost: 7.5,
        PurchaseDate: '10/3/2016',
        DisposalDate: '3/3/2024',
        Status: 'Pending',
        Remarks: '',
      },
    ];
  }

  getSparePartConsData() {
    return [
      {
        Date: '4/1/2024',
        Equipment: 'Machine A',
        MaintenanceType: 'Preventive',
        WorkPerformed: 'Lubrication, Inspection',
        OperatorName: 'John',
        ConsumedPartNumber: 'PNOOOOI',
        ConsumedPartName: 'Oil',
        ConsumedQty: 2,
        UOM: 'Ltr',
      },
      {
        Date: '4/1/2024',
        Equipment: 'Machine A',
        MaintenanceType: 'Preventive',
        WorkPerformed: 'Lubrication, Inspection',
        OperatorName: 'John',
        ConsumedPartNumber: 'PN00002',
        ConsumedPartName: 'Filters',
        ConsumedQty: 1,
        UOM: 'Nos',
      },
      {
        Date: '4/5/2024',
        Equipment: 'Conveyor System',
        MaintenanceType: 'Reactive',
        WorkPerformed: 'Belt Replacement',
        OperatorName: 'Mach',
        ConsumedPartNumber: 'PN00003',
        ConsumedPartName: 'Conveyor Belt',
        ConsumedQty: 1,
        UOM: 'Nos',
      },
      {
        Date: '4/10/2024',
        Equipment: 'Pump B',
        MaintenanceType: 'Preventive',
        WorkPerformed: 'Pump Calibration',
        OperatorName: 'Pitter',
        ConsumedPartNumber: 'PN00004',
        ConsumedPartName: 'O-rings',
        ConsumedQty: 5,
        UOM: 'Nos',
      },
      {
        Date: '4/10/2024',
        Equipment: 'Pump B',
        MaintenanceType: 'Preventive',
        WorkPerformed: 'Pump',
        OperatorName: 'Pitter',
        ConsumedPartNumber: 'PN00005',
        ConsumedPartName: 'Seals',
        ConsumedQty: 5,
        UOM: 'Nos',
      },
    ];
  }

  getSeatBirthCertificateTorqueInfo() {
    return [
      {
        Id: '1',
        Status: 'OK',
        Unit: 'Virtual Station LH',
        Program: '11314218 BACK LATCH 3',
        ResultTS: '11/14/23 05:59:57',
        FinalTorque: '10.51 (8.9 - 12.1)',
        FinalAngle: '78(10-250)',
      },
      {
        Id: '2',
        Status: 'NOK',
        Unit: 'Virtual Station RH',
        Program: '11314218 REHIT BOLT 2',
        ResultTS: '11/14/23 05:56:24',
        FinalTorque: '5.65 (8.9 - 12.1)',
        FinalAngle: '-',
      },
      {
        Id: '3',
        Status: 'OK',
        Unit: 'Virtual Station LH',
        Program: '11314218 REHIT BOLT 2',
        ResultTS: '11/14/23 05:59:42',
        FinalTorque: '10.56 (8.9 - 12.1)',
        FinalAngle: '61(10-250)',
      },
      {
        Id: '4',
        Status: 'OK',
        Unit: 'Virtual Station RH',
        Program: '11314218 REHIT BOLT 3',
        ResultTS: '11/14/23 05:56:42',
        FinalTorque: '10.56 (8.9 - 12.1)',
        FinalAngle: '61(10-250)',
      },
      {
        Id: '5',
        Status: 'NOK',
        Unit: 'Virtual Station RH',
        Program: '11314218 BACK LATCH 2',
        ResultTS: '11/14/23 05:59:57',
        FinalTorque: '7.28 (8.9 - 12.1)',
        FinalAngle: '250(10-250)',
      },
      {
        Id: '6',
        Status: 'OK',
        Unit: 'Virtual Station LH',
        Program: '11314218 BACK LATCH',
        ResultTS: '11/14/23 05:59:47',
        FinalTorque: '10.51 (8.9 0 12.1)',
        FinalAngle: '35(10-250)',
      },
    ];
  }

  getSeatBirthCertificatePartInfo() {
    return [
      {
        Id: '1',
        PartNumber: 'PR3B COSTSEQ AA',
        Quantity: '0',
      },
      {
        Id: '2',
        PartNumber: 'PR3B C66601 CB319W',
        Quantity: '0',
      },
      {
        Id: '3',
        PartNumber: 'PR3B C66601 CB319W',
        Quantity: '0',
      },
      {
        Id: '4',
        PartNumber: 'PR3B C66601 CB319W',
        Quantity: '0',
      },
      {
        Id: '5',
        PartNumber: 'PR3B COSTSEQ AA',
        Quantity: '0',
      },
    ];
  }
}
