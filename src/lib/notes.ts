import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type NoteEntry = CollectionEntry<"notes">;

export const NOTE_TYPES = ["读书笔记", "计算机", "论文", "随笔", "收藏"] as const;

export async function getPublishedNotes() {
  return (await getCollection("notes"))
    .filter((note) => !note.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

export function taxonomySlug(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

export function uniqueSorted(values: string[]) {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean))).sort(
    (a, b) => a.localeCompare(b, "zh-CN")
  );
}

export function collectCategories(notes: NoteEntry[]) {
  return uniqueSorted(notes.flatMap((note) => note.data.categories));
}

export function collectTags(notes: NoteEntry[]) {
  return uniqueSorted(notes.flatMap((note) => note.data.tags));
}

export function notesByType(notes: NoteEntry[]) {
  return NOTE_TYPES.map((type) => ({
    type,
    notes: notes.filter((note) => note.data.type === type)
  })).filter((group) => group.notes.length > 0);
}
