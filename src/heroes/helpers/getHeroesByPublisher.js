import { heroes } from "../data/hero";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes(publisher)) throw new Error('El publisher no existe o no es valido.');

    return heroes.filter(hero => hero.publisher == publisher);
}