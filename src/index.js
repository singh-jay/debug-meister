import './styles/globals.css';
import { NetworkProvider } from './context/NetworkProvider';
if (typeof window === 'undefined') {
}
if (typeof window.global === 'undefined') {
  window.global = window;
}
export { NetworkProvider };
