import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PageLayout from '~/components/PageLayout';

export default component$(() => {
  return (
    <PageLayout title="Welcome to Qwik" description="Start building your Qwik app today!" bgColor="bg-gradient-to-br from-blue-400 to-purple-600" />
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
