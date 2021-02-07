Example of SearchList component
```jsx harmony
import { SearchList } from './SearchList';
import { Box } from 'ui/atoms';

const LIST_MOCK = [
  { id: '1', name: 'De Werf' },
  { id: '2', name: 'Brian Smith' },
];

<SearchList
        items={LIST_MOCK}
        selectedItemsIds={[]}
        item={({ item }) => (
          <Box mb={2}>
            {item.name}
          </Box>
        )}
        filterItem={()=>true}
      />
```