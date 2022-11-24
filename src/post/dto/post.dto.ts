import { IsNotEmpty } from 'class-validator';
export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  content: string;
  user: any;
  categories: [string];
}

export class UpdatePostDto {
  @IsNotEmpty()
  id: number;
  content: string;
  title: string;
}
