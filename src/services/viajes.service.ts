import { CreateViajeDto } from '@dtos/viaje.dto';
import { HttpException } from '@exceptions/HttpException';
import { Viaje } from '@interfaces/viaje.intertace';
import viajeModel from '@models/viaje.model';
import { isEmpty } from '@utils/util';

class viajeService {
  public viajes = viajeModel;

  public async findAllViajes(): Promise<Viaje[]> {
    const viajes: Viaje[] = await this.viajes.find();
    return viajes;
  }

  public async crearViaje(viajeData: CreateViajeDto): Promise<Viaje> {
    if (isEmpty(viajeData)) throw new HttpException(400, "You're not viajeData");

    const createViajeData: Viaje = await this.viajes.create({ ...viajeData });
    return createViajeData;
  }
}

export default viajeService;
