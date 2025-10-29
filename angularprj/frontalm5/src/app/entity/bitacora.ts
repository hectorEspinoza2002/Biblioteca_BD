import { Usuario } from "./usuario";

export class Bitacora {
  idBitacora!: number;
  idUsuario!:Usuario;
 accion!:String;
 descripcion!: string;
 fechaHora!: Date;
 ipOrigin!: string;
}
