import { RolUsuario } from "./rolusuario";

export class Usuario {
  idUsuario!: number;
  carne!: string;
  nombre!: string;
  apellido!: string;
  email!: string;
  carrera!: string;
  rol!: RolUsuario;
  fechaCreacion!: Date;
  password!: string;
}

