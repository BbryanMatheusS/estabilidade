'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  LucideIcon,
} from 'lucide-react'

interface Pilar {
  titulo: string
  subtitulo: string
  descricao: string
  icone: LucideIcon
}

const pilares: Pilar[] = [
  {
    titulo: 'Estratégia',
    subtitulo: '(o que se faz)',
    descricao:
      'Validação e/ou definição de estratégia considerando os objetivos de curto e longo prazo do Acionista.',
    icone: Briefcase,
  },
  {
    titulo: 'Governança',
    subtitulo: '(como se faz)',
    descricao:
      'Definição e implementação de modelo de governança corporativa, com eventual constituição de Conselho de Administração.',
    icone: ShieldCheck,
  },
  {
    titulo: 'Gestão',
    subtitulo: '(como otimizar)',
    descricao:
      'Levantamento e compreensão do cenário atual da Companhia, objetivos de longo prazo, restrições e oportunidades de melhoria. Foco em geração de valor.',
    icone: TrendingUp,
  },
  {
    titulo: 'Capital',
    subtitulo: '(como financiar e como capturar o valor)',
    descricao:
      'Avaliação e identificação de alternativas para melhor uso de Capital, seja ele dívida ou equity, em associação com a Estratégia, incluindo eventual Advisory em processos de M&A.',
    icone: DollarSign,
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
          Nossa atuação é baseada nos 4 pilares <br /> fundamentais para todo negócio:
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
