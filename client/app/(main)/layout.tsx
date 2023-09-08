import NavBar from "./components/layout/navigation/nav-bar"
import Footer from "./components/layout/footer"

// max-w-[1300x] + mx-auto를 통해 옆에 남는 공간 줄 수 있음.
// grid + 옵션 통해 처리.
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <div className="bg-stone-200 w-full min-h-screen">
        <div className="max-w-[1300px] mx-auto lg:grid lg:grid-cols-[13fr_3fr] gap-x-3">
          <div className="bg-white min-h-screen border-x-[1px] border-base-400">
            {children}
          </div>
          <aside className="bg-white my-4 h-fit border-[1px] border-base-400 rounded-md hidden lg:block">
            world
          </aside>
        </div>
      </div>
      <Footer>
        <p>created by blaxsior</p>
        <p>2023.09.07 ~ </p>
        <p>※ 이 사이트는 토이 프로젝트로, 수익을 창출하지 않는 공부 목적으로 제작됩니다.</p>
      </Footer>
    </>
  )
}
