import { useGLTF } from "@react-three/drei";

const PreloadModels = () => {
  useGLTF.preload("./desktop_pc/scene.gltf");
  return null;
};

export default PreloadModels; 