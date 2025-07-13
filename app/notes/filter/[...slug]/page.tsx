import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  return {
    title: `Notes ${slug[0]}`,
    description: `Notes sorted by tag ${slug[0]}`,
    openGraph: {
      title: `Notes ${slug[0]}`,
      description: `Notes sorted by tag ${slug[0]}`,
      url: "http://localhost:3000/",
      images: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
    },
  };
}

export default async function Notes({ params }: Props) {
  const { slug } = await params;

  const tagQuery = slug[0] === "all" ? "" : slug[0];

  const notesData = await fetchNotes("", 1, tagQuery);

  return (
    <div>
      <NotesClient tagQuery={tagQuery} initialData={notesData} />
    </div>
  );
}