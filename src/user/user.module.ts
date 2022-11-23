import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserController } from './controller/user.controller';
import { UserSchema } from './models/user.model';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';
import { UserRepository } from './repositories/user.repository';
import { AuthController } from './controller/auth.controller';
import { JwtStrategy } from './strategy/user.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRETKEY'),
        signOptions: {
          expiresIn: configService.get('EXPIRESIN'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, UserRepository, JwtStrategy],
})
export class UserModule {}
