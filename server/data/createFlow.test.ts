import { createFlow } from "./createFlow.server";

it("should work", async () => {
  const resp = await createFlow({
    projectId: "1234",
    flowSlug: "onboarding-flow",
  });
  console.log(resp);
});
