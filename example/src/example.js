import React, {Component} from 'react';
import SortablePane, {Pane} from '../../src';

const style = {
  fontSize: "40px",
  textAlign:"center",
  paddingTop:"30px",
  height:"400px",
  border: "solid 1px #ccc",
  borderRadius: "5px",
  backgroundColor: "#fff"
};

export default class Example extends Component{
  render() {
    return (
      <SortablePane marginRight={10}>
        <Pane
           width={200}
           height={500}
           style={style}>
          A
        </Pane>
        <Pane
           width={300}
           height={400}
           style={style}>
          B
        </Pane>
        <Pane
           width={100}
           height={400}
           style={style}>
          C
        </Pane>
      </SortablePane>
    );
  }
}
