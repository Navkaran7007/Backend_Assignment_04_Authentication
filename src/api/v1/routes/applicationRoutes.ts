import express from "express";
import { approveloan, createloan, getloan, reviewloan } 
                                from "../controllers/applicationControllers";

                                
const router = express.Router();

router.post("/", createloan);

router.get("/", getloan);

router.put("/:id/review", reviewloan);

router.put("/:id/approve", approveloan);

export default router;
