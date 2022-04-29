import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @param {object} props - Props.
 * @param {string} props.to - Path.
 * @returns {null} - Nothing.
 */
export const Redirect = ({ to }: { to: string }): null => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
};
