// src/components/TypeScriptLogo.jsx
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { Float } from '@react-three/drei';

export default function TypeScriptLogo({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 0.03,
  depth = 0.25,
  float = false, // set true kalau mau efek melayang otomatis
  animate = 'spin-bob', // 'spin' | 'bob' | 'orbit' | false | 'spin-bob'
  speed = 1,
  radius = 1.6,
}) {
  const { paths } = useLoader(SVGLoader, '/assets/typescript.svg');

  // build geometry sekali
  const group = useMemo(() => {
    const g = new THREE.Group();

    paths.forEach((p) => {
      // ambil fill dari SVG kalau ada; fallback biru TS
      const fill = p.userData?.style?.fill;
      const color = fill && fill !== 'none' ? fill : p.color && p.color !== 'black' ? p.color : '#3178C6'; // TS blue

      const mat = new THREE.MeshStandardMaterial({
        color,
        side: THREE.DoubleSide,
        metalness: 0.15,
        roughness: 0.55,
      });

      const shapes = p.toShapes(true);
      if (shapes.length) {
        shapes.forEach((shape) => {
          const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.z = -depth / 2;
          g.add(mesh);
        });
      } else {
        // fallback untuk SVG yang stroke-only
        const style = p.userData?.style || {};
        const strokeWidth = parseFloat(style.strokeWidth) || 8;
        p.subPaths.forEach((sp) => {
          const pts = sp.getPoints();
          const strokeGeo = SVGLoader.pointsToStroke(pts, {
            strokeWidth,
            strokeLineJoin: style.strokeLinejoin || 'round',
            strokeLineCap: style.strokeLinecap || 'round',
            strokeMiterLimit: style.strokeMiterlimit || 4,
          });
          if (strokeGeo) {
            const mesh = new THREE.Mesh(strokeGeo, mat);
            mesh.position.z = -depth / 2;
            g.add(mesh);
          }
        });
      }
    });

    // tegakkan koordinat (SVG Y-down → Three Y-up)
    g.scale.y *= -1;
    return g;
  }, [paths, depth]);

  // animasi opsional
  const root = useRef();
  useFrame((state, dt) => {
    if (!root.current) return;
    const t = state.clock.getElapsedTime() * speed;
    if (animate === 'spin' || animate === 'spin-bob') root.current.rotation.y += dt * 0.9 * speed;
    if (animate === 'bob' || animate === 'spin-bob') root.current.position.y = position[1] + Math.sin(t * 2) * 0.22;
    if (animate === 'orbit') {
      root.current.position.x = position[0] + Math.cos(t) * radius;
      root.current.position.z = position[2] + Math.sin(t) * radius;
      root.current.rotation.y = -t;
    }
  });

  const s = Array.isArray(scale) ? scale : [scale, scale, scale];
  const content = (
    <group ref={root} position={position} rotation={rotation} scale={s}>
      <primitive object={group} castShadow receiveShadow />
    </group>
  );

  return float ? (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.8}>
      {content}
    </Float>
  ) : (
    content
  );
}
