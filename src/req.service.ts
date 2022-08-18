import { Injectable, Logger, Scope } from "@nestjs/common";

@Injectable({
  scope: Scope.REQUEST
})
export class ReqService {
  private readonly logger = new Logger(ReqService.name);
  
  aTask() {
    this.logger.debug("Called when the current second is 45");
  }
}
