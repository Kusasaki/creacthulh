export class Personnage{
    idPersonnage: number;
    firstname: string;
    lastname : string;

    constructor(idPersonnage, firstname, lastname) {
        this.idPersonnage = idPersonnage;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}