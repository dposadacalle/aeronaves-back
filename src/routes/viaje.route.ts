import { Router } from 'express';
import ViajesController from '@controllers/viajes.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';

class ViajesRoute implements Routes {
  public path = '/viajes';
  public router = Router();
  public viajesController = new ViajesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.viajesController.getViajes);
    this.router.post(`${this.path}/crearViaje`, authMiddleware, this.viajesController.createViaje);
  }
}

export default ViajesRoute;
