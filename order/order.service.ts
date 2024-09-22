import prisma from "../config/prisma.config"

type CreateNewOrderPropsType = {
    items: string,
    totalPrice: number,
    restaurantId: string
}

export default class OrderService {
    public async createNewOrder({
        items,
        totalPrice,
        restaurantId
    }: CreateNewOrderPropsType) {
        return prisma.order.create({
            data: {
                items,
                totalPrice,
                restaurantId
            }
        })
    }
}