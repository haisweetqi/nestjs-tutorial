import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ExceptionLoggerFilter } from './util/exceptionLogger.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new ExceptionLoggerFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
