import { getFlowTemplate } from "./getFlowTemplate.server";
import { sanity } from "./sanityClient.server";

export async function createFlow(props: {
  projectId: string;
  flowSlug: string;
}) {
  // Get Flow template
  const flowTemplate = await getFlowTemplate({ slug: props.flowSlug });
  if (!flowTemplate)
    throw Error(
      "Couldn't find FlowTemplate matching that slug when creating new Flow"
    );
  // Create Flow with ProjectId
  return sanity.create({
    _type: "flow",
    projectId: props.projectId,
    completedSteps: [],
    flowTemplate: { _type: "reference", _ref: flowTemplate._id },
  });
}
