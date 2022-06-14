import React ,{ useContext } from 'react';
import { CountryContext } from '../../context/CountryContext';
import { ThemeContext } from '../../context/ThemeContext';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
const basicStyle={
	borderRadius: 4,
	border: 'none',
	fontSize: 14,
	padding: '20px 25px 20px 25px',
	fontFamily:'Nunito Sans',
}
const darkstyle= { 
	...basicStyle,
	color:'#eaf3fc',
	backgroundColor: '#2b3743',
 }
 const lightStyle={
	...basicStyle,
	color:'#111517',
	backgroundColor: '#ffffff',
 }
const BootstrapInputDark = styled(InputBase)(({ theme }) => ({
	'label + &': {
	  marginTop: theme.spacing(3),
	},
	'& .MuiSelect-icon':{
		color:'#eaf3fc',
	},
	'& .MuiInputBase-input': {
		...darkstyle,
	  '&:focus': {
		borderRadius: 4,
		borderColor: '#80bdff',
		boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
	  },
	},
  }));
  const BootstrapInputLight = styled(InputBase)(({ theme }) => ({
	'label + &': {
	  marginTop: theme.spacing(3),
	},
	'& .MuiSelect-icon':{
		color:'#111517',
	},
	'& .MuiInputBase-input': {
		...lightStyle,
	  '&:focus': {
		borderRadius: 4,
		borderColor: '#80bdff',
		boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
	  },
	},
  }));

export default function FilterRegion() {
	const { region,setRegion } = useContext(CountryContext);
	const { darkMode } = useContext(ThemeContext);

	const handleChange = (event: SelectChangeEvent) => {
		setRegion(event.target.value as string);
	  };
	return (
		<div>
			 <FormControl sx={{width:200}} className='filterregion'>
					<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={region}
					label="Filter by Region"
					onChange={handleChange}
					input={darkMode? (<BootstrapInputDark />):(<BootstrapInputLight/>)}
					>
						{/* <MenuItem value="">
           					 <em>All</em>
          				</MenuItem> */}
						<MenuItem value='all'>Filter by Region</MenuItem>
						<MenuItem value='Africa'>Africa</MenuItem>
						<MenuItem value='Americas'>America</MenuItem>
						<MenuItem value='Asia'>Asia</MenuItem>
						<MenuItem value='Europe'>Europe</MenuItem>
						<MenuItem value='Oceania'>Oceania</MenuItem>
					</Select>
      		</FormControl>
		</div>
	);
}
