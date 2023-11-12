//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { Box, Text, Line, Button, DateTime } from "uu5g05-elements";
import Config from "./config/config.js";
//@@viewOff:imports

const UserTile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "UserTile",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onDelete: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    function handleDelete(event) {
      props.onDelete(new Utils.Event(props.joke, event));
    }

    // function handleUpdate(event) {
    //   props.onUpdate(new Utils.Event(props.joke, event));
    // }
    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    return (
      

<Box {...elementProps}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text category="interface" segment="title" type="minor" colorScheme="building" style={{ marginLeft: 10 }}>
          {props.joke.name}
        </Text>
          <Box significance="distinct">
          <Button icon="mdi-delete" onClick={handleDelete} significance="subdued" tooltip="Delete" />
      </Box>
        </div>
      </Box>

    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { UserTile };
export default UserTile;
//@@viewOff:exports
