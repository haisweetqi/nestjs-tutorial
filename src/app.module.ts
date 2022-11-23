import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { ExceptionLoggerFilter } from './util/exceptionLogger.filter';

@Module({
  imports: [
    PostModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    UserModule,
  ],
  controllers: [],
  providers: [
    // { provide: APP_FILTER, useClass: ExceptionLoggerFilter }
  ],
})
export class AppModule {}
