'use client';

import { ButtonLink, MoreLink } from '@salzpate/react-ui';
import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import ArrowDownTraySvgIcon from '@/components/SvgIcons/ArrowDownTraySvgIcon';

interface BeitrittContentProps {
  level?: 'h1' | 'h2' | 'h3';
  showContact?: boolean;
}

function BeitrittContent({ level, showContact = true }: Readonly<BeitrittContentProps>): JSX.Element {
  return (
    <FfPageSection headline="Mitglied werden – Mach mit bei unserer Feuerwehr!" level={level} id="beitritt">
      <div className="page-section pb-8">
        <div>Mitglied werden – mach mit!</div>
        <br />
        <div>Bei uns kannst du aktiv mit anpacken oder uns als förderndes Mitglied unterstützen. Egal wie du dich einbringst – dein Engagement hilft, unsere Feuerwehr stark und einsatzbereit zu halten.</div>
        <br />
        <div>Jetzt Mitglied werden:</div>
        <div className="mt-8 mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">Fördernde Mitgliedschaft</h3>
            <div className="mb-2">Sie möchten die Feuerwehr unterstützen, können jedoch nicht am aktiven Dienst (Übungen und Einsätzen) teilnehmen?</div>
            <div>Werden Sie förderndes Mitglied und helfen Sie uns ideell und finanziell, unsere wichtige Arbeit weiterzuführen.</div>
          </div>
          <div>
            <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">Aktiver Feuerwehrdienst</h3>
            <div className="mb-2 font-bold">Du willst selbst aktiv werden?</div>
            <div className="mb-2">Dann komm vorbei und lerne die Feuerwehr Markt Donaustauf kennen!</div>
            <div className="mb-2">
              Unsere Übungen finden donnerstags ab 19:00 Uhr im zweiwöchentlichen Rhythmus statt. Schau ganz unverbindlich vorbei, wirf einen Blick ins Gerätehaus, entdecke unsere Fahrzeuge und lerne unsere Kameradinnen und Kameraden
              kennen.
            </div>
            <div className="mb-2">Gerne treffen wir uns auch außerhalb einer Übung vorab mit Dir. Die aktuellen Termine erfährst du direkt bei uns – schau einfach unter unseren Kontaktdaten nach.</div>
            <div>Mach mit – wir freuen uns auf dich!</div>
          </div>
          <div>
            <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">Jugendfeuerwehr</h3>
            <div className="mb-2 font-bold">Auch für den Nachwuchs ist gesorgt!</div>
            <div className="mb-2">Mädchen und Jungen ab 12 Jahren sind bei uns herzlich willkommen. Die Jugendübung findet in der Regel donnerstags um 18:00 Uhr statt oder im zweiwöchentlichen Rhythmus gemeinsam mit den Aktiven.</div>
            <div className="mb-2">
              Wenn dich Technik, Teamgeist und Kameradschaft begeistern und du Menschen in Notlagen helfen möchtest, dann melde dich gerne bei unseren Kommandanten oder Jugendwarten. Alle Informationen findest du unter unseren Kontaktdaten.
            </div>
            <div>Komm einfach vorbei – wir freuen uns auf alle, die mitmachen wollen!</div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">Beitrittserklärung</h3>
          <div className="mb-4">Über den folgenden Link gelangen Sie direkt zu unserer Beitrittserklärung. Bitte senden Sie das ausgefüllte und unterschriebene Formular an unsere Adresse.</div>
          <div className="mt-4">
            <ButtonLink href="/assets/Beitritt.pdf" target="_blank" className="flex w-75 items-center">
              <span className="mr-2">
                <ArrowDownTraySvgIcon />
              </span>
              <span>Beitrittserklärung öffnen</span>
            </ButtonLink>
          </div>
        </div>
        {showContact && (
          <MoreLink href="/kontakt" linkText="Kontakt">
            Sollten Sie Fragen haben, wenden Sie sich einfach an folgende Ansprechpartner:
          </MoreLink>
        )}
      </div>
    </FfPageSection>
  );
}

export default BeitrittContent;
