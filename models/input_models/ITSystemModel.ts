import { DataCollection } from './DataCollection';
import { EmployeeGroups } from './EmployeeGroups';
import { NetworkPolicy } from './NetworkPolicy';
import { ServiceID } from './types';

export class ITSystemModel {
  data_collections: DataCollection[];
  employee_groups: EmployeeGroups;
  network_policies: NetworkPolicy[];
  provided_external_services: ServiceID[];

  constructor(data: any) {
    this.data_collections = data.data_collections.map((dc: any) => new DataCollection(dc));
    this.employee_groups = data.employee_groups;
    this.network_policies = data.network_policies.map((np: any) => new NetworkPolicy(np));
    this.provided_external_services = data.provided_external_services;
  }
}
