import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDto } from './dto/project.dto';
import { Project, ProjectDocument } from './schemas/project.schema';

@Injectable()
export class ProjectsService {

   constructor(
      @InjectModel(Project.name) private projectModel:Model<ProjectDocument>
   ){}

   async create(projectDto : ProjectDto):Promise<Project>{
      const createProject = new this.projectModel(projectDto)
      return createProject.save()
   }

   async findAll():Promise<Project[]>{
      return this.projectModel.find().exec()
   }

   async update(id:string,projectDto : ProjectDto):Promise<Project>{
      return this.projectModel.findByIdAndUpdate(id,projectDto)
   }
   
}
