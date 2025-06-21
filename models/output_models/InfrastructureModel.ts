import { IDN, CredentialID, DataTypeID, NetworkSegmentID, Timestamp, DurationString } from './types';
import { Computer } from './Computer';
import { Credential } from './Credential';
import { DataModel } from './DataModel';
import { FirewallRule } from './FirewallRule';

export interface InfrastructureModel {
  computers: { [idn: IDN]: Computer };
  created: Timestamp;
  credentials: { [credID: CredentialID]: Credential };
  data: { [key: string]: DataModel };
  duration: DurationString;
  firewall_rules: { [key: string]: FirewallRule };
  network_segments: { [segment: NetworkSegmentID]: IDN[] };
  total_employee_count: number;
  version: string;
}
