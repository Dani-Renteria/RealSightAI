import React from "react";
import "../styles/pageStyles/Privacy.css";
import { NavLink } from "react-router-dom";

function Privacy() {
  return (
    <div className="privacyWrapper">
      <div className="privacyAlign">
        <NavLink to="/" reloadDocument>
          <button className="backHome">Return home</button>
        </NavLink>
        <div className="privacyContainer">
          <div className="lPara">
            <div>Data Protection</div> As a rule the use of this website is
            possible without providing any personally relevant data. Any
            provision of personal data (e.g. name, address or email addresses)
            occurs entirely on a voluntary basis. These data will not be
            provided to any third parties without the user's express approval.
            Be aware that the transmission of data via the internet (e.g.
            communication by email) is subject to security gaps. Complete
            protection of data from unauthorized access by third parties is not
            possible. The use of contact details published under the statutory
            requirement to provide acknowledgements by third parties for the
            purpose of the transmission of unsolicited advertising and
            informational material is expressly opposed. The site operator
            expressly reserves the right to take legal action against the
            unsolicited mailing of advertising information by way of spamming or
            similar.
          </div>
          <div className="lPara">
            <div>Datenschutz</div> Die Nutzung diesrer Webseite ist in der Regel
            ohne Angabe personenbezogener Daten möglich. Soweit auf diesen
            Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben. Ich weise darauf hin,dass
            die Datenübertragung im Internet (z.B. bei der Kommunikation per
            E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
            Daten vor dem Zugriff durch Dritteist nicht möglich.Der Nutzung von
            im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
            Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
            und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
            Der Betreiber der Seiten behält sich ausdrücklich rechtliche
            Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
            etwa durch Spam-Mails, vor.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
