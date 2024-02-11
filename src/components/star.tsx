interface StarI {
  isFade?: boolean;
  classNames?: string;
}

function Star(props: StarI) {
  const { isFade, classNames = "" } = props;

  return (
    <div
      className={`relative w-[15px] h-[15px] ${
        isFade ? "opacity-30" : ""
      } ${classNames}`}
    >
      <div
        className="w-[15px] h-[3px] bg-[#5C37B7] border border-[#9173E6] absolute rounded-[1px]"
        style={{ top: "calc(50% - 2px)" }}
      ></div>
      <div
        className="w-[3px] h-[15px] bg-[#5C37B7] border border-[#9173E6] absolute left-[calc(50%-2px) rounded-[1px]"
        style={{ left: "calc(50% - 2px)" }}
      ></div>
    </div>
  );
}

export default Star;
