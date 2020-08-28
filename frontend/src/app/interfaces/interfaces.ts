export interface Proveedor{
    id?: number;
    nombre: string;
    nom_encargado: string;   
    telefono: string;
    direccion: string;

}

export interface Equipo{
    id?: number;
    nombre: string;
    serie: string;   
    modelo: string;
    marca: string;
    fabricante: string;
    ubicacion_tecnica: string;
    descripcion: string;
    observaciones: string;
}

export interface Herramienta{
    id?: number;
    nombre: string;
    marca: string;   
    estado: string;
    tipo: string;
    permanecia_dia: number;
    precio: number;    
}

export interface Insumo{
    id?: number;
    nombre: string;
    cantidad: number;   
    precio: number;
}