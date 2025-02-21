export interface MatrixValue {
  title?: string;
  headerStyle?: any;
  value?: string;
  valueStyle?: any;
}

export interface MatrixModel {
  id: string;
  name: string;
  head?: string;
  uniqueName: string;
  items: MatrixValue[];
}

