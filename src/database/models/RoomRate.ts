import { sequelize } from '../sequelize';
import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';

export type RoomRateAttributes = InferAttributes<RoomRate>;
export type RoomRateCreationAttributes = InferCreationAttributes<RoomRate>;

class RoomRate extends Model<RoomRateAttributes, RoomRateCreationAttributes> {
  declare Room_type: "regular" | "deluxe" | "palatial";

  declare Weekday_rates_increase: string;

  declare Weekend_rates_increase: string;
}

RoomRate.init(
  {
    Room_type: {
      type: DataTypes.ENUM("regular", "deluxe", "palatial"),
      allowNull: false
    },
    Weekday_rates_increase: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Weekend_rates_increase: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  },
  {
    tableName: 'roomrates',
    sequelize
  }
);

export { RoomRate };
