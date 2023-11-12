//@@viewOn:imports
import React from "react";
import { createVisualComponent } from "uu5g05";
import { Config } from "uu5g05-dev";
import Uu5Elements from "uu5g05-elements";
import { Box, Text, Line, Button, DateTime } from "uu5g05-elements";
import Uu5TilesElements from "uu5tilesg02-elements";
//@@viewOff:imports

const Tile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: "Uu5TilesElements.Mock.Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.joke, event));
    }

    function handleUpdate(event) {
      props.onUpdate(new Utils.Event(props.joke, event));
    }
    //@@viewOn:private
    let { data, ...otherProps } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Uu5TilesElements.Tile {...otherProps} headerOverlap>
        {({ padding }) => {
          return (
            <>
              
              <div
                className={Config.Css.css({
                  paddingTop: padding.top,
                  paddingRight: padding.right,
                  paddingBottom: padding.bottom,
                  paddingLeft: padding.left,
                })}
              >
                <div>
                  
                  <strong>{data.speciesName}</strong>
                  <Uu5Elements.Icon icon="mdi-update" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Box significance="distinct">
            <Button icon="fa-check" onClick={handleUpdate}  tooltip="Resolve" />
            <Button icon="mdi-delete" onClick={handleDelete}  tooltip="Delete" />
          </Box>
                </div>
                
                
                
              </div>
              
            </>
          );
        }}
      </Uu5TilesElements.Tile>
    );
    //@@viewOff:render
  },
});

export default Tile;