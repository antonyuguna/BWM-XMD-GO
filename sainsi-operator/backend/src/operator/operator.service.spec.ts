import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { OperatorService } from './operator.service';
import { Operator } from '../schemas/operator.schema';

const mockOperator = {
  _id: '1',
  name: 'Test Operator',
  email: 'test@operator.com',
};

const mockModel = {
  find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockOperator]) }),
  findById: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockOperator) }),
  findByIdAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockOperator) }),
  findByIdAndDelete: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockOperator) }),
};

class MockOperatorModel {
  dto: any;
  constructor(dto: any) {
    this.dto = dto;
  }
  save = jest.fn().mockImplementation(() => Promise.resolve(this.dto));
}

Object.assign(MockOperatorModel, mockModel);

describe('OperatorService', () => {
  let service: OperatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OperatorService,
        {
          provide: getModelToken(Operator.name),
          useValue: MockOperatorModel,
        },
      ],
    }).compile();

    service = module.get<OperatorService>(OperatorService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create an operator', async () => {
      const createDto = { name: 'New Operator', email: 'new@operator.com' };
      const result = await service.create(createDto);
      expect(result).toEqual(createDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of operators', async () => {
      const result = await service.findAll();
      expect(MockOperatorModel.find).toHaveBeenCalled();
      expect(result).toEqual([mockOperator]);
    });
  });

  describe('findOne', () => {
    it('should return a single operator', async () => {
      const result = await service.findOne('1');
      expect(MockOperatorModel.findById).toHaveBeenCalledWith('1');
      expect(result).toEqual(mockOperator);
    });
  });

  describe('update', () => {
    it('should update an operator', async () => {
      const updateDto = { name: 'Updated Operator' };
      const result = await service.update('1', updateDto);
      expect(MockOperatorModel.findByIdAndUpdate).toHaveBeenCalledWith('1', updateDto, { new: true });
      expect(result).toEqual(mockOperator);
    });
  });

  describe('remove', () => {
    it('should remove an operator', async () => {
      const result = await service.remove('1');
      expect(MockOperatorModel.findByIdAndDelete).toHaveBeenCalledWith('1');
      expect(result).toEqual(mockOperator);
    });
  });
});
