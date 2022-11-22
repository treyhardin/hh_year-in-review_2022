import logo from './logo.svg';
import styles from './App.module.css';
import Hero from './components/hero/hero';
import Launches from './components/launches/launches';
import Team from './components/team/team';
import Events from './components/events/events';
import Recognition from './components/recognition/recognition';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import { createSignal } from 'solid-js';

function App() {
  return (
    <div class={styles.App}>
      <Header />
      <Hero />
      <Launches />
      <Team />
      <Events />
      <Recognition />
      <Contact />
    </div>
  );
}

export default App;
