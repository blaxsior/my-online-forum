import { ChevronRightIcon } from "lucide-react";
import type { PostLinkProps } from "./post-link";
import PostLink from "./post-link";

export interface ChannelSectionProps {
  title: string;
  post_lisks?: PostLinkProps[];
}

const ChannelSection: React.FC<ChannelSectionProps> = ({ title, post_lisks }) => {
  return (
    <section>
      <header className='flex items-center justify-between px-2'>
        <h2 className="text-lg py-1 border-b-2 border-green-600">{title}</h2>
        <ChevronRightIcon className="inline-block w-5 h-5" />
      </header>
      <ul>
        {
          (post_lisks && post_lisks.length > 0) ?
            post_lisks.map((it) => <PostLink {...it} />)
            :
            <div>글이 없습니다!</div>
        }
      </ul>
    </section>
  );
}

export default ChannelSection;