import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hammer, 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Info,
  Package,
  Wrench,
  Settings,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS } from './constants';
import { Product } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ['전체', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const filteredProducts = selectedCategory === '전체' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen font-sans selection:bg-hardware-orange selection:text-white">
      {/* Grid Background Overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F4F4F2]/80 backdrop-blur-md border-b border-industrial-zinc/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-industrial-zinc p-2 rounded-sm rotate-3">
                <Hammer className="w-6 h-6 text-hardware-orange" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter text-industrial-zinc uppercase leading-none">
                  대영철물점
                </h1>
                <p className="text-[10px] font-mono text-industrial-zinc/50 tracking-widest uppercase">
                  시흥시 함송로 24 세종프라자 1층
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['SHOP', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-bold tracking-widest hover:text-hardware-orange transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="relative p-2 hover:bg-industrial-zinc/5 rounded-full transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-4 h-4 bg-hardware-orange text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button className="p-2">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F4F4F2] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {['SHOP', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-4xl font-black tracking-tighter hover:text-hardware-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-hardware-orange/10 text-hardware-orange rounded-full text-xs font-bold mb-6">
                <Settings className="w-3 h-3 animate-spin-slow" />
                <span>NEW ARRIVALS</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                우리 동네 <br />
                <span className="text-hardware-orange">만능 해결사.</span>
              </h2>
              <p className="text-lg text-industrial-zinc/70 max-w-md mb-10 leading-relaxed">
                대영철물점은 각종 공구와 생활용품 판매는 물론, 
                전문가의 손길이 필요한 출장시공 서비스를 제공합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-industrial-zinc text-white font-bold tracking-widest hover:bg-hardware-orange transition-all flex items-center gap-2 group">
                  전체 제품 보기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-industrial-zinc font-bold tracking-widest hover:bg-industrial-zinc hover:text-white transition-all">
                  브랜드 스토리
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200" 
                alt="Hardware Workshop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-zinc/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-mono text-xs tracking-widest mb-2 opacity-80">FEATURED COLLECTION</p>
                <h3 className="text-3xl font-bold tracking-tight">황동 & 무쇠 시리즈</h3>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Section */}
        <section className="bg-white py-24 border-y border-industrial-zinc/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div>
                <h2 className="text-4xl font-black tracking-tighter mb-4">제품 목록</h2>
                <p className="text-industrial-zinc/50 font-mono text-sm">/ SELECT HARDWARE LIST</p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-bold tracking-widest transition-all border ${
                      selectedCategory === cat 
                        ? 'bg-industrial-zinc text-white border-industrial-zinc' 
                        : 'bg-transparent text-industrial-zinc/60 border-industrial-zinc/10 hover:border-industrial-zinc'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#F4F4F2] mb-6 border border-industrial-zinc/5 group-hover:border-hardware-orange/30 transition-colors">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-industrial-zinc text-white text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
                          {product.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-hardware-orange/0 group-hover:bg-hardware-orange/5 transition-colors" />
                      
                      {/* Quick Add Button */}
                      <button className="absolute bottom-0 left-0 right-0 bg-industrial-zinc text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-bold text-xs tracking-widest flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        장바구니 담기
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold tracking-tight group-hover:text-hardware-orange transition-colors">
                          {product.name}
                        </h3>
                        <span className="font-mono font-medium text-hardware-orange">
                          ₩{product.price.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-industrial-zinc/60 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Specs Preview */}
                      <div className="pt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {product.specs?.slice(0, 2).map((spec, i) => (
                          <span key={i} className="text-[10px] text-industrial-zinc/40 font-mono">
                            • {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-32 text-center">
                <Package className="w-12 h-12 text-industrial-zinc/20 mx-auto mb-4" />
                <p className="text-industrial-zinc/50 font-bold">해당 카테고리의 제품이 없습니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* Industrial Banner */}
        <section className="py-20 bg-industrial-zinc text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-hardware-orange" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                  대량 주문 및 <br />
                  <span className="text-hardware-orange">맞춤 제작 문의</span>
                </h2>
                <p className="text-white/60 text-lg mb-8">
                  인테리어 스튜디오, 가구 공방 등 비즈니스 파트너를 위한 
                  대량 구매 혜택과 커스텀 하드웨어 제작 서비스를 제공합니다.
                </p>
                <button className="px-8 py-4 bg-hardware-orange text-white font-bold tracking-widest hover:bg-white hover:text-industrial-zinc transition-all">
                  비즈니스 문의하기
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                {[
                  { icon: <Wrench />, label: '수리 서비스' },
                  { icon: <Settings />, label: '정밀 가공' },
                  { icon: <Info />, label: '설치 가이드' },
                  { icon: <Package />, label: '전국 배송' }
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-white/10 hover:border-hardware-orange transition-colors group">
                    <div className="text-hardware-orange mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="font-bold text-sm tracking-widest">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative Text */}
          <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-white/5 select-none pointer-events-none tracking-tighter">
            MANMUL
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F4F4F2] pt-24 pb-12 border-t border-industrial-zinc/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Hammer className="w-6 h-6 text-hardware-orange" />
                <h2 className="text-xl font-black tracking-tighter">대영철물점</h2>
              </div>
              <p className="text-sm text-industrial-zinc/60 leading-relaxed">
                경기 시흥시 함송로 24 세종프라자 1층 대영철물점<br />
                일반 공구 · 생활용품 · 출장시공 전문
              </p>
              <div className="flex gap-4">
                {/* Social Placeholder Icons */}
                <div className="w-8 h-8 rounded-full bg-industrial-zinc/5 flex items-center justify-center hover:bg-hardware-orange hover:text-white transition-colors cursor-pointer">
                  <span className="text-[10px] font-bold">IG</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-industrial-zinc/5 flex items-center justify-center hover:bg-hardware-orange hover:text-white transition-colors cursor-pointer">
                  <span className="text-[10px] font-bold">YT</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-industrial-zinc/5 flex items-center justify-center hover:bg-hardware-orange hover:text-white transition-colors cursor-pointer">
                  <span className="text-[10px] font-bold">FB</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-widest uppercase mb-8">Quick Links</h3>
              <ul className="space-y-4 text-sm font-bold text-industrial-zinc/60">
                <li><a href="#" className="hover:text-hardware-orange transition-colors">모든 제품</a></li>
                <li><a href="#" className="hover:text-hardware-orange transition-colors">베스트셀러</a></li>
                <li><a href="#" className="hover:text-hardware-orange transition-colors">신제품</a></li>
                <li><a href="#" className="hover:text-hardware-orange transition-colors">세일</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-widest uppercase mb-8">Support</h3>
              <ul className="space-y-4 text-sm font-bold text-industrial-zinc/60">
                <li><a href="#" className="hover:text-hardware-orange transition-colors">배송 안내</a></li>
                <li><a href="#" className="hover:text-hardware-orange transition-colors">교환 및 반품</a></li>
                <li><a href="#" className="hover:text-hardware-orange transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-hardware-orange transition-colors">대량 구매 문의</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-widest uppercase mb-8">Newsletter</h3>
              <p className="text-sm text-industrial-zinc/60 mb-6">새로운 제품 소식과 인테리어 팁을 받아보세요.</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="flex-1 bg-white border border-industrial-zinc/10 px-4 py-3 text-xs font-mono focus:outline-none focus:border-hardware-orange"
                />
                <button className="bg-industrial-zinc text-white px-4 py-3 hover:bg-hardware-orange transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="pt-12 border-t border-industrial-zinc/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-mono text-industrial-zinc/40">
              © 2024 MANMUL HARDWARE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-[10px] font-mono text-industrial-zinc/40">
              <a href="#" className="hover:text-industrial-zinc transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-industrial-zinc transition-colors">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
