(function () {
    function initialise_particles (t) {
        // if the particles.js library is not loaded, wait an extra second to see if that helps
        // the library should be loaded 'beforeInteractive'
        try {
            if (particlesJS !== undefined) {
                console.log('particles.js library loaded')
            }
        } catch (e) {
            if (t === 1) {
                console.error('particles.js library is not loaded.')
            } else {
            	window.setTimeout(() => initialise_particles(1), 1000)
            }
            return
        }

        particlesJS("particles-container", {
            particles: {
                number: {
                    value: 600,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 1,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 4,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 600
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: false,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 250,
                        size: 0,
                        duration: 2,
                        opacity: 0,
                        speed: 3
                    },
                    repulse: {
                        distance: 50,
                        duration: 0.2
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // if the particles.js library is not loaded, don't attempt to initialise the particles

    initialise_particles(0);
})()