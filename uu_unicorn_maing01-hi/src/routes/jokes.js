//@@viewOn:imports
import { createVisualComponent } from "uu5g05";
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
      flexDirection: "column",
      alignItems: "center", // Change to column for smaller screens
      justifyContent: "center",
      
      "@media (min-width: 768px)": {
        flexDirection: "row", // Change back to row for larger screens
        marginRight: "20",
        marginTop: 20,
        marginLeft: "20"
      },
    }),
  userListContainer: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 60, // Remove right margin for smaller screens
      marginLeft: 60,
      marginTop: 0,
      gap: 10,
    }),
  ListButtons: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column", // Change to column for smaller screens
      gap: 5,
      "@media (min-width: 768px)": {
        flexDirection: "row", // Change back to row for larger screens
        gap: 50,
      },
      "@media (min-width: 1000px)": {
        flexDirection: "row", // Change back to row for larger screens
        gap: 100,
      },
    }),
};

//@@viewOff:cs
let listItems = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "listItems",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <>
        <RouteBar />
        <ListProvider>
          {({
            shoppingList,
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
                <h1 style={{fontSize: 22}}>Members:</h1>
                <CreateUserView onCreate={createUser} style={{ maxWidth: 400, display: "block" }} />
                <UserListView shoppingList={shoppingList} onDelete={removeUser} />
              </div>
              <div className={Css.icon()}>
                <h1> {shoppingList.listName}</h1>
                <div className={Css.ListButtons()}>
                <CreateView onCreate={create} style={{ maxWidth: 400, display: "block" }} />
                <Button onClick={() => setShowResolved(!showResolved)}>
                    {showResolved ? "Resolve!" : "Resolved"}
                  </Button>
                  <NewTitleView changeListName={changeListName} style={{ maxWidth: 400, display: "block" }} />
                  
                  
                </div>
                <ListView
                  shoppingList={shoppingList}
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

listItems = withRoute(listItems, { authenticated: true });

//@@viewOn:exports
export { listItems };
export default listItems;
//@@viewOff:exports
