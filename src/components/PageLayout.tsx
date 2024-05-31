import { component$, Slot } from "@builder.io/qwik";

export default component$((props: { title: string, description: string, bgColor: string }) => {
  return (
    <div class={`flex flex-grow w-full flex-col items-center justify-center min-h-full ${props.bgColor}`}>
      <h1 class="text-4xl font-bold mb-4 text-white">{props.title}</h1>
      <p class="text-lg text-white">{props.description}</p>
      <Slot />
    </div>
  );
});
