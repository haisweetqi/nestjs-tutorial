import { Module } from '@nestjs/common';
import { PostController } from './controller/post.controller';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './models/post.model';
import { PostRepository } from './repositories/post.repository';
import { CategoryController } from './controller/category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './repositories/category.repository';
import { CategorySchema } from './models/category.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Post',
        schema: PostSchema,
      },
      {
        name: 'Category',
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [PostController, CategoryController],
  providers: [PostService, PostRepository, CategoryService, CategoryRepository],
})
export class PostModule {}
