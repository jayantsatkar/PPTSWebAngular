export interface BirthCertificate {
    srNo: string,
    workOrderNumber: string,
    partNumber: string,
    partDescription: string,
    partRevision: string,
    orderQuantity: string,
    completedQuantity: string,
    uom: string,
    lineName: string,
    plannedStartDate: string,
    plannedEndDate: string,
    actualStartDate: string,
    actualCompletionDate: string,
    status: string
}

export interface BirthCertificates {
    data: BirthCertificate[]
}