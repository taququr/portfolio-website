import { ProjectMetrics } from "./projects";

export const getMetricTextColor = (metric: ProjectMetrics | undefined): string => {
  if (!metric) return "text-gray-500 dark:text-gray-400";

  switch (metric.status) {
    case "On-going":
      return "text-sky-400 dark:text-sky-500";
    case "Completed":
      return "text-emerald-400 dark:text-emerald-500";
    case "Maintenance":
      return "text-amber-400 dark:text-amber-500";
    default:
      return "text-gray-500 dark:text-gray-400";
  }
};
