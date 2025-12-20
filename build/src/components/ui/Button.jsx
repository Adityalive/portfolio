import { cn } from "../../lib/utils";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={cn(
        // 1. Base Styles (Layout & Typography)
        "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        // 2. Sizing & Spacing
        "h-9 px-4 py-2 text-sm",
        // 3. Colors (Dark mode friendly)
        "bg-zinc-900 text-white shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
        // 4. Allow overriding
        className
      )}
      {...props} // Pass down onClick, type="submit", etc.
    >
      {children}
    </button>
  );
}