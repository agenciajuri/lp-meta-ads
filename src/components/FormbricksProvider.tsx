"use client";

import { useEffect, Suspense } from "react";
import formbricks from "@formbricks/js";
import { usePathname, useSearchParams } from "next/navigation";

function FormbricksProviderInner() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        formbricks.setup({
            environmentId: process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID || "cmlmb7g9e0007li01qxz5h3k3",
            appUrl: process.env.NEXT_PUBLIC_FORMBRICKS_API_HOST || "https://forms.agenciajuri.com.br",
        });
    }, []);

    useEffect(() => {
        formbricks?.registerRouteChange();
    }, [pathname, searchParams]);

    return null;
}

export default function FormbricksProvider() {
    return (
        <Suspense fallback={null}>
            <FormbricksProviderInner />
        </Suspense>
    );
}
