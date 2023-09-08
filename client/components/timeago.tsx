import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

import { cn } from '@/lib/utils';

dayjs.locale('ko');
dayjs.extend(relativeTime);

interface TimeAgoProps {
  date: dayjs.ConfigType
  className?: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ date, className }) => {
  return (
    <time
      className={cn('bg-gray-600 text-white text-xs font-medium p-[3px] rounded-md', className)}
      dateTime={date?.toLocaleString()}
    >
      {dayjs(date).fromNow()}
    </time>
  );
}

export default TimeAgo;