export class Pociones {

    rojas:number;
    azules:number;
    verdes:number;
    amarillas:number;
    gris:number;
    cantidad:number;

    constructor(){
        this.rojas=0;
        this.azules=0;
        this.verdes=0;
        this.amarillas=0;
        this.gris=0;
        this.cantidad=0;
    }

    total(){
        return this.rojas + this.azules+ this.verdes+this.amarillas+this.gris;
    }

    actualizarColor(color,cantidad){
        this[color]=this[color]-cantidad
    }

    


   


}


