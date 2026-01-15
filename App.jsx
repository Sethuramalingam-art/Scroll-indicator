import "./App.css";
import React, { useState } from "react";
import FeatureFlagProvider from "../src/FeatureFlag";
import Example from "./Example";

import MultistepComp from "./MultistepComp";
import AutoComplete from "./AutoComplete";
import InfiniteScroll from "./InfiniteScroll";
import CustomSwitch from "./CustomSwitch";
import CustomCase from "./CustomCase";
import DefaultCase from "./DefaultCase";
import Pagination from "./Pagination";
import Timer from "./Timer";
import ClockTimer from "./ClockTimer";
import ContinuePress from "./ContinuePress";
import TodoList from "./TodoList";
import ResponsiveSlide from "./ResponsiveSlide";
import Traffic from "./Traffic";
import FileExplorer from "./FileExplorer";
import Cursor from "./Cursor";
import Login from "./Login";
import BatchApi from "./BatchApi";
import ImageZoom from "./ImageZoom";
import ScrollIndicator from "./ScrollIndicator";

function App() {
  // const [arr, setArr] = useState([1,2,3]);
  // const [val, setVal] = useState(4);
  // const click = () => {
  //   console.log(arr)
  //   setArr([...arr, 4])
  //   setVal(val+1);
  //   setVal(val+1);
  //   setVal( val+1);
  //   setVal(val+1);
  //   setVal(val+1);
  //   setVal( val+1);
  //   console.log(val)
  // }
  // return (
  //   <div className="App">
  //     {arr.map((a) => {
  //       return <>{a}</>
  //     })}
  //     <button onClick={click}>click</button>
  //   </div>
  // );
  // return <FeatureFlagProvider>
  //   <Example/>
  // </FeatureFlagProvider>
  // return <MultistepComp list="5"></MultistepComp>
  // return <AutoComplete></AutoComplete>
  // return <InfiniteScroll></InfiniteScroll>;
  // return (
  //   <>
  //     <CustomSwitch value="30">
  //       <CustomCase value={(e) => e < 10}>
  //         <div>Hello 20</div>
  //       </CustomCase>
  //       <CustomCase value="20">This is 20</CustomCase>
  //       <CustomCase value="30">This is 30</CustomCase>
  //       <DefaultCase>This is Default Case</DefaultCase>
  //     </CustomSwitch>
  //   </>
  // );
  // return <Pagination></Pagination>;
  // return <Timer></Timer>;
  // return <ClockTimer></ClockTimer>;
  // return <ContinuePress></ContinuePress>;
  // return <TodoList></TodoList>;
  // return <ResponsiveSlide></ResponsiveSlide>;
  // return <Traffic></Traffic>;
  // return <FileExplorer></FileExplorer>;
  // return <Cursor></Cursor>;
  // return <Login></Login>;
  // return <BatchApi></BatchApi>;
  // const url =
  //   "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg";
  // return <ImageZoom url={url}></ImageZoom>;

  return <ScrollIndicator></ScrollIndicator>;
}

export default App;
