import { IsNotEmpty, IsString } from 'class-validator';
export class LdapSignInDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
