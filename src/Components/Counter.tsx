import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initialValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initialValue);

  return (
    <>
      {props.children}
      <h3>Value: {counter()} </h3>
      <div class="btn-wrapper flex gap-4">
        <button
          class="bg-yellow-500 text-black font-bold text-2xl px-3 py-2 rounded"
          onClick={() => setCounter(counter() + 1)}
        >
          +1
        </button>
        <button
          onClick={() => setCounter(counter() - 1)}
          class="bg-yellow-500 text-black font-bold text-2xl px-3 py-2 rounded">
          -1
        </button>
      </div>
    </>
  );
};
