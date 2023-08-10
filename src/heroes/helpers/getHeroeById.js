import { heroes } from "../data/hero";

export const getHeroesById = (heroeId) => {

    return heroes.find(hero => hero.id == heroeId) || {};
}