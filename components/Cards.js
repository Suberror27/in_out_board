import Image from "next/image";
import { useEffect, useState } from "react";
import { database } from "@/utils/firebase";
import { ref, onValue } from 'firebase/database';

export default function Cards(props) {
    const [dataReady, setDataReady] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    // useEffect(() => {
    //     const dataRef = ref(database, 'Managers'); // Change to your Firebase path

    //     const unsubscribe = onValue(dataRef, (snapshot) => {
    //         const dataList = [];
    //         snapshot.forEach((childSnapshot) => {
    //             const item = childSnapshot.val();
    //             dataList.push({ id: childSnapshot.key, ...item });
    //         });
    //         setDataReady(dataList);
    //     }, (error) => {
    //         console.error('Error fetching data:', error);
    //     });

    //     // Cleanup listener on unmount
    //     return () => unsubscribe();
    // }, []);
    
    // useEffect(() => {
    //     const collections = ["Managers"]; // Add your collection names here
    //     const fetchedData = [];

    //     const promises = collections.map(collection => {
    //         const dataRef = ref(database, collection);
    //         return new Promise((resolve, reject) => {
    //             onValue(dataRef, (snapshot) => {
    //                 const items = [];
    //                 snapshot.forEach((childSnapshot) => {
    //                     const item = childSnapshot.val();
    //                     items.push({ id: childSnapshot.key, ...item });
    //                 });
    //                 fetchedData[collection] = items;
    //                 resolve();
    //             }, (error) => {
    //                 console.error(`Error fetching data from ${collection}:`, error);
    //                 reject(error);
    //             });
    //         });
    //     });

    //     Promise.all(promises)
    //         .then(() => {
    //             setDataReady(fetchedData);
    //             setShowLoading(false);
    //             console.log(dataReady);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching collections:', error);
    //             setShowLoading(false);
    //         });
    // }, []);

    // useEffect(() => {
    //     const rootRef = ref(database); // Reference to the root of the database

    //     const unsubscribe = onValue(rootRef, (snapshot) => {
    //         const fetchedData = {};
    //         snapshot.forEach((childSnapshot) => {
    //             const collectionName = childSnapshot.key; // Get the collection name
    //             const items = [];

    //             childSnapshot.forEach((itemSnapshot) => {
    //                 const item = itemSnapshot.val();
    //                 items.push({ id: itemSnapshot.key, ...item });
    //             });

    //             fetchedData[collectionName] = items; // Store items under their collection name
    //         });

    //         setDataReady(fetchedData);
    //         setShowLoading(false);
    //         console.log(dataReady);
    //     }, (error) => {
    //         console.error('Error fetching data:', error);
    //         setShowLoading(false);
    //     });

    //     // Cleanup listener on unmount
    //     return () => unsubscribe();
    // }, []);

    return(<>
    {dataReady && dataReady.length > 0 ? dataReady.map((key, index) => (
        <div key={index} className="container bg-slate-700 rounded-md md:rounded-lg w-[21.5rem] md:w-[23rem] h-[3rem] md:h-[2.5rem] m-1">
            <div className="flex flex-wrap justify-start items-center gap-1">
                <div className="rounded-md md:rounded-lg bg-blue-700 flex h-full w-[3rem] md:w-[2.5rem]">
                    <Image src="/picture_placeholder.svg" width={100} height={100} alt="Picture"/>
                </div>
                <div>{key.displayName}</div>
                <select name="Location" className="text-black text-center bg-transparent border border-black">
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
    )) : <Image priority={true} className="w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem]" hidden={!showLoading} src="/loader.gif" width={1} height={1} alt="Loader"/>}
       
    </>
    );
}