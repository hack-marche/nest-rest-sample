import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * 登録
   * @param createUserDto
   * @returns
   */
  async create(createUserDto: CreateUserDto): Promise<{ message: string }> {
    await this.userRepository
      .save({
        name: createUserDto.name,
      })
      .catch((e) => {
        throw new InternalServerErrorException(
          `[${e.message}]アカウントの登録に失敗しました。`,
        );
      });
    return { message: 'アカウントの登録に成功しました' };
  }

  /**
   * 一覧
   * @returns
   */
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /**
   * 詳細
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<User> {
    if (!id) throw new NotFoundException('IDが指定されていません');
    return await this.userRepository.findOne(id);
  }

  /**
   * 更新
   * @param id
   * @param updateUserDto
   * @returns
   */
  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<{ message: string }> {
    if (!id) throw new NotFoundException('IDが指定されていません');

    await this.userRepository
      .update(id, {
        name: updateUserDto.name,
      })
      .catch((e) => {
        throw new InternalServerErrorException(
          `[${e.message}]アカウントID「${id}」の更新に失敗しました。`,
        );
      });
    return { message: `アカウントID「${id}」の更新に成功しました。` };
  }

  /**
   * 削除
   * @param id
   * @returns
   */
  async remove(id: number): Promise<{ message: string }> {
    if (!id) throw new NotFoundException('IDが指定されていません');

    await this.userRepository.delete(id).catch((e) => {
      throw new InternalServerErrorException(
        `[${e.message}]アカウントID「${id}」の削除に失敗しました。`,
      );
    });
    return { message: `アカウントID「${id}」の削除に成功しました。` };
  }
}
