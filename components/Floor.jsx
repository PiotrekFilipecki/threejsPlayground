import React from "react";

function Floor(props) {
  return (
    <mesh {...props} receiveShadow={true}>
      <boxBufferGeometry args={[10,0.2,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;