export default function Button({ type, ...otherProps }) {
  return <a className={"button " + type} {...otherProps} />;
}
