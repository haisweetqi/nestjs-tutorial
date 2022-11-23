import { Schema, Document } from 'mongoose';

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    // create_at : {type: Date , required: true, default: Date.now()},
  },
  {
    timestamps: true,
    // timestamps :{
    //     createAt : 'create_at',
    //     updateAt : 'update_at',
    // }
    collection: 'users',
  },
);

export { UserSchema };

export interface User extends Document {
  name: string;
  email: string;
  password: string;
}
