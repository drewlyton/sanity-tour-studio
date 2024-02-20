import { definePlugin } from 'sanity';
import { jsx, jsxs } from 'react/jsx-runtime';
import { HomeIcon } from '@sanity/icons';
import { Flex, Box, Card, Button, Text, Grid } from '@sanity/ui';
import { atom, Provider, useAtom } from 'jotai';
import { useState, useEffect } from 'react';

const useLocation = () => {
  const [currentURL, setCurrentURL] = useState(window.location.pathname);
  useEffect(() => {
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

const showPanel = atom(false);
function RightSidePanel() {
  const [state] = useAtom(showPanel);
  const currentPath = useLocation();
  console.log({ currentPath });
  const isVision = currentPath === "/vision";
  if (state)
    return /* @__PURE__ */ jsxs(Card, { padding: [3, 3, 4], radius: 2, shadow: 1, tone: "primary", children: [
      /* @__PURE__ */ jsx(Text, { size: 4, style: { paddingBottom: "3em" }, children: "Get Started" }),
      isVision ? /* @__PURE__ */ jsx(Text, { children: "Some info about Vision " }) : /* @__PURE__ */ jsx(Text, { children: "This is a right sidebar. " })
    ] });
}
function CustomLayout(props) {
  return /* @__PURE__ */ jsx(Provider, { children: /* @__PURE__ */ jsxs(Flex, { height: "fill", children: [
    /* @__PURE__ */ jsx(Box, { flex: 1, children: props.renderDefault(props) }),
    /* @__PURE__ */ jsx(RightSidePanel, {})
  ] }) });
}
function CustomNavBar(props) {
  const [state, setState] = useAtom(showPanel);
  const togglePanel = () => {
    setState(!state);
  };
  return /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
    /* @__PURE__ */ jsx(Box, { flex: 1, children: props.renderDefault(props) }),
    /* @__PURE__ */ jsx(Card, { scheme: "dark", paddingRight: 2, children: /* @__PURE__ */ jsx(Button, { icon: HomeIcon, onClick: togglePanel }) })
  ] });
}

const MyCoolComponent = () => {
  return /* @__PURE__ */ jsxs(Grid, { columns: 3, gap: 4, padding: 4, children: [
    /* @__PURE__ */ jsx(Card, { padding: 4, tone: "positive", children: /* @__PURE__ */ jsx(Text, { children: "Update your Schema." }) }),
    /* @__PURE__ */ jsx(Card, { padding: 4, tone: "critical", children: /* @__PURE__ */ jsx(Text, { children: "Query with GROQ." }) }),
    /* @__PURE__ */ jsx(Card, { padding: 4, tone: "primary", children: /* @__PURE__ */ jsx(Text, { children: "Invite a Collaborator." }) })
  ] });
};
const onboardingTool = (config) => ({
  name: "onboarding-tool",
  title: "Get Started",
  component: MyCoolComponent,
  ...config
});

const myPlugin = definePlugin((config = {}) => {
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

export { myPlugin };
//# sourceMappingURL=index.esm.js.map
