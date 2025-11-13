import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { JSX } from 'react';
import Operation from '../Operation/Operation';

interface OperationsProps {
  operations?: OPERATION_QUERYResult;
  alternate?: boolean;
}

function Operations(props: Readonly<OperationsProps>): JSX.Element {
  const { operations, alternate } = props;

  return (
    <>
      {operations?.map(operation => (
        <div key={operation._id}>
          <Operation {...operation} alternate={alternate} />
        </div>
      ))}
    </>
  );
}

export default Operations;
