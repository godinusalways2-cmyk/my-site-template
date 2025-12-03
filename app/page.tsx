"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  
  if (!mounted) return <div className="min-h-screen bg-[#f5f5f7]"></div>

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* 1. 헤더 */}
      <motion.header 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl"
      >
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
               <Image src="/logo.png" alt="Life Lab" width={32} height={32} className="object-contain" /> 
            </div>
            <span className="font-bold tracking-tight text-lg text-[#1d1d1f]">Life Lab.</span>
          </Link>
          <Link href="/contact">
            <button className="rounded-full bg-[#1d1d1f] text-white px-6 py-2 text-sm font-medium hover:bg-black transition-colors">
              문의하기
            </button>
          </Link>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* 2. 히어로 섹션 */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-white text-center pb-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="container mx-auto flex flex-col items-center max-w-5xl z-10"
          >
            <div className="mb-8 relative h-28 w-28 md:h-36 md:w-36 drop-shadow-2xl">
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
            
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05 }} className="rounded-full bg-[#0071e3] px-10 py-5 text-xl font-bold text-white shadow-lg">
                지금 시작하기
              </motion.button>
            </Link>
          </motion.div>
        </section>
        
        {/* 3. 프로그램 그리드 (간소화) */}
        <section className="py-32 bg-[#f5f5f7] px-4">
          <div className="container mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
                <h4 className="text-2xl font-bold mb-4">PsyCap 코칭</h4>
                <p className="text-gray-600">회복탄력성 강화</p>
             </div>
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
                <h4 className="text-2xl font-bold mb-4">소명 워크숍</h4>
                <p className="text-gray-600">내 일의 의미 찾기</p>
             </div>
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center">
                <h4 className="text-2xl font-bold mb-4">AI & Humanity</h4>
                <p className="text-gray-600">기술 시대의 리더십</p>
             </div>
          </div>
        </section>
      </main>
      <footer className="py-10 bg-white text-center text-sm text-gray-500 border-t">
        <p>© 2025 Life Lab. All rights reserved.</p>
      </footer>
    </div>
  )
}
