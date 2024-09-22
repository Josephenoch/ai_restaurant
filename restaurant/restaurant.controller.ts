import { NextFunction, Request, Response, } from "express";
import RestaurantService from "./restaurant.service";
import { validate, validateOrReject, ValidationError } from "class-validator";
import { RestaurantSchema } from "./dto/create-restaurant.dto";

const restaurantService = new RestaurantService()

export const ADD_NEW_RESTAURANT = async (req:Request, res: Response) => {
    try{
    const newRestaurant = new RestaurantSchema()
    newRestaurant.name = req.body.name
    newRestaurant.michellinRating = req.body.michellinRating
    await validateOrReject(newRestaurant)
    const data = restaurantService.createNewRestaurant({
        ...newRestaurant
    })
    return res.status(201).send({
        data,
        status: "success",
        message: "New restaurant added successfully"
    })
    }catch(err){
        return res.status(500).send({
            data: err,
            status: "error",
            message: "Error occurred while creating new Restaurant"
        })
    }

}