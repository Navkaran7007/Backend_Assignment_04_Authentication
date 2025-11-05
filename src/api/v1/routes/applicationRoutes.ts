import express from "express";
import { approveloan, createloan, getloan, reviewloan } 
                                from "../controllers/applicationControllers";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
                                
const router = express.Router();

router.post("/", 
    authenticate,
    isAuthorized({ hasRole: ["user"] }), 
    createloan);

router.get("/", 
    authenticate,  
    isAuthorized({ hasRole: ["officer", "manager"] }), 
    getloan);

router.put("/:id/review",
    authenticate,
    isAuthorized({ hasRole: ["officer"], allowSameUser: true }), 
    reviewloan);

router.put("/:id/approve",
     authenticate,
    isAuthorized({ hasRole: ["manager"], allowSameUser: true }), 
    approveloan);

export default router;
