import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3500} />
      <RoutesApp />
    </div>
  );
}