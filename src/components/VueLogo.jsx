// src/components/VueLogo.jsx
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { Float } from '@react-three/drei';

export default function VueLogo({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 0.02, // angka atau [sx, sy, sz]
  depth = 0.2,
  float = true, // efek melayang otomatis dari drei
  animate = 'spin-bob', // 'spin' | 'bob' | 'orbit' | false | 'spin-bob'
  speed = 1, // multiplier kecepatan animasi
  radius = 1.8, // jari-jari orbit (kalau animate='orbit')
}) {
  const { paths } = useLoader(SVGLoader, '/assets/vue.svg');

  // --- bangun mesh dari SVG (sekali saja) ---
  const group = useMemo(() => {
    const g = new THREE.Group();
    paths.forEach((p) => {
      const color = p.color && p.color !== 'black' ? p.color : '#41B883';
      const mat = new THREE.MeshStandardMaterial({
        color,
        side: THREE.DoubleSide,
        metalness: 0.15,
        roughness: 0.55,
      });
      p.toShapes(true).forEach((shape) => {
        const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.z = -depth / 2; // center ketebalan
        g.add(mesh);
      });
    });
    g.scale.y *= -1; // tegakkan (SVG Y-down -> Three Y-up)
    return g;
  }, [paths, depth]);

  // --- animasi manual (tanpa setState; pakai ref) ---
  const root = useRef();
  useFrame((state, dt) => {
    if (!root.current) return;
    const t = state.clock.getElapsedTime() * speed;

    if (animate === 'spin' || animate === 'spin-bob') {
      root.current.rotation.y += dt * 0.9 * speed;
    }
    if (animate === 'bob' || animate === 'spin-bob') {
      // naik-turun halus sekitar posisi aslinya
      root.current.position.y = position[1] + Math.sin(t * 2) * 0.25;
    }
    if (animate === 'orbit') {
      // mengorbit di bidang XZ mengelilingi titik "position"
      root.current.position.x = position[0] + Math.cos(t) * radius;
      root.current.position.z = position[2] + Math.sin(t) * radius;
      root.current.rotation.y = -t; // hadap arah gerak
    }
  });

  const s = Array.isArray(scale) ? scale : [scale, scale, scale];

  // konten logo
  const content = (
    <group ref={root} position={position} rotation={rotation} scale={s}>
      <primitive object={group} castShadow receiveShadow />
    </group>
  );

  // Note: kalau kamu pakai animate, biasanya set float={false} agar
  // animasi tidak dobel. Tapi tetap kuberi opsi keduanya.
  return float ? (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.8}>
      {content}
    </Float>
  ) : (
    content
  );
}
