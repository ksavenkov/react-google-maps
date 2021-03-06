import {
  default as React,
  Component,
} from "react";

import {
  default as PureRenderMinix
} from "react-addons-pure-render-mixin";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as MarkerCreator,
  markerDefaultPropTypes,
  markerControlledPropTypes,
  markerEventPropTypes,
} from "./addonsCreators/MarkerCreator";

export default class Marker extends Component {
  mixins: [PureRenderMixin],
  
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...markerDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...markerControlledPropTypes,
    // Event [onEventName]
    ...markerEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getAnimation () { return this.state.marker.getAnimation(); }

  getAttribution () { return this.state.marker.getAttribution(); }

  getClickable () { return this.state.marker.getClickable(); }

  getCursor () { return this.state.marker.getCursor(); }

  getDraggable () { return this.state.marker.getDraggable(); }

  getIcon () { return this.state.marker.getIcon(); }

  getLabel () { return this.state.marker.getLabel(); }

  getOpacity () { return this.state.marker.getOpacity(); }

  getPlace () { return this.state.marker.getPlace(); }

  getPosition () { return this.state.marker.getPosition(); }

  getShape () { return this.state.marker.getShape(); }

  getTitle () { return this.state.marker.getTitle(); }

  getVisible () { return this.state.marker.getVisible(); }

  getZIndex () { return this.state.marker.getZIndex(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker

  state = {
  }

  componentWillMount () {
    if (!canUseDOM) {
      return;
    }
    const marker = MarkerCreator._createMarker(this.props);

    this.setState({ marker });
  }

  render () {
    if (this.state.marker) {
      return (
        <MarkerCreator marker={this.state.marker} {...this.props}>
          {this.props.children}
        </MarkerCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}
