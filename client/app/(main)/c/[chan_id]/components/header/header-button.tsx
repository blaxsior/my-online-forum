import { cn } from "@/lib/utils";

interface HeaderButtonProps {
  children?: React.ReactNode,
  className?: string;
  onClick?: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  className, children, onClick
}) => {
  return (

    <button className={cn('text-xs border-2 p-[5px] hover:bg-slate-300 space-x-1',className)} onClick={onClick} >
      {children}
    </button>
  );
}


export default HeaderButton;