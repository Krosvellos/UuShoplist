//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils, useState } from "uu5g05";
import { Button, useAlertBus } from "uu5g05-elements";
import NewTitleForm from "./new-title-form.js";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
const Mode = {
  BUTTON: "BUTTON",
  FORM: "FORM",
};
//@@viewOff:constants

//@@viewOn:helpers
function NewTitleButton(props) {
  return (
    <Button {...props} colorScheme="primary" significance="highlighted">
      change title
    </Button>
  );
}
//@@viewOff:helpers

const NewTitleView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateUserView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onCreate: PropTypes.func,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onCreate: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { addAlert } = useAlertBus();
    const [mode, setMode] = useState(Mode.BUTTON);

    function handleSubmit(event) {
      let joke;

      try {
        joke = props.changeListName(event.data.value);
        console.log(joke);
      } catch (error) {
        // We pass Error.Message instance to the Uu5Forms.Form that shows alert
        throw new Utils.Error.Message("Joke create failed!", error);
      }

      addAlert({
        message: `Joke ${joke.name} has been created.`,
        priority: "success",
        durationMs: 2000,
      });

      setMode(Mode.BUTTON);
    }
    //@@viewOff:private

    //@@viewOn:render
    const { elementProps } = Utils.VisualComponent.splitProps(props);

    switch (mode) {
      case Mode.BUTTON:
        return <NewTitleButton {...elementProps} onClick={() => setMode(Mode.FORM)} />;
      default:
        return <NewTitleForm {...elementProps} onSubmit={handleSubmit} onCancel={() => setMode(Mode.BUTTON)} />;
    }
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewTitleView };
export default NewTitleView;
//@@viewOff:exports
