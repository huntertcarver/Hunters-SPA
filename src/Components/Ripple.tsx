//https://www.youtube.com/watch?v=wRmeFtRkF-8&list=PLkQj0oVF_lCyCnVRYZMvjhoMSHSre6Dge&index=1
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import circle from "../Images/circle.png";
import { useMemo, useRef } from "react";
import { BufferAttribute } from "three";
import { useMouse } from "@mantine/hooks";

//Contains the actual animation
function Points() {
  //Images cannot be loaded directly so we must use a texture loader
  const texture = useLoader(THREE.TextureLoader, circle);
  const bufferRef = useRef<BufferAttribute>(null); 
  const {x, y} = useMouse();
  const h = window.screen.availHeight;
  const w = window.screen.availWidth;

  //phase shift
  let t = 0;
  //drives frequency
  let f = 0.002;
  //amplitude
  let a = 3;

  //useCallback is good for performance [t, f, a] are dependencies
  const graph = (x1:number, z1:number) => {
    return (Math.sin(f * (x1 ** 2 + z1 ** 2 + t)) * a);
  };

  const count = 300;
  const sep = 3;

  //[count, sep, graph] are dependencies
  let positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x1 = sep * (xi - count / 2);
        let z1 = sep * (zi - count / 2);
        let y1 = graph(x1, z1);
        positions.push(x1, y1, z1);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 15;
    console.log(w, h);
    if (bufferRef.current) {
    const positions = bufferRef.current.array as Float32Array;

        let i = 0;
        for(let xi = 0; xi < count; xi++) {
            for(let zi = 0; zi < count; zi++) {
                let x1 = sep * (xi - count / 2) - (x-w/2)/6
                let z1 = sep * (zi - count / 2) - (y-h/2)/6

                positions[i + 1] = graph(x1, z1);
                i += 3;
            }
        }

    bufferRef.current.needsUpdate = true;
    }
  });

  return (
    //points class from three.js
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.5}
        sizeAttenuation={true}
        color={0x00aaff}
        transparent={false}
        opacity={1.0}
        alphaTest={0.5}
        map={texture}
      />
    </points>
  );
}

//Wraps the canvas component
function AnimationCanvas() {

  return (
    <Canvas
      //Set up scene here
      camera={{ position: [0, 100, 0], fov: 75 }}
    >
      <Points />
    </Canvas>
  );
}

export default function Ripple() {

  return (
    <div style={{width: '100%', height: '100%'}}>
      <AnimationCanvas/>
    </div>
  );
}
