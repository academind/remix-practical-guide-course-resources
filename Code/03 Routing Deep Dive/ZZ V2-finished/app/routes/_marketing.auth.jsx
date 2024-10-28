import AuthForm from '~/components/auth/AuthForm';
import authStyles from '~/styles/auth.css?url';

export default function AuthPage() {
  return <AuthForm />;
}

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }];
}
