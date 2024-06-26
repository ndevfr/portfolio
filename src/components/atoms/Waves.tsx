import clsx from "clsx";

type WaveProps = {
  design?: number;
  forceDark?: boolean;
  classTop: string;
  classBottom: string;
};

export const WaveSeparator = ({
  design,
  forceDark,
  classTop,
  classBottom,
}: WaveProps) => {
  if (forceDark) {
    classBottom = classBottom.replace(/fill-/g, "bg-");
    return <DiagonalSeparator classTop={classTop} classBottom={classBottom} />;
  } else {
    switch (design) {
      case 1:
        return <WaveSeparator1 classTop={classTop} classBottom={classBottom} />;
      case 2:
        return <WaveSeparator2 classTop={classTop} classBottom={classBottom} />;
      case 3:
        return <WaveSeparator3 classTop={classTop} classBottom={classBottom} />;
      case 4:
        return <WaveSeparator4 classTop={classTop} classBottom={classBottom} />;
      default:
        return <WaveSeparator1 classTop={classTop} classBottom={classBottom} />;
    }
  }
};

const WaveSeparator1 = ({ classTop, classBottom }: WaveProps) => {
  return (
    <div className={clsx("flex w-full", classTop)}>
      <svg
        className={clsx("block w-full", classBottom)}
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,80C560,85,640,139,720,133.3C800,128,880,64,960,74.7C1040,85,1120,171,1200,192C1280,213,1360,171,1400,149.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </div>
  );
};

const WaveSeparator2 = ({ classTop, classBottom }: WaveProps) => {
  return (
    <div className={clsx("flex w-full", classTop)}>
      <svg
        className={clsx("block w-full", classBottom)}
        viewBox="0 0 1440 230"
        preserveAspectRatio="none"
      >
        <path d="M0,160L40,170.7C80,181,160,203,240,186.7C320,171,400,117,480,106.7C560,96,640,128,720,128C800,128,880,96,960,85.3C1040,75,1120,85,1200,96C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </div>
  );
};

const WaveSeparator3 = ({ classTop, classBottom }: WaveProps) => {
  return (
    <div className={clsx("flex w-full", classTop)}>
      <svg
        className={clsx("block w-full", classBottom)}
        viewBox="0 0 1440 230"
        preserveAspectRatio="none"
      >
        <path d="M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,154.7C672,149,768,75,864,85.3C960,96,1056,192,1152,197.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

const WaveSeparator4 = ({ classTop, classBottom }: WaveProps) => {
  return (
    <div className={clsx("flex w-full", classTop)}>
      <svg
        className={clsx("block w-full", classBottom)}
        viewBox="0 0 1440 170"
        preserveAspectRatio="none"
      >
        <path d="M0,32L30,48C60,64,120,96,180,96C240,96,300,64,360,64C420,64,480,96,540,117.3C600,139,660,149,720,144C780,139,840,117,900,96C960,75,1020,53,1080,48C1140,43,1200,53,1260,53.3C1320,53,1380,43,1410,37.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
    </div>
  );
};

const DiagonalSeparator = ({ classTop, classBottom }: WaveProps) => {
  return (
    <div className={clsx("diagonal", classTop)}>
      <div className={clsx("diagonal-inner", classBottom)}></div>
    </div>
  );
};
