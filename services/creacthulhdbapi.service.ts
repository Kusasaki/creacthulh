import { Personnage } from "./personnage.model";

const rootEndpoint = 'https://enscpiiddl.azurewebsites.net/api/PersonnagesApi';

class CreaCthulhDbApi {
  searchPersonnageById(id: string): Promise<Personnage> {
    return this.fetchFromApi(`${rootEndpoint}/${id}`).then((personnage : Personnage ) => personnage);
  }

  getAllPersonnage() : Promise<Array<Personnage>> {
    return this.fetchFromApi(`${rootEndpoint}`).then((personnages : Personnage[]) => personnages);
  }

  private fetchFromApi(query: string): any {
    console.log(query);
    return (
      fetch(query)
        // FIXME: JSON parse error when ingredient is not found
        .then((response) => response.json())
        .then((jsonResponse) => jsonResponse)
        .catch((error) => [])
    );
  }
}

export default new CreaCthulhDbApi();