import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

/*
  This file contains custom hooks that are used in the app. Custom hooks are functions that can be used to create reusable stateful logic.
  I'm just using copilot to generate this documentation, but
  I'll attempt to write documentation for each hook it fails on, i'll most likely forget eventually tbh.
*/

// This code is used to create a custom hook that uses the useEffect hook to set the height of the app to the window height so that the app can be viewed properly on mobile devices.
export function useResizeEffect() {
  useEffect(() => {
    const handleResize = () => {
      if (window) {
        let vh = window.innerHeight;
        document.documentElement.style.setProperty("--app-height", `${vh}px`);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
}

// This code is used to create a custom hook that uses the react-intersection-observer npm package (https://www.npmjs.com/package/react-intersection-observer)
// to determine if a component is in view or not. It also uses the useEffect hook to set a state variable to true or false depending on if the component is in view.
export function useInViewStateAndEffect(threshold, name = "null") {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    inView ? setIsVisible(true) : setIsVisible(false);
  }, [inView, setIsVisible]);

  return { ref, isVisible };
}

export function useChangeNotchColor() {
  const [notchColor, setNotchColor] = useState({
    theme: "#161724",
    style: "black-translucent",
  });

  return { notchColor, setNotchColor };
}
