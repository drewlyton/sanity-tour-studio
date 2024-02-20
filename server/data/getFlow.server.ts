import groq from "groq";
import { Flow } from "./types";
import { sanity } from "./sanityClient.server";

export async function getFlow(props: { projectId: string; flowSlug: string }) {
  const flow = await sanity.fetch(groq`
  *[_type == 'flow'
      && flowTemplate->slug.current == '${props.flowSlug}'
      && projectId == '${props.projectId}'
    ]
  {
    _id,
    projectId,
    "name": flowTemplate->name,
    "slug": flowTemplate->slug.current,
    completedSteps[]->{
      _id, 
      "slug": slug.current,
    },
    "steps": flowTemplate->stepTemplates[]->{
      _id, 
      "slug": slug.current,
      content[]->,
      'conditionalStep': conditionalStep->slug.current
    }
  }[0]
`);

  if (!flow) return;
  return flow as Flow;
}
