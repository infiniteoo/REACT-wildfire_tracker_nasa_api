import GoogleMapsReact from "google-map-react";

const Map = ({ center, zoom }) => {
  console.log(process.env.REACT_APP_MAP_KEY);
  return (
    <div className="map">
      <GoogleMapsReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapsReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
