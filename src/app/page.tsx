import { Suspense } from "react";
import Main from "@/components/Main/Main";
import Loading from "@/components/Loading/Loading";

export default function Page() {

    return (
        <Suspense fallback={<Loading />}>
            <Main />
        </Suspense>
    );
}
