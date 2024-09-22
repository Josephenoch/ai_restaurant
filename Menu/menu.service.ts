// holds all the database queries and extra code useful for theis route

import prisma from "../config/prisma.config"

type CreateNewMenuItemPropsType = {
    name: string,
    price: number,
    calories: number,
    description: string,
    restaurantId: string,
    ingredients: string[],
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


    public async getRestaurantMenu(restaurantId: string) {
        return await prisma.menuItem.findMany({
           where: {
            restaurantId
           }
        })
    }

}