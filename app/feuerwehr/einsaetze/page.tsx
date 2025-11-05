import { JSX } from 'react';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';

async function getData(): Promise<OPERATION_QUERYResult> {
  return operationService.getOperations();
}

async function FeuerwehrEinsaetze(): Promise<JSX.Element> {
  const operations = await getData();

  const ffOps = operations?.filter((ops) => ops.category !== 'First Responder THL').toSorted((o1, o2) => o2.date?.localeCompare(o1.date ?? '') ?? 0);

  return <OperationContent operations={ffOps} />;
}

export default FeuerwehrEinsaetze;
