// src/infrastructure/http/app.module.ts
import {Module} from '@nestjs/common';
import {UserController} from './controllers/user.controller';
import {UserService} from '../../application/services/user.service';
import {UserInfrastructureRepository} from '../database/user.repository';

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        {
            provide: 'UserRepository',
            useClass: UserInfrastructureRepository,
        },
    ],
})
export class AppModule {}
