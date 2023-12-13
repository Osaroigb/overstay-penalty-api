import {
  Model,
  CreateOptions,
  ModelStatic,
  FindOrCreateOptions,
  FindOptions,
  FindAndCountOptions,
  CreationAttributes,
  UpdateOptions,
  DestroyOptions,
  CountOptions,
  UpsertOptions,
  Attributes
} from 'sequelize';
  
export abstract class BaseRepository<M extends Model> {
  constructor(protected model: ModelStatic<any>) {
    this.model = model;
  }
  
  async create(payload: CreationAttributes<Model<CreationAttributes<M>>>, options?: CreateOptions<Attributes<M>>): Promise<Attributes<M>> {
    const result = await this.model.create(payload, options);
  
    return <Attributes<M>>result.toJSON();
  }
  
  async findOrCreate(payload: FindOrCreateOptions): Promise<{ row: Attributes<M>; created: boolean }> {
    const [data, created] = await this.model.findOrCreate(payload);
  
    return { row: <Attributes<M>>data.toJSON(), created };
  }
  
  async findByPk(id: number, options?: FindOptions<Attributes<M>>): Promise<Attributes<M> | null | undefined> {
    const result = await this.model.findByPk(id, options);
  
    return <Attributes<M>>result?.toJSON();
  }
  
  async findOne(payload: FindOptions<Attributes<M>>): Promise<Attributes<M> | undefined> {
    const result = await this.model.findOne(payload);
  
    return <Attributes<M>>result?.toJSON();
  }
  
  async findAll(payload?: FindOptions<Attributes<M>>): Promise<Model<Attributes<M>>[]> {
    const result = await this.model.findAll(payload);
  
    return result;
  }
  
  async findAndCountAll(payload?: FindAndCountOptions<Attributes<M>>): Promise<{ count: number; rows: Attributes<M>[] }> {
    const { count, rows } = await this.model.findAndCountAll(payload);
  
    return { count, rows: rows as unknown as Attributes<M>[] };
  }
  
  async update(payload: Partial<Attributes<M>>, options: UpdateOptions<Attributes<M>>): Promise<number> {
    const [updatedRowCounts] = await this.model.update(payload, options);
  
    return updatedRowCounts;
  }
  
  async destroy(options: DestroyOptions<Attributes<M>>): Promise<number> {
    const result = await this.model.destroy(options);
  
    return result;
  }
  
  async upset(
    payload: CreationAttributes<Model<CreationAttributes<M>>>,
    options: UpsertOptions<Attributes<M>>
  ): Promise<{ row: Attributes<M>; created: boolean | null }> {
    const [result, created] = await this.model.upsert(payload, options);
  
    return {
      row: <Attributes<M>>result?.toJSON(),
      created
    };
  }
  
  async count(options?: CountOptions<Attributes<M>>): Promise<number> {
    const result = await this.model.count(options);
    return result;
  }
}
 
export const Reservations = [
  {
    "reservation_id": 12000,
    "Room_type": "deluxe",
    "Customer_id": 12323,
    "Hourly-Rate": 230000,
    "status": "paid",
    "Expected_checkin_time": "2020-12-12 12:00",
    "expected_checkout_time": "2021-01-01 11:00"
  },
  {
    "reservation_id": 12001,
    "Room_type": "regular",
    "Customer_id": 12324,
    "Hourly-Rate": 150000,
    "status": "paid",
    "Expected_checkin_time": "2020-12-12 12:00",
    "expected_checkout_time": "2021-01-01 11:00"
  },
  {
    "reservation_id": 12002,
    "Room_type": "palatial",
    "Customer_id": 12100,
    "Hourly-Rate": 560000,
    "status": "paid",
    "Expected_checkin_time": "2020-12-12 12:00",
    "expected_checkout_time": "2021-01-01 11:00"
  },
  {
    "reservation_id": 12003,
    "Room_type": "regular",
    "Customer_id": 12323,
    "Hourly-Rate": 200000,
    "status": "paid",
    "Expected_checkin_time": "2020-12-25 12:00",
    "expected_checkout_time": "2021-01-04 11:00"
  }
];

export const RoomRates = [
  {
    "Room_type": "regular",
    "Weekday_rates_increase": "7%",
    "Weekend_rates_increase": "10%"
  },
  {
    "Room type": "deluxe",
    "Weekday rates increase": "8.5%",
    "Weekend rates increase": "12%"
  },
  {
    "Room type": "palatial",
    "Weekday rates increase": "11%",
    "Weekend rates increase": "16%"
  }
];
