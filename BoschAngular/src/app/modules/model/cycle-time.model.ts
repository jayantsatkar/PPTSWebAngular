export interface CycleTime {
    date: string,
    shift: string,
    workOrderNo: string,
    partNumber: string,
    partdesc: string,
    operationName: string,
    operationNo: string,
    assetName: string,
    lineName: string,
    standardCycTime: string,
    actualCycTime: string
}

export interface CycleTimes {
    data: CycleTime[]
}