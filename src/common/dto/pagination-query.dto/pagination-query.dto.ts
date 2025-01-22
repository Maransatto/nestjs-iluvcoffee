import { IsOptional, IsPositive } from 'class-validator';

// no longer need the @Type in there for I've set the following attribute on main.ts ValidationPipe:
// transformOptions: {
//     enableImplicitConversion: true,
// },

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  //   @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsPositive()
  //   @Type(() => Number)
  offset: number;
}
