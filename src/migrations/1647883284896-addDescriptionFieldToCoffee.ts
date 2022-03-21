import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDescriptionFieldToCoffee1647883284896 implements MigrationInterface {
	name = 'addDescriptionFieldToCoffee1647883284896';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "coffees" ADD "description" character varying`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "coffees" DROP COLUMN "description"`);
	}
}
