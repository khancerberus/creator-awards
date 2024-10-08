import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize'
import { sequelize } from '../libs/sequelize';

export class TwitchUserModel extends Model<
    InferAttributes<TwitchUserModel>,
    InferCreationAttributes<TwitchUserModel>
> {
    declare id: CreationOptional<string>
    declare email: string
}

TwitchUserModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: 'TWITCH_USER'
})
