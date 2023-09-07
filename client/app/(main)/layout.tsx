import NavBar from "../../components/navigation/nav-bar"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <NavBar />
    {children}
    </>
  )
}
