import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { Stats } from '@react-three/drei';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';

// Extend R3F with the required Three.js geometry
extend({ PlaneGeometry: THREE.PlaneGeometry });

const fogColor = "#FDFFC2"
const terrainColor = "#222"

const Terrain = () => {
  const meshRef = useRef();
  const [data, setData] = useState(null);

  useEffect(() => {
    const worldWidth = 256;
    const worldDepth = 256;

    // Generate the height data
    const generatedData = generateHeight(worldWidth, worldDepth);
    setData(generatedData);

    const geometry = new THREE.PlaneGeometry(7500, 7500, worldWidth - 1, worldDepth - 1);
    geometry.rotateX(-Math.PI / 2);
    const vertices = geometry.attributes.position.array;

    // Adjust vertex heights based on generated terrain data
    for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
      vertices[j + 1] = generatedData[i] * 10;
    }

    const texture = new THREE.CanvasTexture(generateTexture(generatedData, worldWidth, worldDepth));
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;

    meshRef.current.material.map = texture;
    meshRef.current.geometry = geometry;
  }, []);

  useFrame(() => {
    // Animation logic if needed
  });

  return <mesh ref={meshRef} material={new THREE.MeshBasicMaterial({ color: terrainColor })} />;
};

// New component to control the camera based on mouse movement
const CameraController = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cameraRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX((event.clientX / window.innerWidth) * 2 - 1);
      setMouseY((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    if (state.camera) {
      state.camera.rotation.y = mouseX * 0.3; // Adjust rotation speed as needed
      state.camera.rotation.x = mouseY * 0.3;
    }
  });

  return null;
};

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

const TerrainScene = () => {
  const [webglSupported, setWebglSupported] = useState(false);

  useEffect(() => {
    if (isWebGLAvailable()) {
      setWebglSupported(true);
    } else {
      console.warn('WebGL not supported, skipping scene load.');
    }
  }, []);

  return (
    <>
      {webglSupported && (
        <Canvas
          gl={{ powerPreference: "low-power", antialias: false }}
          camera={{ position: [100, 1000, -800], fov: 60 }}
          style={{ background: '#222' }}
        >
          <fog attach="fog" args={[fogColor, 0.0025]} /> {/* Dynamically change fog color */}

          <Terrain />

          <CameraController />
        </Canvas>
      )}
    </>
  );
};

// Utility functions for generating terrain height and texture
function generateHeight(width, height) {
  let seed = Math.PI / 4;
  window.Math.random = function () {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const size = width * height;
  const data = new Uint8Array(size);
  const perlin = new ImprovedNoise();
  const z = Math.random() * 100;
  let quality = 1;

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < size; i++) {
      const x = i % width;
      const y = ~~(i / width);
      data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75);
    }
    quality *= 5;
  }

  return data;
}

function generateTexture(data, width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  const image = context.createImageData(width, height);
  const imageData = image.data;
  const sun = new THREE.Vector3(1, 1, 1).normalize();

  const vector3 = new THREE.Vector3(0, 0, 0);
  for (let i = 0, j = 0; i < imageData.length; i += 4, j++) {
    vector3.x = data[j - 2] - data[j + 2];
    vector3.y = 2;
    vector3.z = data[j - width * 2] - data[j + width * 2];
    vector3.normalize();
    const shade = vector3.dot(sun);

    imageData[i] = (96 + shade * 128) * (0.5 + data[j] * 0.007);
    imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.007);
    imageData[i + 2] = (shade * 96) * (0.5 + data[j] * 0.007);
  }

  context.putImageData(image, 0, 0);
  return canvas;
}

export default TerrainScene;
