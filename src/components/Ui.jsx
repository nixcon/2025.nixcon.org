export function Button(props) {
  return (
    <div class="group w-fit text-sm sm:text-base bg-gray-100 hover:bg-gray-50 transition rounded-full h-10.5 whitespace-nowrap pl-5 pr-4 flex flex-row justify-center items-center gap-3 cursor-pointer grain font-mono text-gray-800 uppercase">
      <div>{props.children}</div>
      <div class="size-4 group-hover:animate-test">
        <img src="/flake.svg" alt="NixOS Flake" style={{ width: "100%", height: "100%" }}></img>
      </div>
    </div>
  )
}

export function SecondaryButton(props) {
  return (
    <div class="group w-fit text-sm sm:text-base bg-transparent border border-white hover:bg-gray-50/10 transition rounded-full h-10.5 whitespace-nowrap pl-5 pr-4 flex flex-row justify-center items-center gap-3 cursor-pointer font-mono text-white uppercase">
      <div>{props.children}</div>
      <div class="size-4 text-white group-hover:animate-test">
        <img src="/flake-white.svg" alt="NixOS Flake" style={{ width: "100%", height: "100%" }}></img>
      </div>
    </div>
  )
}

export function SecondaryButtonWithoutFlake(props) {
  const { class: className, ...rest } = props
  return (
    <button
      class="group w-fit text-sm sm:text-base bg-transparent border border-white hover:bg-gray-50/10 transition rounded-full h-10.5 whitespace-nowrap pl-5 pr-4 flex flex-row justify-center items-center gap-3 cursor-pointer font-mono text-white uppercase"
      {...rest}
    >
      {props.children}
    </button>
  )
}

export function ButtonLink(props) {
  return (
    <a {...props}>
      <Button>{props.children}</Button>
    </a>
  )
}

export function SecondaryButtonLink(props) {
  return (
    <a {...props}>
      <SecondaryButton>{props.children}</SecondaryButton>
    </a>
  )
}

export function Title(props) {
  const { children, className, ...rest } = props
  return (
    <h1 class={"text-4xl sm:text-5xl md:text-7xl uppercase font-bold " + className} {...rest}>
      {children}
    </h1>
  )
}

export function SubTitle(props) {
  const { children, className, ...rest } = props
  return (
    <h2 class={"text-3xl sm:text-6xl uppercase font-bold " + className} {...rest}>
      {children}
    </h2>
  )
}

export function Paragraph(props) {
  const { children, className, ...rest } = props
  return (
    <p class={"max-w-sm sm:text-lg " + className} {...rest}>
      {children}
    </p>
  )
}
