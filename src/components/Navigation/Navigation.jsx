import { useSelector } from 'react-redux';
import { HEADER_NAV_LINKS } from '../../constants';
import { LinkHeaderNav } from '../ReUseComponents/Buttons/Buttons';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const commonLinks = HEADER_NAV_LINKS.filter(
    (link) => link.id !== 'favorites'
  );

  const loggedInLinks = isLoggedIn
    ? [
        ...commonLinks,
        { id: 'favorites', href: '/favorites', title: 'Favorites' },
      ]
    : commonLinks;

  return (
    <nav>
      <ul className="flex gap-x-[28px] ">
        {loggedInLinks.map(({ id, href, title }) => (
          <li key={id}>
            <LinkHeaderNav to={href}>{title}</LinkHeaderNav>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
