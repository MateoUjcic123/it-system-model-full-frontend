import { NetworkPolicyType } from './types';

export class NetworkPolicy {
  policy_type: NetworkPolicyType;
  is_optional: boolean;
  objectsA_selector?: string;
  objectsB_selector?: string;
  allowed_protection_level_range?: number;

  constructor(data: any) {
    this.policy_type = data.policy_type;
    this.is_optional = data.is_optional;
    this.objectsA_selector = data.objectsA_selector;
    this.objectsB_selector = data.objectsB_selector;
    this.allowed_protection_level_range = data.allowed_protection_level_range;
  }
}
