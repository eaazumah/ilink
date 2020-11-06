import * as React from "react";
import { Container } from "react-bootstrap";
import {
	GoogleMap,
	Marker,
	withGoogleMap,
	withScriptjs
} from "react-google-maps";

interface Props {}

const location: any = {
	lat: 6.6745088,
	lgn: -1.5738001
};

const exampleMapStyles = [
	{
		featureType: "poi",
		elementType: "geometry",
		stylers: [
			{
				color: "#eeeeee"
			}
		]
	},
	{
		featureType: "poi",
		elementType: "labels.text",
		stylers: [
			{
				visibility: "off"
			}
		]
	},
	{
		featureType: "water",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9e9e9e"
			}
		]
	}
];

const Coverage: React.SFC<Props> = props => {
	const Map = withScriptjs(
		withGoogleMap(() => (
			<GoogleMap
				options={
					{
						//stylers: exampleMapStyles
					}
				}
				defaultZoom={8}
				defaultCenter={{ lat: 6.679952, lng: 1.573287 }}
			>
				<Marker position={{ lat: 6.679952, lng: 1.573287 }} />
			</GoogleMap>
		))
	);
	return (
		<div className="d-flex" style={{ backgroundColor: "#f2f2f2", padding: 20 }}>
			<Container>
				<Map
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwUFdALkL9i_8jaPyqb1I2qIbyS0kPUB8&v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `500px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</Container>
		</div>
	);
};

export default Coverage;
