import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <form class="form-container">
      <div class="form-field">
        <label for="email" class="form-label">Email address</label>
        <input type="email" id="email" name="email" required class="form-input"/>
      </div>
      <div class="form-field">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" name="password" required class="form-input"/>
      </div>
      <div class="form-field">
        <button type="submit" class="form-button">Login</button>
      </div>
    </form>
  );
});
