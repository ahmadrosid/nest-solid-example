import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { GitRepositoryService } from 'src/shared/git/git-repository.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly gitRepositoryService: GitRepositoryService
  ) {}

  @Post("register")
  register(@Body() createUserDto: CreateUserDto) {
      return this.usersService.create(createUserDto)
  }

  @Patch("/profile")
  update(@Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(updateUserDto)
  }

  @Get("/avatar")
  getAvatar() {
    return this.gitRepositoryService.getAvatar("ahmadrosid")
  }
}
