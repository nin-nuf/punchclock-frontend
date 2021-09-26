import {Category} from './category'

export interface Entry {
 id: number;
 checkIn: Date;
 checkOut: Date;
 category: Category;
}

