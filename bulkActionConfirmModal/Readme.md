Example of BulkActionConfirmModal component
```jsx harmony
import { BulkActionConfirmModal } from './BulkActionConfirmModal';
import { Button } from 'ui/atoms';
const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>Open modal</Button>

<BulkActionConfirmModal
    isOpened={isOpened}
    onCancel={() => {}}
    onConfirm={() => {}}
    type={BulkActionType.ARCHIVE}
    count={1}
    itemName={'aaaaa'}
  />
<>
```