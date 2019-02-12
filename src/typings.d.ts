declare module '*.pcss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export default classNames;
}
