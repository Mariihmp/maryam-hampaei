export interface Contribution {
  repo: string;
  repoUrl: string;
  description: string;
  prs: number;
  type: "feature" | "bugfix" | "docs" | "review";
  date: string;
}

export const contributions: Contribution[] = [
  {
    repo: "huggingface/transformers",
    repoUrl: "https://github.com/huggingface/transformers",
    description: "Added safety evaluation utilities for text generation pipelines",
    prs: 3,
    type: "feature",
    date: "2024-10",
  },
  {
    repo: "mlflow/mlflow",
    repoUrl: "https://github.com/mlflow/mlflow",
    description: "Fixed model registry race condition in concurrent deployments",
    prs: 1,
    type: "bugfix",
    date: "2024-09",
  },
  {
    repo: "TransformerLensOrg/TransformerLens",
    repoUrl: "https://github.com/TransformerLensOrg/TransformerLens",
    description: "Contributed activation patching tutorial and utility functions",
    prs: 2,
    type: "feature",
    date: "2024-08",
  },
  {
    repo: "great-expectations/great_expectations",
    repoUrl: "https://github.com/great-expectations/great_expectations",
    description: "Improved documentation for custom expectation development",
    prs: 1,
    type: "docs",
    date: "2024-07",
  },
  {
    repo: "pytorch/pytorch",
    repoUrl: "https://github.com/pytorch/pytorch",
    description: "Reviewed and tested torch.compile optimization PRs",
    prs: 4,
    type: "review",
    date: "2024-06",
  },
];

export interface Talk {
  title: string;
  event: string;
  date: string;
  slidesUrl?: string;
  videoUrl?: string;
  description: string;
}

export const talks: Talk[] = [
  {
    title: "Practical AI Safety for ML Engineers",
    event: "MLOps Community Meetup",
    date: "2024-10-15",
    slidesUrl: "#",
    description:
      "A practical guide to implementing safety guardrails in production ML systems, covering input validation, output filtering, and monitoring for harmful behaviors.",
  },
  {
    title: "Mechanistic Interpretability: From Theory to Practice",
    event: "AI Safety Camp 2024",
    date: "2024-08-20",
    slidesUrl: "#",
    videoUrl: "#",
    description:
      "Workshop on using TransformerLens for mechanistic interpretability research, with hands-on exercises in activation patching and circuit discovery.",
  },
  {
    title: "Building Robust ML Pipelines at Scale",
    event: "PyCon 2024",
    date: "2024-05-10",
    slidesUrl: "#",
    videoUrl: "#",
    description:
      "Lessons learned from building and operating ML pipelines processing millions of predictions daily, with emphasis on monitoring and reliability.",
  },
];
