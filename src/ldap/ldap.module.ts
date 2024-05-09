import { Module } from '@nestjs/common';
import { LdapService } from './ldap.service';
import { LdapController } from './ldap.controller';

@Module({
  providers: [LdapService],
  exports: [LdapService],
  controllers: [LdapController],
})
export class LdapModule {}
