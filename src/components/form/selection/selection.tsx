import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectItems() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          p: 0,
          width: '100%',
          '& .MuiInputLabel-root ': {
            top: 5,
            marginTop: 0,
          },
        }}
      >
        <InputLabel id='demo-multiple-name-label'>Course</InputLabel>
        <Select
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label='Course' />}
          MenuProps={MenuProps}
          sx={{
            '& legend': {
              border: 0,
              outline: 0,
              display: 'none',
            },
          }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          width: '100%',
          '& .MuiInputLabel-root ': {
            top:5,
            marginTop: 0,
          },
        }}
      >
        <InputLabel id='demo-multiple-name-label'>School</InputLabel>
        <Select
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label='Name' />}
          MenuProps={MenuProps}
          sx={{
            '& legend': {
              border: 0,
              outline: 0,
              display: 'none',
            },
          }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
