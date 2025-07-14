import styles, { layout } from "@/styles/style";
import Button from "../Button";
import Image from "next/image";
import { EventCardProps } from "@/types";
import {star} from "@/public/assets"
import { Updated_evenement } from "@/lib/definitions";


const FeatureCard: React.FC<EventCardProps> = ({  elength,place, title, content, date,index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${index !== elength - 1 ? "mb-6" : "mb-0"
      } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <Image src={star} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px]">
        {`${title}: ${date}`}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {`Lieu : ${place}`}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

function eventUnit(event: Updated_evenement, index: number){

  return <FeatureCard key={event.id} {...event} index={index} />;
  

} 
export default function Events({events_arr} : {events_arr : Updated_evenement[]}) {
  return(
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2 } font-poppins font-semibold ss:text-[40px] text-[20px] text-white ss:leading-[60px] leading-[35px]`}>
        ACTUALITES: <br className="sm:block hidden" />
        Evénements à venir
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial lif e by
        building credit, earning rewards and saving money. But with hundreds of
        credits cards on the market.
      </p>
      <Button styles="mt-10" text="Rejoindre un évènement"/>
    </div>
    <div className={`${layout.sectionImg} flex-col justify-start`}>
      {events_arr.map(eventUnit)}
    </div>
  </section>
  );
}
