Example of AgendaSection component

```jsx harmony
import { Box, Tabs, Tab, VisitedPage } from 'ui/atoms';
import { AgendaSection } from 'ui/organisms';

const laterToday = new Date();
laterToday.setHours(laterToday.getHours() + 2);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const future = new Date();
future.setDate(future.getDate() + 2);
const agendaItems = [
    {
    isAllDay: false,
    startDate: future.toISOString(),
    endDate: future.toISOString(),
    title: "My Future appointment",
  },
  {
    isAllDay: false,
    startDate: (new Date().toISOString()),
    endDate: laterToday.toISOString(),
    title: "My Today appointment",
  },
    {
    isAllDay: false,
    startDate: (new Date().toISOString()),
    endDate: laterToday.toISOString(),
    title: "My Second Today appointment",
  },
  {
    isAllDay: false,
    startDate: (new Date().toISOString()),
    endDate: laterToday.toISOString(),
    title: "My Thirth Today appointment",
  },
  {
    isAllDay: false,
    startDate: tomorrow.toISOString(),
    endDate: tomorrow.toISOString(),
    title: "My Tomorrow appointment",
  },
   {
    isAllDay: false,
    startDate: tomorrow.toISOString(),
    endDate: tomorrow.toISOString(),
    title: "My Tomorrow appointment 2",
  },
];


<AgendaSection 
  onMoreClick={() => {}} 
  onAddClick={() => {}}
  data={agendaItems}
>
</AgendaSection>

```