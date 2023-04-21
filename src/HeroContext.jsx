import { createContext, useState } from "react";
import { HEROES } from "./mock/mockHeroes";

export const HeroContext = createContext();


export const HeroProvider = ({children}) => {
    const [heroes, setHeroes] = useState(HEROES); 
    const [selectedHero, setSelectedHero] = useState(null);

    const topHeroes = heroes.slice(0,5);

    const findHero = (id) => {
        setSelectedHero(heroes.find((hero)=> hero.id=== Number(id)));
    }
    
    const updateHero = (id, newName) => {
        const heroesUpdated = heroes.map((hero)=> hero.id === Number(id)? {...newName} : hero  );
        setHeroes(heroesUpdated);
    }

    return (
        <HeroContext.Provider value={{heroes, setHeroes, selectedHero, setSelectedHero, topHeroes, findHero, updateHero}}>
            {children}
        </HeroContext.Provider>
    )


}