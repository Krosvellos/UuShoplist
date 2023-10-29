//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { useAlertBus } from "uu5g05-elements";
import Tile from "./tile";
import ResolvedTile from "./resolved-tile";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:css
const Css = {
  // ... (your existing styles)

  listViewContainer: () =>
    Config.Css.css({
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }),

  listViewTile: () =>
    Config.Css.css({
      width: 800,
      margin: "24px",
      "@media (max-width: 1000px)": {
        width: 550, // Adjust as needed for smaller screens
      },
      "@media (max-width: 768px)": {
        width: 400, // Adjust as needed for smaller screens
      },
      // Add more media queries for different screen sizes if necessary
    }),
};

//@@viewOff:css

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
          message: `The item ${id.name} has been resolved.`,
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error resolving item", error + "ID OF ERROR " + id.id);
        showError(error, "Item resolve failed!");
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);

    return (
      <div {...attrs}>
        {props.showResolved
          ? props.jokeList.resolvedShoppingLists.map((joke) => (
              <ResolvedTile key={joke.id} joke={joke} className={Css.listViewTile()} />
            ))
          : props.jokeList.singleShoppingList.map((joke) => (
              <Tile
                key={joke.id}
                joke={joke}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                className={Css.listViewTile()}
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
