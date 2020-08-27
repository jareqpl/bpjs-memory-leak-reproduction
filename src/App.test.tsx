import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import { MultiSelect } from '@blueprintjs/select';

test("Mem leak bug reproduction", async () => {
    // Running in loop, since it does not occur every time.
    for(let i = 0; i < 100; i++){
      const Select = MultiSelect.ofType<any>();
    
    const { getByTestId } = render(
          <Select 
            tagInputProps={{ inputProps: {["data-testid"]: `ms_multi-select`}}}
            tagRenderer={() => null} 
            onItemSelect={() => null} 
            items={[]} 
            itemRenderer={() => null} />
    );
    fireEvent.click(getByTestId("ms_multi-select"));
    await cleanup();
    }
});
