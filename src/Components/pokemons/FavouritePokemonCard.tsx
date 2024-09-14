import { createSignal, Show, type Component } from "solid-js";
import type { FavouritePokemon } from "src/interfaces/favouritePokemon";

interface Props {
  pokemon: FavouritePokemon;
}

export const FavouritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') ?? '[]') as FavouritePokemon[];
    const newFavourites = favourites.filter(p => p.id !== pokemon.id);
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
    setIsVisible(false); // Aquí debería cambiar el estado
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center relative">
        <a href={`/pokemons/${pokemon.name}`} class="bg-gradient-to-t from-yellow-600 to-yellow-900 rounded px-3 py-2">
          <p class="font-bold text-white text-xl">#{pokemon.id}</p>
          <img class="drop-shadow-md" src={imageSrc} alt="Imagen del pokemon" 
          style={`view-transition-name: ${pokemon.name}-image`}
          />
          <h2 class="text-white text-xl font-bold capitalize">{pokemon.name}</h2>
        </a>
        <button
          onClick={deleteFavourite}
          class="bg-red-600 text-white font-semibold rounded px-3 py-2 absolute -bottom-4 right-3"
        >
          Eliminar
        </button>
      </div>
    </Show>
  );
};
