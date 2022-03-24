import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//style
import style from "./selection.module.css"

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

const courses = [
  'Chemistry',
  'Physics',
  
];

const universities = ['FUTA', 'UNILAG'];

function getStyles(course: string, schoolName: string[], theme: Theme) {
  return {
    fontWeight:
      schoolName.indexOf(course) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectItems() {
  const theme = useTheme();
  const [schoolName, setSchoolName] = React.useState<string[]>([]);
   const [universityName, setUniversityName] = React.useState<string[]>([]);

  const handleNameChange = (event: SelectChangeEvent<typeof schoolName>) => {
    const {
      target: { value },
    } = event;
    setSchoolName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
    const handleUniversityChange = (
      event: SelectChangeEvent<typeof universityName>
    ) => {
      const {
        target: { value },
      } = event;
      setUniversityName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
      );
    };

  return (
    <div>
      <FormControl
        sx={{
          mb: 0,
          marginBottom: 1,
          paddingTop: 0,
          width: '100%',
          '& .MuiInputLabel-root ': {
            top: 5,
            marginTop: 0,
          },
          '& fieldset': {
            border: 'none',
          },
          border: 'solid 1px #DFE3EC',
          borderRadius: '7px',
        }}
        className={style.chooseBx}
      >
        <InputLabel id='demo-multiple-name-label' className={style.labelStyle}>
          Course
        </InputLabel>
        <Select
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          value={schoolName}
          onChange={handleNameChange}
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
          {courses.map((course) => (
            <MenuItem
              key={course}
              value={course}
              style={getStyles(course, schoolName, theme)}
            >
              {course}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        sx={{
          m: 0,
          marginBottom: 1,
          width: '100%',
          '& .MuiInputLabel-root ': {
            top: 5,
            marginTop: 0,
          },
          '& fieldset': {
            border: 'none',
          },
          border: 'solid 1px #DFE3EC',
          borderRadius: '7px',
        }}
      >
        <InputLabel id='demo-multiple-name-label' className={style.labelStyle}>
          School
        </InputLabel>
        <Select
          labelId='demo-multiple-name-label'
          id='demo-multiple-name'
          value={universityName}
          onChange={handleUniversityChange}
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
          {universities.map((university) => (
            <MenuItem
              key={university}
              value={university}
              style={getStyles(university, schoolName, theme)}
            >
              {university}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
