import NavBar from './NavBar'
import { render, screen } from '@testing-library/react';


describe('NavBar', () => {
  test('Logo must have src = "../assets/img/StartWars.png" and alt = "Logo"', () => {
    render(<NavBar/>);
    const logo = screen.getByTestId('img');
    expect(logo).toHaveAttribute('src', '../assets/img/StartWars.png');
    expect(logo).toHaveAccessibleName('alt', 'Logo');
    
  });
});