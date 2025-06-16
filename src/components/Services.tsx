"use client";
import {
    ClipboardList,
    RefreshCw,
    Target,
    Users,
    DollarSign,
    TrendingUp,
    Banknote,
    Shield,
    BarChart2
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: <ClipboardList className="h-8 w-8 text-primary" />,
        title: "Planejamento tributário personalizado",
        description: "Redução legal da carga fiscal, com análises por CNPJ, regime e estrutura."
    },
    {
        icon: <RefreshCw className="h-8 w-8 text-primary" />,
        title: "Revisão fiscal e recuperação de tributos",
        description: "Identificação e restituição de créditos pagos indevidamente, com embasamento técnico e jurídico."
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Planejamento estratégico para clínicas e consultórios",
        description: "Definição de metas, posicionamento, estrutura e indicadores de desempenho."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Estruturação e reestruturação societária",
        description: "Adequação da estrutura jurídica para eficiência fiscal, sucessão e expansão."
    },
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "Consultoria financeira e de precificação",
        description: "Apoio na formação de preços, controle de margens e gestão de indicadores financeiros."
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Modelagem de negócios e expansão de unidades",
        description: "Planejamento de novas unidades, franquias ou associações, com viabilidade econômica."
    },
    {
        icon: <Banknote className="h-8 w-8 text-primary" />,
        title: "Captação de recursos e financiamento",
        description: "Projetos para obtenção de capital de giro, investimento ou inovação."
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Planejamento sucessório empresarial e familiar",
        description: "Organização patrimonial, blindagem jurídica e continuidade dos negócios."
    },
    {
        icon: <BarChart2 className="h-8 w-8 text-primary" />,
        title: "Acompanhamento estratégico mensal ou trimestral",
        description: "Gestão contínua da execução dos planos, com relatórios, reuniões e ajustes de rota."
    }
];

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
};

export default function Services() {
    return (
        <section className="bg-white py-20 px-4" id="servicos">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                    Nossos Serviços
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-lg leading-relaxed"
                >
                    Na <strong>Stabilidade</strong>, os serviços são estruturados para entregar resultado real, com foco em lucratividade, conformidade e crescimento.
                    Trabalhamos com empresas que desejam ir além da contabilidade tradicional e buscam uma consultoria que entende o negócio, os números e os riscos de cada decisão.
                    <br /><br />
                    Nosso foco está em integrar planejamento estratégico, inteligência financeira e eficiência tributária, oferecendo soluções práticas que atendem desde médicos autônomos até holdings familiares e empresas do setor da saúde e da beleza.
                    Todos os serviços seguem o método Estratégia 360: diagnóstico profundo, solução personalizada, e apoio contínuo.
                    <br /><br />
                    Soluções pensadas para gerar resultados com a metodologia <strong>Estratégia 360</strong>.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
