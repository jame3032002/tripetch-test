interface Path45I {
  classNames?: string;
}

function Path45(props: Path45I) {
  const { classNames = "" } = props;
  return (
    <div
      className={`h-[6px] bg-[#936EEA] -rotate-45 max-[730px]:h-[3px] ${classNames}`}
    />
  );
}
export default Path45;
