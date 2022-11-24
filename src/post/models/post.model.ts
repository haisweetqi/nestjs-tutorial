import { Schema, Document } from 'mongoose';
import { User, UserSchema } from 'src/user/models/user.model';
import { Category } from './category.model';

const PostSchema = new Schema(
  {
    title: String,
    description: String,
    content: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    // create_at : {type: Date , required: true, default: Date.now()},
  },
  {
    timestamps: true,
    // timestamps :{
    //     createAt : 'create_at',
    //     updateAt : 'update_at',
    // }
    collection: 'posts',
  },
);

UserSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

export { PostSchema };

export interface Post extends Document {
  title: string;
  description: string;
  content: string;
  user: User;
  categories: [Category];
}
