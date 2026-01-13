'use client';

import { ButtonLink } from '@salzpate/react-ui';
import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import PayPalSvgIcon from '@/components/SvgIcons/PayPalSvgIcon';

interface SpendenContentProps {
  level?: 'h1' | 'h2' | 'h3';
}

function SpendenContent({ level }: Readonly<SpendenContentProps>): JSX.Element {
  return (
    <FfPageSection headline="Spenden" level={level} id="spenden">
      <div className="page-section pb-8">
        <div className="font-bold">Unterstützen Sie unsere Feuerwehr – helfen Sie uns, zu helfen!</div>
        <br />
        Ob Feuerwehr, Kameradschaft oder unsere Jugendarbeit: Mit Ihrer Spende leisten Sie einen wertvollen Beitrag zur Sicherheit im Markt Donaustauf. Hier finden Sie unsere Kontodaten sowie einen direkten Link zu PayPal, um uns
        unkompliziert zu unterstützen.
        <br />
        <br />
        Unser Feuerwehrverein der Feuerwehr Markt Donaustauf hat die Aufgabe, die gemeindliche Pflichtaufgabe der Feuerwehr sowohl finanziell als auch personell zu fördern. Jede Unterstützung hilft, Ausrüstung zu beschaffen, Ausbildung zu
        ermöglichen und den Nachwuchs für das Ehrenamt zu begeistern.
        <br />
        <br />
        Ebenfalls können Sie unseren First Responder Dienst mit einer Spende unterstützen. Er wird ausschließlich durch Spendengelder sowie mit Unterstützung des Marktes Donaustauf betrieben.
        <br />
        <br />
        <div className="font-bold">Ihre Hilfe kommt an – direkt und vor Ort. Vielen Dank für Ihre Unterstützung!</div>
        <br />
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h3 className="mb-4">Spende per Überweisung:</h3>
            <strong>Name:</strong> Freiwillige Feuerwehr Donaustauf e.V.
            <br />
            <strong>BIC:</strong> GENODEF1DST
            <br />
            <strong>IBAN:</strong> DE51 7506 2026 0000 018678
            <br />
            <strong>Bank:</strong> Raiffeisenbank Oberpfalz Süd eG
            <br />
            <strong>Verwendungszweck:</strong> First Responder
          </div>
          <div className="mt-6 w-full md:mt-0 md:w-1/2">
            <h3 className="mb-4">Spende per PayPal:</h3>
            <ButtonLink href="https://www.paypal.com/donate/?hosted_button_id=ZFLWENFMK2CVG" target="_blank" className="flex w-50 items-center">
              <span className="mr-2">
                <PayPalSvgIcon height={14} width={14} />
              </span>
              <span>Jetzt Spenden</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </FfPageSection>
  );
}

export default SpendenContent;
