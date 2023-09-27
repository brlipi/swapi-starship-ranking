import express, { Request, Response } from "express";
import StarshipsController from "../Controllers/StarshipsController";

const router = express.Router();

router.get('/:distance', async (req: Request, res: Response) => {
    const controller = new StarshipsController();
    const response = await controller.getStarshipsNumberOfStops(req.params.distance);
    return res.send(response);
});

export default router;