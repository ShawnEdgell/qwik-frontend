import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Navigation from '~/components/Navigation';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen">
      <Navigation />
      <main class="flex-grow flex flex-col">
        <Slot />
      </main>
    </div>
  );
});
