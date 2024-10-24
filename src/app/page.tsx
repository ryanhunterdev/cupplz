import s from "./page.module.sass";

import CoffeeCalculator from "@/components/CoffeeCalculator/CoffeeCalculator";

export default function Home() {
  return (
    <div className={s.page}>
        <h1>Cupplz</h1>
        <CoffeeCalculator />
    </div>
  );
}
