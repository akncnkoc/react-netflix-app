import { useEffect, useState } from "react";
export default function HeroSection() {

    const [heroSectionHeight, setHeroSectionHeight] = useState(0);
    function resize() {

    }


    useEffect(() => {
        setHeroSectionHeight(window.innerHeight - 64);
    }, []);


    return (
        <div className="relative w-full" style={{ height: heroSectionHeight + "px" }}>
            {/* <img className="absolute object-cover w-full h-full z-0" src="https://occ-0-1490-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS2FX9x0e-fy7prSrS07KOWSYqRWwUPDFXqZgnlVC36GzS82YeOGItlFXiruP7Z3mDoTxrulyWsPSnThj4Ytx3lUEKhb.webp?r=6af" /> */}
            <video src="blob:https://www.netflix.com/7bf87141-cc1f-4a9a-9021-3e0d0c7395aa" />
            <div className="absolute bottom-48 left-24 w-[554px] flex flex-col gap-y-8">
                <img src="https://occ-0-1490-2773.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABegTTBUZvbzRB6RDwK4gwnyU3GSlU_9dv0_5Q82_0_Ec_T1zsZVeejpqmQpzwxlA-PRZ11K1xUkBbrAgMZKOmFsNb1LB8xRCwZpFnQjXr34cWx-YTL4PVIClIW__EEv8XPUrbPZMfm192ifEdsR-6_dVxUgLtlHL83Xrxgw7S781LQ.webp?r=527" />
                <p className="text-white shadow-inner text-xl select-none">Yakın gelecekte, Paris'te, iki zeki kardeş ruh eşlerini bir araya getirmek üzere tasarlanan bir implant geliştirir. Ancak, test sonuçları beklenmedik sürprizlere gebedir.</p>
            </div>
        </div>
    )
}
