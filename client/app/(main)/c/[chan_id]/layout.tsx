import ChannelHeader from './components/header/chan-header';

interface ChanLayoutProps {
  params: {
    chan_id: string;
  };
  children?: React.ReactNode;
}

export default function ChanLayout({ params, children }: ChanLayoutProps) {
  return (
    <div>
      <ChannelHeader chan_url={`/c/${params.chan_id}`} />
      {children}
    </div>
  );
}
