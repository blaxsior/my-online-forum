import { FlowerIcon } from "lucide-react";

const MainLogo = () => {
  return (
    <span className="mx-auto flex flex-col items-center justify-center space-y-4">
      <FlowerIcon className="w-40 h-40 mx-auto"/>
      <h1 className='font-bold text-lg'>피카라이브</h1>
    </span>
  );
}

export default MainLogo;