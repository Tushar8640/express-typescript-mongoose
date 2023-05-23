import express from "express";
import { creteUser } from "./user.controller";

const router = express.Router();

router.get("/",creteUser);

export default router;
