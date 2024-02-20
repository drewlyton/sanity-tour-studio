import { ActionFunctionArgs } from "@remix-run/node";
import { createFlow } from "data/createFlow.server";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.json();
  if (!body?.projectId || !body?.flowSlug)
    throw new Response("Invalid POST body", { status: 400 });

  return await createFlow(body);
}
