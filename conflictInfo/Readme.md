Example of ConflictInfo component
```jsx harmony
import { ConflictInfo } from './ConflictInfo'; 
import {AutosaveForm} from './AutosaveForm';
import { AutosaveForm } from 'ui/organisms';

<AutosaveForm onSave={() => Promise.resolve(undefined)}>
    <ConflictInfo
        cancel='cancel'
        confirm='confirm'
        messageLineFirst='messageLine1'
        messageLineSecond='messageLine2'
        onCancel={()=>{}}
    />
</AutosaveForm>
```