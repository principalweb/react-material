Example of ActionModal component

```jsx harmony
import { Button } from 'ui/atoms';
import { ActionModalContainer } from 'ui/organisms';

const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>
    Open modal
  </Button>
  <ActionModalContainer
    title="Additional actions"
    isOpened={isOpened}
    submitText="Update selected items"
    actions={[
      { title: 'Change city', content: <div>City content</div> },
      {
        title: 'Update status',
        content: <div>Update content</div>,
      },
      {
        title: 'Update price',
        content: <div>Update content</div>,
      },
      { title: 'Option 1', content: <div>Option 1</div> },
      { title: 'Option 2', content: <div>Option 2</div> },
      { title: 'Option 3', content: <div>Option 3</div> },
    ]}
    onClose={() => setOpened(false)}
    onSubmit={() => alert('submit clicked')}
  />
</>;
```
