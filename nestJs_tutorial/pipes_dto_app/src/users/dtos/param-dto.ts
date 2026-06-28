import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class ParamDto {
  @IsInt()
  @Type(() => Number)
  id: number;
}
