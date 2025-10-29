import { RolUsuario } from "./RolUsuario";

export class Usuario {
  idUsuario!: number;
  carne!: string;
  nombre!: string;
  email!: string;
  carrera!: string;
  rol!: RolUsuario;
  password!: string;
}
