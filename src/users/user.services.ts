import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update.user.dto';
import { User } from './schemas/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.userRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async createUser(email: string, age: number): Promise<User> {
    return this.userRepository.createUser({
      userId: uuidv4(),
      email,
      age,
      favoriteFoods: [],
    });
  }

  async userUpdate(
    userId: string,
    userUpdates: UpdateUserDto,
  ): Promise<User> {
    return this.userRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
