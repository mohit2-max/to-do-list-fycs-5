import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudySync — Student Productivity Workspace" },
      { name: "description", content: "A calm, minimalist to-do and focus workspace for students." },
      { property: "og:title", content: "StudySync — Student Productivity Workspace" },
      { property: "og:description", content: "A calm, minimalist to-do and focus workspace for students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Preview wrapper: the real app is a standalone vanilla HTML file in /public.
function Index() {
  return <iframe src="/studysync.html" title="StudySync" className="block h-screen w-full border-0" />;
}
