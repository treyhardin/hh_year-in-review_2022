import styles from './App.module.css';
import Hero from './components/hero/hero';
import { Launches } from './components/launches/launches';
import Team from './components/team/team';
import Events from './components/events/events';
import Recognition from './components/recognition/recognition';
import Contact from './components/contact/contact';
import Navigation from './components/navigation/navigation';
import Brand from './components/brand/brand';

function App() {
  return (
    
    <div class={styles.App}>
      {/* <Header /> */}
      <Brand />
      <Navigation />
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
