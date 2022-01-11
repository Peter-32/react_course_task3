import React from 'react';
import ReactDOM from 'react-dom';



class SeasonDisplay extends React.Component {


    constructor() {
    super()
    success(position) {
        this.x = position.coords.latitude;
    }
    this.x = 0
      window.navigator.geolocation.getCurrentPosition(
          this.success,
          (position) => console.log("error")
      );
    }

    render() {
        return (
            <div>
                Season Display {this.x}
            </div>
        )
    }
}

export default SeasonDisplay;
