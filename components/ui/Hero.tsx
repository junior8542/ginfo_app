import styles from "@/styles/style";
import { cpu, robot2 } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";
import GradualSpacing from "./GradualSpacing";
import { Skeleton } from "@/components/ui/skeleton";


const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} sm:py-0`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Skeleton className="w-full h-4 rounded-[10px]"/>
        <Image src={cpu} alt="discount" className="w-[32px] h-[32px]" />
        
          <span className="text-white ml-2">
            <GradualSpacing text="Le club informatique aux bouts des doigts" />
          </span> 
        
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[80px] leading-[50px]">
          <span className="text-gradient">Département de Génie Informatique</span>
        </h1>
       
      </div>
      <h1 className="w-full font-poppins font-semibold ss:text-[58px] text-[42px] text-white ss:leading-[100px] leading-[75px]">
        ENSET DE DOUALA
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre département forme les futurs experts en génie informatique, 
        préparant les étudiants aux défis technologiques de demain.
        Notre département forme les futurs experts en génie informatique, 
        préparant les étudiants aux défis technologiques de demain.
        Notre département forme les futurs experts en génie informatique, 
        
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative border-primary`}>
      <Image
        src={robot2}
        alt="Robot Educator"
        className="relative w-[100%] h-[100%] object-contain"
        priority
      />
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      <div className="absolute inset-0 bg-primary opacity-60">

      </div>
    </div>
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
