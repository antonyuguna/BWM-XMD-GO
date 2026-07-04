import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { LiveRequestsService } from './live-requests.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class LiveRequestsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly liveRequestsService: LiveRequestsService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('operator_join')
  handleOperatorJoin(
    @MessageBody() data: { operatorId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.join(`operator_${data.operatorId}`);
    return { event: 'joined', data: `operator_${data.operatorId}` };
  }

  @SubscribeMessage('accept_request')
  handleAcceptRequest(
    @MessageBody() data: { requestId: string; operatorId: string },
    @ConnectedSocket() client: Socket,
  ) {
    // Process acceptance
    this.server
      .to(`request_${data.requestId}`)
      .emit('request_accepted', { operatorId: data.operatorId });
    return { event: 'request_accepted', status: 'success' };
  }

  // Called by other services to emit new requests to operators
  emitNewRequest(operatorIds: string[], requestData: any) {
    if (!operatorIds || operatorIds.length === 0) {
      return;
    }
    const rooms = operatorIds.map((id) => `operator_${id}`);
    this.server.to(rooms).emit('request_created', requestData);
  }
}
