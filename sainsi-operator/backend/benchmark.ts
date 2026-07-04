import { DestinationService } from './src/destination/destination.service';
import { Types } from 'mongoose';

// Mock Models
class MockExperienceModel {
  find() {
    return this;
  }
  distinct() {
    return this;
  }
  async exec() {
    // Return 10000 object IDs
    return Array.from({ length: 10000 }).map(() => new Types.ObjectId());
  }
}

class MockOperatorModel {
  find() {
    return this;
  }
  async exec() {
    // Return 10000 large operator objects
    return Array.from({ length: 10000 }).map(() => ({
      _id: new Types.ObjectId(),
      name: 'Test Operator'.repeat(10),
      description: 'Long description '.repeat(50),
      rating: 4.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }
}

class MockReviewModel {
  find() {
    return this;
  }
  populate() {
    return this;
  }
  async exec() {
    return [];
  }
}

async function runBenchmark() {
  const service = new DestinationService(
    {} as any,
    new MockExperienceModel() as any,
    {} as any,
    {} as any,
    {} as any,
    new MockOperatorModel() as any,
    new MockReviewModel() as any,
  );

  const start = performance.now();
  for (let i = 0; i < 100; i++) {
    await service.getReviews('test-destination-id');
  }
  const end = performance.now();

  console.log(`Time taken: ${(end - start).toFixed(2)}ms`);
}

runBenchmark().catch(console.error);
