export type IDN = string;
export type GroupID = string;
export type ServiceID = string;
export type DataType = string;

export enum DataPersonMode {
  PerPerson = "DataPersonMode.PerPerson",
  PerGroup = "DataPersonMode.PerGroup",
  PerOrganization = "DataPersonMode.PerOrganization",
}

export enum DataServiceMode {
  PerService = "DataServiceMode.PerService",
  PerOrganization = "DataServiceMode.PerOrganization",
}

export enum DataSoftwareMode {
  PerDatabase = "DataSoftwareMode.PerDatabase",
  PerServer = "DataSoftwareMode.PerServer",
  PerOrganization = "DataSoftwareMode.PerOrganization",
}

export enum NetworkPolicyType {
  RequireDistinctNetworksForSets = "RequireDistinctNetworksForSets",
  RequireSameNetworksForSets = "RequireSameNetworksForSets",
  LimitAllowedProtectionLevelRange = "LimitAllowedProtectionLevelRange"
}
