import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PageLayout from '~/components/PageLayout';

export default component$(() => {
  return (
    <PageLayout title="About Us" description="This is the about page of our Qwik app." bgColor="bg-gradient-to-br from-green-400 to-blue-600" />
  );
});

export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "About page description",
    },
  ],
};
