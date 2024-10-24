import Image from "next/image";
import { useEffect, useState } from "react";
import { database } from "@/utils/firebase";
import { ref, onValue } from 'firebase/database';

export default function Cards() {
    const [dataReady, setDataReady] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const dataRef = ref(database, 'Managers'); // Change to your Firebase path

        const unsubscribe = onValue(dataRef, (snapshot) => {
            const dataList = [];
            snapshot.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                dataList.push({ id: childSnapshot.key, ...item });
            });
            setDataReady(dataList);
            console.log(dataReady);
        }, (error) => {
            console.error('Error fetching data:', error);
        });

        // Cleanup listener on unmount
        return () => unsubscribe();
    }, []);

    return(<>
       <div className="container bg-slate-700 rounded-md md:rounded-lg w-[21.5rem] md:w-[23rem] h-[3rem] md:h-[2.5rem] m-1">
            <div className="flex flex-wrap justify-start items-center gap-1">
                <div className="rounded-md md:rounded-lg bg-blue-700 flex h-full w-[3rem] md:w-[2.5rem]">
                    <Image src="/picture_placeholder.svg" width={100} height={100} alt="Picture"/>
                </div>
                <div>Abraham C</div>
                <select className="text-black text-center bg-transparent border border-black">
                    <option>Location</option>
                    <option>Home 🏠</option>
                    <option>Lunch 🥪</option>
                    <option>Appointment 📅</option>
                    <option>Etc...</option>
                </select>
                <div className="rounded-md md:rounded-lg hidden md:block h-full md:w-[2.5rem] ml-auto">
                    <Image src="/badge.svg" width={100} height={100} alt="Picture"/>
                </div>
                <div className="rounded-md md:rounded-lg flex h-full w-[3rem] md:w-[2.5rem] ml-auto">
                    <Image src="/out.svg" width={100} height={100} alt="Picture"/>
                </div>
            </div>
        </div> 
    </>
    );
}