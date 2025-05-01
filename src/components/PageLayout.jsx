
/**
 * A reusable page layout component for consistent page structure.
 *
 * @param {object} props - Component properties.
 * @param {import('solid-js').JSX.Element} props.children - The content to render within the layout.
 * @param {boolean} [props.reducedSpacing=false] - Whether to use reduced top spacing.
 * This is specifically used for the index page where we want less space between
 * the navigation menu and the main content. Other pages maintain the default spacing.
 */
export default function PageLayout(props) {
  const topPadding = props.reducedSpacing ? "pt-4" : "pt-20";
  const topMargin = props.reducedSpacing ? "mt-4" : "mt-20";

  return (
    <div class={`relative min-h-screen text-white p-5 ${topPadding}`}>
      <div class={`max-w-3xl mx-auto p-8 glass ${topMargin}`}>
        <div class="w-full mx-auto space-y-8 px-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}
