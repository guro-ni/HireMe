import { GraduationCap, BriefcaseBusiness, Star, FolderKanban } from "lucide-react";

export function CV() {
  return (
    <article className="mx-auto mt-0 w-full max-w-5xl rounded-2xl bg-white p-5 text-left shadow-sm sm:p-8 lg:p-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="font-bagel text-3xl text-neutral-800 sm:text-4xl">
          Guro Nicholaisen
        </h1>

        <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Tlf: 468 31 072 · guro.nicholaisen@signalbox.no 
        </p>
      </header>

      {/* Skillelinje */}
      <div className="my-8 h-px bg-neutral-800" />

      {/* Utdanning */}
        <section className="mb-8">
        <div className="mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="size-6 shrink-0 text-pink-700" />
            <h2 className="font-bagel text-xl text-neutral-800 sm:text-2xl">
            Utdanning
            </h2>
        </div>

        <div className="space-y-5 pl-9">

        {/* Utdanning 1 */}
        <div>
            <h3 className="font-semibold text-lg text-neutral-800">
                Master (MSc) i Computer Science,
                <span className="font-normal text-neutral-500">
                {" "}University of Brighton
                </span>
            </h3>
            <p className="mt-1 text-sm text-neutral-700">
                September 2026 – September 2027
            </p>
            <ul className="mt-2 list-disc space-y-2 px-4 pl-8 text-sm leading-relaxed text-neutral-600">
                <li>
                    Fokus på programmering, kunstig intelligens (AI), cyber security og
                    utvikling av digitale løsninger.
                </li>
                <li>
                    Planlagt gjennomføring av flere gruppeprosjekter i samarbeid med
                    studenter fra blant annet AI- og UX-relaterte masterprogrammer.
                </li>
            </ul>
        </div>

        {/* Utdanning 2 */}
        <div>
            <h3 className="font-semibold text-lg text-neutral-800">
                Bachelor i Informatikk,
                <span className="font-normal text-neutral-500">
                {" "}NTNU Trondheim
                </span>
            </h3>
            <p className="mt-1 text-sm text-neutral-700">
                August 2023 – Juni 2026
            </p>
            <ul className="mt-2 list-disc space-y-2 px-4 pl-8 text-sm leading-relaxed text-neutral-600">
                <li>
                    Faglig erfaring innen programmering, webutvikling og IT-sikkerhet,
                    med relevante valgfag innen sikkerhet og webutvikling.
                </li>
                <li>
                    Gjennomført flere gruppeprosjekter, blant annet utvikling av en
                    nettside for MIT Senseable City Lab som en del av bacheloroppgaven.
                </li>
                <li>
                    Studerer i et internasjonalt og tverrfaglig miljø med medstudenter fra 
                    ulike nasjonaliteter og utdanningsbakgrunner.
                </li>
            </ul>
        </div>

        {/* Utdanning 3 */}
        <div>
            <h3 className="font-semibold text-lg text-neutral-800">
                Bachelor i Bioingeniør (1 år),
                <span className="font-normal text-neutral-500">
                {" "}NTNU Trondheim
                </span>
            </h3>
            <p className="mt-1 text-sm text-neutral-700">
                August 2022 – Juni 2023
            </p>
        </div>

        {/* Utdanning 4 */}
        <div>
            <h3 className="font-semibold text-lg text-neutral-800">
                Årsstudium i Engelsk,
                <span className="font-normal text-neutral-500">
                {" "}NTNU Trondheim
                </span>
            </h3>
            <p className="mt-1 text-sm text-neutral-700">
                August 2020 – Juni 2021
            </p>
        </div>

        {/* Utdanning 5 */}
        <div>
            <h3 className="font-semibold text-lg text-neutral-800">
                Studiespesialisering med realfag,
                <span className="font-normal text-neutral-500">
                {" "}Saltdal Videregående Skole
                </span>
            </h3>
            <p className="mt-1 text-sm text-neutral-700">
                August 2017 – Juni 2020
            </p>
        </div>
        </div>
        </section>

      {/* Arbeidserfaring */}
      <section>
        <div className="mb-4 flex items-center justify-center gap-3">
          <BriefcaseBusiness className="size-6 shrink-0 text-pink-700" />
          <h2 className="font-bagel text-xl text-neutral-800 sm:text-2xl">
            Arbeidserfaring
          </h2>
        </div>

        <div className="space-y-5 pl-9">
        
        {/*Arbeidserfaring 1*/}
        <div>
        <h3 className="font-semibold text-lg text-neutral-800">
            Assistent/sommervikar,
            <span className="font-normal text-neutral-500">
            {" "}Nidarvoll Hjemmetjeneste (Trondheim)
            </span>
        </h3>
        <ul className="mt-1 space-y-2 text-sm text-neutral-700">
            <li>Mai 2026 – Juli 2026</li>
            <li>Juni 2025 – Juli 2025</li>
            <li>Juni 2024 – Juli 2024</li>
            <li>Juni 2023 – August 2023</li>
            <li>April 2022 - August 2022</li>
        </ul>
        <ul className="mt-2 list-disc space-y-2 px-4 pl-8 text-sm leading-relaxed text-neutral-600">
            <li>
                Arbeidet både selvstendig og i team med oppfølging og praktisk bistand til brukere.
            </li>
            <li>
                Fikk tilbud om å komme tilbake som sommervikar flere år på rad, med ansvar for varierte 
                oppgaver og tilpasning til ulike situasjoner og problemstillinger.
            </li>
        </ul>
        </div>

        {/*Arbeidserfaring 2*/}
        <div>
        <h3 className="font-semibold text-lg text-neutral-800">
            Pleiemedarbeider,
            <span className="font-normal text-neutral-500">
            {" "}Hjemmesykepleien i Saltdal Kommune
            </span>
        </h3>
        <p className="mt-1 text-sm text-neutral-700">
            Februar 2022 – April 2022
        </p>
        <ul className="mt-2 list-disc space-y-2 px-4 pl-8 text-sm leading-relaxed text-neutral-600">
            <li>
                Arbeidet selvstendig med oppfølging og praktisk bistand til brukere i eget hjem.
            </li>
            <li>
                Håndterte varierte oppgaver og tilpasset meg ulike behov og situasjoner.
            </li>
        </ul>
        </div>

        {/*Arbeidserfaring 3*/}
        <div>
        <h3 className="font-semibold text-lg text-neutral-800">
            Barnehagemedarbeider,
            <span className="font-normal text-neutral-500">
            {" "}Adecco AS
            </span>
        </h3>
        <p className="mt-1 text-sm text-neutral-700">
            Oktober 2021 – Februar 2022
        </p>
        <ul className="mt-2 list-disc space-y-2 px-4 pl-8 text-sm leading-relaxed text-neutral-600">
            <li>
                Arbeidet selvstendig og i team i ulike barnehager, med ansvar for å følge opp og ivareta barn i hverdagen.
            </li>
            <li>
                Tilpasset meg raskt til nye arbeidsmiljøer og samarbeidet med ulike kollegaer.
            </li>
        </ul>
        </div>

        {/*Arbeidserfaring 4*/}
        <div>
        <h3 className="font-semibold text-lg text-neutral-800">
            Butikkmedarbeider og vaskehjelp,
            <span className="font-normal text-neutral-500">
            {" "}Manufakturen AS
            </span>
        </h3>
        <ul className="mt-1 space-y-2 text-sm text-neutral-700">
            <li>Juni 2021 – August 2021</li>
            <li>Juni 2017 – Juli 2020</li>
        </ul>
        <ul className="mt-2 list-disc space-y-2 px-4 pl-8 text-sm leading-relaxed text-neutral-600">
            <li>
                Kunne få ansvar for å stenge butikken og arbeidet selvstendig med renhold.
            </li>
            <li>
                Bidro til orden og struktur på lageret, butikkdrift, salg og kundeservice.
            </li>
        </ul>
        </div>
        </div>
      </section>

      {/* Ferdigheter */}
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Star className="size-6 shrink-0 text-pink-700" />
          <h2 className="font-bagel text-xl text-neutral-800 sm:text-2xl">
            Ferdigheter
          </h2>
        </div>

        <div className="space-y-5 pl-9">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Tilpasningsdyktig */}
        <div className="rounded-xl bg-rose-50/70 p-4">
        <h3 className="mb-2 font-semibold text-neutral-800">
            Tilpasningsdyktig
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600">
            Trives med å samarbeide med mennesker med ulik bakgrunn og
            tilpasse meg nye arbeidsmiljøer.
        </p>
        </div>

        {/* Strukturert */}
        <div className="rounded-xl bg-rose-50/70 p-4">
        <h3 className="mb-2 font-semibold text-neutral-800">
            Strukturert og organisert
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600">
            God til å planlegge, prioritere og holde oversikt over flere
            oppgaver.
        </p>
        </div>

        {/* Problemløsning */}
        <div className="rounded-xl bg-rose-50/70 p-4">
        <h3 className="mb-2 font-semibold text-neutral-800">
            Problemløsning
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600">
            Erfaring med å håndtere ulike problemstillinger både
            selvstendig og i team.
        </p>
        </div>

        {/* Selvstendig og samarbeidsorientert */}
        <div className="rounded-xl bg-rose-50/70 p-4">
        <h3 className="mb-2 font-semibold text-neutral-800">
            Selvstendig og samarbeidsorientert
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600">
            Vant til å ta ansvar for egne oppgaver, samtidig som jeg
            bidrar aktivt i team.
        </p>
        </div>

        {/* Teknisk kompetanse */}
        <div className="rounded-xl bg-rose-50/70 p-4 sm:col-span-2">
        <h3 className="mb-2 font-semibold text-neutral-800">
            Teknisk kompetanse
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600">
            Erfaring med blant annet Java, TypeScript, Python,
            webutvikling, databaser og IT-sikkerhet, samt relevante
            utviklingsverktøy gjennom bachelorstudiet i informatikk og
            MSc Computer Science.
        </p>
        </div>
    </div>
    </div>
    </section>

    {/* Prosjekter */}
    <section className="mt-10">
    <div className="mb-4 flex items-center justify-center gap-3">
        <FolderKanban className="size-6 shrink-0 text-pink-700" />
        <h2 className="font-bagel text-xl text-neutral-800 sm:text-2xl">
        Prosjekter
        </h2>
    </div>

    <div className="space-y-5 pl-9">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">

        {/* MIT */}
        <div className="rounded-xl bg-rose-50/70 p-4">
        <p className="text-sm leading-relaxed text-neutral-600">
            <span className="font-semibold text-black">
            MIT Senseable City Lab
            </span>{" "} 
            – Webutviklingsprosjekt i gruppe som en del av bacheloroppgaven, i 
            samarbeid med ekstern oppdragsgiver
        </p>
        </div>

        {/* IT2810 */}
        <div className="rounded-xl bg-rose-50/70 p-4">
        <p className="text-sm leading-relaxed text-neutral-600">
            <span className="font-semibold text-black">
            Webutviklingsprosjekter (IT2810)
            </span>{" "}
            - Gjennomførte to gruppeprosjekter med utvikling av
            webapplikasjoner, med fokus på programmering, samarbeid og testing.
        </p>
        </div>

        {/* HireMe */}
        <div className="rounded-xl bg-rose-50/70 p-4">
        <p className="text-sm leading-relaxed text-neutral-600">
            <span className="font-semibold text-black">
            HireMe
            </span>{" "}
            - En interaktiv porteføljenettside som presenterer hvem jeg er, hva jeg kan og hva jeg har jobbet med, 
            med et personlig preg og kreative elementer.
        </p>
        </div>
    </div>
    </div>
    </section>
    </article>
  );
}