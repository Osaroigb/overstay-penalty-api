import { RoomRate } from '../models/RoomRate';
import { BaseRepository } from './BaseRepository';

export class RoomRateRepo extends BaseRepository<RoomRate> {
  roomrate: RoomRate;

  constructor() {
    super(RoomRate);
  }
}
