import { Metadata } from "next";
import css from "./Home.module.css";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "All your notes in a convenient web application",
  openGraph: {
    title: "NoteHub",
    description: "All your notes in a convenient web application",
    url: "http://localhost:3000/",
    images: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}