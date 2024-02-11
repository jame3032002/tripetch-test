import { robotoFont } from "@/config/fonts";

interface TopicI {
  label: string;
}

function Topic(props: TopicI) {
  const { label } = props;

  return (
    <h1
      className={`${robotoFont.className} text-[90px] max-[730px]:text-[50px] text-[#E7E7E7]`}
    >
      {label}
    </h1>
  );
}

export default Topic;
