import { HttpException, HttpStatus } from '@nestjs/common';

export class PostNotFoundException extends HttpException {
  constructor(postId: string) {
    super(`Post ${postId} not found`, HttpStatus.NOT_FOUND);
  }
}
