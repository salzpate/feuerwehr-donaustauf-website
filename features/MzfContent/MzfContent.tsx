'use client';

import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryImageGalleryImage from '@/components/Image/CloudinaryImageGallery';
import CloudinaryPageImage from '@/components/Image/CloudinaryPageImage';
import { ImageData } from '@/components/ImageOverlay';

interface MzfContentProps {
  images?: ImageData[];
}

function MzfContent({ images }: Readonly<MzfContentProps>): JSX.Element {
  return (
    <article>
      <FfPageSection headline="Mehrzweckfahrzeug" id="mehrzweckfahrzeug" className="pb-6 sm:pb-8">
        <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Florian Donaustauf 11/1</h2>
        <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Das Mehrzweckfahrzeug (MZF) ist mit modernen Kommunikationsmitteln und umfangreicher Ausrüstung zur Führung taktischer Einheiten ausgestattet. Es dient der Einsatzleitung zur raschen Anfahrt und Erkundung von Einsatzstellen.
            </div>
            <div className="mt-2">
              Als erstes Fahrzeug, das im Alarmfall das Feuerwehrgerätehaus verlässt, bringt das MZF den Einsatzleiter und den Zugtrupp direkt zur Einsatzstelle. Dort verschaffen sie sich einen Überblick über die Lage und können so den
              nachrückenden Kräften ohne Zeitverlust gezielte Einsatzaufträge erteilen.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <CloudinaryPageImage src="mzf-1_f44gol" width={405} height={227} alt="Florian Donaustauf 11/1" enableOverlay overlayHeight={3024} overlayWidth={4032} imageSeries={images} imageIndex={0}>
              MZF - Florian Donaustauf 11/1
            </CloudinaryPageImage>
          </div>
        </div>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Fahrzeugdaten</h3>
        <ul className="list-disc pl-8">
          <li>
            <span className="font-bold">Fahrgestell:</span> Mercedes Sprinter 316
          </li>
          <li>
            <span className="font-bold">Baujahr Fahrgestell:</span> 2018
          </li>
          <li>
            <span className="font-bold">Baujahr Aufbau:</span> 2019
          </li>
          <li>
            <span className="font-bold">Zulässiges Gesamtgewicht:</span> 3,5 t
          </li>
          <li>Automatikgetriebe</li>
          <li>LED-Fahrzeugfrontscheinwerfer</li>
          <li>Standheizung</li>
        </ul>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Feuerwehrtechnische Beladung und Ausrüstung (Auszug)</h3>
        <ul>
          <li>
            <span className="font-bold">Aufbauhersteller:</span> Furtner und Ammer Landau
          </li>
          <li>
            <span className="font-bold">Mannschaft:</span> 1/5 Staffel (6 Personen)
          </li>
        </ul>
        <ul className="mt-4 list-disc pl-8">
          <li>Handwerkzeug</li>
          <li>Feuerlöscher Pulver 12KG</li>
          <li>6 Digitalfunkhandsprechfunkgeräte</li>
          <li>Handmikrofon für Außendurchsagen</li>
          <li>Handscheinwerfer in LED</li>
          <li>4 Blitzleuchten (Syncroblitz)</li>
          <li>Bolzenschneider</li>
          <li>10 Faltleitkegel</li>
          <li>Brechstange</li>
          <li>Türöffnungswerkzeug</li>
          <li>Erste-Hilfe-Ausrüstung</li>
          <li>Gasmessgerät</li>
          <li>Ausrüstungsmodule zum Beispiel für Unwettereinsätze mit Motorsäge und Wassersauger, individuell beladbar</li>
          <li>Zweite Sprechfunkstelle hinten im Fahrzeug</li>
          <li>Umklappbarer Tisch</li>
          <li>230 Volt Wechselrichter</li>
          <li>Akkuladegerät für Akkuschrauber</li>
          <li>Heckwarneinrichtung LED</li>
          <li>Heckwarnbeklebung hochreflektierend</li>
          <li>Neues Fahrzeugdesign in Donaustauf Optik</li>
        </ul>
        <div className="mt-4">
          <span className="font-bold">Sonstige Beladung:</span>
        </div>
        <ul className="mt-2 list-disc pl-8">
          <li>Datensatz mit Objektdaten, Karten und Einsatzpläne</li>
          <li>Warnwesten</li>
          <li>Leinenbeutel</li>
          <li>Decke</li>
          <li>Akkuschrauber</li>
        </ul>
      </FfPageSection>
      {images && (
        <FfPageSection id="bilder" headline="Bilder" level="h2" className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
          <CloudinaryImageGalleryImage imageSeries={images} />
        </FfPageSection>
      )}
    </article>
  );
}

export default MzfContent;
