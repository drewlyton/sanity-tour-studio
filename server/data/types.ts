export type FlowTemplate = {
  _id: string;
  name: string;
  slug: string;
  stepTemplates: StepTemplate[] | null;
};

export type Flow = {
  _id: string;
  projectId: string;
  completedSteps: {
    _id: string;
    slug: string;
  };
  steps: StepTemplate[] | null;
};

export type StepTemplate = {
  _id: string;
  name: string;
  slug: string;
  content: Record<string, unknown>[] | null;
};
