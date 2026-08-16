import rss from "@astrojs/rss";
import { getPublishedNotes } from "@/lib/notes";

export async function GET(context) {
  const notes = await getPublishedNotes();

  return rss({
    title: "Tsomoore Notes",
    description: "读书、计算机、论文和随笔的个人知识库。",
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      pubDate: note.data.date,
      description: note.data.description,
      link: `/notes/${note.id}/`,
      categories: [...note.data.categories, ...note.data.tags]
    }))
  });
}
