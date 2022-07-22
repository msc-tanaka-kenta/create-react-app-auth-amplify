import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
// import { useDataStoreBinding } from "@aws-amplify/ui-react/internal";
// import { Pos } from "./models";

const containerStyle = {
	width: "100%",
	height: "80vh",
};

const center = {
	lat: 36.377483697863845,
	lng: 139.2795853802359,
};

export function Map( props ) {
//	const { items: itemsProp } = props;
//	const itemsDataStore = useDataStoreBinding({ type: "collection", model: Pos }).items;
//	const items = ( itemsProp !== undefined ? itemsProp : itemsDataStore ).sort( function( a, b ){
//		if( a.timestamp < b.timestamp ){ return -1 }
//		else { return 1 }
//	});
//	console.log( items );
	
	return (
		<LoadScript googleMapsApiKey="AIzaSyDALir4t4GN6zxvz7eCJOocw2_r12d4w1U">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={16}
			>
			</GoogleMap>
		</LoadScript>
	);
//			<Polyline path={items} />
};
