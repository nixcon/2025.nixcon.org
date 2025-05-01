
/**
 * A reusable page layout component for consistent page structure.
 *
 * @param {object} props - Component properties.
 * @param {import('solid-js').JSX.Element} props.children - The content to render within the layout.
 */
export default function PageLayout(props) {
  return (
    <div class="relative min-h-svh text-white p-5 pt-20">
      <div class="max-w-3xl mx-auto p-8 glass mt-20">
        <div class="w-full mx-auto space-y-8 px-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}
