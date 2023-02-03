import React, {FC, RefObject} from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

interface IChartProps {
  options:  Highcharts.Options,
  chartComponentRef:  RefObject<HighchartsReact.RefObject>
}

const Chart: FC<IChartProps> = ({options, chartComponentRef}) => {
  return (
    <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef}/>
  );
};

export default Chart;