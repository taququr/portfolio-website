import { Project } from "@/sanity.types";

export const getMetricTextColor = (metric: Project["metrics"] | undefined): string => {
  if (!metric) return "text-gray-600 dark:text-gray-400";

  switch (metric.status) {
    case "On-going":
      return "text-sky-700 dark:text-sky-400";
    case "Completed":
      return "text-emerald-600 dark:text-emerald-400";
    case "Maintenance":
      return "text-amber-600 dark:text-amber-400";
    case "Active Development":
      return "text-violet-600 dark:text-violet-400";
    default:
      return "text-gray-600 dark:text-gray-400";
  }
};
