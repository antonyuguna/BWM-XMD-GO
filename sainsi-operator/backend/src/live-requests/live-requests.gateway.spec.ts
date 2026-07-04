import { Test, TestingModule } from '@nestjs/testing';
import { LiveRequestsGateway } from './live-requests.gateway';
import { LiveRequestsService } from './live-requests.service';
import { Server, Socket } from 'socket.io';

describe('LiveRequestsGateway', () => {
  let gateway: LiveRequestsGateway;
  let service: LiveRequestsService;

  const mockServer = {
    to: jest.fn().mockReturnThis(),
    emit: jest.fn(),
  };

  const mockSocket = {
    id: 'test-client-id',
    join: jest.fn(),
  } as unknown as Socket;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LiveRequestsGateway,
        {
          provide: LiveRequestsService,
          useValue: {
            matchRequestToOperators: jest.fn(),
          },
        },
      ],
    }).compile();

    gateway = module.get<LiveRequestsGateway>(LiveRequestsGateway);
    service = module.get<LiveRequestsService>(LiveRequestsService);

    // Assign the mock server to the gateway
    gateway.server = mockServer as unknown as Server;

    // Clear mocks before each test
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('handleConnection', () => {
    it('should log client connection', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      gateway.handleConnection(mockSocket);
      expect(consoleSpy).toHaveBeenCalledWith(`Client connected: ${mockSocket.id}`);
      consoleSpy.mockRestore();
    });
  });

  describe('handleDisconnect', () => {
    it('should log client disconnection', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      gateway.handleDisconnect(mockSocket);
      expect(consoleSpy).toHaveBeenCalledWith(`Client disconnected: ${mockSocket.id}`);
      consoleSpy.mockRestore();
    });
  });

  describe('handleOperatorJoin', () => {
    it('should join the operator room and return joined event', () => {
      const data = { operatorId: 'op123' };
      const result = gateway.handleOperatorJoin(data, mockSocket);

      expect(mockSocket.join).toHaveBeenCalledWith(`operator_${data.operatorId}`);
      expect(result).toEqual({ event: 'joined', data: `operator_${data.operatorId}` });
    });
  });

  describe('handleAcceptRequest', () => {
    it('should emit request_accepted to the request room and return success', () => {
      const data = { requestId: 'req456', operatorId: 'op123' };
      const result = gateway.handleAcceptRequest(data, mockSocket);

      expect(mockServer.to).toHaveBeenCalledWith(`request_${data.requestId}`);
      expect(mockServer.emit).toHaveBeenCalledWith('request_accepted', { operatorId: data.operatorId });
      expect(result).toEqual({ event: 'request_accepted', status: 'success' });
    });
  });

  describe('emitNewRequest', () => {
    it('should emit request_created to all provided operator IDs', () => {
      const operatorIds = ['op1', 'op2'];
      const requestData = { id: 'req789', details: 'test' };

      gateway.emitNewRequest(operatorIds, requestData);

      expect(mockServer.to).toHaveBeenCalledTimes(2);
      expect(mockServer.to).toHaveBeenNthCalledWith(1, 'operator_op1');
      expect(mockServer.to).toHaveBeenNthCalledWith(2, 'operator_op2');

      expect(mockServer.emit).toHaveBeenCalledTimes(2);
      expect(mockServer.emit).toHaveBeenNthCalledWith(1, 'request_created', requestData);
      expect(mockServer.emit).toHaveBeenNthCalledWith(2, 'request_created', requestData);
    });

    it('should not emit if operatorIds array is empty', () => {
      const operatorIds: string[] = [];
      const requestData = { id: 'req789', details: 'test' };

      gateway.emitNewRequest(operatorIds, requestData);

      expect(mockServer.to).not.toHaveBeenCalled();
      expect(mockServer.emit).not.toHaveBeenCalled();
    });
  });
});
