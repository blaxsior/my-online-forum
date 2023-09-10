import SelectList from "./components/header/select-list";

interface ChannelPageProps {
  params: {
    chan_id: string;
  }
}

export default function ChannelPage({params}: ChannelPageProps) {
  // fetch 및 chan_id를 이용하여 게시판 정보를 불러온다.
  // 만약 대응되는 게시판이 존재하지 않는다면 에러 페이지로 이동한다.
  // 존재하는 경우 글 목록을 읽어 와 전체를 넘긴다.

  return (
    <>
    <SelectList />
    <main>바디</main>
    </>
  )
}
