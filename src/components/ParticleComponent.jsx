import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleComponent = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
      initParticlesEngine(async (engine) => {
        
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);

    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
      <div>
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              fpsLimit: 100,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#00adb5",
                },
                links: {
                  color: "#EEEEEE",
                  distance: 100,
                  enable: true,
                  opacity: 0.8,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 600,
                  },
                  value: 100,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 4 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>
    );
}

export default ParticleComponent;
