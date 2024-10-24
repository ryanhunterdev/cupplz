'use client'

import s from "./page.module.sass";
import cn from 'clsx'

import CoffeeCalculator from "@/components/CoffeeCalculator/CoffeeCalculator";

import { useEffect, useState } from "react";

import Share from '@/icons/share'

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowIntro(false);
        }, 1000);
    }, []);

    return (
        <div className={s.Home}>
            <h1>Cupplz</h1>
            <CoffeeCalculator />
            <div className={s.AddApp}>
                <p>{`Download app!`}</p>
                <p>{`Press `}<span>{Share}</span>{` and "Add to Home Screen"`}</p>
            </div>
            <div className={cn(s.Intro, showIntro && s.Show)}>
                <img src="/logo.svg" alt="Cupplz" />
            </div>
        </div>
    );
}
