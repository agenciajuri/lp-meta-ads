import { ShieldCheck, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Política de Privacidade | Agência Juri",
    description: "Entenda como a Agência Juri coleta, utiliza e protege os seus dados em conformidade com a LGPD e o Provimento 205/2021 da OAB.",
};

export default function PoliticaPrivacidade() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header Simplificado */}
            <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
                    <Link href="/">
                        <Image src="/logo-1.svg" alt="Agência Juri" width={120} height={35} priority className="h-8 md:h-9 w-auto" />
                    </Link>
                    <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition">
                        Voltar ao Início
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 lg:p-16">
                    <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                        <div className="bg-charcoal-gray/5 p-3 rounded-xl">
                            <ShieldCheck className="text-charcoal-gray w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bebas text-charcoal-gray tracking-wide">
                                Política de Privacidade
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Última atualização: {new Date().toLocaleDateString('pt-BR')}
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-gray max-w-none 
                          prose-headings:font-bebas prose-headings:text-charcoal-gray prose-headings:tracking-wide
                          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                          prose-ul:text-gray-600 prose-li:my-2">

                        <p>
                            A <strong>Agência Juri</strong> valoriza profundamente a privacidade de seus usuários e clientes. Esta Política de Privacidade foi elaborada para reafirmar nosso compromisso com a confidencialidade e segurança das informações que coletamos, em estrita observância à <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e às diretrizes éticas estabelecidas pelo <strong>Provimento 205/2021 do Conselho Federal da OAB</strong>.
                        </p>

                        <h2>1. Qual o foco da Agência Juri?</h2>
                        <p>
                            Somos uma agência de tecnologia e marketing focada exclusivamente no mercado jurídico. Nosso trabalho consiste na criação de websites, estruturação de fluxos de automação de contatos (CRM) e gestão de campanhas publicitárias em plataformas como Google Ads e Meta Ads. <strong>Não prestamos consultoria jurídica e nossos serviços não incentivam a mercantilização da profissão ou a captação indevida e passiva de clientela.</strong> Todo o escopo de atuação técnica respeita a sobriedade exigida pelo Estatuto da Advocacia e pelo Código de Ética e Disciplina da OAB.
                        </p>

                        <h2>2. Dados Coletados</h2>
                        <p>
                            Para podermos avaliar a viabilidade da prestação dos nossos serviços, coletamos apenas os dados essenciais fornecidos voluntariamente por você em nossos formulários de contato, como:
                        </p>
                        <ul>
                            <li>Nome completo</li>
                            <li>Área de atuação do seu escritório</li>
                        </ul>
                        <p>
                            Além disso, utilizamos tecnologias passivas (cookies e rastreadores de analytics, como Facebook Pixel, Google Analytics e Formbricks) para coletar dados anônimos de navegação e melhorar a eficácia de nossas páginas de captura.
                        </p>

                        <h2>3. Uso dos Dados</h2>
                        <p>As informações coletadas têm propósitos bem definidos e vinculados exclusivamente à nossa atividade fim:</p>
                        <ul>
                            <li>Personalizar e facilitar o contato direto da nossa equipe comercial via WhatsApp com o seu escritório.</li>
                            <li>Estruturar o entendimento prévio da sua área de atuação (Trabalhista, Previdenciário, Família, etc.) para propor uma solução de marketing adequada.</li>
                            <li>Analisar, de forma agregada e anônima, as métricas de uso e comportamento da nossa landing page (através de cookies) para otimizar nossa própria operação comercial.</li>
                        </ul>

                        <h2>4. Compartilhamento de Informações</h2>
                        <p>
                            Em nenhuma hipótese a Agência Juri aluga, vende ou licencia os seus dados pessoais ou as informações de seu escritório para terceiros. Seus dados são de uso estritamente interno e protegidos por nossa infraestrutura tecnológica.
                            <br /><br />
                            Podemos compartilhar dados anonimizados estritamente com os provedores das plataformas de publicidade (Google Ads, Meta) para fins de medição de conversões e inteligência de algoritmo (remarketing), desde que você tenha autorizado o uso de Cookies de publicidade em nosso aviso de consentimento.
                        </p>

                        <h2>5. Ferramentas e Cookies de Terceiros</h2>
                        <p>
                            Nosso site utiliza a plataforma <strong>Formbricks</strong> para analisar o comportamento do usuário e rodar pesquisas eventuais de satisfação ou perfilagem. Esta ferramenta, assim como nossos serviços parceiros de analytics, utiliza Cookies para identificar sessões de navegação. Ao aceitar as permissões no aviso inferior do nosso site, você consente com esta coleta. Caso recuse, apenas os cookies técnicos fundamentais para o funcionamento da aplicação web permanecerão ativos.
                        </p>

                        <h2>6. Direitos do Titular</h2>
                        <p>
                            Conforme a LGPD permite, você advogada(o) ou gestor de escritório tem o direito de, a qualquer momento e mediante requisição:
                        </p>
                        <ul>
                            <li>Confirmar a existência do tratamento de dados.</li>
                            <li>Acessar ou corrigir seus dados (como número de telefone ou áreas de atuação cadastradas).</li>
                            <li>Solicitar o bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.</li>
                            <li>Revogar o consentimento outrora oferecido.</li>
                        </ul>

                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mt-10">
                            <h3 className="text-xl font-bebas text-charcoal-gray mb-3 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-gray-500" /> Dúvidas e Solicitações
                            </h3>
                            <p className="text-gray-600 text-sm mb-0">
                                Para exercer os seus direitos como titular dos dados ou sanar qualquer dúvida referente a esta política ou às restrições em torno de publicidade para advogados, entre em contato conosco através do nosso canal de WhatsApp oficial disponibilizado nesta Landing Page ou procure diretamente nosso consultor após o contato inicial.
                            </p>
                        </div>

                    </div>
                </div>
            </main>

            <footer className="py-8 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center pb-[env(safe-area-inset-bottom)]">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Agência Juri. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
