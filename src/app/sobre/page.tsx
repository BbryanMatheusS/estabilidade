// app/sobre/page.tsx
'use client';

import { TeamCarousel } from '@/components/TeamCarousel';
import React from 'react';

export default function SobrePage() {
    return (
        <main className="bg-white text-gray-900">
            {/* HERO */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Sobre a Stabilidade Consultoria Estratégica</h1>
                    <div className="text-lg text-gray-700 space-y-4 text-justify">
                        <p>
                            A Stabilidade é uma consultoria estratégica, tributária e financeira focada em empresas da área da saúde e da beleza.
                            Atuamos ao lado de médicos, clínicas e negócios que precisam tomar decisões com mais segurança, reduzir a carga
                            tributária e estruturar seu crescimento com base em planejamento.
                        </p>
                        <p>
                            Nosso diferencial está em unir visão estratégica com execução prática. Aplicamos o método <strong>Estratégia 360</strong>,
                            que avalia seu modelo de negócios, estrutura societária, indicadores financeiros e posicionamento no mercado —
                            tudo isso para gerar planos de ação reais, que saem do papel e trazem resultado.
                        </p>
                        <p>
                            Com mais de 25 anos de experiência acumulada pelo nosso fundador, Edson C. A. Silva, já contribuímos para a recuperação
                            de mais de <strong>R$ 2 bilhões</strong> em tributos pagos indevidamente, além de implementar estratégias que aumentaram
                            a margem de lucro e a estabilidade de dezenas de empresas.
                        </p>
                        <p>
                            Mas não paramos no diagnóstico: somos parceiros de decisão. Ajudamos nossos clientes a definir onde querem chegar e qual
                            o melhor caminho para isso, com inteligência fiscal, controle financeiro, estruturação jurídica e planejamento estratégico
                            de verdade — feito para o dia a dia e voltado ao futuro.
                        </p>
                        <p>
                            Se você sente que está pagando mais impostos do que deveria, ou se sua clínica ou consultório pode crescer com mais
                            segurança e menos improviso, fale com a Stabilidade. A gente mostra onde ajustar — e caminha junto com você.
                        </p>
                    </div>
                </div>
            </section>


            {/* HISTÓRIA E VISÃO GERAL */}
            <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
                    <p className="text-gray-700 leading-relaxed">
                        A Stabilidade nasceu com o objetivo de transformar a gestão tributária e financeira de empresas dos
                        setores de saúde, beleza, transporte e outros segmentos. Atuamos de forma consultiva com foco em resultados
                        reais e mensuráveis.
                    </p>
                    <p className="text-gray-700 mt-4 leading-relaxed">
                        Com liderança de Edson C A Silva — profissional com mais de 25 anos de experiência e formação executiva
                        nacional e internacional — temos um compromisso com a excelência técnica e a personalização de cada projeto.
                    </p>
                </div>
                <div className="bg-blue-100 h-64 rounded-xl shadow-inner flex items-center justify-center text-blue-800 font-semibold">
                    + R$ 2 bilhões em economia tributária para clientes
                </div>
            </section>
            {/* MISSÃO, VISÃO E VALORES */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">Missão, Visão e Valores</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Missão</h3>
                            <p className="text-gray-700">
                                Oferecer soluções estratégicas personalizadas que ajudem empresas a otimizar sua gestão financeira,
                                tributária e operacional, garantindo crescimento sustentável e adaptação às mudanças do mercado.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Visão</h3>
                            <p className="text-gray-700">
                                Ser referência nacional em consultoria estratégica e tributária, reconhecida pela excelência nos resultados
                                e pelo impacto positivo nos negócios dos nossos clientes.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Valores</h3>
                            <ul className="text-gray-700 list-disc list-inside space-y-1">
                                <li>Ética e transparência</li>
                                <li>Excelência com foco em resultados</li>
                                <li>Inovação contínua</li>
                                <li>Parceria de verdade com o cliente</li>
                                <li>Sustentabilidade e visão de longo prazo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* O QUE FAZEMOS */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">O que fazemos</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Planejamento Tributário</h3>
                            <p className="text-gray-700">
                                Análise das obrigações fiscais, identificando oportunidades de recuperação de créditos e redução de carga tributária para empresas do Simples, Lucro Presumido e Lucro Real.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Consultoria Financeira</h3>
                            <p className="text-gray-700">
                                Suporte em reestruturação financeira, fluxo de caixa, modelagem de investimentos e planejamento de expansão com foco em saúde financeira.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Consultoria Estratégica</h3>
                            <p className="text-gray-700">
                                Alinhamento entre metas estratégicas e operações, com planos de crescimento sustentável e aumento de competitividade.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Consultoria Contábil</h3>
                            <p className="text-gray-700">
                                Implementação de normas como CPC 16 e CPC 47, além de testes de impairment, garantindo conformidade contábil e governança corporativa.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-700">Revisão Fiscal e Recuperação</h3>
                            <p className="text-gray-700">
                                Revisão de tributos pagos indevidamente e recuperação de créditos fiscais, com mais de R$ 2 bilhões já recuperados para nossos clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* CASOS DE SUCESSO */}
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">O sucesso dos nossos clientes é o nosso sucesso</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-blue-700 mb-1">Reestruturação Financeira</h3>
                            <p className="text-gray-700">
                                Empresa de transportes com R$ 7 milhões de faturamento/ano. Em 6 meses: melhor liquidez e fluxo de caixa.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-blue-700 mb-1">Planejamento Tributário</h3>
                            <p className="text-gray-700">
                                Atuação em empresas do Simples e Lucro Presumido com recuperação de créditos fiscais e redução de carga tributária.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-blue-700 mb-1">Consultoria Estratégica</h3>
                            <p className="text-gray-700">
                                Expansão de salão de beleza com aumento de receita e melhorias operacionais.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-blue-700 mb-1">300+ CNPJs Médicos</h3>
                            <p className="text-gray-700">
                                Recuperação tributária superior a R$ 200 milhões para empresas de saúde.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-blue-700 mb-1">Recuperação Tributária</h3>
                            <p className="text-gray-700">
                                Economia acumulada de R$ 2 bilhões ao longo de 15 anos com revisão fiscal.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-blue-700 mb-1">Empresa de Cosméticos</h3>
                            <p className="text-gray-700">
                                Reestruturação de marketing e operações, com crescimento de marca e posicionamento competitivo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* POR QUE A STABILIDADE */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">Por que a Stabilidade?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        <div className="p-6 rounded-xl border hover:shadow transition">
                            <h3 className="text-lg font-semibold mb-2 text-blue-700">Soluções Personalizadas</h3>
                            <p className="text-gray-700">Projetos adaptados às necessidades específicas de cada cliente, com foco total em resultados concretos.</p>
                        </div>
                        <div className="p-6 rounded-xl border hover:shadow transition">
                            <h3 className="text-lg font-semibold mb-2 text-blue-700">Especialistas em Recuperação Tributária</h3>
                            <p className="text-gray-700">Economias significativas em setores como saúde e beleza, com profundo conhecimento em normas e legislação fiscal.</p>
                        </div>
                        <div className="p-6 rounded-xl border hover:shadow transition">
                            <h3 className="text-lg font-semibold mb-2 text-blue-700">Versatilidade de Atuação</h3>
                            <p className="text-gray-700">Atendemos desde pequenas empresas até grandes corporações nacionais, com a mesma dedicação e eficiência.</p>
                        </div>
                        <div className="p-6 rounded-xl border hover:shadow transition">
                            <h3 className="text-lg font-semibold mb-2 text-blue-700">Consultoria Contábil Avançada</h3>
                            <p className="text-gray-700">Especialistas em CPC 16, CPC 47 e testes de impairment, garantindo governança e conformidade técnica.</p>
                        </div>
                        <div className="p-6 rounded-xl border hover:shadow transition">
                            <h3 className="text-lg font-semibold mb-2 text-blue-700">Abordagem Direta e Eficiente</h3>
                            <p className="text-gray-700">Trabalho próximo ao cliente, com agilidade e entrega de soluções práticas e objetivas.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* NOSSO TIME */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Nosso time</h2>
                    <p className="text-gray-700 mb-10">
                        A Stabilidade Consultoria é liderada por <strong>Edson C A Silva</strong>, profissional com mais de 25 anos de experiência
                        em planejamento tributário, contábil e estratégico. Atuando diretamente com os clientes, Edson garante que cada projeto seja desenvolvido com excelência e precisão.
                    </p>

                    <div className="bg-white shadow-md rounded-xl p-6 md:p-8 text-left">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Liderança ativa e estrutura enxuta</h3>
                        <p className="text-gray-700">
                            Apesar de operarmos com uma estrutura compacta, utilizamos ferramentas tecnológicas avançadas e práticas de mercado modernas
                            para garantir agilidade, qualidade e personalização em cada entrega.
                        </p>
                    </div>
                </div>
                <TeamCarousel />
            </section>
            {/* QUEM ATENDEMOS */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Quem atendemos</h2>
                    <p className="text-gray-700 mb-10">
                        Atuamos em diferentes setores com soluções sob medida para cada tipo de negócio.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Setor de Saúde</h3>
                            <p className="text-gray-700 text-sm">
                                Clínicas médicas, laboratórios e hospitais com foco em planejamento tributário e recuperação fiscal.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Setor de Beleza</h3>
                            <p className="text-gray-700 text-sm">
                                Consultoria estratégica para salões de beleza e clínicas estéticas com foco em crescimento e eficiência.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Grandes Empresas</h3>
                            <p className="text-gray-700 text-sm">
                                Atuação contábil especializada em normas como CPC 16 e CPC 47, com foco em governança e compliance.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">Transporte e Outros</h3>
                            <p className="text-gray-700 text-sm">
                                Reestruturação financeira e planejamento estratégico para empresas de transporte e outros setores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}