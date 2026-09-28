"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trees, Store, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const FOCUS_AREAS = [
  {
    id: "pendidikan",
    title: "Pendidikan",
    icon: <GraduationCap size={26} aria-hidden="true" />,
    description:
      "Peningkatan mutu sumber daya manusia melalui dukungan fasilitas belajar, pelatihan kecakapan hidup, dan penguatan kapasitas generasi muda lingkar tambang.",
    href: "/program",
    bg: "bg-[#0D726D]",
    bgHover: "hover:bg-[#0B5C58]",
    iconBg: "bg-white/20",
  },
  {
    id: "lingkungan",
    title: "Lingkungan",
    icon: <Trees size={26} aria-hidden="true" />,
    description:
      "Perlindungan ekosistem alam, konservasi keanekaragaman hayati, serta inisiatif pengelolaan lingkungan hidup yang berkelanjutan di kawasan sekitar operasional.",
    href: "/program",
    bg: "bg-gradient-to-br from-[#0D726D] to-[#3A9E8F]",
    bgHover: "hover:from-[#0B5C58] hover:to-[#2D8A7C]",
    iconBg: "bg-white/20",
  },
  {
    id: "ekonomi-umk",
    title: "Ekonomi & UMK",
    icon: <Store size={26} aria-hidden="true" />,
    description:
      "Pengembangan kewirausahaan lokal, penguatan kapasitas mitra binaan, serta hilirisasi produk dan komoditas unggulan masyarakat.",
    href: "/produk",
    bg: "bg-gradient-to-br from-[#F6A236] to-[#B8691A]",
    bgHover: "hover:from-[#E08E20] hover:to-[#A15A15]",
    iconBg: "bg-white/25",
  },
  {
    id: "sosial-masyarakat",
    title: "Sosial & Masyarakat",
    icon: <Users size={26} aria-hidden="true" />,
    description:
      "Pemberdayaan kelembagaan warga, peningkatan kualitas hidup masyarakat, dan pemeliharaan harmoni sosial berbasis nilai-nilai kearifan lokal.",
    href: "/program",
    bg: "bg-[#0A3D3A]",
    bgHover: "hover:bg-[#082E2B]",
    iconBg: "bg-white/15",
  },
];

export default function Focus() {
  return (
    <section id="fokus-csr" className="py-20 md:py-28 bg-[#F7FAF9] text-[#172121] border-y border-[#E2E8E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — no badge kicker, heading is the first element */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 text-[#172121]"
          >
            Fokus CSR
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[#172121]/75 leading-relaxed font-normal"
          >
            Arah dan pilar strategis CSR ANTAM UBPN Maluku Utara untuk menciptakan kemandirian masyarakat dan kelestarian ekosistem.
          </motion.p>
        </div>

        {/* 4 Cards Grid — Horizontal layout with unique colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FOCUS_AREAS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div
                className={`group flex items-start gap-5 rounded-2xl p-6 sm:p-7 ${item.bg} ${item.bgHover} transition-all duration-300 shadow-md hover:shadow-xl min-h-[140px]`}
              >
                {/* Icon — left side */}
                <div className={`shrink-0 w-13 h-13 ${item.iconBg} rounded-xl flex items-center justify-center text-white mt-0.5`}>
                  {item.icon}
                </div>

                {/* Text content — right side */}
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-white transition-colors mt-auto"
                  >
                    Selengkapnya
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
