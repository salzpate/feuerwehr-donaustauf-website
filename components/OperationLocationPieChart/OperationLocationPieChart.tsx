'use client';

import { PieCustomLayerProps, ResponsivePie } from '@nivo/pie';
import { useTheme } from 'next-themes';
import { JSX } from 'react';

import { OPERATION_QUERYResult } from '@/types/sanityTypes';

import CenteredMetric from '../OperationPieChart/components/CenteredMetric/CenteredMetric';
import { OperationChartDataType } from './types/operationPieChartTypes';

interface OperationPieChartProps {
  operations?: OPERATION_QUERYResult;
  year?: number;
}

function OperationLocationPieChart(props: Readonly<OperationPieChartProps>): JSX.Element {
  const { operations } = props;
  const { resolvedTheme } = useTheme();

  const ffChartData =
    operations?.reduce<Array<OperationChartDataType>>((acc, op) => {
      const locality = op.locality ?? 'Unbekannt';
      const existing = acc.find(item => item.id === locality);

      if (existing) {
        existing.value += 1;
      } else {
        acc.push({
          id: locality,
          label: locality,
          value: 1,
          color: '',
        });
      }

      return acc;
    }, []) ?? [];

  const CenteredMetricWrapper = (props: PieCustomLayerProps<OperationChartDataType>): JSX.Element => <CenteredMetric {...props} text="Ort" isDarkMode={resolvedTheme === 'dark'} />;

  return (
    <ResponsivePie
      theme={{
        labels: {
          text: {
            fontSize: '0.75rem',
          },
        },
      }}
      data={ffChartData}
      margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      arcLabel={data => `${data.label} (${data.value})`}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 4]] }}
      enableArcLinkLabels={false}
      arcLabelsSkipAngle={10}
      colors={{ scheme: 'pastel1' }}
      layers={['arcs', 'arcLabels', 'arcLinkLabels', CenteredMetricWrapper]}
    />
  );
}

export default OperationLocationPieChart;
