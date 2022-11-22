import { Schema, Document } from 'mongoose';

const PostSchema = new Schema(
  {
    title: String,
    description: String,
    content: String,
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

export { PostSchema };

export interface Post extends Document {
  title: string;
  description: string;
  content: string;
}
