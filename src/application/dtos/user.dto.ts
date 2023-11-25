// src/application/dtos/user.dto.ts
import { UserEntity } from '../../domain/entities/user.entity';

export class UserDto {
    id: number;
    name: string;

    constructor(user: UserEntity) {
        this.id = user.id;
        this.name = user.name;
    }
}
