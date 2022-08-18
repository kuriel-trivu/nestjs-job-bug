import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { NoReqService } from "./no.req.service";

@Injectable()
export class TasksService {
  
  constructor(
    private readonly noReqService: NoReqService
  ) {
  }
  
  @Cron("45 * * * * *")
  handleCron() {
    this.noReqService.aTask();
  }
}
