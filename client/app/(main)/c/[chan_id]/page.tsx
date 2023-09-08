import ChannelHeader from "./components/header/chan-header";

interface ChannelPageProps {
  params: {
    chan_id: string;
  }
}

export default function ChannelPage({params}: ChannelPageProps) {

  return (
    <>
    <ChannelHeader chan_url={`/c/${params.chan_id}`} />
    <main>바디</main>
    </>
  )
}
