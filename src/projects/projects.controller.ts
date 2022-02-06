import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectDto } from './dto/project.dto';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';

@Controller('projects')
export class ProjectsController {
   constructor(private readonly projectService: ProjectsService) { }

   @Post()
   createProject(@Body() projectDto: ProjectDto): Promise<Project> {
      return this.projectService.create(projectDto)
   }

   @Put(':id')
   updateProject(@Param('id') id: string, @Body() projectDto: ProjectDto): Promise<Project> {
      return this.projectService.update(id, projectDto)
   }

   @Get()
   findProjects():Promise<Project[]> {
      return this.projectService.findAll()
   }

}
