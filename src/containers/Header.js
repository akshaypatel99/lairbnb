import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/lairbnb-logo.png';
import { Avatar } from '@material-ui/core';
import { Search, Language, ExpandMore } from '@material-ui/icons/';
import './Header.css';

const Header = () => {
	const history = useHistory();

	return (
		<div className='header'>
			<Link to='/'>
				<img className='header__icon' src={logo} alt='logo' />
			</Link>

			<div className='header__center'>
				<input type='text' />
				<Search onClick={() => history.push('/search')} />
			</div>

			<div className='header__right'>
				<p>Become a host</p>
				<Language />
				<ExpandMore />
				<Avatar />
			</div>
		</div>
	);
};

export default Header;
