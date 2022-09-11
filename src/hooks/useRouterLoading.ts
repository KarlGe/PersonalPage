import { useState, useEffect } from "react";
import Router from "next/router";

export function useRouterLoading() {
  const [loading, setLoading] = useState(false);

  const routeChange = () => {
    console.log("routeChangeStart");
    setLoading(true);
  };
  const routeChangeEnd = () => {
    setLoading(false);
  };
  useEffect(() => {
    Router.events.on("routeChangeStart", routeChange);
    Router.events.on("routeChangeComplete", routeChangeEnd);
    Router.events.on("routeChangeError", routeChangeEnd);
    return () => {
      Router.events.off("routeChangeStart", routeChange);
      Router.events.off("routeChangeComplete", routeChangeEnd);
      Router.events.off("routeChangeError", routeChangeEnd);
    };
  }, [Router.events]);

  return loading;
}
