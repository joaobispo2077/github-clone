import React from 'react';

import Heatmap from 'react-calendar-heatmap';
import { addDays, isBefore, isSameDay, subYears } from 'date-fns';
import { Container } from './styles';

export type HeatmapValue = {
  date: Date;
  count: number;
};

const generateHeatmapValues = (
  startDate: Date,
  endDate: Date,
): HeatmapValue[] => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;

  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    values.push({
      date: currentDate,
      count: Math.floor(Math.random() * 5),
    });

    currentDate = addDays(currentDate, 1);
  }

  return values;
};

const RandomCalendar: React.FC = () => {
  const endDate = new Date();
  const startDate = subYears(endDate, 1);

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue | null) => {
            if (item && item.count > 3) {
              return 'scale-4';
            }

            return `scale-${item?.count ?? 0}`;
          }}
          showWeekdayLabels
        />
      </div>
      <a href="https://www.github.com/joaobispo2077">
        Random calendar (do not represent actual data)
      </a>
    </Container>
  );
};

export default RandomCalendar;
