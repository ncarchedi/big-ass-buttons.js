export default function ButtonBase({
  className: parentClassName,
  ...otherProps
}) {
  return <button className={"base " + parentClassName} {...otherProps} />;
}
