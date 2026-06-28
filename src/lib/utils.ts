import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prepend the basePath so images resolve correctly when deployed to a GitHub Pages subpath.
// Set NEXT_PUBLIC_BASE_PATH=/thembh-demo in .env.production (or next.config env).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function getImagePath(src: string): string {
  return `${BASE_PATH}${src}`;
}
