import { robotoFont } from "@/config/fonts";

interface TitleI {
  label: string;
}

function Title(props: TitleI) {
  const { label } = props;

  return (
    <h2
      className={`${robotoFont.className} text-[36px] max-[730px]:text-[28px] text-[#C2C2C2] tracking-[1.5px]`}
    >
      {label}
    </h2>
  );
}

export default Title;
