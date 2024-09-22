import { Request, Response } from "express";
import MenuService from "./menu.service";

const menuService = new MenuService()

export const GET_RESTAURANT_MENU_BY_ID = async (req: Request, res: Response) => {
    // this would work for both the restaurant id and slug
    try{
        const id = req.params.id
        const menuItems = await menuService.getRestaurantMenu(id)
        if(!menuItems[0]){
            res.status(404).send({
                status: "err",
                data: undefined,
                message: "No restaurant menu found"
            })
        }
        res.status(200).send({
            data: menuItems,
            status: "success",
            message: "Restaurant fetched successfully"
        })
    }catch(err: any){
        res.status(500).send({
            err: err.message
        })
    }
    
}

