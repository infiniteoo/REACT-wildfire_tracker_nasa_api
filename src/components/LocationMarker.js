import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div>
      <div className="location-marker" onClick={onClick}>
        <Icon icon={locationIcon} className="location-icon" />
      </div>
    </div>
  );
};

export default LocationMarker;
