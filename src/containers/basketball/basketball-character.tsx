import Image from "next/image";
import Star from "@/components/star";
import Path45 from "@/components/path45";

function BasketballCharacter() {
  return (
    <div className="absolute top-[-90px] left-[804px] max-[1390px]:top-[0px] max-[1390px]:left-[43.1%] max-[730px]:w-[302px] max-[730px]:h-[249px] max-[730px]:min-w-[unset] max-[730px]:max-w-[unset] max-[730px]:left-[0px] max-[730px]:right-[0px] max-[730px]:mx-auto max-[730px]:mt-[94px]">
      <div className="min-w-[530px] max-w-[991px] relative max-[1390px]:max-w-[691px] max-[1390px]:min-w-[691px] max-[730px]:w-[302px] max-[730px]:h-[249px] max-[730px]:min-w-[unset] max-[730px]:max-w-[unset]">
        <div className="relative z-10 max-[730px]:w-[302px] max-[730px]:h-[249px] max-[730px]:min-w-[unset] max-[730px]:max-w-[unset]">
          <Image
            src={"/basketball.png"}
            alt="basketball"
            width={991}
            height={815}
            sizes="200vw"
            className="w-full h-[auto] basketball-logo"
          />
        </div>

        <div className="absolute top-[131px] left-[294px] max-[1850px]:left-[unset] max-[1850px]:top-[unset] max-[1850px]:right-[67.7%] max-[1850px]:bottom-[81.2%] z-0 max-[730px]:bottom-[unset] max-[730px]:right-[unset] max-[730px]:top-[9px] max-[730px]:left-[71px]">
          <Star />
        </div>
        <div className="absolute top-[148px] left-[316px] max-[1850px]:left-[unset] max-[1850px]:top-[unset] max-[1850px]:right-[65.3%] max-[1850px]:bottom-[79.3%] z-0 max-[730px]:right-[unset] max-[730px]:bottom-[unset] max-[730px]:top-[0px] max-[730px]:left-[49px]">
          <Star isFade />
        </div>
        <div className="absolute top-[401px] left-[774px] z-0 max-[1800px]:left-[unset] max-[1800px]:right-[15%] max-[730px]:top-[150px] max-[730px]:left-[266px] max-[730px]:right-[unset]">
          <Star />
        </div>

        <div className="absolute top-[238px] right-[2px] z-0 max-[1390px]:hidden max-[730px]:right-[unset] max-[730px]:top-[68.32px] max-[730px]:left-[174.89px] max-[730px]:block">
          <Path45 classNames="w-[409px] max-[730px]:w-[118px]" />
        </div>
        <div className="absolute top-[600px] right-[478px] max-[1730px]:right-[53.5%] max-[1680px]:right-[unset] z-0 max-[1390px]:right-[29%] max-[1390px]:top-[55%] max-[730px]:right-[unset] max-[730px]:top-[170.92px] max-[730px]:left-[11px]">
          <Path45 classNames="w-[402px] max-[730px]:w-[163px]" />
        </div>
      </div>
    </div>
  );
}

export default BasketballCharacter;
