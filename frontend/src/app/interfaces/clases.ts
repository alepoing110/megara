export class Rol{
    constructor(
        public cod: string,
        public nombre: string
    ){}
}

export class Disponibilidad{
    constructor(
        public cod: string,
        public nombre: string
    ){}

}

export class Usuario{
    constructor(
        public nombre: string,
        public ap_paterno: string,
        public ap_materno: string,
        public nick: string,
        public password:string,
        public telefono: string,
        public direccion: string,
        public rol: number,
        public fecha_nac: string,
        public ci?: number){}
}

export class Proveedor{
    constructor(
        public nombre: string,
        public nom_encargado: string,  
        public telefono: string,
        public direccion: string,
        public id?: number){}

}

export class Equipo{    
    constructor(
        public nombre: string,
        public serie: string,
        public modelo: string,
        public marca: string,
        public fabricante: string,
        public ubicacion_tecnica: string,
        public descripcion: string,
        public observaciones: string,
        public id?: number){}
}

export class Herramienta{
    constructor(
        public nombre: string,
        public tipo: string,
        public cantidad: number,
        public precio: number,    
        public id?: number){}
}

export class Insumo{
    constructor(
        public nombre: string,
        public cantidad: number,   
        public precio: number,
        public id?: number){}
}

export class Detalle{
    constructor(
        public precio: number,
        public cantidad: number,   
        public pedido_id: number,
        public proveedor_id: number,
        public herramienta_id?: number,
        public insumo_id?: number       
    ){}
}

export class DetalleCompleto{
    constructor(
        
        public precio: number,
        public cantidad: number,   
        public pedido_id: number,
        public proveedor_id: number,
        public insumo_nombre?: string,
        public herramienta_nombre?: string,
        public herramienta_id?: number,
        public insumo_id?: number       
    ){}
}

export class Pedido{
    constructor(
        public fecha: string,
        public total: number,
        public usuario_ci: number,      
        public id?: number       
    ){}
}

export class OrdenTrabajo{
    constructor(
        public fecha: string,
        public descripcion: string,
        public nom_supervisor_empresa: string,
        public nom_empresa: string,
        public equipo_id: number,
        public equipo_empresa: string,
        public marca_empresa: string,
        public modelo_empresa: string,            
        public procedencia_empresa: string,
        public procedencia_ano_empresa: string,
        public instalado_por_empresa: string,
        public instalado_por_ano_empresa: string,
        public ubicacion_tecnica_empresa: string,
        public num_inventario_empresa: string,
        public funcion_empresa: string,
        public tipo_empresa: string,
        public serie_empresa: string,
        public fecha_inicio: string,
        public id?: number
    ){
    }
}

export class RrHh{
    constructor(
        public nombre: string,
        public ap_paterno: string,
        public ap_materno: string,
        public especialidad: string,
        public disponibilidad: number,
        public direccion: string,
        public id?: number
    ){}
}

export  class GrupoTrabajo{
    constructor(
        public personal_id: number,
        public orden_trabajo_id: number
    ){}
}

export  class GrupoTrabajoCompleto{
    constructor(
        public personal_id: number,
        public orden_trabajo_id: number,
        public nombre: string,
        public ap_paterno: string,
        public ap_materno: string
    ){}
}

export class FichaTecnica{
    constructor(
        public orden_trabajo_id: number,
        public fecha_culminacion: string,
        public tiempo_mantenimiento: string,
        public recurso_humano_id: number,
        public id?: number
    ){}

}

export class Login{
    constructor(
        public usuario: string,
        public password: string,
        public rol: number
    ){}
}

export class Material{
    constructor(
        public orden_trabajo_id: number,
        public cantidad: number,
        public insumo_id?: number,
        public herramienta_id?: number,
        public equipo_id?: number
    ){}
}