import { createMuiTheme } from '@material-ui/core/styles'; // v1.x
import styled, {css} from 'styled-components'

export const backgroundColor = '#edebe9';
export const brandPrimary = '#25408f';
export const accent1Color = '#ECF0F1';
export const linkColor = '#fff';

export const blackColor = '#333';
export const whiteColor = '#FFFFFE';

export const Inlay = styled.div`
    margin: 0 auto;

  ${createMuiTheme().breakpoints.up('lg')}{
    width: 1000px;
    margin: 0 auto;
  }
  
  ${createMuiTheme().breakpoints.down('md')}{
    padding: 0 20px;
  }
`;

export const Section = styled.section`
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

export const SectionTitle = styled.h2 `
  text-align: center;
  color: ${brandPrimary};
`;

export default createMuiTheme({
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