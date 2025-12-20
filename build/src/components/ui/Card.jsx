import { cn } from "../../lib/utils";

export default function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        // Base styles: rounded corners, border, background color
        "rounded-xl border border-zinc-800 bg-zinc-900/50 p-6",
        // Text styles
        "text-zinc-100",
        // Override styles
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}