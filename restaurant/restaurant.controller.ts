import { Request, Response } from "express";
import RestaurantService from "./restaurant.service";

const restaurantService = new RestaurantService()

export const ADD_NEW_RESTAURANT = (req:Request, res: Response) => {
    try{

    const {name, michellinRating} = req.body
    const data = restaurantService.createNewRestaurant({
        name,
        michellinRating
    })
    return res.status(201).send({
        data,
        status: "success",
        message: "New restaurant added successfully"
    })
    }catch(err){
        console.log(err)
        return res.status(500).send({
            data: undefined,
            status: "error",
            message: "Error occurred while creating new Restaurant"
        })
    }

}