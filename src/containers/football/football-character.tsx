import Image from "next/image";
import Star from "@/components/star";
import Path45 from "@/components/path45";

function FootballCharacter() {
  return (
    <div className="absolute mt-[-20px] ml-[175px] max-[1390px]:ml-[unset] max-[1390px]:mt-[30px] max-[1390px]:left-[0px] max-[1390px]:left-[unset] max-[1140px]:right-[54.6%] max-[730px]:w-[218px] max-[730px]:mx-auto max-[730px]:left-[0px] max-[730px]:right-[0px] max-[730px]:mt-[54px]">
      <div className="relative">
        <div className="min-w-[590px] max-w-[678px] max-[1390px]:max-w-[518px] max-[1390px]:min-w-[518px] max-[1390px]:mt-[20px] relative z-10 max-[730px]:w-[218px] max-[730px]:h-[281px] max-[730px]:min-w-[unset] max-[730px]:max-w-[unset]">
          <Image
            src={"/football.png"}
            alt="football"
            width={678}
            height={950}
            sizes="200vw"
            className="w-full h-[auto] football-logo"
          />
        </div>
        <div className="absolute max-[1390px]:left-[220px] max-[1390px]:top-[0px] max-[730px]:top-[20px] max-[730px]:left-[22px] min-[1390px]:hidden">
          <Star />
        </div>
        <div className="absolute max-[1390px]:left-[197.63px] max-[1390px]:top-[-9px] max-[730px]:top-[11px] max-[730px]:left-[0px] min-[1390px]:hidden">
          <Star isFade />
        </div>
        <div className="absolute max-[1390px]:left-[195px] max-[1390px]:top-[113px] z-0 max-[730px]:top-[108px] max-[730px]:left-[-32px] min-[1390px]:hidden">
          <Path45 classNames="w-[266px]" />
        </div>
      </div>
    </div>
  );
}

export default FootballCharacter;
