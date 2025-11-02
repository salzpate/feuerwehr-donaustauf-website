import { JSX } from 'react';

interface OperationCounterProps {
  year: number;
  count: number;
}

function OperationCounter(props: Readonly<OperationCounterProps>): JSX.Element {
  const { year, count } = props;

  return <div className='text-sm mb-4'>{year}: {count} Einsätze</div>;
}

export default OperationCounter;
