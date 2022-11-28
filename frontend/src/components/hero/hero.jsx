import { createEffect, onMount } from 'solid-js';
import * as THREE from 'three';
import gsap from "gsap";
import styles from './hero.module.css';
import changePageColor from '../../helpers/change-page-color';

function Hero() {

    let camera, scene, renderer, startTime, ringLeft, ringCenter, ringRight, container;


    onMount(() => {
        init();
        render();
        animate(); 
    })
  
    function init() {

        camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 0.25, 20 );
        camera.position.set( 0, 0, 3);
        
        scene = new THREE.Scene();
    
        renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( container.offsetWidth, container.offsetHeight );
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.right = '0';
        renderer.domElement.style.bottom = '0';
        renderer.domElement.style.left = '0';
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild( renderer.domElement );
        
        const envTexture = new THREE.CubeTextureLoader()
          .load( [
            'https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffdbb8f6f1b257ef702_posx.jpg',
            'https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffd670562b9fd36ff11_negx.jpg',
            'https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffda5d981d9e0cc72a3_posy.jpg',
            'https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffe72627483ca29a8a5_negy.jpg',
            'https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffd27e2263c957b59d5_posz.jpg',
            'https://uploads-ssl.webflow.com/636d6c4870b0b8576f95af5a/6373dffc5e071ec13081ee31_negz.jpg'
          ] );
        envTexture.encoding = THREE.sRGBEncoding;
        
        const torus = new THREE.TorusGeometry( 1, 0.05, 16, 100 );
        const torusMaterial = new THREE.MeshBasicMaterial({
        	color: 0x000000,
          combine: THREE.MixOperation,
          envMap: envTexture,
          reflectivity: 0.9
        });
        
        const ringOffset = 0.5;
        
        ringLeft = new THREE.Mesh( torus, torusMaterial );
        ringLeft.scale.x = 0.77;
        ringLeft.position.x = ringOffset * -1;
        
        ringCenter = new THREE.Mesh( torus, torusMaterial );
        ringCenter.scale.x = 0.77;
        ringCenter.position.x = 0;
        
        ringRight = new THREE.Mesh( torus, torusMaterial );
        ringRight.scale.x = 0.77;
        ringRight.position.x = ringOffset * 1;
        
        const logo = new THREE.Group();
        logo.add(ringLeft);
        logo.add(ringCenter);
        logo.add(ringRight);
        
        scene.add(logo);

        torusMaterial.envMap = envTexture;
        torusMaterial.needsUpdate = true;
        

        window.addEventListener( 'resize', onWindowResize );
        window.addEventListener( 'mousemove', onMouseMove );
        
        // startTime = Date.now();
    }

function onWindowResize() {

    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( container.offsetWidth, container.offsetHeight );

    render();

}
  
function onMouseMove(e) {
  
  	const ringMovement = 0.5;
    
  	const posX = (e.clientX / window.innerWidth) * 2 - 1;
    const posY = (e.clientY / window.innerHeight) * 2 - 1;
    
    gsap.to(ringLeft.rotation, { 
    	duration: 2, 
      delay: 0.2,
      ease: "power4.out", 
      x: posY * ringMovement,
      y: posX * ringMovement
    })
    
    gsap.to(ringCenter.rotation, { 
    	duration: 2, 
      delay: 0.1,
      ease: "power4.out", 
      x: posY * ringMovement,
      y: posX * ringMovement
    })
    
    gsap.to(ringRight.rotation, { 
    	duration: 2, 
      delay: 0,
      ease: "power4.out", 
      x: posY * ringMovement,
      y: posX * ringMovement
    })
  
}
  

function render() {
    renderer.render( scene, camera );
}
  

function animate() {
  
    const currentTime = Date.now();
    const time = ( currentTime - startTime ) / 1000;
    
    requestAnimationFrame( animate );

    // ring.rotation.y = time;
    
    render();
}

  return (
    <section class={styles.hero} ref={section => changePageColor(section, 'var(--page-color-default')}>
        <div class='container'>
            <div class={styles.heroInner}>
                <div class={styles.heroText}>
                    <p>Just like that, another year is behind us — and what a year it’s been. We’re celebrating with a look back at the projects, events, and growth that have kept us busy over the past year.</p>
                </div>
                <div class={styles.heroNumbersWrapper}>
                    <div class={styles.heroNumbers}>
                        <svg class={styles.heroNumber} viewBox="0 0 229 357" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0.539062 356.309V329.309C37.8724 299.642 70.0391 272.475 97.0391 247.809C124.372 223.142 145.372 199.475 160.039 176.809C175.039 153.809 182.539 129.975 182.539 105.309C182.539 82.6419 176.039 64.8086 163.039 51.8086C150.372 38.8086 133.206 32.3086 111.539 32.3086C95.2057 32.3086 81.3724 35.8086 70.0391 42.8086C58.7057 49.8086 50.2057 59.1419 44.5391 70.8086C38.8724 82.1419 36.0391 94.8086 36.0391 108.809H1.03906C1.03906 86.4753 5.87239 67.3086 15.5391 51.3086C25.2057 34.9753 38.3724 22.4752 55.0391 13.8086C71.7057 4.80859 90.5391 0.308594 111.539 0.308594C145.206 0.308594 171.372 9.80859 190.039 28.8086C209.039 47.8086 218.539 73.1419 218.539 104.809C218.539 126.142 213.872 146.642 204.539 166.309C195.539 185.642 183.206 204.475 167.539 222.809C152.206 240.809 134.872 258.309 115.539 275.309C96.5391 291.975 76.8724 308.309 56.5391 324.309H228.039V356.309H0.539062Z" fill="currentColor"/>
                            </g>
                        </svg>
                        <div ref={container} id='threejs-canvas' class={styles.ringsModel}></div>
                        <svg class={styles.heroNumber} viewBox="0 0 229 357" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0.539062 356.309V329.309C37.8724 299.642 70.0391 272.475 97.0391 247.809C124.372 223.142 145.372 199.475 160.039 176.809C175.039 153.809 182.539 129.975 182.539 105.309C182.539 82.6419 176.039 64.8086 163.039 51.8086C150.372 38.8086 133.206 32.3086 111.539 32.3086C95.2057 32.3086 81.3724 35.8086 70.0391 42.8086C58.7057 49.8086 50.2057 59.1419 44.5391 70.8086C38.8724 82.1419 36.0391 94.8086 36.0391 108.809H1.03906C1.03906 86.4753 5.87239 67.3086 15.5391 51.3086C25.2057 34.9753 38.3724 22.4752 55.0391 13.8086C71.7057 4.80859 90.5391 0.308594 111.539 0.308594C145.206 0.308594 171.372 9.80859 190.039 28.8086C209.039 47.8086 218.539 73.1419 218.539 104.809C218.539 126.142 213.872 146.642 204.539 166.309C195.539 185.642 183.206 204.475 167.539 222.809C152.206 240.809 134.872 258.309 115.539 275.309C96.5391 291.975 76.8724 308.309 56.5391 324.309H228.039V356.309H0.539062Z" fill="currentColor"/>
                            </g>
                        </svg>
                        <svg class={styles.heroNumber} viewBox="0 0 229 357" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0.539062 356.309V329.309C37.8724 299.642 70.0391 272.475 97.0391 247.809C124.372 223.142 145.372 199.475 160.039 176.809C175.039 153.809 182.539 129.975 182.539 105.309C182.539 82.6419 176.039 64.8086 163.039 51.8086C150.372 38.8086 133.206 32.3086 111.539 32.3086C95.2057 32.3086 81.3724 35.8086 70.0391 42.8086C58.7057 49.8086 50.2057 59.1419 44.5391 70.8086C38.8724 82.1419 36.0391 94.8086 36.0391 108.809H1.03906C1.03906 86.4753 5.87239 67.3086 15.5391 51.3086C25.2057 34.9753 38.3724 22.4752 55.0391 13.8086C71.7057 4.80859 90.5391 0.308594 111.539 0.308594C145.206 0.308594 171.372 9.80859 190.039 28.8086C209.039 47.8086 218.539 73.1419 218.539 104.809C218.539 126.142 213.872 146.642 204.539 166.309C195.539 185.642 183.206 204.475 167.539 222.809C152.206 240.809 134.872 258.309 115.539 275.309C96.5391 291.975 76.8724 308.309 56.5391 324.309H228.039V356.309H0.539062Z" fill="currentColor"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;
