import express from 'express';
import {getUser} from '../controllers/generalController.js'
const generalRoutes = express.Router();

generalRoutes.get("/user/:id",getUser);
// generalRoutes.get("user/:id",()=>console.log("I'am in the generalRoute "),getUser);

export default generalRoutes;