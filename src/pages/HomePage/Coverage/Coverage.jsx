import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'



const Coverage = () => {
    const [coverages, setCoverages] = useState([])

    useEffect(() => {
        fetch('/coverage.json')
            .then(res => res.json())
            .then(data => setCoverages(data))
    }, [])

    const position = [23.8103, 90.4125]
    return (
        <div className='my-20'>
            <h2 className="text-5xl text-center font-bold">We are available in 64 district</h2>
            <div className="lg:h-[900px] md:h-[500px] h-[250px] w-11/12 mx-auto border">
                <MapContainer center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className='lg:h-[900px] md:h-[500px] h-[250px] w-full'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        coverages.map(center =>
                            <Marker key={center.district} position={[center.latitude, center.longitude]}>
                                <Popup>
                                    {center.district}
                                </Popup>
                            </Marker>
                        )
                    }
                </MapContainer>
            </div>

        </div>
    );
};

export default Coverage;