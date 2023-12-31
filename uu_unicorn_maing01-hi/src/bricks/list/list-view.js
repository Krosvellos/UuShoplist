//@@viewOn:imports
import { createVisualComponent, PropTypes, Utils } from "uu5g05";
import { useAlertBus } from "uu5g05-elements";
import Buttonsing from "./buttonsing";
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
      width: 500,
      margin: "12px",
      "@media (max-width: 1000px)": {
        width: 400, // Adjust as needed for smaller screens
      },
      "@media (max-width: 768px)": {
        width: 350, // Adjust as needed for smaller screens
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
    shoppingList: [],
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
      const item = event.data;

      try {
        console.log(props.id)
        props.onDelete(props.id,item.id);
        addAlert({
<<<<<<< HEAD:uu_unicorn_maing01-hi/src/bricks/joke/list-view.js
          message: `The item ${list.name} has been deleted.`,
=======
          message: `The joke ${item.name} has been deleted.`,
>>>>>>> 79e40d883330a4aa136c140ad84a99f5b5a6a201:uu_unicorn_maing01-hi/src/bricks/list/list-view.js
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error deleting list", error);
        showError(error, "Deleting item failed!");
      }
    }

    function handleUpdate(event) {
      const id = event.data;

      try {
        props.onUpdate(props.id, id.id);
        addAlert({
          message: `The item ${id.name} has been resolved.`,
          priority: "success",
          durationMs: 2000,
        });
      } catch (error) {
        ListView.logger.error("Error resolving item", error);
        showError(error, "Resolving item failed!");
      }
    }
    //@@viewOff:private

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);

    return (
      <div {...attrs}>
        {props.showResolved
          ? props.resolvedItems.singleShoppingList.map((resolvedItem) => (
              <ResolvedTile key={resolvedItem.id} joke={resolvedItem} className={Css.listViewTile()} />
            ))
<<<<<<< HEAD:uu_unicorn_maing01-hi/src/bricks/joke/list-view.js
          : props.shoppingList.singleShoppingList.map((joke) => (
              <Buttonsing
                key={joke.id}
                joke={joke}
=======
          : props.shoppingList.singleShoppingList.map((item) => (
              <Tile
                key={item.id}
                joke={item}
>>>>>>> 79e40d883330a4aa136c140ad84a99f5b5a6a201:uu_unicorn_maing01-hi/src/bricks/list/list-view.js
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
export { ListView as ListView };
export default ListView;
//@@viewOff:exports
