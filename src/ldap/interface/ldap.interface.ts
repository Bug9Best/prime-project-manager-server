export interface LdapUser {
  dn: string; // Domain

  mail: string;
  uid: string;
  givenName: string;
  sn: string;
  objectClass: string[];
  cn: string;
  employeeType?: string;

  o?: string;
}
