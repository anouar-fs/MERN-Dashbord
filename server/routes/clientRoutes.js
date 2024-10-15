import express from 'express';
import {getProducts} from '../controllers/clientController.js'
import {getCustomers} from '../controllers/clientController.js'
import {getTransactions} from '../controllers/clientController.js'
import {getGeography} from '../controllers/clientController.js'
const clientRoutes = express.Router();


clientRoutes.get("/products",getProducts);
clientRoutes.get("/customers",getCustomers);
clientRoutes.get("/transactions",getTransactions);
clientRoutes.get("/geography",getGeography);



export default clientRoutes;
