// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges tailwind classes intelligently.
 * Example: cn("bg-red-500", "bg-blue-500") -> "bg-blue-500" (Red is removed)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}