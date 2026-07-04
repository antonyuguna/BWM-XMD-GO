import { Module } from '@nestjs/common';
import { LiveRequestsGateway } from './live-requests.gateway';
import { LiveRequestsService } from './live-requests.service';

@Module({
  providers: [LiveRequestsGateway, LiveRequestsService],
  exports: [LiveRequestsService],
})
export class LiveRequestsModule {}
