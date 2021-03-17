import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1615924965682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                }, 
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'institution_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageInstitution',
                    columnNames: ['institution_id'],
                    referencedTableName: 'institutions',
                    referencedColumnNames: ['id'],
                    //when the institution id changes all the relashionships like pictures will be maintained when using CASCADE 
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }
       
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
