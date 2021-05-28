export const viewsByTime = (questionId: number) => ({
  card: {
    name: "Views last 45 days",
    display: "bar",
    dataset_query: {
      type: "internal",
      fn:
        "metabase-enterprise.audit.pages.question-detail/cached-views-by-time",
      args: [questionId, "day"],
    },
  },
});

export const averageExecutionTime = (questionId: number) => ({
  card: {
    name: "Average execution time last 45 days",
    display: "line",
    dataset_query: {
      type: "internal",
      fn:
        "metabase-enterprise.audit.pages.question-detail/avg-execution-time-by-time",
      args: [questionId, "day"],
    },
  },
});

export const revisionHistory = (questionId: number) => ({
  card: {
    name: "Revision history",
    display: "table",
    dataset_query: {
      type: "internal",
      fn: "metabase-enterprise.audit.pages.question-detail/revision-history",
      args: [questionId],
    },
    visualization_settings: {
      "table.columns": [
        { name: "user_id", enabled: true },
        { name: "change_made", enabled: true },
        { name: "revision_id", enabled: true },
        { name: "timestamp", enabled: true, date_format: "M/D/YYYY, h:mm A" },
      ],
    },
  },
});

export const auditLog = (questionId: number) => ({
  card: {
    name: "Audit log",
    display: "table",
    dataset_query: {
      type: "internal",
      fn: "metabase-enterprise.audit.pages.question-detail/audit-log",
      args: [questionId],
    },
    visualization_settings: {
      "table.columns": [
        { name: "user_id", enabled: true },
        { name: "when", enabled: true },
      ],
    },
  },
});
