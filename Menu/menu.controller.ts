import { Request, Response } from "express";

export const GET_MENU_BY_ID = (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200).send({id})
}

