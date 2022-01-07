import { MaxLength } from 'class-validator';

export class CreateUserDto {
  @MaxLength(10, {
    message: 'アカウント名は10文字以内で入力してください',
  })
  name: string;
}
