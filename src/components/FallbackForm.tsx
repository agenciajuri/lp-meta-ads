"use client";

import { useState } from "react";
import { Send, MessageSquare } from "lucide-react";

export default function FallbackForm() {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        area: "",
        outraArea: "",
        oab: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // In a real scenario, change this to the actual webhook URL
            const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || "https://hooks.zapier.com/fake-webhook";

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Erro ao enviar");

            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleWhatsApp = () => {
        const msgArea = formData.area ? ` e atuo na área ${formData.area === 'Outro' ? formData.outraArea : formData.area}` : '';
        const text = `Olá, gostaria de saber mais sobre a criação de anúncios e captação de clientes para o meu escritório. Me chamo ${formData.nome || ""}${msgArea}.`;
        window.open(`https://wa.me/5562996903303?text=${encodeURIComponent(text)}`, "_blank");
    };

    if (status === "success") {
        return (
            <div className="bg-white p-8 rounded-lg shadow-xl text-center border border-gray-100 max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                </div>
                <h3 className="text-2xl font-bebas text-gray-900 mb-2">Contato Registrado!</h3>
                <p className="text-gray-600">Nossa equipe entrará em contato em breve para apresentar a solução ideal para seu escritório.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 max-w-md mx-auto">
            <h3 className="text-3xl font-bebas text-charcoal-dark mb-2 text-center">Fale com um Especialista</h3>
            <p className="text-gray-500 text-sm text-center mb-6">Preencha os dados abaixo para descobrirmos a melhor estratégia para sua rotina.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Nome Completo</label>
                    <input
                        id="nome"
                        type="text"
                        required
                        className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal-light focus:border-transparent outline-none transition"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Dr(a). Carlos Silva"
                    />
                </div>

                <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Área Principal de Atuação</label>
                    <select
                        id="area"
                        required
                        className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal-light focus:border-transparent outline-none transition bg-white"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    >
                        <option value="" disabled>Selecione uma área...</option>
                        <option value="Trabalhista">Trabalhista</option>
                        <option value="Previdenciário">Previdenciário</option>
                        <option value="Família">Família</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>

                {formData.area === "Outro" && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                        <label htmlFor="outraArea" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Qual é a sua área?</label>
                        <input
                            id="outraArea"
                            type="text"
                            required
                            className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal-light focus:border-transparent outline-none transition"
                            value={formData.outraArea}
                            onChange={(e) => setFormData({ ...formData, outraArea: e.target.value })}
                            placeholder="Digite sua área de atuação"
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1 ml-1">WhatsApp</label>
                    <input
                        id="telefone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal-light focus:border-transparent outline-none transition"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(11) 99999-9999"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-charcoal-gray hover:bg-charcoal-dark text-white font-bold py-4 px-4 mt-2 rounded-lg shadow-md transition-all active:scale-[0.98] flex justify-center items-center font-bebas text-xl md:text-2xl tracking-wide disabled:opacity-70 animate-pulse-slow hover:animate-none"
                >
                    {status === "loading" ? "Enviando..." : "Solicitar Contato"}
                </button>
            </form>

            {status === "error" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600 text-center font-medium mb-3">
                        Houve um erro de comunicação. Mas não se preocupe, você pode falar diretamente pelo WhatsApp.
                    </p>
                    <button
                        onClick={handleWhatsApp}
                        className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-2 px-4 rounded-md transition-colors flex justify-center items-center"
                    >
                        <MessageSquare size={18} className="mr-2" />
                        Falar pelo WhatsApp
                    </button>
                </div>
            )}
        </div>
    );
}
