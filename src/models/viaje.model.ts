import { model, Schema, Document } from 'mongoose';
import { Viaje } from '@interfaces/viaje.intertace';

const viajeSchema: Schema = new Schema({
  origen: {
    type: String,
    required: true,
  },
  destino: {
    type: String,
    required: true,
  },
});

const viajeModel = model<Viaje & Document>('Viaje', viajeSchema);

export default viajeModel;
