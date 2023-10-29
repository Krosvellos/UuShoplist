//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { useAlertBus } from "uu5g05-elements";
import Tile from "./tile";
import Config from "./config/config.js";
//@@viewOff:imports

const ListView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    jokeList: [],
    onUpdate: () => {},
    onDelete: () => {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { addAlert } = useAlertBus();

    function showError(error, header = "") {
      addAlert({
        header,
        message: error.message,
        priority: "error",
      });
    }

    function handleDelete(event) {
      const joke = event.data;

      try {
        props.onDelete(joke);
        addAlert({
          message: `The joke ${joke.name} has been deleted.`,
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error deleting joke", error);
        showError(error, "Joke delete failed!");
      }
    }

    function handleUpdate(event) {
      const id = event.data;
     
      try {
        props.onUpdate(id.id);
        addAlert({
          message: `The joke ${joke.name} has been updated.`,
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error updating joke", error + "ID OF ERROR " +id.id);
        showError(error, "Joke update failed!");
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);

    return (
      <div {...attrs}>
        {props.showResolved
          ? props.jokeList.resolvedShoppingLists.map((joke) => (
              <Tile
                key={joke.id}
                joke={joke}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                style={{ width: 1000, margin: "24px auto" }}
              />
            ))
          : props.jokeList.singleShoppingList.map((joke) => (
              <Tile
                key={joke.id}
                joke={joke}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                style={{ width: 1000, margin: "24px auto" }}
              />
            ))}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListView };
export default ListView;
//@@viewOff:exports