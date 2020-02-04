import React, { Component } from 'react';
import './Map.css';
import { Graph } from 'react-d3-graph';
import dataJSON from '../data/mod_trains.json';
import Dock from 'react-dock';


class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: dataJSON
    };
  }

  onClickNode = id => {
    return (
      <Dock position='right' isVisible={true}>
        {}
        <div onClick={() => this.setState({ isVisible: false })}>'${id}'</div>
      </Dock>
    );
  };

 onClickLink = function(source, target) {
  window.alert(`Link between ${source} and ${target}`);
 };

  // onClickLink = source => {
  //   return (
  //     <Dock position='right' isVisible={this.state.isVisible}>
  //       {}
  //       <div onClick={() => this.setState({ isVisible: !this.state.isVisible })}>X</div>
  //     </Dock>
  //   );
  // }

  render() {

    const data = {
      nodes: this.state.data.nodes,
      links: this.state.data.links,
    };
    const myConfig = {
      // nodeHighlightBehavior: true,
      // linkHighlightBehavior: true,
      // collapsible: true,
      // panAndZoom: true,
      directed: true,
      focusAnimationDuration: 0,
      staticGraphWithDragAndDrop: true,
      node: {
        color: 'lightblue',
        size:120,
        highlightStrokeColor: 'green'
      },
      link: {
        highlightColor: 'lightgreen',
        renderLabel: true,
      },
      d3: {
        // linkLength: '400',
        // alphaTarget: 1,
        gravity: '-200',
      }
    };

    const graphProps = {
            id: "graph",
            data: data,
            config: myConfig,
            onClickNode: this.onClickNode,
            onClickLink: this.onClickLink
        };

    const v_width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    const v_height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    graphProps.config = Object.assign({}, graphProps.config, {
                height: v_height,
                width: v_width,
            });

    return (
      <Graph ref="graph" {...graphProps} />
    );
  }
}

export default Map;
