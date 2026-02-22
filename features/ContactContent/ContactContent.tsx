'use client';

import { JSX } from 'react';

import ModernContactCard from '@/components/ContactCard/ContactCard';
import { FfPageSection } from '@/components/FfPageSection';
import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';

interface ContactContentProps {
  level?: 'h1' | 'h2' | 'h3';
  showPhone?: boolean;
}

function ContactContent({ level, showPhone = true }: Readonly<ContactContentProps>): JSX.Element {
  return (
    <FfPageSection headline="Kontakt" id="kontakt" level={level} className="page-section relative">
      <div className="mb-2 font-bold">Wichtiger Hinweis:</div>
      <div className="mb-2">Bitte nutzen Sie unsere Kontaktdaten nur für zeitunkritische und organisatorische Anfragen.</div>
      <div className="mb-2">Bei einem Notfall rufen Sie unbedingt die 112 – rund um die Uhr und europaweit erreichbar.</div>
      <div className="mb-2">NOTRUF 112 – für Feuerwehr und Rettungsdienst. Ohne Vorwahl. Aus jedem Netz. Europaweit und gebührenfrei.</div>
      <div className="mb-2">Bitte beachten Sie bei der Kontaktaufnahme, dass wir keine Ärmelabzeichen versenden. Die Anfragen haben in letzter Zeit stark zugenommen.</div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-9">
        <FfLogoSvgIcon className="h-full w-full max-w-2xl" aria-hidden="true" />
      </div>
      <div className="relative z-2 my-6 grid auto-rows-fr grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-2">
        <ModernContactCard
          name="Christopher Möck"
          role="Federführender Kommandant"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_crop,g_face,h_400,w_400/v1762602470/moeck_jvxbce.jpg"
          email="kommandant@feuerwehr-donaustauf.de"
          phone={showPhone ? '+49 151 19146666' : undefined}
          street="Taxisstr. 2"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Patrick Schrödel"
          role="Stellvertretender Kommandant"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_crop,g_face,h_400,w_400/v1762602471/schroedel_pqm53d.jpg"
          email="stellv.kommandant@feuerwehr-donaustauf.de"
          phone={showPhone ? '+49 175 1657839' : undefined}
          street="Gregor-Mendel-Str. 5"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Tobias Müller"
          role="Vorsitzender"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_crop,g_face,h_600,w_600/v1762602468/mueller_ybcumm.jpg"
          email="vorsitzender@feuerwehr-donaustauf.de"
          phone={showPhone ? '+49 176 64211895' : undefined}
          street="Baronstr. 81"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Maximilian Semmelmann"
          role="Stellvertretender Vorsitzender"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_crop,g_face,h_400,w_400/v1762602468/semmelmann_ltmshm.jpg"
          email="vorsitzender@feuerwehr-donaustauf.de"
          phone={showPhone ? '+49 1515 7590435' : undefined}
          street="Baronstr. 1"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Stefanie Jobst"
          role="Jugendwartin"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_400,w_400/v1762602468/foto_folgt_demnaechst_pxkcwp.png"
          email="jugend@feuerwehr-donaustauf.de"
          phone={showPhone ? '' : undefined}
          street="Gregor-Mendel-Str. 5"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Feuerwehrgerätehaus"
          role=""
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_400,w_400/v1762602468/feuerwehrgertehaus_h0irmq.jpg"
          email="feuerwehr@feuerwehr-donaustauf.de"
          phone={showPhone ? '+49 9403 8205' : undefined}
          street="Regensburger Str. 9"
          town="93093 Donaustauf"
        />
      </div>
    </FfPageSection>
  );
}

export default ContactContent;
