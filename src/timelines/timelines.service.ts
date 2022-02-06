import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimelineDto } from './dto/timeline.dto';
import { Timeline, TimelineDocument } from './schemas/timelines.schema';

@Injectable()
export class TimelinesService {
   constructor(
      @InjectModel(Timeline.name) private timelineModel: Model<TimelineDocument>
   ) { }

   async create(timelineDto: TimelineDto | TimelineDto[]): Promise<Timeline | Timeline[]> {
      if (timelineDto instanceof Array) {
         let result: Array<Timeline> = [];
         for (let timeline of timelineDto) {
            const createTimeline = new this.timelineModel(timeline)
            const createResult = await createTimeline.save()
            result.push(createResult)
         }
         return result
      } else {
         const createTimeline = new this.timelineModel(timelineDto)
         return createTimeline.save()
      }
   }

   async findAll(): Promise<Timeline[]> {
      const result = await this.timelineModel.find().exec()
      if (result.length > 1) {
         result.sort((a: Timeline, b: Timeline) => a.order - b.order)
         return result
      } else {
         return result
      }

   }

   async update(id: string, timelineDto: TimelineDto): Promise<Timeline> {
      return await this.timelineModel.findByIdAndUpdate(id, timelineDto)
   }

   async delete(id: string): Promise<Timeline> {
      return await this.timelineModel.findOneAndDelete({ _id: id })
   }

}
