const omitProps = (omittedProps: string[]) => ({
  shouldForwardProp: (prop: string | number | symbol) =>
    !omittedProps.includes(String(prop)),
})

export default omitProps
