import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

const router = createRouter([{ name: "default", path: "*route" }]);
router.usePlugin(
  browserPlugin({
    useHash: true
  })
);
router.start();

export const subscribeToRouteChanges = (handler) => {
    handler({
        route: router.getState()
    });
    return router.subscribe(handler);
}