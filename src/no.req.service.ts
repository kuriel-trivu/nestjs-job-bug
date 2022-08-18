import { Injectable, Logger, Scope } from "@nestjs/common";

@Injectable({
  scope: Scope.REQUEST
})
export class NoReqService {
  private readonly logger = new Logger(NoReqService.name);
  
  aTask() {
    this.logger.debug("Called when the current second is 45");
  }
}
