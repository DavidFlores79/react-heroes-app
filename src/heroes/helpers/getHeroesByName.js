import { heroes } from "../data/hero";

export const getHeroesByName = (name) => {

    name.trim().toLowerCase();
    if(name.length <= 0) return [];

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

}