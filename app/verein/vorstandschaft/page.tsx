'use client';

import { PageSection } from '@salzpate/react-ui';
import { JSX } from 'react';

function Vorstandschaft(): JSX.Element {
  return (
    <PageSection headline="Vorstandschaft" id="vorstandschaft">
      <div className="bg-gray-100 text-center p-4 mb-4 dark:bg-gray-900">
        <div className="text-2xl font-bold mb-2">Vorsitzender</div>
        <div className="text-lg">Tobias Müller</div>
      </div>
      <div className="bg-gray-100 text-center p-4 mb-4 dark:bg-gray-900">
        <div className="text-2xl font-bold mb-2">Stellvertretender Vorsitzender</div>
        <div className="text-lg">Wolfgang Jaumann</div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-100 text-center p-4 dark:bg-gray-900">
          <div className="text-xl font-bold mb-2">Schriftführer</div>
          <div className="text-base">Andreas Piwonka</div>
        </div>
        <div className="bg-gray-100 text-center p-4 dark:bg-gray-900">
          <div className="text-xl font-bold mb-2">Kassenwart</div>
          <div className="text-base">Martin Sendlbeck</div>
        </div>
        <div className="bg-gray-100 text-center p-4 dark:bg-gray-900">
          <div className="text-xl font-bold mb-2">Kommandant</div>
          <div className="text-base">Christopher Möck</div>
        </div>
        <div className="bg-gray-100 text-center p-4 dark:bg-gray-900">
          <div className="text-xl font-bold mb-2">Beisitzerin</div>
          <div className="text-base">Stefanie Jobst</div>
        </div>
        <div className="bg-gray-100 text-center p-4 dark:bg-gray-900">
          <div className="text-xl font-bold mb-2">Beisitzer</div>
          <div className="text-base">Michael Wagner</div>
        </div>
        <div className="bg-gray-100 text-center p-4 dark:bg-gray-900">
          <div className="text-xl font-bold mb-2">Beisitzer</div>
          <div className="text-base">Ronny Krammer</div>
        </div>
        <div className="bg-gray-100 text-center p-4 dark:bg-gray-900">
          <div className="text-xl font-bold mb-2">Beisitzer</div>
          <div className="text-base">Patrick Schrödel</div>
        </div>
        <div className="bg-gray-100 text-center p-4 dark:bg-gray-900">
          <div className="text-xl font-bold mb-2">Beisitzer</div>
          <div className="text-base">Jonas Klöckers</div>
        </div>
      </div>
    </PageSection>
  );
}

export default Vorstandschaft;
