import { robotoFont } from "@/config/fonts";

function TextContent(props: {
  children: JSX.Element | string;
  classNames?: string;
}) {
  return (
    <div
      className={`${robotoFont.className} text-[20px] max-[730px]:text-[15px] max-w-[717px] ${props.classNames}`}
    >
      {props.children}
    </div>
  );
}

export default TextContent;
