import { For } from "solid-js";
import { createSignal } from "solid-js";
import type { FavouritePokemon } from "src/interfaces/favouritePokemon";
import { FavouritePokemonCard } from "./FavouritePokemonCard";




const getLocalStorageGetPokemons = (): FavouritePokemon []=>{
    const favouritePokemons = JSON.parse(
        localStorage.getItem('favourites') ?? '[]'
    )
    return favouritePokemons;
}



export const FavouritePokemons = ()=> {


    const [pokemons, setPokemons] = createSignal(getLocalStorageGetPokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-9 mt-12">
            <For each={pokemons()}>
                {(pokemon)=>(
                <FavouritePokemonCard pokemon={pokemon}></FavouritePokemonCard>
                )}
              
            </For>
            
        </div>
    )
}