import { Request, Response } from "express"
import { OrderSchema } from "./dto/create-order.dto"
import { validateOrReject } from "class-validator"
import OrderService from "./order.service"

const orderService = new OrderService()

export const ADD_NEW_ORDER = async (req: Request, res: Response) => {
    try{
        const newOrder = new OrderSchema()
        newOrder.items = req.body.items
        newOrder.totalPrice = req.body.totalPrice
        newOrder.restaurantId = req.body.restaurantId
        await validateOrReject(newOrder)
        const data = orderService.createNewOrder({
            ...newOrder
        })
    return res.status(201).send({
        data,
        status: "success",
        message: "New Order added successfully"
    })
    }catch(err){
        return res.status(400).send({
            data: err,
            status: "error",
            message: "Error occurred while creating new Order"
        })
    }
}