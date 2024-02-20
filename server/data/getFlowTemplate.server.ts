import groq from "groq";
import { FlowTemplate } from "./types";
import { sanity } from "./sanityClient.server";

export async function getFlowTemplate(props: { slug: string }) {
  const flowTemplate = await sanity.fetch(groq`
  *[_type == 'flowTemplate' && slug.current == '${props.slug}']{
    _id,
    name,
    'slug': slug.current,
    stepTemplates[]->{name, _id, slug, content[]->}
  }[0]`);
  if (!flowTemplate) return;
  return flowTemplate as FlowTemplate;
}
