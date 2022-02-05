import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type ProjectDocument = Project & Document

@Schema()
export class Project {
   @Prop({ required: true })
   name: String;

   @Prop({ required: true })
   description: String;

   @Prop({ required: true })
   image: String;

   @Prop()
   gitUrl: String;

   @Prop()
   siteUrl: String;
}

export const ProjectSchema = SchemaFactory.createForClass(Project)
