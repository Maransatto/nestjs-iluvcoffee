import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1737122641981 implements MigrationInterface {
  name = 'SchemaSync1737122641981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffees" ADD "description" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "coffees" ADD "recommendations" integer NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffees" DROP COLUMN "recommendations"`,
    );
    await queryRunner.query(`ALTER TABLE "coffees" DROP COLUMN "description"`);
  }
}
