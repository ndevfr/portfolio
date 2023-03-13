import clsx from "clsx";

type WaveProps = {
  className?: string;
};

export const WaveTop1 = ({ className }: WaveProps) => {
  return (
    <div className={clsx("block w-full -mt-[1px]", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,149.3C384,128,480,64,576,48C672,32,768,64,864,74.7C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export const WaveBottom1 = ({ className }: WaveProps) => {
  return (
    <div className={clsx("block w-full", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,160L40,170.7C80,181,160,203,240,186.7C320,171,400,117,480,106.7C560,96,640,128,720,128C800,128,880,96,960,85.3C1040,75,1120,85,1200,96C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export const WaveBottom2 = ({ className }: WaveProps) => {
  return (
    <div className={clsx("block w-full", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,32L30,48C60,64,120,96,180,96C240,96,300,64,360,64C420,64,480,96,540,117.3C600,139,660,149,720,144C780,139,840,117,900,96C960,75,1020,53,1080,48C1140,43,1200,53,1260,53.3C1320,53,1380,43,1410,37.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
