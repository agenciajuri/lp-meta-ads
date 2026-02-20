import Image from "next/image";
import FallbackForm from "@/components/FallbackForm";
import { MousePointerClick, LayoutTemplate, Users, Scale, HelpCircle, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm pt-[env(safe-area-inset-top)] top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Image src="/logo-1.svg" alt="Agência Juri" width={140} height={40} priority className="h-8 md:h-10 w-auto" />
          </div>
          <nav className="flex items-center gap-4">
            <a href="#solucao" className="hidden md:block text-gray-600 hover:text-charcoal-gray font-medium transition">Nossos Serviços</a>
            <a href="#contato" className="bg-charcoal-gray hover:bg-charcoal-dark text-white font-bebas px-4 md:px-6 py-2 rounded transition tracking-wide text-base md:text-lg animate-pulse-slow hover:animate-none">
              Falar com Consultor
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-12">
        <div className="flex-1 text-center lg:text-left pt-2 md:pt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas text-charcoal-gray leading-tight mb-4 md:mb-6 tracking-wide">
            CAPTAÇÃO DE CLIENTES PARA ESCRITÓRIOS DE ADVOCACIA
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed md:leading-normal">
            Nós fazemos o marketing do seu escritório. Criamos seus <strong>Anúncios no Meta</strong> e <strong>Google</strong>, fazemos <strong>o seu site</strong> e entregamos os contatos direto no seu WhatsApp, tudo dentro das regras da OAB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contato" className="bg-charcoal-gray hover:bg-charcoal-dark text-white font-bebas text-xl md:text-2xl px-8 md:px-10 py-4 md:py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1 tracking-wide text-center w-full sm:w-auto animate-pulse-slow hover:animate-none">
              Quero Escalar Meu Escritório
            </a>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none relative mt-6 lg:mt-0">
          {/* Abstract representation of automation/growth */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative z-10">
            <h3 className="font-bebas text-2xl md:text-3xl text-charcoal-gray mb-6 text-center lg:text-left">O Que Nós Realmente Vendemos:</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-xl h-fit flex-shrink-0 border border-blue-100">
                  <MousePointerClick className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">1. Fazemos Seus Anúncios</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Colocamos o seu escritório na primeira página do Google quando alguém pesquisa por &quot;advogado [sua área]&quot;.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-green-50 p-3 rounded-xl h-fit flex-shrink-0 border border-green-100">
                  <LayoutTemplate className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">2. Criamos Seu Site Profissional</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Desenvolvemos uma página rápida e bonita, focada em passar confiança e fazer o cliente clicar no botão do WhatsApp.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-gray-50 p-3 rounded-xl h-fit flex-shrink-0 border border-gray-200">
                  <Users className="text-charcoal-gray" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">3. Organizamos Seus Atendimentos</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Ajudamos você a não perder nenhum contato que chega e a descartar rapidamente os &quot;curiosos&quot;.</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50 blur-3xl -z-10 rounded-full"></div>
        </div>
      </section>

      {/* Pain / Agitation Section */}
      <section id="solucao" className="bg-charcoal-gray py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Scale className="mx-auto mb-6 md:mb-8 text-gray-400 opacity-90" size={56} strokeWidth={1.5} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas mb-6 tracking-wide text-white leading-tight">DELEGUE A ATRAÇÃO DE CONTRATOS E FOQUE NO QUE REALMENTE IMPORTA: ADVOGAR.</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto font-light">Como advogado solo ou sócio, seu tempo vale muito. Quando você mesmo tenta criar os posts, configurar anúncios ou desenhar sites com templates genéricos, acaba se frustrando com o retorno ruim ou o medo de infringir as regras da OAB. Nossa agência absorve 100% desse esforço comercial, deixando sua agenda livre para fechar os melhores honorários.</p>
        </div>
      </section>

      {/* FAQ / Objections Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-charcoal-gray tracking-wide mb-4">DÚVIDAS FREQUENTES</h2>
            <p className="text-gray-600 text-lg">Respostas rápidas para você dar o próximo passo com segurança.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="text-charcoal-light flex-shrink-0" size={24} />
                <h4 className="font-bold text-gray-900 text-lg">Isso é gratuito?</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">Sim, nosso contato inicial para diagnóstico rápido da sua operação é sem compromisso e sem custos.</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="text-charcoal-light flex-shrink-0" size={24} />
                <h4 className="font-bold text-gray-900 text-lg">Quanto tempo para resposta?</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">Nosso time de especialistas costuma retornar o contato via WhatsApp em menos de 2h (em horário comercial).</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="text-charcoal-light flex-shrink-0" size={24} />
                <h4 className="font-bold text-gray-900 text-lg">Atende minha cidade?</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">Sim! Atendemos e estruturamos a captação de escritórios do Brasil inteiro de forma 100% remota e digital.</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="text-charcoal-light flex-shrink-0" size={24} />
                <h4 className="font-bold text-gray-900 text-lg">Como funciona o atendimento?</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">Faremos uma reunião rápida (aprox. 15 min) para entender sua rotina. Se houver fit, desenhamos um plano para seu caso.</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="text-charcoal-light flex-shrink-0" size={24} />
                <h4 className="font-bold text-gray-900 text-lg">Já investi antes e não tive retorno.</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">Isso é muito comum quando a campanha foca apenas em &quot;cliques vazios&quot;. Nossa metodologia foca na intenção do cliente e nos serviços mais rentáveis do seu escritório.</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="text-charcoal-light flex-shrink-0" size={24} />
                <h4 className="font-bold text-gray-900 text-lg">Já tenho site. Posso fechar só os Anúncios?</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">Faremos uma auditoria técnica gratuita no seu site. Se ele já for veloz e otimizado para conversão, aproveitamos a sua estrutura e aceleramos apenas as campanhas.</p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl hover:shadow-md transition duration-300 md:col-span-2 max-w-2xl mx-auto w-full">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="text-charcoal-light flex-shrink-0" size={24} />
                <h4 className="font-bold text-gray-900 text-lg">O que eu preciso enviar?</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">Somente preencher o formulário abaixo com seus dados básicos de contato. Na ligação, faremos perguntas sobre o seu volume atual de processos e gargalos do escritório.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bebas text-charcoal-gray mb-6 tracking-wide">QUER PARAR DE DEPENDER SÓ DE INDICAÇÕES?</h2>
            <p className="text-lg text-gray-600 mb-8">Se o seu telefone não toca todos os dias com novos clientes, você está deixando dinheiro na mesa. Preencha os dados abaixo e vamos desenhar um plano prático para o seu escritório.</p>
            <div className="space-y-4 text-gray-700 bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-left">
              <p className="flex items-center gap-3"><CheckCircle2 className="text-green-600 flex-shrink-0" size={20} /> Foco exclusivo em advogados e escritórios.</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="text-green-600 flex-shrink-0" size={20} /> Processos de CRM e automação validados.</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="text-green-600 flex-shrink-0" size={20} /> Adequação total às regras da OAB.</p>
            </div>
          </div>
          <div id="contato" className="relative scroll-mt-28 md:scroll-mt-32">
            {/* O formulário do Formbricks (App) aparecerá aqui se injetado sobre a página ou como overlay, 
                caso contrário, o fallback form se mantém renderizado. Ele serve de garantia técnica. */}
            <FallbackForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 md:py-12 px-4 sm:px-6 lg:px-8 pb-[max(env(safe-area-inset-bottom),_2.5rem)]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="bg-white p-2 border border-gray-100 rounded-lg">
            <Image src="/logo-1.svg" alt="Agência Juri" width={140} height={40} className="opacity-90 grayscale hover:grayscale-0 transition h-8 w-auto" />
          </div>
          <p className="text-[11px] md:text-xs text-gray-400 max-w-3xl leading-relaxed px-2 md:px-0">
            * Este material tem caráter exclusivamente informativo e visa instruir sobre marketing e automação empresarial direcionada ao setor jurídico. Não configuramos escritório de advocacia, não prestamos serviços jurídicos e a metodologia aqui exposta não promete resultados garantidos ou incentiva a mercantilização e a captação indevida de clientela, respeitando integralmente as balizas do Provimento 205/2021 da OAB.
          </p>
          <p className="text-sm text-gray-500 font-medium whitespace-nowrap">
            © {new Date().getFullYear()} Agência Juri. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
