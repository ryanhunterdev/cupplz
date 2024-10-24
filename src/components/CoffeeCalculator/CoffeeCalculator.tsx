'use client'

import React, { useState } from "react";

import InputField from "../InputField/InputField";

import s from "./CoffeeCalculator.module.sass";

export interface CalculatorState {
  ratioLeft: number;
  ratioRight: number;
  cupSize: number;
  cups: number;
  grams: number;
  water: number;
}

const CoffeeCalculator = () => {
    const [state, setState] = useState<CalculatorState>({
        ratioLeft: 60,
        ratioRight: 1000,
        cupSize: 250, 
        cups: 4,
        grams: 60,
        water: 1000,
    });

    const updateField = (field: keyof CalculatorState, value: number) => {
        const newState = { ...state };
        newState[field] = value;

        switch (field) {
        case "ratioLeft":
        case "ratioRight":
            newState.grams =
            (newState.ratioLeft * newState.cups * newState.cupSize) /
            newState.ratioRight;
            newState.water = newState.cups * newState.cupSize;
            break;
        case "cupSize":
        case "cups":
            newState.water = newState.cups * newState.cupSize;
            newState.grams =
            (newState.ratioLeft * newState.water) / newState.ratioRight;
            break;
        case "grams":
            newState.water =
            (newState.grams * newState.ratioRight) / newState.ratioLeft;
            newState.cups = newState.water / newState.cupSize;
            break;
        case "water":
            newState.cups = newState.water / newState.cupSize;
            newState.grams =
            (newState.ratioLeft * newState.water) / newState.ratioRight;
            break;
        }

        setState(newState);
    };


    return (
        <div className={s.CoffeeCalculator}>
            <div className={s.Row}>
                <InputField
                    label="Ratio Coffee (g)"
                    field="ratioLeft"
                    value={state.ratioLeft}
                    updateField={updateField}
                />
                <InputField
                    label="Ratio Water (ml)"
                    field="ratioRight"
                    value={state.ratioRight}
                    updateField={updateField}
                />
            </div>
            <div className={s.Row}>
                <InputField
                    label="Cup Size (ml)"
                    field="cupSize"
                    value={state.cupSize}
                    updateField={updateField}
                />
                <InputField 
                    label="Number of Cups" 
                    field="cups" 
                    value={state.cups} 
                    updateField={updateField}
                    />
            </div>
            <div className={s.Row}>
                <InputField 
                    label="Total Coffee (g)" 
                    field="grams" 
                    value={state.grams} 
                    updateField={updateField}
                    />
                <InputField 
                    label="Total Water (ml)" 
                    field="water" 
                    value={state.water} 
                    updateField={updateField}
                />
            </div>
        </div>
    );
};

export default CoffeeCalculator;
