import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TimelineDocument = Timeline & Document

@Schema()
export class Timeline {
   @Prop()
   title: string;
   @Prop()
   date: string;
   @Prop()
   status: string;
   @Prop()
   detail: string;
   @Prop()
   order: number;
}

export const TimelineSchema = SchemaFactory.createForClass(Timeline)