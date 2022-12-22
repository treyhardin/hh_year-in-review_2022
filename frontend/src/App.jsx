import styles from './App.module.css';
import Hero from './components/hero/hero';
import { Launches } from './components/launches/launches';
import Team from './components/team/team';
import Events from './components/events/events';
import Recognition from './components/recognition/recognition';
import Contact from './components/contact/contact';
import Navigation from './components/navigation/navigation';
import Brand from './components/brand/brand';
import gsap, {Power4} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Preloader from './components/preloader/preloader';
import Blob from './components/blob/blob';
import { createSignal } from 'solid-js';
import scroll from './helpers/scroll';

export const [smoother, setSmoother] = createSignal('')
export const [isPageEnd, setIsPageEnd] = createSignal(false)

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let scrollSmoother;

const registerSmoothScroll = (el) => {
  if (scrollSmoother) {
    return
  }

  scrollSmoother = ScrollSmoother.create({
    smooth: 0.5,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    content: el,
    // ease: "power4.out", 
  });

  setSmoother(scrollSmoother)
}

scroll((y, prevY) => {
  let pageEndOffset = 10

  if ((window.innerHeight + y) >= document.body.offsetHeight - pageEndOffset) {
    setIsPageEnd(true)
  } else {
    setIsPageEnd(false)
  }
})

function App() {
  return (
    
    <div class={styles.App}>
      <Preloader />
      <Blob />
      <Brand />
      <Navigation />
      <div id='smooth-wrapper'>
        <div id='smooth-content' ref={element => registerSmoothScroll(element)} >
          <Hero />
          <Launches />
          <Team />
          <Events />
          <Recognition />
          <Contact />
        </div>
      </div>
      
    </div>
  );
}

export default App;
