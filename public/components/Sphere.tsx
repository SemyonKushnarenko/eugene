import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useCallback, FC, useEffect } from 'react';
import * as THREE from 'three';

const SPHERE_TEXTURE = '/spherical_texture.jpg';

interface PanoramaSphereProps {
  rotation: { x: number; y: number };
  fov: number;
  texture: THREE.Texture;
  onCanvasReady?: (canvas: HTMLCanvasElement) => void;
}

const PanoramaSphere: FC<PanoramaSphereProps> = ({ rotation, fov, texture, onCanvasReady }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, gl } = useThree();

  useEffect(() => {
    if (onCanvasReady && gl && gl.domElement) {
      onCanvasReady(gl.domElement);
    }
  }, [gl, onCanvasReady]);

  // Camera logic
  useFrame(() => {
    if ('fov' in camera) {
      (camera as THREE.PerspectiveCamera).fov = fov;
      (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
    }
    camera.position.set(0, 0, 0);
    camera.lookAt(
      Math.sin(rotation.y) * Math.cos(rotation.x),
      Math.sin(rotation.x),
      Math.cos(rotation.y) * Math.cos(rotation.x)
    );
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

const Sphere = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [fov, setFov] = useState(75);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const autoRotateRef = useRef<number | null>(null);
  const fovRef = useRef(fov);

  // Touch gesture state
  const gesture = useRef<'none' | 'drag' | 'pinch'>('none');
  const dragStart = useRef<{ x: number; y: number; rot: { x: number; y: number } } | null>(null);
  const pinchStart = useRef<{ dist: number; fov: number } | null>(null);

  // Load texture only once
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(SPHERE_TEXTURE, (tex) => {
      setTexture(tex);
    });
  }, []);

  useEffect(() => {
    fovRef.current = fov;
  }, [fov]);

  // Mouse wheel for zoom
  const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    setFov((f) => Math.max(30, Math.min(100, f + e.deltaY * 0.05)));
  }, []);

  // Subtle auto-rotation (pause while dragging)
  useEffect(() => {
    if (isDragging) {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
      return;
    }
    autoRotateRef.current = window.setInterval(() => {
      setRotation((rot) => ({ ...rot, y: rot.y + 0.0005 }));
    }, 16);
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    };
  }, [isDragging]);

  // Native pointer and touch events for robust gestures
  const handleCanvasReady = useCallback((canvas: HTMLCanvasElement) => {
    // --- Touch events ---
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1 && gesture.current === 'none') {
        gesture.current = 'drag';
        setIsDragging(true);
        dragStart.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          rot: { ...rotation },
        };
        pinchStart.current = null;
      } else if (e.touches.length === 2 && (gesture.current === 'none' || gesture.current === 'pinch')) {
        gesture.current = 'pinch';
        setIsDragging(true);
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        pinchStart.current = { dist, fov: fovRef.current };
        dragStart.current = null;
      } else {
        gesture.current = 'none';
        setIsDragging(false);
        dragStart.current = null;
        pinchStart.current = null;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (gesture.current === 'drag' && e.touches.length === 1 && dragStart.current) {
        e.preventDefault?.();
        const dx = e.touches[0].clientX - dragStart.current.x;
        const dy = e.touches[0].clientY - dragStart.current.y;
        setRotation({
          x: Math.max(Math.min(dragStart.current.rot.x + dy * 0.002, Math.PI / 2), -Math.PI / 2),
          y: dragStart.current.rot.y + dx * 0.002,
        });
      } else if (gesture.current === 'pinch' && e.touches.length === 2 && pinchStart.current) {
        e.preventDefault?.();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const delta = dist - pinchStart.current.dist;
        // setFov(Math.max(30, Math.min(100, pinchStart.current.fov + delta * 0.05)));
      }
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) {
        gesture.current = 'none';
        setIsDragging(false);
        dragStart.current = null;
        pinchStart.current = null;
      } else {
        // Do not start drag or pinch here; wait for a new touchstart after all fingers are lifted
        gesture.current = 'none';
        setIsDragging(false);
        dragStart.current = null;
        pinchStart.current = null;
      }
    };
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: false });
    // --- Mouse events for drag ---
    let mouseDragging = false;
    let mouseStart = { x: 0, y: 0, rot: { x: 0, y: 0 } };
    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      mouseDragging = true;
      setIsDragging(true);
      mouseStart = { x: e.clientX, y: e.clientY, rot: { ...rotation } };
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!mouseDragging) return;
      const dx = e.clientX - mouseStart.x;
      const dy = e.clientY - mouseStart.y;
      setRotation({
        x: Math.max(Math.min(mouseStart.rot.x + dy * 0.002, Math.PI / 2), -Math.PI / 2),
        y: mouseStart.rot.y + dx * 0.002,
      });
    };
    const onPointerUp = () => {
      mouseDragging = false;
      setIsDragging(false);
    };
    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    // Clean up
    return () => {
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [rotation]);

  if (!texture) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 5,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'auto',
        background: '#000',
        touchAction: 'none',
      }}
      onWheel={onWheel}
    >
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 2000 }}
        style={{ width: '100vw', height: '100vh', background: '#000', touchAction: 'none' }}
      >
        <PanoramaSphere
          rotation={rotation}
          fov={fov}
          texture={texture}
          onCanvasReady={handleCanvasReady}
        />
      </Canvas>
    </div>
  );
};

export default Sphere;
