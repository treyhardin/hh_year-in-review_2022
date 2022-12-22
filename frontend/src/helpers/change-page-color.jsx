import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const changePageColor = (element, color) => {
    
    let body = document.documentElement

    ScrollTrigger.create({
        trigger: element,
        start:'top top+=100',
        // end:'bottom center',
        onEnter: () => gsap.to(body, {'--page-color': color,}), 
        onEnterBack: () => gsap.to(body, {'--page-color': color,}), 
      });

}

export default changePageColor