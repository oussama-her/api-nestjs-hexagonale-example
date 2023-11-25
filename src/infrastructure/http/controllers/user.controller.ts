// src/infrastructure/http/controllers/user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../../application/services/user.service';
import { UserDto } from '../../../application/dtos/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUser(): Promise<UserDto> {
        return this.userService.getUser();
    }
}
