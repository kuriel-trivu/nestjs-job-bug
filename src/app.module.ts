import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ScheduleModule } from "@nestjs/schedule";
import { TasksService } from "./task.service";
import { ReqService } from "./req.service";

@Module({
  imports: [
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TasksService,
    ReqService,
  ]
})
export class AppModule {
}
