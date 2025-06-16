'use client';

import { motion } from 'framer-motion';

export default function TextoInstitucional() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Texto Institucional
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed text-justify space-y-6"
        >
          <p>
            A Stabilidade é uma consultoria especializada em estratégia, finanças e tributação, voltada a médicos, clínicas e empresas da saúde e beleza que desejam crescer com inteligência, previsibilidade e segurança jurídica. Nossa missão é simples: reduzir ineficiências, proteger resultados e impulsionar o futuro de negócios que têm um papel essencial na vida das pessoas.
          </p>

          <p>
            Nosso trabalho começa pelo diagnóstico técnico e estratégico. Analisamos sua estrutura atual — societária, tributária, operacional e financeira — para entender o que está funcionando, o que precisa ser ajustado e onde estão os gargalos que drenam valor. A partir disso, desenhamos soluções sob medida, integrando planejamento, execução e acompanhamento.
          </p>

          <p>
            Com mais de 25 anos de experiência em planejamento tributário, finanças e estratégia empresarial, nosso fundador, Edson C. A. Silva, consolidou a metodologia Estratégia 360, que sustenta cada entrega da Stabilidade. O método foi criado para atender empresas que precisam de resultado, não apenas relatórios: ele combina visão de negócios com profundo conhecimento jurídico-contábil.
          </p>

          <p>
            Nosso histórico de atuação inclui a recuperação de mais de R$ 2 bilhões em tributos pagos indevidamente, além da implementação de soluções que aumentaram a lucratividade e o nível de controle de dezenas de clínicas, consultórios e empresas que operam no Lucro Presumido, Simples Nacional e Lucro Real.
          </p>

          <p>
            Somos diferentes porque não vendemos promessas genéricas. Nosso compromisso é com o que pode ser comprovado, entregue e sustentado ao longo do tempo. Atuamos como parceiros estratégicos dos nossos clientes, ajudando-os a tomar decisões melhores, com base em dados, cenários e estruturação adequada.
          </p>

          <p>
            Se você sente que sua empresa está travada, pagando mais do que deveria ou operando abaixo do seu potencial, fale com a Stabilidade. Nossos serviços foram pensados para quem deseja crescer com estratégia — e não por tentativa e erro.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
