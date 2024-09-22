import { kebabCase } from "lodash";
import prisma from "../config/prisma.config";

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


type CreateNewRestaurantPropsType = {
    name: string
    michellinRating?: string
}

export default class RestaurantService {
    public async createNewRestaurant({
        name,
        michellinRating
    }: CreateNewRestaurantPropsType){
        return prisma.restaurant.create({
            data: {
                name,
                michellinRating,
                slug: "",
            }
        })
    }
}