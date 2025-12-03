import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, CheckCircle2, Mail } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* 1. 헤더 */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl animate-in fade-in slide-in-from-top-5 duration-700">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg transition-transform group-hover:rotate-12">
               {/* 로고가 없으면 빈칸, 있으면 이미지 */}
               <Image src="/logo.png" alt="Life Lab" width={32} height={32} className="object-contain" /> 
            </div>
            <span className="font-bold tracking-tight text-lg text-[#1d1d1f]">Life Lab.</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            {['About', 'Program', 'Research'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#0071e3] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0071e3] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <Link href="/contact">
            <button className="rounded-full bg-[#1d1d1f] text-white px-6 py-2 text-sm font-medium hover:bg-black transition-colors hover:scale-105 active:scale-95">
              문의하기
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. 히어로 섹션 */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-white text-center pb-20 px-4">
          <div className="container mx-auto flex flex-col items-center max-w-5xl z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-forwards">
            <div className="mb-8 relative h-28 w-28 md:h-36 md:w-36 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
               <Image src="/logo.png" alt="Life Lab Main Logo" width={144} height={144} className="object-contain" priority />
            </div>

            <h2 className="mb-4 text-xl font-bold text-[#0071e3] tracking-widest uppercase">
              Life Lab Coaching
            </h2>
            
            <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-[#1d1d1f] sm:text-7xl md:text-8xl leading-tight">
              질문이 바뀌면,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-purple-600">
                인생이 바뀝니다.
              </span>
            </h1>
            
            <p className="mx-auto max-w-[700px] text-xl font-medium text-gray-500 md:text-2xl leading-relaxed mb-12">
              AI가 답을 내는 시대, 소명(Calling)을 연구합니다.<br/>
              3040 리더를 위한 가장 <b>과학적</b>인 멘탈 솔루션.
            </p>
            
            <div className="flex flex-col items-center gap-5 sm:flex-row justify-center w-full">
              <Link href="/contact">
                <button className="rounded-full bg-[#0071e3] px-10 py-5 text-xl font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300">
                  지금 시작하기
                </button>
              </Link>
            </div>
          </div>
          {/* 배경 오로라 효과 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-[100px] -z-0 pointer-events-none opacity-60"></div>
        </section>

        {/* 3. 프로그램 그리드 */}
        <section className="py-32 bg-[#f5f5f7] px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-forwards">
              
              {/* Card 1 */}
              <div className="row-span-2 h-full group">
                <div className="h-full overflow-hidden rounded-[2.5rem] bg-white p-10 md:p-14 flex flex-col items-center text-center border border-gray-100/50 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0071e3] mb-6 tracking-wide">SIGNATURE</span>
                  <h4 className="text-4xl font-bold text-[#1d1d1f] mb-4">PsyCap 코칭</h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">긍정심리자본을 통해<br/>회복탄력성을 높입니다.</p>
                  <div className="mt-auto pt-8 border-t border-gray-50 w-full">
                     <p className="text-[#0071e3] font-bold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">자세히 보기 <ArrowRight className="w-4 h-4"/></p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="h-full overflow-hidden rounded-[2.5rem] bg-white p-10 flex flex-col items-center text-center justify-center min-h-[320px] border border-gray-100/50 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Spirituality</h3>
                  <h4 className="text-3xl font-bold text-[#1d1d1f]">소명 워크숍</h4>
              </div>

              {/* Card 3 */}
              <div className="h-full overflow-hidden rounded-[2.5rem] bg-white p-10 flex flex-col items-center text-center justify-center min-h-[320px] border border-gray-100/50 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Research</h3>
                  <h4 className="text-3xl font-bold text-[#1d1d1f]">AI & Humanity</h4>
              </div>
              
               {/* Card 4 (Dark) */}
               <div className="md:col-span-2 lg:col-span-2 overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                  <div className="text-center md:text-left">
                    <h4 className="text-3xl font-bold mb-2">리더십 1:1 프라이빗 세션</h4>
                    <p className="text-gray-400">철저한 비밀 보장, 임원 및 전문직 전용</p>
                  </div>
                  <button className="shrink-0 rounded-full bg-white text-black w-12 h-12 flex items-center justify-center font-bold hover:scale-110 transition-transform"><ArrowRight /></button>
              </div>

            </div>
          </div>
        </section>

        {/* 4. 뉴스레터 구독 */}
        <section className="py-32 bg-white border-t border-gray-100">
           <div className="container mx-auto px-4 text-center max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 fill-mode-forwards">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-6 h-6 text-[#0071e3]" />
              </div>
              <h2 className="text-3xl font-bold">Weekly Insight</h2>
              <p className="mt-4 text-gray-500">매주 월요일, 멘탈 관리 인사이트를 보내드립니다.</p>
              <div className="mt-8 flex justify-center gap-2">
                 <input type="email" placeholder="이메일 주소" className="rounded-full border px-6 py-3 bg-gray-50 w-64 focus:outline-none focus:ring-2 focus:ring-[#0071e3]" />
                 <button className="rounded-full bg-[#1d1d1f] text-white px-8 py-3 font-bold hover:bg-black transition-colors">구독</button>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
