import { fetchNoteById } from "@/lib/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

type NoteDetailsProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: NoteDetailsProps) {
  const res = await params;
  const id = Number(res.id);
  const note = await fetchNoteById(id);

  return {
    title: `Note ${note.title}`,
    description: note.content,
    openGraph: {
      title: `Note ${note.title}`,
      description: note.content,
      url: "http://localhost:3000/",
      images: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
    },
  };
}

export default async function NoteDetails({ params }: NoteDetailsProps) {
  const res = await params;
  const queryClient = new QueryClient();
  const id = Number(res.id);

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}