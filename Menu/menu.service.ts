// holds all the database queries and extra code useful for theis route

import prisma from "../config/prisma.config"
import { kebabCase } from 'lodash';  

type CreateNewMenuItemPropsType = {
    name: string,
    price: number,
    calories: number,
    description: string,
    restaurantId: string,
    ingredients: string[],
}

prisma.$use(async (params, next) => {
    if (params.model === "Restaurant" && params.action === 'create') {
      const name = params.args.data.title;
      let slug = kebabCase(name);  // Converts name to slug (e.g., 'My New Entry' -> 'my-new-entry')
  
      // Ensure the slug is unique
      let uniqueSlug = slug;
      let count = 1;
  
      while (true) {
        const existingEntry = await prisma.restaurant.findUnique({
          where: { slug: uniqueSlug },
        });
  
        if (!existingEntry) break;
  
        uniqueSlug = `${slug}-${count}`;
        count++;
      }
  
      // Assign the unique slug
      params.args.data.slug = uniqueSlug;
    }
  
    return next(params);
  });

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


    public async getRestaurantMenu(slug: string) {
        return await prisma.menuItem.findMany({
           where: {
            restaurant: {
                slug
            }
           }
        })
    }

}