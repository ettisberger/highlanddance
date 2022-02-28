import React, { Component } from 'react';
import styled from 'styled-components';
import theme, { accent1Color, brandSecondary, Inlay, whiteColor } from '../../theme';
import Grid from '@material-ui/core/Grid'
import Mailto from 'react-protected-mailto';
import {
  CONTACT_FACEBOOK,
  CONTACT_INSTAGRAM,
  CONTACT_MAIL,
  CONTACT_TITLE,
  CONTACT_WEB
} from '../../common/constants';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import About from '../../dancing/Dancing';
import ScrollToTopRoute from '../../common/ScrollToTop';

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
  padding-bottom: 10px;
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
  
  #footer {
    position: relative;
    width: 100%;
    height: 700px;
    
    ${theme.breakpoints.down('sm')}{
      height: 1000px;
    }
  }
  
  #facebook {
    padding-top: 10px;
  }
  
  #highland-moving {
    animation: footer-swell 7s ease -1.25s infinite;
  }
`;

const SocialIcons = styled.div`
  padding-top: 20px;

  a {
    display: inline; 
    padding: 0 10px 0 0;   
  }
`;

const Links = styled.div`
  a {
    display: block; 
    color: white;
  }
`;

const Address = styled.div`
  padding-top: 20px;
`

class Footer extends Component {
  render() {
    return (
      <footer>
        <FooterBackground>
          <svg id="footer" viewBox="0 5 100 25" preserveAspectRatio="none">
            <defs>
              <linearGradient id="highland" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#289dca" stopOpacity="1"/>
                <stop offset="45%" stopColor="#289dca" stopOpacity="1"/>
                <stop offset="100%" stopColor="#74c9f6" stopOpacity="1"/>
              </linearGradient>
            </defs>
            <path id="highland-moving"
                  fill={brandSecondary}
                  fillOpacity="0.3"
                  d="M0 30 V12 Q40 15 55 12 T100 11 V30z"/>
            <path id="highland-fix" fill="url(#highland)" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"/>
          </svg>
          <FooterWrapper>
            <Inlay>
              <Grid container justifyContent="center">
                <FooterItem container item xs={12} sm={8} direction="column">
                  <FooterTitle>
                    <FormattedMessage id="text.compass"/>
                  </FooterTitle>
                  <Links>
                    <Link to=""><FormattedMessage id="navigation.lc.home"/></Link>
                    <Link to="dancing"><FormattedMessage id="navigation.lc.dancing"/></Link>
                    <Link to="hustle"><FormattedMessage id="navigation.lc.hustle"/></Link>
                    <Link to="classes"><FormattedMessage id="navigation.lc.classes"/></Link>
                    <Link to="teacher"><FormattedMessage id="navigation.lc.teacher"/></Link>
                    <Link to="gallery"><FormattedMessage id="navigation.lc.gallery"/></Link>
                    <Link to="studio"><FormattedMessage id="navigation.lc.studio"/></Link>
                  </Links>

                </FooterItem>
                <FooterItem container item xs={12} sm={4} direction="column">
                  <FooterTitle>
                    <FormattedMessage id="text.contact"/>
                  </FooterTitle>
                  <div>
                    <MailToEncrypted
                      email={CONTACT_MAIL}
                      headers={
                        { subject: 'Kontaktaufnahme' }
                      }
                    />
                  </div>
                  <Address>
                    <p>Highland Dancing Basel<br/>
                    Leimgrubenweg 4-6<br/>
                    CH-4053 Basel</p>
                  </Address>
                  <SocialIcons>
                    <a id="web" href={CONTACT_WEB}>
                      <svg xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill={whiteColor}>
                        <path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z"/>
                      </svg>
                    </a>
                    <a id="facebook" href={CONTACT_FACEBOOK}>
                      <svg xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill={whiteColor}>
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                    <a id="instagram" href={CONTACT_INSTAGRAM}>
                      <svg xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill={whiteColor}>
                        <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"/>
                      </svg>
                    </a>
                  </SocialIcons>
                </FooterItem>
              </Grid>
            </Inlay>
          </FooterWrapper>
        </FooterBackground>
      </footer>
    );
  }
}

export default Footer;