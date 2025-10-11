import { useEffect } from 'react';
import type { ReactNode } from 'react';
import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ScrollLinkProps {
  to: string;
  children: ReactNode;
}

const ScrollLink: FC<ScrollLinkProps> = ({to, children}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const handleClick = () => {
    if(pathname === to){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(to);
    }
  };

  return (
    <li onClick={handleClick} className='list-none cursor-pointer inline-block'>
      {children}
    </li>
  );
};

export default ScrollLink;