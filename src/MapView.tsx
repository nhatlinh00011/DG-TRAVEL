import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useEffect } from 'react'
import type { Place } from './data'

const pin = new L.Icon({
 iconUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
 iconRetinaUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
 shadowUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
 iconSize:[25,41], iconAnchor:[12,41], popupAnchor:[1,-34], shadowSize:[41,41]
})
function Recenter({center}:{center:[number,number]}) {
 const map=useMap()
 useEffect(()=>{map.setView(center,12)},[center,map])
 return null
}
export default function MapView({items,center,onSelect}:{items:Place[],center:[number,number],onSelect:(p:Place)=>void}) {
 return <div className="map-wrap"><MapContainer center={center} zoom={11} scrollWheelZoom>
  <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
  <Recenter center={center}/>
  {items.map(p=><Marker key={p.id} position={[p.lat,p.lng]} icon={pin}><Popup><b>{p.name}</b><br/>{p.area}<br/><button className="map-link" onClick={()=>onSelect(p)}>Xem địa điểm</button></Popup></Marker>)}
 </MapContainer></div>
}