import { robotoFont } from "@/config/fonts";

interface TitleUnderlineI {
  label: string;
  classNames?: string;
}

function TitleUnderline(props: TitleUnderlineI) {
  const { label, classNames = "" } = props;

  return (
    <div className="h-[28px] max-[730px]:h-[19px]">
      <div
        className={`${robotoFont.className} text-[18px] max-[730px]:text-[14px] h-[4px] shadow-[0_28px_0px_0px_#603EBE] max-[730px]:shadow-[0_19px_0px_0px_#603EBE] w-fit rounded-[2px] ${classNames}`}
      >
        {label}
      </div>
    </div>
  );
}

export default TitleUnderline;
