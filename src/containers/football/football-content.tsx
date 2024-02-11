import Title from "@/components/title";
import TextContent from "@/components/text-content";
import TitleUnderline from "@/components/title-underline";

function FootballContent() {
  return (
    <div className="carousel-container">
      <ul className="carousel max-[730px]:mt-[235px] max-[730px]:h-[258px]">
        <li className="pl-[50%] pr-[40px] py-[60px] max-[1390px]:pl-[40%] max-[1390px]:py-[30px] max-[730px]:h-full max-[730px]:px-[20px] max-[730px]:mt-[20px] max-[730px]:bg-[#F5F4F9] max-[730px]:py-[60px]">
          <div className="flex items-center gap-[11px]">
            <div className="mt-[-9px]">
              <TitleUnderline label="01" />
            </div>
            <Title label="CONNECTION" />
          </div>

          <div className="mt-[6px]">
            <TextContent>
              Connect with coaches directly, you can ping coaches to view
              profile.
            </TextContent>
          </div>
        </li>

        <li className="bg-[#F5F4F9] pl-[50%] pr-[40px] py-[60px] max-[1390px]:pl-[40%] max-[1390px]:py-[30px] max-[730px]:h-full max-[730px]:px-[20px] max-[730px]:mt-[20px] max-[730px]:py-[60px]">
          <div className="flex items-center gap-[11px]">
            <div className="mt-[-9px]">
              <TitleUnderline label="02" />
            </div>
            <Title label="COLLABORATION" />
          </div>

          <div className="mt-[6px]">
            <TextContent>
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </TextContent>
          </div>
        </li>

        <li className="bg-[#5E3DB3] pl-[50%] pr-[40px] py-[60px] max-[1390px]:pl-[40%] max-[1390px]:py-[30px] max-[730px]:h-full max-[730px]:px-[20px] max-[730px]:mt-[20px] max-[730px]:bg-[#F5F4F9] max-[730px]:py-[60px]">
          <div className="flex items-center gap-[11px]">
            <div className="mt-[-9px]">
              <TitleUnderline
                label="03"
                classNames="min-[730px]:shadow-[0_28px_0px_0px_#ffffff]"
              />
            </div>
            <Title label="GROWTH" />
          </div>

          <div className="mt-[6px]">
            <TextContent classNames="min-[730px]:text-white">
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc 
            </TextContent>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FootballContent;
