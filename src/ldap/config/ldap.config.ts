export const ldapConfig = {
  url: 'ldap://10.252.92.100',
  searchBase: 'DC=kmitl,DC=ac,DC=th',
  searchFilter: '(mail={{username}})',
  reconnect: false,
  timeout: 5000,
  connectTimeout: 3000,
};
