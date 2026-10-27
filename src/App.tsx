import { useState } from 'react';
import Logo from './components/Logo'
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HireMeSidebar } from "@/components/HireMeSidebar";
import { CV } from "@/components/CV";
import { MineInteresser } from "@/components/MineInteresser";
import { Tinderprofil } from '@/components/Tinderprofil';
import confetti from "canvas-confetti";
import './App.css'


function App() {
  const [answered, setAnswered] = useState(false);
  const [question, setQuestion] = useState(1);
  const [noPosition, setNoPosition] = useState(0);
  const [hired, setHired] = useState(false);
  const [activePage, setActivePage] = useState("home");

  return (
    <SidebarProvider
      defaultOpen={true}
      className="min-h-screen bg-rose-50"
    >

      <main className="min-h-screen w-full flex-1 bg-rose-50 p-8">

        {/* Header */}
        <header className="fixed inset-x-0 top-0 z-50 flex flex-col gap-2 bg-rose-50 px-8 py-3 min-[1200px]:h-20 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:gap-0 min-[1200px]:py-0">
          {hired && (
            <SidebarTrigger
              className="order-2 min-[1200px]:hidden"
              aria-label="Åpne eller lukk menyen"
            />
          )}

          <div className="order-1">
            <Logo />
          </div>
        </header>

        <section
          className={
            hired && activePage === "cv"
              ? "w-full"
              : "mt-12 flex min-h-[80vh] flex-col items-center justify-center gap-8 text-center"
          }
        >
          {!hired && (
          <>
          <h1 className="text-2xl font-bagel text-neutral-800 md:text-5xl">
            {question === 1
              ? "Ser dere etter flere ansatte?"
              : "Kan dere ansette meg?"}
          </h1>

          <div className="flex items-center gap-12">
            <label className="mt-8 flex cursor-pointer items-center gap-3 text-3xl text-neutral-800 font-bagel">
              <Checkbox
                className="size-10 hover:scale-110 border-3"
                checked={answered}
                onCheckedChange={(checked) => {
                  if (question === 2 && checked === true) {
                    setHired(true);

                    // Konfetti fra venstre
                    confetti({
                      particleCount: 300,
                      spread: 360,
                      startVelocity: 25,
                      gravity: 0.5,
                      ticks: 500,
                      origin: { x: 0.2, y: 0.5 },
                    });

                    // Konfetti fra midten
                    confetti({
                      particleCount: 300,
                      spread: 360,
                      startVelocity: 25,
                      gravity: 0.5,
                      ticks: 500,
                      origin: { x: 0.5, y: 0.2 },
                    });

                    // Konfetti fra høyre
                    confetti({
                      particleCount: 300,
                      spread: 360,
                      startVelocity: 25,
                      gravity: 0.5,
                      ticks: 500,
                      origin: { x: 0.8, y: 0.4 },   
                    });

                  } else {
                    setAnswered(checked === true);
                  }
                }}
              />
              Ja
            </label>

            <label
              className={`mt-8 flex items-center gap-3 text-3xl text-neutral-800 font-bagel ${
                question === 2
                  ? "transition-transform duration-200"
                  : "cursor-pointer"
              }`}
              style={
                question === 2
                  ? {
                      transform:
                        noPosition === 0
                          ? "translate(0, 0)"
                          : noPosition === 1
                            ? "translate(60px, -35px)"
                            : noPosition === 2
                              ? "translate(-60px, 40px)"
                              : "translate(40px, 30px)",
                    }
                  : undefined
              }
              onMouseEnter={() => {
                if (question === 2) {
                  setNoPosition((previous) => (previous + 1) % 4);
                }
              }}
              onClick={() => {
                if (question === 1) {
                  setAnswered(true);
                } else {
                  setNoPosition((previous) => (previous + 1) % 4);
                }
              }}
            >
              <Checkbox
                className="size-10 hover:scale-110 border-3"
                checked={false}
                onCheckedChange={() => {
                  if (question === 1) {
                    setAnswered(true);
                  } else {
                    setNoPosition((previous) => (previous + 1) % 4);
                  }
                }}
              />
              Nei
            </label>
          </div>

          <div className="mt-4 h-14">      
            <Button
              type="button"
              className={`rounded-full bg-pink-700 px-8 py-6 font-semibold text-pink-50 transition-all duration-300 hover:bg-pink-800 ${
                answered
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
              onClick={() => {
                setQuestion(2);
                setAnswered(false);
              }}
              tabIndex={answered ? 0 : -1}
              aria-hidden={!answered}
            >
              Neste →
            </Button>
          </div>
          </>
        )}

        
        {hired && (
            <div className="min-h-screen w-full bg-rose-50">

              {/* Sidebar og innhold under headeren */}
              <div className="relative min-h-screen pt-12">

                <HireMeSidebar onNavigate={setActivePage}/>

                {/* Hovedinnhold */}
                <main className="flex h-full flex-col items-center justify-center gap-6 overflow-y-auto p-8 text-center">
                  {activePage === "home" && (
                    <>
                      <div className="text-8xl" role="img" aria-label="Konfetti">
                        🎉
                      </div>

                      <h1 className="font-bagel text-2xl text-neutral-800 md:text-5xl">
                        Gratulerer med ny ansatt!
                      </h1>

                      <p className="text-xl text-neutral-700">
                        Gleder meg til å jobbe med dere!
                      </p>

                      <Button
                        className="rounded-full bg-pink-700 px-8 py-6 font-semibold text-pink-50 hover:bg-pink-800"
                        onClick={() => setActivePage("cv")}
                      >
                        Bli kjent med deres nye ansatt →
                      </Button>
                    </>
                  )}

                  {activePage === "cv" && 
                  <div className="w-full px-4 pt-0 min-[1200px]:pl-64">
                    <CV />
                  </div>}

                  {activePage === "interesser" && <MineInteresser />}

                  {activePage === "tinder" && 
                  <div className="w-full px-4 pt-0 -mt-12 min-[1200px]:pl-64">
                   <Tinderprofil /> 
                  </div>}

                </main>
              </div>
            </div>
        )}
        </section>
      </main>
    </SidebarProvider>
  );
}

export default App
