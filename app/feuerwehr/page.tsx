'use client';

import { JSX } from 'react';
import { PageSection } from '@salzpate/react-ui';
import PageMenuLink from '@/components/PageMenuLink';

function Feuerwehr(): JSX.Element {
  return (
    <PageSection headline="Feuerwehr" id="feuerwehr">
      <div className="mb-4 grid-cols-1 sm:col-span-8 lg:col-span-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PageMenuLink href="/feuerwehr/mannschaft/" name="Mannschaft" image="/assets/images/menu/feuerwehr-mannschaft.png">
            Unser Team aus ausgebildeten Einsatzkräften arbeitet gemeinsam in festen Funktionen, um den Feuerwehralltag effektiv zu bewältigen.
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/einsaetze/" name="Einsätze" image="/assets/images/menu/feuerwehr-einsatz.jpg">
            Unsere Feuerwehr ist 24/7 im Einsatz für Brände, technische Hilfe und Verkehrssicherheit. Hier finden Sie aktuelle Informationen zu unseren Einsätzen.
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/beitritt/" name="Mitglied werden" image="/assets/images/menu/verein-beitritt.jpg">
            Sie interessieren sich für eine Mitgliedschaft in unserer Feuerwehr?
          </PageMenuLink>
        </div>
      </div>
    </PageSection>
  );
}

export default Feuerwehr;
