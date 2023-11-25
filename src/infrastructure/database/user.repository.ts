// src/infrastructure/database/user.repository.ts
import { UserEntity } from '../../domain/entities/user.entity';
import {UserRepository} from "../../domain/interfaces/user.repository";

export class UserInfrastructureRepository implements UserRepository {
    async getUser(): Promise<UserEntity> {
        // Ici, vous pouvez implémenter la logique pour récupérer les données de l'utilisateur depuis la base de données.
        return new UserEntity(1, 'John Doe');
    }
}
