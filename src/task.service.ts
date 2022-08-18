import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { ReqService } from "./req.service";

@Injectable()
export class TasksService {
  
  constructor(
    private readonly reqService: ReqService
  ) {
  }
  
  @Cron("45 * * * * *")
  handleCron() {
    this.reqService.aTask();
  }
}
