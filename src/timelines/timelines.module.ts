import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Timeline, TimelineSchema } from './schemas/timelines.schema';
import { TimelinesController } from './timelines.controller';
import { TimelinesService } from './timelines.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:Timeline.name, schema:TimelineSchema}
    ])
  ],
  controllers: [TimelinesController],
  providers: [TimelinesService]
})
export class TimelinesModule {}
