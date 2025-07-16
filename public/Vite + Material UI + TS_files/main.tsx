import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c1a85645"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=c1a85645"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport1_react);
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=c1a85645"; const ReactDOM = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport2_reactDom_client);
import App from "/src/App.tsx?t=1752655650374";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=c1a85645";
import { ErrorBoundary } from "/node_modules/.vite/deps/react-error-boundary.js?v=c1a85645";
import "/src/main.css?t=1752655613001";
const queryClient = new QueryClient();
function fallbackRender({ error }) {
  return /* @__PURE__ */ jsxDEV("div", { role: "alert", children: [
    /* @__PURE__ */ jsxDEV("p", { children: "Something went wrong:" }, void 0, false, {
      fileName: "D:/dev/eugene/src/main.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("pre", { style: { color: "red" }, children: error.message }, void 0, false, {
      fileName: "D:/dev/eugene/src/main.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "D:/dev/eugene/src/main.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(ErrorBoundary, { fallbackRender, children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "D:/dev/eugene/src/main.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "D:/dev/eugene/src/main.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "D:/dev/eugene/src/main.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "D:/dev/eugene/src/main.tsx",
    lineNumber: 40,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0NVO0FBaENWLFlBQVlBLFdBQVc7QUFDdkIsWUFBWUMsY0FBYztBQUMxQixPQUFPQyxTQUFTO0FBQ2hCLFNBQVNDLGFBQWFDLDJCQUEyQjtBQUNqRCxTQUFTQyxxQkFBeUM7QUFTbEQsT0FBTztBQWNQLE1BQU1DLGNBQWMsSUFBSUgsWUFBWTtBQUVwQyxTQUFTSSxlQUFlLEVBQUVDLE1BQXFCLEdBQUc7QUFDaEQsU0FDSSx1QkFBQyxTQUFJLE1BQUssU0FDTjtBQUFBLDJCQUFDLE9BQUUscUNBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF3QjtBQUFBLElBQ3hCLHVCQUFDLFNBQUksT0FBTyxFQUFFQyxPQUFPLE1BQU0sR0FBSUQsZ0JBQU1FLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNkM7QUFBQSxPQUZqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0E7QUFFTjtBQUVBVCxTQUFTVSxXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBRSxFQUFFQztBQUFBQSxFQUNwRCx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxpQkFBYyxnQkFDYixpQ0FBQyx1QkFBb0IsUUFBUVIsYUFDM0IsaUNBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUEsS0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUE7QUFDRiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJFcnJvckJvdW5kYXJ5IiwicXVlcnlDbGllbnQiLCJmYWxsYmFja1JlbmRlciIsImVycm9yIiwiY29sb3IiLCJtZXNzYWdlIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSwgdHlwZSBGYWxsYmFja1Byb3BzIH0gZnJvbSBcInJlYWN0LWVycm9yLWJvdW5kYXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgICBpbml0LFxyXG4gICAgaXNUTUEsXHJcbiAgICBtaW5pQXBwLFxyXG4gICAgc3dpcGVCZWhhdmlvcixcclxufSBmcm9tIFwiQHRlbGVncmFtLWFwcHMvc2RrLXJlYWN0XCI7XHJcbmltcG9ydCB7IE9wZW5BUEkgfSBmcm9tIFwiLi9hcGkvZ2VuZXJhdGVkXCI7XHJcbmltcG9ydCB7IHJldHJpZXZlTGF1bmNoUGFyYW1zIH0gZnJvbSAnQHRtYS5qcy9zZGsnO1xyXG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xyXG4vLyBpbml0KCk7XHJcbi8vIG1pbmlBcHAubW91bnQuaWZBdmFpbGFibGUoKTtcclxuLy8gbWluaUFwcC5yZWFkeS5pZkF2YWlsYWJsZSgpO1xyXG4vLyBzd2lwZUJlaGF2aW9yLm1vdW50LmlmQXZhaWxhYmxlKCk7XHJcbi8vIHN3aXBlQmVoYXZpb3IuZGlzYWJsZVZlcnRpY2FsLmlmQXZhaWxhYmxlKCk7XHJcblxyXG4vLyBjb25zdCB7IGluaXREYXRhUmF3IH0gPSByZXRyaWV2ZUxhdW5jaFBhcmFtcygpO1xyXG4vLyBpZiAoaW5pdERhdGFSYXcgJiYgaXNUTUEoKSkge1xyXG4vLyAgIE9wZW5BUEkuSEVBREVSUyA9IHtcclxuLy8gICAgIEF1dGhvcml6YXRpb246IFN0cmluZyhpbml0RGF0YVJhdyksXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIGZhbGxiYWNrUmVuZGVyKHsgZXJyb3IgfTogRmFsbGJhY2tQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICA8cD5Tb21ldGhpbmcgd2VudCB3cm9uZzo8L3A+XHJcbiAgICAgICAgICA8cHJlIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PntlcnJvci5tZXNzYWdlfTwvcHJlPlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykhKS5yZW5kZXIoXHJcbiAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICA8RXJyb3JCb3VuZGFyeSBmYWxsYmFja1JlbmRlcj17ZmFsbGJhY2tSZW5kZXJ9PiAgICAgIFxyXG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxyXG4pO1xyXG4iXSwiZmlsZSI6IkQ6L2Rldi9ldWdlbmUvc3JjL21haW4udHN4In0=