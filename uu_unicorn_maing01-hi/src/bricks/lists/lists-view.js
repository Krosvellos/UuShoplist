//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import ListsTile from "./lists-tile.js";
import { useJokes } from "../list-context.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ListsView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListsView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const { lists, currentListId, selectList } = useJokes();
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());

    return (
      <div {...attrs}>
        {lists.map((list) => {
          return <ListsTile key={list.id} list={list} selectList={selectList} selected={list.id === currentListId} />;
        })}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListsView };
export default ListsView;
//@@viewOff:exports
