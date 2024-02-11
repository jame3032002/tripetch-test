import Title from "@/components/title";
import TextContent from "@/components/text-content";
import TitleUnderline from "@/components/title-underline";

function BasketBallContent() {
  return (
    <div className="carousel-container">
      <ul className="carousel max-[730px]:mt-[205px] max-[730px]:h-[199px]">
        <li className="pl-[322px] py-[60px] max-[1390px]:pl-[30px] max-[1390px]:py-[30px] max-[730px]:h-full max-[730px]:px-[20px] max-[730px]:mt-[20px] max-[730px]:bg-[#F5F4F9] max-[730px]:py-[60px]">
          <div className="flex items-center gap-[11px]">
            <div className="mt-[-9px]">
              <TitleUnderline label="01" />
            </div>
            <Title label="CONNECTION" />
          </div>

          <div className="mt-[6px]">
            <TextContent classNames="max-[1150px]:w-[447px]">
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </TextContent>
          </div>
        </li>

        <li className="pl-[322px] py-[60px] bg-[#F5F4F9] max-[1390px]:pl-[30px] max-[1390px]:py-[30px] max-[730px]:h-full max-[730px]:px-[20px] max-[730px]:mt-[20px] max-[730px]:py-[60px]">
          <div className="flex items-center gap-[11px]">
            <div className="mt-[-9px]">
              <TitleUnderline label="02" />
            </div>
            <Title label="COLLABORATION" />
          </div>

          <div className="mt-[6px]">
            <TextContent classNames="max-[1150px]:w-[447px]">
              Work with recruiter to increase your chances of finding talented
              athlete.
            </TextContent>
          </div>
        </li>
        <li className="pl-[322px] py-[60px] bg-[#090C35] max-[1390px]:pl-[30px] max-[1390px]:py-[30px] max-[730px]:h-full max-[730px]:px-[20px] max-[730px]:mt-[20px] max-[730px]:bg-[#F5F4F9] max-[730px]:py-[60px]">
          <div className="flex items-center gap-[11px]">
            <div className="mt-[-9px]">
              <TitleUnderline
                label="03"
                classNames="text-[#8F6BE8] shadow-[0_28px_0px_0px_#ffffff]"
              />
            </div>
            <Title label="GROWTH" />
          </div>

          <div className="mt-[6px]">
            <TextContent classNames="max-[1150px]:w-[447px] min-[730px]:text-white">
              Save your time, recruit proper athlets for your team.
            </TextContent>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BasketBallContent;
