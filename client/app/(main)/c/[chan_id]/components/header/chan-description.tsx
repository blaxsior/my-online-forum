import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export interface ChanDescProps {
  sub_count: number;
  admin: {
    username: string;
    link: string;
  }
  description: string;
}

const ChanDescription: React.FC<ChanDescProps> = ({sub_count, admin, description}) => {
  return (
  <div>
    <div className='space-x-3 flex flex-row'>
      <span>구독자 {sub_count}명</span>
      <span><Link href={admin.link}>@{admin.username}</Link></span>
    </div>
    <p>{description}</p>
  </div>
  );
}

export default ChanDescription;