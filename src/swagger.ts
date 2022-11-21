import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle(process.env.TITLE_SWAGGER)
  .setDescription(process.env.DESCRIPTION_SWAGGER)
  .setVersion(process.env.VERSION_SWAGGER)
  .build();
