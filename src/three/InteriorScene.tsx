import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';

function Room() { return <group rotation={[0, -0.28, 0]}>
  <ambientLight intensity={2.2}/><directionalLight position={[3, 6, 4]} intensity={3} castShadow shadow-mapSize={[1024,1024]}/>
  <mesh receiveShadow position={[0,-1.22,0]}><boxGeometry args={[8,.12,6]}/><meshStandardMaterial color="#bdb3a3" roughness={.92}/></mesh>
  <mesh position={[0,1,-2.2]} receiveShadow><boxGeometry args={[8,4.5,.12]}/><meshStandardMaterial color="#ddd5c9"/></mesh>
  <mesh position={[-3.9,1,0]} receiveShadow><boxGeometry args={[.12,4.5,4.5]}/><meshStandardMaterial color="#c7b9a7"/></mesh>
  <mesh position={[0,-1.13,.25]} receiveShadow><boxGeometry args={[4.6,.025,2.7]}/><meshStandardMaterial color="#cfc3af" roughness={1}/></mesh>
  <group position={[0,-.55,-.9]}><RoundedBox args={[3.8,.65,.95]} radius={.13} castShadow><meshStandardMaterial color="#ede9df" roughness={1}/></RoundedBox><RoundedBox args={[3.8,.7,.35]} radius={.12} position={[0,.48,-.38]} castShadow><meshStandardMaterial color="#e7e2d8" roughness={1}/></RoundedBox><RoundedBox args={[.48,.38,.9]} radius={.1} position={[-1.65,.35,0]} castShadow><meshStandardMaterial color="#e7e2d8"/></RoundedBox><RoundedBox args={[.48,.38,.9]} radius={.1} position={[1.65,.35,0]} castShadow><meshStandardMaterial color="#e7e2d8"/></RoundedBox></group>
  <mesh position={[0,-.58,1.05]} castShadow><cylinderGeometry args={[.78,.78,.12,40]}/><meshStandardMaterial color="#837260" roughness={.72}/></mesh><mesh position={[0,-.87,1.05]} castShadow><cylinderGeometry args={[.3,.4,.5,36]}/><meshStandardMaterial color="#736456"/></mesh>
  <mesh position={[-3.82,1,-.3]}><boxGeometry args={[.08,3.4,2.8]}/><meshStandardMaterial color="#5d493a"/></mesh>
  <mesh position={[2.8,-.35,-1.55]} castShadow><cylinderGeometry args={[.18,.24,1.45,20]}/><meshStandardMaterial color="#5c554d"/></mesh><mesh position={[2.8,.48,-1.55]}><coneGeometry args={[.58,.55,32,1,true]}/><meshStandardMaterial color="#eee4d5" side={2}/></mesh>
  <mesh position={[1.1,1.13,-2.1]}><boxGeometry args={[1.35,1.65,.07]}/><meshStandardMaterial color="#a1886e"/></mesh><mesh position={[1.1,1.13,-2.04]}><boxGeometry args={[1.13,1.43,.02]}/><meshStandardMaterial color="#e4ded1"/></mesh>
  <mesh position={[-2.55,-.25,1.3]} castShadow><cylinderGeometry args={[.27,.21,.48,24]}/><meshStandardMaterial color="#5a5446"/></mesh><mesh position={[-2.55,.24,1.3]}><sphereGeometry args={[.48,12,8]}/><meshStandardMaterial color="#60755b" roughness={1}/></mesh>
</group>; }
export default function InteriorScene() { return <Canvas shadows camera={{ position: [5,3.4,7], fov: 39 }} dpr={[1,1.5]} gl={{ antialias: true, powerPreference: 'low-power' }}><color attach="background" args={['#d5cbbb']}/><Room/><OrbitControls enablePan={false} enableZoom={false} minPolarAngle={.8} maxPolarAngle={1.65} target={[0,0,0]}/></Canvas>; }
