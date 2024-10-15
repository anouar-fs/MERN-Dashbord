import express from 'express';
import {getSalesStates} from '../controllers/salesController.js'
import {getSalesDaily} from '../controllers/salesController.js'
import {getBRsales} from '../controllers/salesController.js'

const salesRoutes = express.Router();


salesRoutes.get("/sales",getSalesStates);
salesRoutes.get("/daily",getSalesDaily);
salesRoutes.get("/breakdown",getBRsales);


export default salesRoutes;