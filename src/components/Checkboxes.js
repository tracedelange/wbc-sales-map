import React from 'react';
import CustomCheck from './CustomChecks';



export default function Checkboxes() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <CustomCheck
        checked={checked}
        onChange={handleChange}
        
      />
      
    </div>
  );
}