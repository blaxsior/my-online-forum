import MainLogo from "@/components/logo/MainLogo"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen bg-gray-300 flex items-center justify-center py-10">
      <main className="bg-white p-6 border-gray-400 border-2 rounded-lg">
        <MainLogo />
        {children}
      </main>
    </div>
  )
}
