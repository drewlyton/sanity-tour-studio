'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sanity = require('sanity');
var jsxRuntime = require('react/jsx-runtime');
var icons = require('@sanity/icons');
var ui = require('@sanity/ui');
var jotai = require('jotai');
var react = require('react');

const useLocation = () => {
  const [currentURL, setCurrentURL] = react.useState(window.location.pathname);
  react.useEffect(() => {
    const handleURLChange = (event) => {
      const url = new URL(event.destination.url);
      setCurrentURL(url.pathname);
    };
    navigation.addEventListener("navigate", handleURLChange);
    return () => {
      navigation.removeEventListener("navigate", handleURLChange);
    };
  }, []);
  return currentURL;
};

const showPanel = jotai.atom(false);
function RightSidePanel() {
  const [state] = jotai.useAtom(showPanel);
  const currentPath = useLocation();
  console.log({ currentPath });
  const isVision = currentPath === "/vision";
  if (state)
    return /* @__PURE__ */ jsxRuntime.jsxs(ui.Card, { padding: [3, 3, 4], radius: 2, shadow: 1, tone: "primary", children: [
      /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { size: 4, style: { paddingBottom: "3em" }, children: "Get Started" }),
      isVision ? /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { children: "Some info about Vision " }) : /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { children: "This is a right sidebar. " })
    ] });
}
function CustomLayout(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(jotai.Provider, { children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { height: "fill", children: [
    /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { flex: 1, children: props.renderDefault(props) }),
    /* @__PURE__ */ jsxRuntime.jsx(RightSidePanel, {})
  ] }) });
}
function CustomNavBar(props) {
  const [state, setState] = jotai.useAtom(showPanel);
  const togglePanel = () => {
    setState(!state);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { align: "center", children: [
    /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { flex: 1, children: props.renderDefault(props) }),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Card, { scheme: "dark", paddingRight: 2, children: /* @__PURE__ */ jsxRuntime.jsx(ui.Button, { icon: icons.HomeIcon, onClick: togglePanel }) })
  ] });
}

const MyCoolComponent = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(ui.Grid, { columns: 3, gap: 4, padding: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsx(ui.Card, { padding: 4, tone: "positive", children: /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { children: "Update your Schema." }) }),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Card, { padding: 4, tone: "critical", children: /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { children: "Query with GROQ." }) }),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Card, { padding: 4, tone: "primary", children: /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { children: "Invite a Collaborator." }) })
  ] });
};
const onboardingTool = (config) => ({
  name: "onboarding-tool",
  title: "Get Started",
  component: MyCoolComponent,
  ...config
});

const myPlugin = sanity.definePlugin((config = {}) => {
  return {
    name: "sanity-plugin-onboarding",
    tools: [onboardingTool()],
    studio: {
      components: {
        layout: CustomLayout,
        navbar: CustomNavBar
      }
    }
  };
});

exports.myPlugin = myPlugin;
//# sourceMappingURL=index.js.map
