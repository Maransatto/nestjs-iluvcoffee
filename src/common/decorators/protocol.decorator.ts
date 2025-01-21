import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Protocol = createParamDecorator(
  (defaultValue: string, ctx: ExecutionContext) => {
    if (defaultValue) {
      return defaultValue;
    }
    const request = ctx.switchToHttp().getRequest();
    return request.protocol;
  },
);
