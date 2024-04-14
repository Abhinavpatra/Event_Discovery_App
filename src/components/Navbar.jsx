import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #ffffff;
  border-bottom: 1px solid #B0BABF; 
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoText = styled.span`
  color: #CF2D2D;
  font-size: 24px;
  font-weight: bold;
`;

const CategoriesContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const CategoryLink = styled.a`
  color: #1E2022;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #989090;
  }
`;

const DullPhantomLink = styled(CategoryLink)``;

const FavoritesLink = styled.a`
  color: #1E2022;
  text-decoration: none;
  font-size: 16px;
`;

const SearchInput = styled.input`
  border: 1px solid #B0BABF;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
`;

const SignInLink = styled.a`
  color: #1E2022;
  text-decoration: none;
  font-size: 16px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoText>BookUsNow</LogoText>
      <CategoriesContainer>
        <CategoryLink href="#">Categories</CategoryLink>
        <DullPhantomLink href="#">Dull phantom</DullPhantomLink>
        <FavoritesLink href="#">Favorites</FavoritesLink>
      </CategoriesContainer>
      <SearchInput placeholder="Search" />
      <SignInLink href="#">Sign In</SignInLink>
    </NavbarContainer>
  );
};

export default Navbar;