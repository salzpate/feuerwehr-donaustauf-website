'use client';

import OperationPieChart from '@/components/OperationPieChart';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { PageSection } from '@salzpate/react-ui';
import { JSX } from 'react';
import cn from 'classnames';
import OperationsWithMonth from '@/components/OperationsWithMonth';
import OperationBarChart from '@/components/OperationBarChart';

interface OperationContentProps {
  operations: OPERATION_QUERYResult;
}

function OperationContent(props: Readonly<OperationContentProps>): JSX.Element {
  const { operations } = props;

  return (
    <PageSection headline="Einsätze" id="feuerwehr-einsaetze">
      <OperationsWithMonth operations={operations} />
      <div className={cn('w-full h-[400px] my-4 bg-white dark:bg-black text-gray-900')}>
        <OperationPieChart operations={operations} />
      </div>
      <div className={cn('w-full h-[400px] my-4 bg-white dark:bg-black text-gray-900')}>
        <OperationBarChart operations={operations} />
      </div>


    </PageSection>
  );
}

export default OperationContent;
