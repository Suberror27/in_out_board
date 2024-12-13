import Head from "next/head";
import { NavigationBar } from "@/components/NavigationBar";
import Cards from "@/components/Cards";

export default function Home() {
  return (<>
        <Head>
            <title>In & Out Board</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/react_logo.svg" />
        </Head>
        <main id="mainContainer" className="bg-blue-900">
            <NavigationBar />
            <div className="h-screen grid grid-rows-[10vh_1fr] md:grid-rows-[10vh_1fr]"> {/* Div that sets grid of Rows 10vh on the top for the header and the rest for the list of names */}

                <header className="flex items-center justify-center text-center">
                    <h1 className="text-xl md:text-5xl font-semibold">(Title and logo of your company goes here)</h1>
                </header>
                
                <div className="text-white flex"> {/* Div that serves as wrapper for the rest of the rows set by parent Div (90vh) */}

                    <div className="grid md:grid-cols-[40vw_30vw_30vw] w-full"> {/* Div that serves as new grid template for 3 columns */}

                        <div className="grid grid-rows-[7vh_1fr] bg-amber-500"> {/* First Div column than serves as grid template for two rows, first one 7vh and the second one rest of available height */}

                            <div className="flex justify-center items-center text-center text-black bg-amber-100">
                                <h1 className="text-lg md:text-3xl font-semibold">Managers</h1>
                            </div>
                            
                            <div className="container">
                                <div className="flex flex-wrap justify-center">

                                    <Cards list="Managers"/>

                                </div>
                            </div>
                        
                        </div> {/* End First Div column than serves as grid template for two rows, first one 7vh and the second one rest of available height */}
                        <div className="grid grid-rows-[7vh_1fr] bg-blue-400"> {/* Second Div column than serves as grid template for two rows, first one 7vh and the second one rest of available height. */}

                            <div className="flex justify-center items-center text-center text-black bg-blue-100">
                                <h1 className="text-lg md:text-3xl font-semibold">Associate List A</h1>
                            </div>

                            <div className="container">
                                <div className="flex flex-wrap justify-center">
                                
                                    <Cards list="ListA"/>

                                </div>
                            </div>
                        
                        </div> {/* End of Second Div column than serves as grid template for two rows, first one 7vh and the second one rest of available height */}
                        <div className="grid grid-rows-[7vh_1fr] bg-red-400"> {/* Third Div column than serves as grid template for two rows, first one 7vh and the second one rest of available height */}

                            <div className="flex justify-center items-center text-center text-black bg-red-100">
                                <h1 className="text-lg md:text-3xl font-semibold">Associate List B</h1>
                            </div>

                            <div className="container">
                                <div className="flex flex-wrap justify-center">
                                
                                    <Cards list="ListB"/>

                                </div>
                            </div>
                        
                        </div> {/* End of Third Div column than serves as grid template for two rows, first one 7vh and the second one rest of available height */}
                    </div> {/* End of Div that serves as new grid template for 3 columns */}
                </div> {/* End of Div that serves as wrapper for the rest of the rows set by parent Div (90vh) */}
            </div> {/* End of Div that sets grid of Rows 10vh on the top for the header and the rest for the list of names */}
        </main>
  </>
  );
}
