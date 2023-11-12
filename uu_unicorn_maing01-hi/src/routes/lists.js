//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import RouteBar from "../core/route-bar.js";
import Config from "./config/config.js";
import { useJokes } from "../bricks/list-context.js";
import ListsView from "../bricks/lists/lists-view.js";
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

let Lists = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Jokes",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
        const { currentListId, remove } = useJokes();
        //console.log(currentListId);
    return (
      <>
        <RouteBar />
        <ListsView onDelete={remove} />
      </>
    );
    //@@viewOff:render
  },
});

Lists = withRoute(Lists, { authenticated: true });

//@@viewOn:exports
export { Lists };
export default Lists;
//@@viewOff:exports
