import React, {Component} from 'react';
import styled from 'styled-components';
import {brandPrimary, Inlay} from '../theme';
import {Section, SectionTitle} from '../theme';
import Partners from './Partners';
import Sponsors from './Sponsors';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

const Flyer = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`

const Text = styled.p`
  line-height: 1.4;
  
  a {
    color: ${brandPrimary};
  }
`;

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Swords and Spirits - Eine schottische Legende</title>
                    <meta name="Description" content="Highland Dancing Basel präsentiert die erste Highland Dance Show der Schweiz. Swords and Spirits, eine schottische Legende." />
                </Helmet>
                <Section even>
                    <Inlay>
                        <SectionTitle>Swords and Spirits – Eine schottische Legende</SectionTitle>
                        <Text>
                            Die Tanz-Show Swords and Spirits – eine schottische Legende erzählt die Geschichte von zwei schottischen Schwestern, Moira und Stella.
                            Das Publikum wird mitgenommen auf eine Reise durch die schottischen Highlands wo die beiden Schwestern durch Tanz ihr Wiedersehen,
                            ihre gemeinsamen Abenteuer und ihre tiefe Schwesterliebe erleben.
                            Die Show wird sowohl traditionelle als auch neu-choreografierte Tänze präsentieren und wir freuen uns, mit mehreren Gästen aufzutreten:
                            die Anam Irish Folk Band, die Pipes and Drums of Basel und die Maguire O’Shea Irish Dancers.
                            <br/>
                            <br/>
                            40 Highland Dancers, 15 Musiker, 6 Irish Dancers, 1 grossartige Show! Tickets gibt es <Link to={'tickets'}>hier</Link>.
                        </Text>
                    </Inlay>
                </Section>
                <Section odd>
                    <Inlay>
                        <Flyer src={'/assets/images/flyer_compressed.jpg'}/>
                    </Inlay>
                </Section>
                <Section even>
                    <Inlay>
                        <SectionTitle>Highland Dancing</SectionTitle>
                        <Text>
                            Highland Dancing stammt aus Schottland und ist eine herausfordernde Tanzart, welche viel Kraft, Koordination und Disziplin benötigt.
                            Kraftvollen Sprünge und schnelle, präzise Beinarbeit zeichnet diese Tanzart aus, welche usprünglich Fitness Training für schottischen Soldate und damit ausschliesslich
                            den Männern vorbehalten war.
                            <br/>
                            <br/>
                            Die genauen Wurzeln und Herkunft der einzelnen Tänze sind nicht bekannt, aber es gibt verschiedene Geschichten und Erzählungen worin wiederholt solche Tänze beschrieben werden.  Der Sword Dance zum Beispiel wurde jeweils vor dem Krieg durchgeführt - die Männer kreuzten ihre scharfen Schwerter auf dem Boden vor sich und mussten während des Tanzes darüber springen.
                            Es zählte als schlechtes Omen, wenn die Tänzer das Schwert berührten und man spricht davon, dass sie im Kampf verletzt oder gar getötet wurden.
                        </Text>
                    </Inlay>
                </Section>
                <Section odd>
                    <Inlay>
                        <SectionTitle>School of Highland Dancing Basel</SectionTitle>
                        <Text>
                            Die School of Highland Dancing Basel wurde 2009 von Carol Jones gegründet. Sie besteht aus begeisterten Kindern und Erwachsenen, die regelmässig ins Training kommen,
                            um die vielen Vorteile dieser Tanzart zu geniessen, zum Beispiel gute Kondition, räumliches Bewusstsein, verbesserte  Koordination und natürlich auch das soziale
                            Zusamenleben und den "Fun" Faktor . Mittlerweile nehmen diese TänzerInnen an vielen Shows in der Schweiz und im Ausland teil und zeigen ihr Können regelmässig
                            äusserst erfolgreich an internationalen Wettbewerben. Zudem absolvieren sie alle zwei Jahren Prüfungen beim Scottish Official Board of Highland Dancing.
                        </Text>
                    </Inlay>
                </Section>
                <Partners even/>
                <Sponsors odd/>
            </React.Fragment>
        )
    }
}