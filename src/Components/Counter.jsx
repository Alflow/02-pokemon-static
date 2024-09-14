import { createSignal } from "solid-js";

export const Counter = () => {
  const [counter, setCounter] = createSignal(10);

  return (
    <div>
      <h1>Soy un componente Counter</h1>
      <h3>Value: {counter()} </h3>
      <div className="btn-wrapper flex gap-4">
        <button
          class="bg-yellow-500 text-black font-bold text-2xl px-3 py-2 rounded"
          onClick={()=> setCounter(counter() + 1)}
        >
          +1
        </button>
        <button 
         onClick={()=> setCounter(counter() - 1)}
        class="bg-yellow-500 text-black font-bold text-2xl px-3 py-2 rounded">
          -1
        </button>
      </div>
    </div>
  );
};
