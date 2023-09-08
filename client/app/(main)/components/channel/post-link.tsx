import TimeAgo from "@/components/timeago";
import Link from "next/link";

export interface PostLinkProps {
  title: string;
  comment_count: number;
  createdAt: Date;
  href: string;
}

const PostLink: React.FC<PostLinkProps> = ({ title, comment_count, href, createdAt }) => {
  return (
    <li className="w-full px-2">
      <Link href={href}>
      <h3 className="inline-block text-sm">{`${title} [${comment_count}]`}</h3>
      <TimeAgo className='float-right' date={createdAt} />
      </Link>
    </li>
  );
}

export default PostLink;