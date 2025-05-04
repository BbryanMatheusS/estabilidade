'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    momento: '',
    colaboradores: '',
    observacoes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id='contato' className="w-full bg-blue-100 py-20 flex justify-center items-center relative">
      <div className="bg-white w-full max-w-md rounded-md shadow-lg p-8 relative z-10">
        <h2 className="text-3xl font-bold mb-8">Contato</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-700 outline-none py-2 text-gray-700 placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-700 outline-none py-2 text-gray-700 placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-700 outline-none py-2 text-gray-700 placeholder-gray-500"
            />
          </div>
          <div>
            <select
              name="momento"
              value={formData.momento}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-700 outline-none py-2 text-gray-700 bg-white"
            >
              <option value="">Momento do negócio</option>
              <option value="iniciando">Iniciando</option>
              <option value="crescendo">Crescendo</option>
              <option value="maduro">Maduro</option>
            </select>
          </div>
          <div>
            <select
              name="colaboradores"
              value={formData.colaboradores}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-300 focus:border-purple-700 outline-none py-2 text-gray-700 bg-white"
            >
              <option value="">Número de colaboradores</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
          </div>
          <div>
            <textarea
              name="observacoes"
              placeholder="Observações"
              rows={3}
              value={formData.observacoes}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-purple-700 outline-none py-2 text-gray-700 placeholder-gray-500 resize-none"
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 transition text-white font-bold py-2 px-6 rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
