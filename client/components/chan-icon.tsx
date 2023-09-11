import { BirdIcon } from 'lucide-react';
import Image from 'next/image';

interface ChanIconProps {
  src?: string;
}

const ChanIcon: React.FC<ChanIconProps> = ({ src }) => {
  return (
    <div
      className="rounded-full border-2 border-base-600
  aspect-square relative  md:w-20 md:h-20
  w-16 h-16
  cascade overflow-hidden"
    >
      {src ? (
        <Image
          src="/slime.webp"
          fill
          alt="slime"
          loading="lazy"
          sizes="width: 100%; height: 100%;"
        />
      ) : (
        <BirdIcon className="w-full h-full" />
      )}
    </div>
  );
};

export default ChanIcon;
