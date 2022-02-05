import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project, ProjectDocument } from './schemas/project.schema';

@Injectable()
export class ProjectsService {

   constructor(
      @InjectModel(Project.name) private projectModel:Model<ProjectDocument>
   ){}

   async create(createProjectDto : CreateProjectDto):Promise<Project>{
      const createProject = new this.projectModel(createProjectDto)
      return createProject.save()
   }

   async findAll():Promise<Project[]>{
      return this.projectModel.find().exec()
   }
   
}
