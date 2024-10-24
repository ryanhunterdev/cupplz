'use client'

import s from "./Main.module.sass";
import cn from 'clsx'

import CoffeeCalculator from "@/components/CoffeeCalculator/CoffeeCalculator";
import Loading from "@/components/Loading/Loading";

import { useEffect, useState } from "react";

import Share from '@/icons/share'

import { useSearchParams } from 'next/navigation'

export default function Main() {
    const [showIntro, setShowIntro] = useState(true);

    const searchParams = useSearchParams()
 
    const mode = searchParams.get('mode')

    const isStandAlone = mode === 'standalone'

    useEffect(() => {
        setTimeout(() => {
            setShowIntro(false);
        }, 1000);
    }, []);

    return (
        <div className={s.Main}>
            <h1>Cupplz</h1>
            <CoffeeCalculator />
            {!isStandAlone &&
                <div className={s.AddApp}>
                    <p>{`Download app!`}</p>
                    <p>{`Press `}<span>{Share}</span>{` and "Add to Home Screen"`}</p>
                </div>
            }
            <div className={cn(s.Intro, showIntro && s.Show)}>
                <Loading />
            </div>
        </div>
    );
}
