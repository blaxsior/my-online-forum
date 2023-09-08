import ChannelSection, { ChannelSectionProps } from "./components/channel/channel-section"

const channelData: ChannelSectionProps = {
  title: '원신 채널',
  post_lisks: [
    {title: '나도 피슬같은 메스가키랑 사귀고 싶다~', comment_count: 5, createdAt: new Date('2023-09-08 10:56:04')},
    {title: '솔직히 리니 좋은듯', comment_count: 3, createdAt: new Date('2023-09-08 10:55:07')},
  ]
}
export default function Home() {
  return (
    <main className="bg-white min-h-screen border-x-[1px] border-neutral-400 grid sm:grid-cols-1 md:grid-cols-2 gap-5 p-4">
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
      <ChannelSection {...channelData} />
    </main>
  )
}
