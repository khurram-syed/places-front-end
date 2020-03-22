import React, {useRef,useEffect} from 'react'
import './Map.scss'

const Map = props => {
    const {center, zoom} = props
    const mapRef = useRef() 
 
    useEffect(()=>{
        console.log('***Inside useEffect**')
        const map = new window.google.maps.Map(mapRef.current, {
            center:center,
            zoom: zoom
        });
        console.log('***Inside useEffect** - map : ',map)
        new window.google.maps.Marker({position: center, map:map})
    },[center,zoom])
   
    return  <div ref={mapRef} className={`map ${props.className}`}>
             
           </div>
}
export default Map