import TimeAgo from "@/components/timeago";

export interface PostLinkProps {
  title: string;
  comment_count: number;
  createdAt: Date;
}

const PostLink: React.FC<PostLinkProps> = ({ title, comment_count, createdAt }) => {
  return (
    <li className="w-full px-2">
      <h3 className="inline-block text-sm">{`${title} [${comment_count}]`}</h3>
      <TimeAgo className='float-right' date={createdAt} />
    </li>
  );
}

export default PostLink;