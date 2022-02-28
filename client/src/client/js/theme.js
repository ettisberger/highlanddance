import { createTheme } from '@material-ui/core/styles'; // v1.x
import styled, { css } from 'styled-components';

export const backgroundColor = '#fbf9f7';
export const brandPrimary = '#289dca';
// export const brandSecondary = '#5A56E6';
export const brandSecondary = '#289dca';
export const accent1Color = '#ECF0F1';
export const linkColor = '#fff';

export const blackColor = '#333';
export const whiteColor = '#FFFFFE';

export const Inlay = styled.div`
    margin: 0 auto;

  ${createTheme().breakpoints.up('lg')}{
    width: 1200px;
    margin: 0 auto;
  }
  
  ${createTheme().breakpoints.down('md')}{
    padding: 0 20px;
  }
`;

export const Section = styled.section`
  &:first-of-type {
    margin-top: 50px;
  }

  position: relative;
  padding: 3rem 0;
  overflow: hidden;
  
    ${props => props.odd && css`
        background-color: ${backgroundColor};
        color: ${blackColor};
    `}
  
    ${props => props.even && css`
        background-color: ${whiteColor};
        color: ${blackColor};
    `}
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: ${brandPrimary};
`;

export const LoadingPlaceholder = styled.div`
  height: 100vh;
`;

export default createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: brandPrimary,
      contrastText: accent1Color,
    },
  },
});
