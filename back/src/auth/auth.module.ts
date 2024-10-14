import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { UserService } from 'src/user/user.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports:[ConfigModule,JwtModule.register({}),UserModule,MailerModule.forRootAsync({
    useFactory: () => ({
      transport: {
        host:"sandbox.smtp.mailtrap.io",
        port:25,
        auth:{
          user:"421ae3970f7386",
          pass:"4d0a1b12447976",

        },
        defaults:{
          from:'nourimen0133@gmail.com',
        },

  }})
}),],
  controllers: [AuthController],
  providers: [AuthService,AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
