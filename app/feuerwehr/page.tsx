'use client';

import { JSX } from 'react';
import { PageSection } from '@salzpate/react-ui';
import Link from 'next/link';

function Feuerwehr(): JSX.Element {
  return <PageSection headline="Feuerwehr" id="feuerwehr">

    <Link href='/feuerwehr/einsaetze/'>Einsätze</Link>

  </PageSection>;
}

export default Feuerwehr;
