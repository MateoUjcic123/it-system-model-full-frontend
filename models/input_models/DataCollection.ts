import {
  DataType,
  DataPersonMode,
  DataServiceMode,
  DataSoftwareMode,
  GroupID,
  IDN,
  ServiceID
} from './types';

export class DataCollection {
  data_type: DataType;
  database_stored: boolean;
  idn: IDN;
  person_mode: DataPersonMode;
  protection_level: number;
  service_mode: DataServiceMode;
  services: ServiceID[];
  software_mode: DataSoftwareMode;
  supported_people_groups: GroupID[];

  constructor(data: any) {
    this.data_type = data.data_type;
    this.database_stored = data.database_stored;
    this.idn = data.idn;
    this.person_mode = data.person_mode;
    this.protection_level = data.protection_level;
    this.service_mode = data.service_mode;
    this.services = data.services;
    this.software_mode = data.software_mode;
    this.supported_people_groups = data.supported_people_groups;
  }
}
