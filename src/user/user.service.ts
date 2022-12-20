import { users } from './user.data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUser() {
    return users;
  }

  getUserById(id: number) {
    return users.find((user) => user.id === id);
  }

  createUser(id: number, Name: string, Job: string, Salary: number) {
    if (users.length == 0) id = 0;
    else id = users[users.length - 1].id + 1;
    const user = {
      id,
      Name,
      Job,
      Salary,
    };
    users.push(user);
    return user;
  }
  deleteUser(id: number) {
    const idx = users.findIndex((user) => user.id === id);
    users.splice(idx, 1);
  }
  updateUser(Name: string, Job: string, Salary: number, id: number) {
    const idx = users.findIndex((user) => user.id == id);
    users[idx].Name = Name;
    users[idx].Job = Job;
    users[idx].Salary = Salary;
  }
}
