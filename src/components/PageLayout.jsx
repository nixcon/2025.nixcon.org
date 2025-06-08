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
  const pt = props.reducedSpacing ? "pt-30" : "pt-60"

  return (
    <div class={`relative min-h-screen text-white w-full`}>
      <div
        class={`p-5 sm:p-10 lg:p-30 ${pt} backdrop-blur-md w-full grain border border-white/10`}
        style={{ "background-color": "var(--theme-background-translucent)" }}
      >
        <div class="max-w-3xl mx-auto">{props.children}</div>
      </div>
    </div>
  )
}
