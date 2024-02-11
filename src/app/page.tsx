"use client";
import Topic from "@/components/topic";
import BasketballCharacter from "@/containers/basketball/basketball-character";
import BasketBallContent from "@/containers/basketball/basketball-content";
import FootballCharacter from "@/containers/football/football-character";
import FootballContent from "@/containers/football/football-content";

export default function Home() {
  return (
    <main>
      <div className="relative mt-[100px] max-[1390px]:mt-[50px] max-[730px]:mt-[20px]">
        <FootballCharacter />

        <div className="pl-[50%] max-[1390px]:pl-[40%] max-[730px]:top-[0%] max-[730px]:pl-[20px]">
          <Topic label="ATHLETS" />
        </div>

        <FootballContent />
      </div>

      <div className="relative mt-[100px] max-[1065px]:mt-[50px] max-[1390px]:overflow-hidden max-[730px]:mt-[20px]">
        <div className="pl-[321px] max-[1390px]:pl-[30px] max-[730px]:top-[0%] max-[730px]:pl-[20px]">
          <Topic label="PLAYERS" />
        </div>

        <BasketBallContent />
        <BasketballCharacter />
      </div>
    </main>
  );
}
