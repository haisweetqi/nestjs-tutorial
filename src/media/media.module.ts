import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from './models/media.model';
import { MediaService } from './media.service';
import { MediaRepository } from './repositories/media.repository';
import { MediaController } from './controller/media.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Media',
        schema: MediaSchema,
      },
    ]),
    ConfigModule,
  ],
  controllers: [MediaController],
  providers: [MediaService, MediaRepository],
})
export class MediaModule {}
