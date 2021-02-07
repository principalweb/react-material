Example of UploadModal component

```jsx harmony
import { UploadModal } from './UploadModal';
import { Button, DialogContent, DialogContentText, DialogActions } from 'ui/atoms';

const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>
    Open upload
  </Button>
  <UploadModal isOpened={isOpened} onClose={() => setOpened(false)} onUpload={() => setOpened(false)} />
</>;
```
