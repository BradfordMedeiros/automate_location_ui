
import React, { Component, PropTypes } from 'react';
import { Marker } from 'react-map-gl';
import mqtt from 'mqtt';
import './style.css';

const tryGetCoordinates = message => {
  window.m = message;
  try {
    const json = JSON.parse(message);
    window.j = json;
    const latitude = json.latitude;
    const longitude = json.longitude;
    if (typeof(latitude) !== 'number' || typeof(longitude) !== 'number'){
      return null;
    }
    return { latitude, longitude };
  } catch(e){
    return null;
  }
};

class MqttMarker extends Component {
  state = {
    showMarker: false,
    latitude: null,
    longitude: null,
  }
  componentWillMount(){
    this.client  = mqtt.connect('http://localhost:4000');

    if (this.props.topic){
      this.client.on('connect', () => {
        console.error('marker connected');
        console.error('subscribing to ', this.props.topic);
        this.client.subscribe(this.props.topic);
      });
      this.client.on('message', (topic, message) => {
        console.log('got message: ', topic);
        console.log('message: ', message.toString());
        const coordinates = tryGetCoordinates(message.toString());
        if (coordinates){
          const { latitude, longitude } = coordinates;
          this.setState({
            latitude,
            longitude,
            showMarker: true,
          })
        }
      })
    }

  }
  componentWillUnmount(){
    this.client.end();
  }
  render() {
    const { description, topic, zoom, onClick } = this.props;

    const showFullMarker = zoom > 10;

    return (
      <Marker latitude={this.state.latitude}  longitude={this.state.longitude}  >
        <div className="mqtt_marker">
          <div onClick={onClick} className="mqtt_marker_icon" style={{ padding: showFullMarker ? 18 : 10  }} />
          {description}
        </div>
      </Marker>
    )
  }
}

MqttMarker.propTypes = {
  description: PropTypes.string,
  topic: PropTypes.string,
  zoom: PropTypes.number,
  onClick: PropTypes.func,
};

export default MqttMarker;