import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PageLayout from '~/components/PageLayout';

export default component$(() => {
  return (
    <PageLayout title="Contact Us" description="This is the contact page of our Qwik app." bgColor="bg-gradient-to-br from-yellow-400 to-red-600" />
  );
});

export const head: DocumentHead = {
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: "Contact page description",
    },
  ],
};
