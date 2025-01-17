import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) // don't need it because of the transformOptions.enableImplicitConversion
  limit: number;

  @IsOptional()
  @IsPositive()
  //   @Type(() => Number)
  offset: number;
}
