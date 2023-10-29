//@@viewOn:imports
import { useEffect } from "uu5g05";
import { createComponent, Utils, useState } from "uu5g05";
import Config from "./config/config";
//@@viewOff:imports

const initialJokeList = {
  id: "xdd",
  listName: "Honzův list",
  userList: [
    { id: Utils.String.generateId(), name: "Honza" },
    { id: Utils.String.generateId(), name: "Jakub" },
    { id: Utils.String.generateId(), name: "Daniel" },
  ],
  singleShoppingList: [
    {
      id: Utils.String.generateId(),
      name: "Bunny ate the wedding ring!",
    },
    {
      id: Utils.String.generateId(),
      name: "F5",
    },
  ],

  resolvedShoppingLists: [
    {
      id: Utils.String.generateId(),
      name: "Joke with image",
    },
  ],
};

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [showResolved, setShowResolved] = useState(false);
    const [jokeList, setJokeList] = useState(initialJokeList);
    const [resolvedJokes, setResolvedJokes] = useState(initialJokeList.resolvedShoppingLists);

    useEffect(() => {
      console.log(resolvedJokes);
      console.log(jokeList.singleShoppingList);
    }, [resolvedJokes]);

    function remove(joke) {
      setJokeList((prevJokeList) => ({
        ...prevJokeList,
        singleShoppingList: prevJokeList.singleShoppingList.filter((item) => item.id !== joke.id),
      }));
    }

    function removeUser(joke) {
      setJokeList((prevJokeList) => ({
        ...prevJokeList,
        userList: prevJokeList.userList.filter((item) => item.id !== joke.id),
      }));
    }

    function create(values) {
      const joke = {
        ...values,
        id: Utils.String.generateId(),
        sys: {
          cts: new Date().toISOString(),
        },
      };

      setJokeList((prevJokeList) => ({
        ...prevJokeList,
        singleShoppingList: [...prevJokeList.singleShoppingList, joke],
      }));

      return joke;
    }

    function createUser(values) {
      const user = {
        ...values,
        id: Utils.String.generateId(),
      };

      setJokeList((prevUserList) => ({
        ...prevUserList,
        userList: [...prevUserList.userList, user],
      }));

      return user;
    }

    function update(id) {
      console.log("Updating joke with id:", id);
      setJokeList((prevJokeList) => {
        const updatedJoke = prevJokeList.singleShoppingList.find((item) => item.id === id);
        setResolvedJokes((prevResolved) => [...prevResolved, updatedJoke]);
        console.log("Joke updated. Moving to resolvedShoppingLists:", updatedJoke);

        return {
          ...prevJokeList,
          singleShoppingList: prevJokeList.singleShoppingList.filter((item) => item.id !== id),
          resolvedShoppingLists: [...prevJokeList.resolvedShoppingLists, updatedJoke],
        };
      });
    }

    function changeListName(value) {
      setJokeList((prevList) => ({
        ...prevList,
        listName: value,
      }));
    }

    //@@viewOff:private

    //@@viewOn:render
    const value = {
      jokeList,
      remove,
      update,
      create,
      removeUser,
      createUser,
      changeListName,
      showResolved,
      setShowResolved,
    };
    return typeof props.children === "function" ? props.children(value) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
