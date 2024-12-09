import {greetProps} from './greet.type';

export const Greet = (props: greetProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}
