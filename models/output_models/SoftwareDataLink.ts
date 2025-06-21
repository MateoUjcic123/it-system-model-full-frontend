import { IDN, DataTypeID } from './types';

export interface SoftwareDataLink {
  [softwareIDN: IDN]: DataTypeID[];
}
