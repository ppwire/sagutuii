import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TimelineDto } from './dto/timeline.dto';
import { Timeline } from './schemas/timelines.schema';
import { TimelinesService } from './timelines.service';

@Controller('timelines')
export class TimelinesController {
   constructor(private readonly timelineService: TimelinesService){}

   @Post()
   createTimeline(@Body() timelineDto:TimelineDto | TimelineDto[]):Promise<Timeline | Timeline []>{
      return this.timelineService.create(timelineDto)
   }

   @Get()
   findTimelines():Promise<Timeline[]>{
      return this.timelineService.findAll()
   }

   @Put(':id')
   updateTimeline(@Param('id') id: string,@Body() timelineDto:TimelineDto):Promise<Timeline>{
      return this.timelineService.update(id,timelineDto)
   }

   @Delete(':id')
   deleteTimeline(@Param('id') id: string):Promise<Timeline>{
      return this.timelineService.delete(id)
   }
}
