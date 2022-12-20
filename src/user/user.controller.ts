import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userservice: UserService) {}

  @Get()
  getAllUser() {
    return this.userservice.getAllUser();
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    return this.userservice.getUserById(id);
  }

  @Post()
  createUser(
    @Body('id') id: number,
    @Body('Name') Name: string,
    @Body('Job') Job: string,
    @Body('Salary') Salary: number,
  ): User {
    return this.userservice.createUser(id, Name, Job, Salary);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    this.userservice.deleteUser(id);
    return `user ${id} is deleted`;
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body('Name') Name: string,
    @Body('Job') Job: string,
    @Body('Salary') Salary: number,
  ) {
    return this.userservice.updateUser(Name, Job, Salary, id);
  }
}
