//@@viewOn:imports
import { createVisualComponent} from "uu5g05";
import { Button } from "uu5g05-elements";
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ListProvider from "../bricks/joke/list-provider";
import ListView from "../bricks/joke/list-view";
import CreateView from "../bricks/joke/create-view";
import CreateUserView from "../bricks/joke/create-user-view.js";
import NewTitleView from "../bricks/joke/new-title-view.js";
import UserListView from "../bricks/joke/user-list-view.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css

const Css = {
  icon: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 0,
    }),
  screen: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column", // Change to column for smaller screens
      justifyContent: "space-around",
      "@media (min-width: 768px)": {
        flexDirection: "row", // Change back to row for larger screens
      },
    }),
  userListContainer: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 0, // Remove right margin for smaller screens
      gap: 10,
    }),
  ListButtons: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column", // Change to column for smaller screens
      gap: 10,
      "@media (min-width: 768px)": {
        flexDirection: "row", // Change back to row for larger screens
      },
    }),
};

//@@viewOff:cs
let Jokes = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Jokes",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <>
        <RouteBar />
        <ListProvider>
          {({
            jokeList,
            remove,
            update,
            create,
            removeUser,
            createUser,
            showResolved,
            setShowResolved,
            resolvedItems,
            changeListName,
          }) => (
            <div className={Css.screen()}>
              <div className={Css.userListContainer()}>
                <h1>USER LIST</h1>
                <CreateUserView onCreate={createUser} style={{ maxWidth: 400, display: "block" }} />
                <UserListView jokeList={jokeList} onDelete={removeUser} />
              </div>
              <div className={Css.icon()}>
                <h1> {jokeList.listName}</h1>
                <div className={Css.ListButtons()}>
                <NewTitleView changeListName={changeListName} style={{ maxWidth: 400, display: "block" }} />
                  <CreateView onCreate={create} style={{ maxWidth: 400, display: "block" }} />
                  <Button onClick={() => setShowResolved(!showResolved)}>resolved</Button>
                </div>
                <ListView
                  jokeList={jokeList}
                  showResolved={showResolved}
                  resolvedItems={resolvedItems}
                  onDelete={remove}
                  onUpdate={update}
                />
              </div>
            </div>
          )}
        </ListProvider>
      </>
    );
    //@@viewOff:render
  },
});

Jokes = withRoute(Jokes, { authenticated: true });

//@@viewOn:exports
export { Jokes };
export default Jokes;
//@@viewOff:exports
