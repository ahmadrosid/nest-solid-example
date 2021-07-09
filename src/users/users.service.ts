import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    create(user: CreateUserDto) {
        return user
    }

    update(user: UpdateUserDto) {
        return user
    }
}
