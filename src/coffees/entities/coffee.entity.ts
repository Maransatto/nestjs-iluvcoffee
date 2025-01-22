import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema() //(automatically renamed to coffees)
export class Coffee extends Document {
  // id: number;
  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop({ default: 0 })
  recommendations: number;

  @Prop([String])
  flavors: string[];
}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee);
