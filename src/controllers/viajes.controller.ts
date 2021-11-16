import { NextFunction, Request, Response } from 'express';
import { CreateViajeDto } from '@dtos/viaje.dto';
import { Viaje } from '@interfaces/viaje.intertace';
import viajeService from '@services/viajes.service';

class ViajesController {
  public viajeService = new viajeService();

  public getViajes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllViajeData: Viaje[] = await this.viajeService.findAllViajes();
      res.status(200).json({ data: findAllViajeData, message: 'Lista de viajes' });
    } catch (error) {
      next(error);
    }
  };

  public createViaje = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const viajeData: CreateViajeDto = req.body;
      console.log(viajeData);
      const createViajeData: Viaje = await this.viajeService.crearViaje(viajeData);

      res.status(201).json({
        data: createViajeData,
        message: 'Viaje creado correctamente',
        completado: true,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default ViajesController;
