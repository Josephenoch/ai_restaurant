// holds all the database queries and extra code useful for theis route

import { MenuItem, Prisma } from '@prisma/client';
import prisma from '../config/prisma.config';

type CreateNewMenuItemPropsType = {
    name: string,
    price: number,
    calories: number,
    description: string,
    restaurantId: string,
    ingredients: string,
}



export default class MenuService {

    public async createNewMenuItem(props: CreateNewMenuItemPropsType) {
        return await prisma.menuItem.create({
            data: {
                name: props.name,
                price: props.price,
                calories: props.calories,
                description: props.description,
                ingredients: props.ingredients,
                restaurantId: props.restaurantId
            }
        })
    }


    public async getRestaurantMenu(identifier: string) {

        // uses the id or slug to search the db
        const results =  await prisma.menuItem.findMany({
            where: {
                id: identifier
            }
        })
       
        // if there is data with that identifier, return it
        if(results[0]) return results
        // if not search the db using the restuarant slug
        return await prisma.menuItem.findMany({
           where: {
            restaurant: {
                slug: identifier
            }
           }
        })
    }

}