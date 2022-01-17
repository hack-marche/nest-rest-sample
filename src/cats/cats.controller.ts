import {
  Controller,
  Get,
  Header,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @Header('Cache-Control', 'none')
  findAll(@Res() res: Response) {
    // return `This action returns all cats: ${res.status}`;
    res.status(HttpStatus.OK).send();
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat, `;
  }
}
