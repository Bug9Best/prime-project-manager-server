import { LdapUser } from '@/ldap/interface/ldap.interface';
import { HttpException, Injectable } from '@nestjs/common';
import * as LdapAuth from 'ldapauth-fork';
import { LdapSignInDto } from './dto/ldap-sign-in.dto';
import { ldapConfig } from './config/ldap.config';

@Injectable()
export class LdapService {
  async loginWithLDAP(data: LdapSignInDto): Promise<LdapUser> {
    const ldapAuth = new LdapAuth(ldapConfig);

    try {
      const ldapUser = await new Promise<LdapUser>((resolve, reject) => {
        try {
          ldapAuth.on('error', (err) => {
            reject(err); // Change this to your own Error type.
          });

          ldapAuth.authenticate(data.email, data.password, (err, User) => {
            if (err) reject(err);
            resolve(User);
          });
        } catch (e) {
          reject(e);
        }
      });

      return ldapUser;
    } catch (e) {
      throw new HttpException(e.message || e, 500);
    } finally {
      ldapAuth.close();
    }
  }
}
