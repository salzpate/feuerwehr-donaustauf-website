import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { JSX, useMemo } from 'react';
import Operation from '../Operation/Operation';

interface OperationsWithMonthProps {
  operations?: OPERATION_QUERYResult;
  alternate?: boolean;
}

function OperationsWithMonth(props: Readonly<OperationsWithMonthProps>): JSX.Element {
  const { operations, alternate } = props;

  const groupedOperations = useMemo(() => {
    if (!operations) return [];

    const monthNames = [
      'JANUAR', 'FEBRUAR', 'MÄRZ', 'APRIL', 'MAI', 'JUNI',
      'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DEZEMBER'
    ];

    const sorted = operations
      .filter(op => op.date)
      .toSorted((a, b) => {
        const dateA = new Date(a.date!).getTime();
        const dateB = new Date(b.date!).getTime();
        return dateB - dateA;
      });

    // Group by month and year
    const groups: Array<{ monthKey: string; monthName: string; operations: typeof sorted }> = [];
    let currentMonthKey: string | null = null;
    let currentGroup: typeof sorted = [];

    const addGroup = (monthKey: string, group: typeof sorted) => {
      if (group.length === 0) return;
      const [firstOp] = group;
      const firstDate = new Date(firstOp.date!);
      groups.push({
        monthKey,
        monthName: `${monthNames[firstDate.getMonth()]} ${firstDate.getFullYear()}`,
        operations: [...group]
      });
    };

    for (const operation of sorted) {
      const date = new Date(operation.date!);
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`;

      if (monthKey === currentMonthKey) {
        currentGroup.push(operation);
      } else {
        // Save previous group if it exists
        if (currentMonthKey !== null) {
          addGroup(currentMonthKey, currentGroup);
        }

        // Start new group
        currentMonthKey = monthKey;
        currentGroup = [operation];
      }
    }

    // Add last group
    if (currentMonthKey !== null) {
      addGroup(currentMonthKey, currentGroup);
    }

    return groups;
  }, [operations]);

  return (
    <div style={{ marginTop: '-1rem' }}>
      {groupedOperations.map((group) => (
        <div key={group.monthKey}>
          <h3 className="text-lg tracking-tight text-secondary my-4 sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">
            {group.monthName}
          </h3>
          {
            group.operations.map((operation) => (
              <div key={operation._id}>
                <Operation {...operation} alternate={alternate} />
              </div>
            ))
          }
        </div >
      ))
      }
    </div>
  );
}

export default OperationsWithMonth;
