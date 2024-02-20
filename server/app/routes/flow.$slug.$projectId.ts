import { LoaderFunctionArgs } from "@remix-run/node";
import { getFlow } from "data/getFlow.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug, projectId } = params;
  if (!slug) throw new Response("Please provide a Flow slug", { status: 400 });
  if (!projectId)
    throw new Response("Please provide a project ID", { status: 400 });

  return await getFlow({ projectId, flowSlug: slug });
}
