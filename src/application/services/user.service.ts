// src/application/services/user.service.ts
import {Inject, Injectable} from '@nestjs/common';
import {UserRepository} from '../../domain/interfaces/user.repository';
import {UserDto} from '../dtos/user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('UserRepository')
        private userRepository: UserRepository,
    ) {}

    async getUser(): Promise<UserDto> {
        const user = await this.userRepository.getUser();
        return new UserDto(user);
    }
}
