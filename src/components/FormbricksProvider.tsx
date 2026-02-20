"use client";

import { useEffect, Suspense, useRef } from "react";
import formbricks from "@formbricks/js";
import { usePathname, useSearchParams } from "next/navigation";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

function CookieAndFormProvider() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isInitialized = useRef(false);

    useEffect(() => {
        const initFormbricks = () => {
            if (!isInitialized.current) {
                formbricks.setup({
                    environmentId: process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID || "cmlmb7g9e0007li01qxz5h3k3",
                    appUrl: process.env.NEXT_PUBLIC_FORMBRICKS_API_HOST || "https://forms.agenciajuri.com.br",
                });
                isInitialized.current = true;
                formbricks?.registerRouteChange();
            }
        };

        CookieConsent.run({
            categories: {
                necessary: {
                    enabled: true,
                    readOnly: true
                },
                analytics: {
                    enabled: false
                }
            },
            language: {
                default: 'pt',
                translations: {
                    pt: {
                        consentModal: {
                            title: 'Gerenciamento de Cookies (LGPD)',
                            description: 'Utilizamos cookies analíticos e de pesquisa para entender nossos visitantes de forma anônima e aprimorar a usabilidade geral. Ao aceitar, você concorda com nossa <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a>.',
                            acceptAllBtn: 'Aceitar Todos',
                            acceptNecessaryBtn: 'Apenas Necessários',
                            showPreferencesBtn: 'Configurar'
                        },
                        preferencesModal: {
                            title: 'Preferências de Privacidade',
                            acceptAllBtn: 'Aceitar Todos',
                            acceptNecessaryBtn: 'Apenas Necessários',
                            savePreferencesBtn: 'Salvar Minhas Escolhas',
                            closeIconLabel: 'Fechar',
                            sections: [
                                {
                                    title: 'Transparência e Controle',
                                    description: 'Respeitamos a LGPD (Lei nº 13.709/2018). Você pode optar por quais cookies permitir de acordo com as categorias abaixo.'
                                },
                                {
                                    title: 'Cookies Estritamente Necessários',
                                    description: 'Estes cookies são essenciais para o pleno funcionamento tecnológico da plataforma e proteção contra fraudes. Não podem ser desabilitados.',
                                    linkedCategory: 'necessary'
                                },
                                {
                                    title: 'Cookies Analíticos e de Pesquisa',
                                    description: 'Utilizamos tecnologias de terceiros (como Formbricks e Google Analytics) para rodar pesquisas demográficas anonimizadas e entender falhas de navegação.',
                                    linkedCategory: 'analytics'
                                }
                            ]
                        }
                    }
                }
            },
            guiOptions: {
                consentModal: {
                    layout: 'box',
                    position: 'bottom right',
                    equalWeightButtons: false,
                    flipButtons: false
                },
                preferencesModal: {
                    layout: 'box',
                    equalWeightButtons: false,
                    flipButtons: false
                }
            },
            onConsent: () => {
                if (CookieConsent.acceptedCategory('analytics')) {
                    initFormbricks();
                }
            },
            onChange: ({ changedCategories }) => {
                if (changedCategories.includes('analytics')) {
                    if (CookieConsent.acceptedCategory('analytics')) {
                        initFormbricks();
                    }
                }
            }
        });
    }, []);

    useEffect(() => {
        if (isInitialized.current) {
            formbricks?.registerRouteChange();
        }
    }, [pathname, searchParams]);

    return null;
}

export default function FormbricksProvider() {
    return (
        <Suspense fallback={null}>
            <CookieAndFormProvider />
        </Suspense>
    );
}
