import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import AuthModal from '~/components/AuthModal';

export default component$(() => {
  return (
    <nav class="w-full bg-gray-800 p-4">
      <ul class="flex space-x-4 justify-center">
        <li><Link href="/" class="text-white">Home</Link></li>
        <li><Link href="/about" class="text-white">About</Link></li>
        <li><Link href="/contact" class="text-white">Contact</Link></li>
        <li><AuthModal /></li>
      </ul>
    </nav>
  );
});
