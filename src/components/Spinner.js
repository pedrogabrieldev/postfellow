import { Spinner as SpinnerIcon } from 'phosphor-react'

export const Spinner = () => {
  return (
    <SpinnerIcon size={26}>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="2s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </SpinnerIcon>
  )
}
