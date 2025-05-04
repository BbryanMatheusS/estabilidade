export default function SobrePage() {
    return (
      <main className="bg-white text-gray-800 px-6 md:px-20 pt-16 space-y-20">
        <section className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-blue-900">Olá, somos a Stabilidade Consultoria Estratégica</h1>
          <p className="text-lg leading-relaxed">
            Fundada em outubro de 2023, a Stabilidade Consultoria é especializada em soluções estratégicas nas áreas
            tributária, financeira e contábil. Atuamos com empresas de todos os portes, promovendo crescimento sustentável
            por meio de resultados concretos e mensuráveis.
          </p>
          <p className="text-lg leading-relaxed">
            Nossa liderança é composta por Edson C A Silva, com mais de 25 anos de experiência nas áreas de planejamento
            tributário, contábil e estratégico, oferecendo atendimento personalizado com profundo conhecimento técnico.
          </p>
        </section>
  
        <section className="bg-gray-100 rounded-xl py-10 px-6 md:px-16 max-w-6xl mx-auto shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">Missão, Visão e Valores</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-blue-700">Missão</h3>
              <p>Oferecer soluções estratégicas personalizadas para otimizar a gestão financeira, tributária e operacional de empresas.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-700">Visão</h3>
              <p>Ser referência nacional em consultoria estratégica e tributária, reconhecida pelos resultados e impacto positivo gerado.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-700">Valores</h3>
              <ul className="list-disc pl-6">
                <li><strong>Ética:</strong> Transparência e legalidade.</li>
                <li><strong>Excelência:</strong> Qualidade máxima com foco em resultados.</li>
                <li><strong>Inovação:</strong> Atualização contínua de métodos.</li>
                <li><strong>Parceria:</strong> Relações de confiança e colaboração.</li>
                <li><strong>Sustentabilidade:</strong> Crescimento sólido e duradouro.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
  }