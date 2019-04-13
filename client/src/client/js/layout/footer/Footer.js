import React, { Component } from 'react';
import styled from 'styled-components';
import theme, {accent1Color, brandPrimary, brandSecondary, Inlay, whiteColor} from '../../theme';
import Grid from '@material-ui/core/Grid'
import Mailto from 'react-protected-mailto'

const FooterWrapper = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 50%;
    padding: 3rem 0;

    color: ${accent1Color};
    line-height: 1.4rem;
    
    ${theme.breakpoints.down('sm')}{
      && {
        height: auto;
      }
    }
`;

const FooterItem = styled(Grid)`
    ${theme.breakpoints.down('sm')}{
      && {
        margin: 1rem 0;
      }
    }
`;

const FooterTitle = styled.div`
    font-weight: bold;
`;

const MailToEncrypted = styled(Mailto)`
    color: white;
`;

const FooterBackground = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    background-color: ${whiteColor};

    @keyframes footer-swell {
        0%, 100% {
        	transform: translate3d(0,0,0);
        }
        50% {
        	transform: translate3d(0,-1px,0);
        }
    }
    
    svg {
    	position: relative;
		width: 100%;
		height: 700px;
    }
		
    #highland-moving {
        animation: footer-swell 7s ease -1.25s infinite;
    }
    }
`;

class Footer extends Component {

    render() {
        return (
            <footer>
                <FooterBackground>
                    <svg viewBox="0 5 100 25" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="highland" x1="0%" y1="100%" x2="100%" y2="0%" >
                                <stop offset="0%" stopColor="rgb(37,64,143)" stopOpacity="1" />
                                <stop offset="45%" stopColor="rgb(37,64,143)" stopOpacity="1" />
                                <stop offset="100%" stopColor="#695cff" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                        <path id="highland-fix" fill="url(#highland)" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"/>
                        <path id="highland-moving" fill={brandSecondary} fillOpacity="0.3" d="M0 30 V12 Q40 15 55 12 T100 11 V30z"/>
                    </svg>
                    <FooterWrapper>
                        <Inlay>
                            <Grid container justify={'center'}>
                                <FooterItem container item xs={12} sm={8} direction={'column'}>
                                    <FooterTitle>Kompass</FooterTitle>
                                    <p>
                                        Highland Dancing Basel<br/>
                                        www.highlanddance.ch<br/>
                                        2018/2019
                                    </p>
                                </FooterItem>
                                <FooterItem container item xs={12} sm={4} direction={'column'}>
                                    <FooterTitle>Kontakt</FooterTitle>
                                    <p>
                                       <MailToEncrypted
                                        email='info@highlanddance.ch'
                                        headers={
                                            {subject:'Kontaktaufnahme'}
                                        }/>
                                    </p>
                                </FooterItem>
                            </Grid>
                        </Inlay>
                    </FooterWrapper>
                </FooterBackground>
            </footer>
        )
    }
}
export default Footer;