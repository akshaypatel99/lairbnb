import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import { People } from '@material-ui/icons';

import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useHistory } from 'react-router-dom';

const Search = () => {
	const history = useHistory();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	};

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	return (
		<div className='search'>
			<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
			<h2>
				Number of guests <People />
			</h2>
			<input min={0} defaultValue={2} type='number' />
			<Button onClick={() => history.push('/search')}>Search Lairbnb</Button>
		</div>
	);
};

export default Search;
