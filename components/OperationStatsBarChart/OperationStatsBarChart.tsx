'use client';

import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from 'next-themes';
import { JSX } from 'react';

import { OperationStatsBarChartDataType } from './types/operationBarChartTypes';

interface OperationStatsBarChartProps {
  data?: OperationStatsBarChartDataType[];
}

function OperationStatsBarChart(props: Readonly<OperationStatsBarChartProps>): JSX.Element {
  const { data } = props;
  const { resolvedTheme } = useTheme();

  if (!data) {
    return <></>;
  }

  return (
    <ResponsiveBar
      theme={{
        labels: {
          text: {
            fontSize: '0.75rem',
          },
        },
        axis: {
          ticks: {
            text: {
              fill: resolvedTheme === 'dark' ? 'rgb(209, 213, 220)' : 'rgb(51, 51, 51)',
            },
          },
        },
      }}
      data={data}
      margin={{ top: 16, right: 16, bottom: 32, left: 32 }}
      tooltipLabel={data => `${data.data.label} - Einsätze`}
      colors="#ff6b6b"
      indexBy="label"
      keys={['count']}
    />
  );
}

export default OperationStatsBarChart;
