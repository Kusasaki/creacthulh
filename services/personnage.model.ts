export class Personnage{
    id: string;
    firstname: string;
    lastname : string;

    constructor(idPersonnage, firstname, lastname) {
        this.id = idPersonnage;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}