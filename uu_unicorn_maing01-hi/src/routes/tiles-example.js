//@@viewOn:imports
import { Utils, createVisualComponent, useState } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Uu5Tiles from "uu5tilesg02";
import Uu5TilesControls from "uu5tilesg02-controls";
import Uu5TilesElements from "uu5tilesg02-elements";

import Tile from "../bricks/joke/tile-lists.js";

import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";

//@@viewOff:imports

//@@viewOn:constants
const DATA = [
  {
    id: "list01",
    speciesName: "Westfall Stew",
    speciesTaxonomyName: "Panthera tigris",
    class: "Current",
    order: "Carnivora",
    family: "Felidae",
    location: "Asia",
    description: "",
    img: "tygr_01",
  },
  {
    id: "list02",
    speciesName: "Dragonbreath Chilli",
    speciesTaxonomyName: "Papio hamadryas",
    class: "Current",
    order: "Primates",
    family: "Cercopithecidae",
    location: "Africa",
    description: "",
    img: "pavian_01",
  },
  {
    id: "list03",
    speciesName: "Gingerbread Cookies",
    speciesTaxonomyName: "Sapajus xanthostemos",
    class: "Current",
    order: "Primates",
    family: "Cebidae",
    location: "America",
    description: "",
    img: "malpa_01",
  },
  {
    id: "list04",
    speciesName: "Spiced Wolf Meat",
    speciesTaxonomyName: "Pygathrix nemaeus",
    class: "Current",
    order: "Primates",
    family: "Cercopithecidae",
    location: "Asia",
    description: "",
    img: "langur_01",
  },
  {
    id: "list05",
    speciesName: "Poached Sunscale Salmon",
    speciesTaxonomyName: "Pongo abelii",
    class: "Archived",
    order: "Primates",
    family: "Hominidae",
    location: "Asia",
    description: "",
    img: "orangutan_01",
  },
  {
    id: "list06",
    speciesName: "Goldthorn Tea",
    speciesTaxonomyName: "Varanus komodoensis",
    class: "Archived",
    order: "Squamata",
    family: "Varanidae",
    location: "Asia",
    description: "",
    img: "varan_02",
  },
];

const CLASS_LIST = [];
for (let item of DATA) {
  let itemClass = item.class;
  if (CLASS_LIST.indexOf(itemClass) === -1) CLASS_LIST.push(itemClass);
}

const FILTER_LIST = [
  
  {
    key: "class",
    label: "Filter",
    filter: (item, value) => {
      return value.some((frag) => {
        let itemValue = typeof item.class === "object" ? Utils.Language.getItem(item.class) : item.class;
        return itemValue.toLowerCase().indexOf(frag.toLowerCase()) !== -1;
      });
    },
    inputType: "select",
    inputProps: {
      multiple: true,
      itemList: CLASS_LIST.map((it) => ({ value: it, children: it })),
      placeholder: { en: "Enter value", cs: "Zadejte hodnotu" },
    },
  },
];

const SORTER_LIST = [
  {
    key: "speciesName",
    label: "Name",
    sort: (a, b) => a.speciesName.localeCompare(b.speciesName),
  },
];
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let TilesExample = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TilesExample",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [filterList, setFilterList] = useState([]);
    const [sorterList, setSorterList] = useState([]);

    function onFilterChange(e) {
      setFilterList(e.data.filterList);
    }

    function onSorterChange(e) {
      setSorterList(e.data.sorterList);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        <div className={Config.Css.css({ padding: "16px 32px" })}>
          <Uu5Tiles.ControllerProvider
            data={DATA}
            filterDefinitionList={FILTER_LIST}
            filterList={filterList}
            onFilterChange={onFilterChange}
            sorterDefinitionList={SORTER_LIST}
            sorterList={sorterList}
            onSorterChange={onSorterChange}
          >
            <Uu5TilesControls.FilterButton />
            
            <Uu5TilesControls.SearchButton />
            <Uu5TilesControls.FilterBar  />
            
            <Uu5TilesControls.Counter />
            <Uu5TilesElements.Grid tileMinWidth={100} tileMaxWidth={200}>
              {Tile}
            </Uu5TilesElements.Grid>
          </Uu5Tiles.ControllerProvider>
          
          
        </div>  
      </div>
    );
    //@@viewOff:render
  },
});

TilesExample = withRoute(TilesExample, { authenticated: true });

//@@viewOn:exports
export { TilesExample };
export default TilesExample;
//@@viewOff:exports