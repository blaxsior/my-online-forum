import WriteSection from "./components/write-section";

interface WritePageProps {
  params: {
    chan_id: string;
  }
}

export default function WritePage({params}: WritePageProps) {
  return <div>
    여기에 글 작성합니다.
    <WriteSection/>
  </div>
};
