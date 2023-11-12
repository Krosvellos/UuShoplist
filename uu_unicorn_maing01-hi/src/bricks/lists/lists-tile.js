//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { Box, Text, Line, Button, DateTime } from "uu5g05-elements";
import Config from "./config/config.js";
//@@viewOff:imports

const ListsTile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private

    const handleSelect = () => {
      props.selectList(props.list.id); // Call the context function to select the list
    };
    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    return (
      <Box {...elementProps} onClick={() => handleSelect()}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text category="interface" segment="title" type="minor" colorScheme="building" style={{ marginLeft: 50 }}>
           {props.list.listName}
          </Text>
          <Box significance="distinct">
            <Button icon="mdi-update"  significance="subdued" tooltip="Resolve" />
            <Button icon="mdi-delete"  significance="subdued" tooltip="Delete" />
          </Box>
        </div>
      </Box>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListsTile as Tile };
export default ListsTile;
//@@viewOff:exports
