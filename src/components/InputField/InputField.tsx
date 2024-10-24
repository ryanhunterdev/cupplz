import s from './InputField.module.sass';

import { CalculatorState } from '../CoffeeCalculator/CoffeeCalculator';

const InputField = ({
    label,
    value,
    field,
    updateField,
}: {
    label: string;
    value: number;
    field: keyof CalculatorState;
    updateField: (field: keyof CalculatorState, value: number) => void;
}) => {

    const handleButtonChange = (type: "increment" | "decrement") => {
        const increment = type === "increment" ? 1 : -1;
        updateField(field, value + increment);
    }


    return (
        <div className={s.InputField}>
            <label htmlFor={field}>{label}</label>
            <input
                id={field}
                type="number"
                value={value ? Math.round(value * 100) / 100 : ""}
                onChange={(e) => updateField(field, parseFloat(e.target.value) || 0)}
            />
            <ul className={s.Buttons}>
                <li>
                    <button onClick={() => handleButtonChange("decrement")}>
                        <span role="img" aria-label="Decrement">
                            ➖
                        </span> 
                    </button>

                </li>
                <li>
                    <button onClick={() => handleButtonChange("increment")}>
                        <span role="img" aria-label="Increment">
                            ➕
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    )

};

export default InputField;
