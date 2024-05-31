import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Modal } from '@qwik-ui/headless';
import styles from '~/global.css?inline';
import LoginForm from '~/components/LoginForm';
import RegisterForm from '~/components/RegisterForm';

export default component$(() => {
  useStyles$(styles);
  const isLogin = useSignal(true);

  return (
    <Modal.Root>
      <Modal.Trigger class="text-white">Login</Modal.Trigger>
      <Modal.Panel class="modal-panel modal-backdrop">
        <Modal.Title class="modal-title">{isLogin.value ? 'Login' : 'Register'}</Modal.Title>
        <Modal.Description class="modal-description">
          {isLogin.value ? 'Please enter your login details' : 'Please enter your registration details'}
        </Modal.Description>
        {isLogin.value ? <LoginForm /> : <RegisterForm />}
        <div class="mt-4">
          <button 
            class="toggle-link" 
            onClick$={() => isLogin.value = !isLogin.value}
          >
            {isLogin.value ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </Modal.Panel>
    </Modal.Root>
  );
});
