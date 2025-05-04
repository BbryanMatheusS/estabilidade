'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  LucideIcon,
  Leaf,
} from 'lucide-react'

interface Pilar {
  titulo: string
  subtitulo: string
  descricao: string
  icone: LucideIcon
}

const pilares: Pilar[] = [
  {
    titulo: 'Ética',
    subtitulo: '(o que se faz)',
    descricao:
      'Transparência e compromisso com a legalidade e o bem-estar dos nossos clientes.',
    icone: Briefcase,
  },
  {
    titulo: 'Excelência',
    subtitulo: '(como se faz)',
    descricao:
      'Qualidade máxima em cada projeto, com foco em resultados mensuráveis.',
    icone: ShieldCheck,
  },
  {
    titulo: 'Inovação',
    subtitulo: '(como otimizar)',
    descricao:
      'Atualização constante de métodos e práticas para oferecer as melhores soluções.',
    icone: TrendingUp,
  },
  {
    titulo: 'Parceria',
    subtitulo: '(como financiar)',
    descricao:
      'Relacionamentos de confiança, atuando como parceiros de negócios.',
    icone: DollarSign,
  },
  {
    titulo: 'Sustentabilidade',
    subtitulo: '(como capturar o valor)',
    descricao:
      'Crescimento a longo prazo, fortalecendo a base das empresas atendidas.',
    icone: Leaf,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
}

export default function NossaAtuacao() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nossa atuação é baseada em 5 pilares <br /> fundamentais para todo negócio:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icone
            return (
              <motion.div
                key={index}
                className="border-2 border-teal-600 rounded-lg p-6 text-left hover:shadow-md bg-white transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-teal-700">{pilar.titulo}</h3>
                </div>
                <p className="text-teal-500 italic text-sm mb-2">{pilar.subtitulo}</p>
                <p className="text-gray-700 text-base">{pilar.descricao}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
