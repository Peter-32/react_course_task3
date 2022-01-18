import React from 'react';
import ReactDOM from 'react-dom';



class SeasonDisplay extends React.Component {

    constructor(props){
        super(props);

        this.state = { lat: null, error: null };
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({ lat: position.coords.latitude})
          },
          (err) => {
            this.setState({ error: err.message})
          }
        );
    }

      componentDidMount() {
          // Setup; initial data loading when it first shows up

      }

    render() {
        let message = null
        if (this.state.error) {
            message = "Error: " + this.state.error;
        } else if (this.state.lat) {
            message = "Latitude: " + this.state.lat;
        } else {
            message = "Loading";
        }

        return (
            <div>{message}</div>
        );
    }

    componentDidUpdate() {
        // It's updated when setState is used and it's rendered
    }

    componentWillUnmount() {
        // When we want to do some cleanup of our component
    }
}

export default SeasonDisplay;
