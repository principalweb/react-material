Example of FormSection component

```jsx harmony
import { FormSection } from './FormSection';

<FormSection title="Address information" isExpandable>
  {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
</FormSection>;
```

```jsx harmony
import { FormSection } from './FormSection';

<FormSection title="Address information" onAdd={() => alert('Add')}>
  {editing => <p>Form content</p>}
</FormSection>;
```
