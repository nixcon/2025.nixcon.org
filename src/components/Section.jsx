import { SubTitle } from "./Ui"

export function Section(props) {
  const { title, children, ...rest } = props
  return (
    <div classList={{ "min-h-[50vh] py-20 max-w-3xl mx-auto": true, [rest.class]: true }}>
      <SubTitle>{title}</SubTitle>
      <div class="mt-10 sm:mt-20 flex flex-col gap-10 sm:gap-12">{children}</div>
    </div>
  )
}
