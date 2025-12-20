import { cn } from "../../lib/utils";

// This component accepts 'children' (the content inside) and 'className' (custom styles)
export default function Container({ children, className }) {
  return (
    <div className={cn("max-w-4xl mx-auto px-4 w-full", className)}>
      {children}
    </div>
  );
}