import React from 'react'
import { trefoil } from 'ldrs'


export const LoaderComponent = () => {
    trefoil.register();
    return (
        <div style={{width: "100vw", height: "50vh", marginTop: "44vh", color: "black", display: "flex", justifyContent: "center"}}>
            <l-trefoil> size="40" stroke="4" stroke-length="0.15" bg-opacity="0.1" speed="1.4" color="black" </l-trefoil>
        </div>
    )
}

export default LoaderComponent;