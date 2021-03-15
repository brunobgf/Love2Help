import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
//this OneToMany refers to one orphanage to many images

@Entity('institutions')
export default class Institution {
    @PrimaryGeneratedColumn('increment')
    id: number; 

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string; 

    @Column()
    opening_hours: string; 

    @Column()
    opening_on_weekends: boolean; 


}


