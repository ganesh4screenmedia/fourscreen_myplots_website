/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomModal from '../../Components/CustomModal';
import Footer from '../../shared/Footer';
import Form from '../../shared/ContactUsForm';
import './privacy.css';

const Privacy = function () {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  const onContactUs = () => {
    setOpen(true);
  };

  const onTerms = () => {
    navigate('/Terms');
  };

  const onPrivacy = () => {
    navigate('/Privacy');
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div style={{ padding: '10px' }}>
        <h2>PRIVACY NOTICE</h2>
        <div>Last updated December 28, 2021</div>
        <p>
          Thank you for choosing to be part of our community at MyPlots ("<b>Company</b>," "
          <b>we</b>," "<b>us</b>," or "<b>our</b>"). We are committed to protecting your personal
          information and your right to privacy. If you have any questions or concerns about this
          privacy notice or our practices with regard to your personal information, please contact
          us at __________.
        </p>
        <p>This privacy notice describes how we might use your information if you:</p>
        <ul>
          <li>Download and use our mobile application — MyPlots</li>
          <li>
            Engage with us in other related ways ― including any sales, marketing, or events In this
            privacy notice, if we refer to:
          </li>
          <li>
            "<b>App</b>," we are referring to any application of ours that references or links to
            this policy, including any listed above
          </li>
          <li>
            "<b>Services</b>," we are referring to our App, and other related services, including
            any sales, marketing, or events
          </li>
        </ul>
        <p>
          The purpose of this privacy notice is to explain to you in the clearest way possible what
          information we collect, how we use it, and what rights you have in relation to it. If
          there are any terms in this privacy notice that you do not agree with, please discontinue
          use of our Services immediately.
        </p>
        <p>
          <strong>
            Please read this privacy notice carefully, as it will help you understand what we do
            with the information that we collect.
          </strong>
        </p>
        <p>
          <b>TABLE OF CONTENTS</b>
        </p>
        <ol>
          <li>WHAT INFORMATION DO WE COLLECT?</li>
          <li>HOW DO WE USE YOUR INFORMATION?</li>
          <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
          <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
          <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          <li>HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</li>
        </ol>
        <p>
          <strong>
            <b>1. WHAT INFORMATION DO WE COLLECT?</b>
          </strong>
        </p>
        <p>
          <strong>Personal information you disclose to us</strong>
        </p>
        <p>
          <i>
            <strong>In Short: </strong>We collect personal information that you provide to us.
          </i>
        </p>
        <p>
          We collect personal information that you voluntarily provide to us when you register on
          the App, express an interest in obtaining information about us or our products and
          Services, when you participate in activities on the App (such as by posting messages in
          our online forums or entering competitions, contests or giveaways) or otherwise when you
          contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with
          us and the App, the choices you make and the products and features you use. The personal
          information we collect may include the following:
        </p>
        <p>
          <strong>Personal Information Provided by You.</strong> We collect names; phone numbers;
          email addresses; and other similar information.
        </p>
        <p>
          All personal information that you provide to us must be true, complete and accurate, and
          you must notify us of any changes to such personal information.
        </p>
        <p>
          <strong>2. HOW DO WE USE YOUR INFORMATION?</strong>
        </p>
        <p>
          <i>
            <strong>In Short: </strong> We process your information for purposes based on legitimate
            business interests, the fulfillment of our contract with you, compliance with our legal
            obligations, and/or your consent.
          </i>
        </p>
        <p>
          We use personal information collected via our App for a variety of business purposes
          described below. We process your personal information for these purposes in reliance on
          our legitimate business interests, in order to enter into or perform a contract with you,
          with your consent, and/or for compliance with our legal obligations. We indicate the
          specific processing grounds we rely on next to each purpose listed below.
        </p>
        <p>We use the information we collect or receive:</p>
        <ul>
          <li>
            <strong>To facilitate account creation and logon process.</strong> If you choose to link
            your account with us to a third-party account (such as your Google or Facebook account),
            we use the information you allowed us to collect from those third parties to facilitate
            account creation and logon process for the performance of the contract.
          </li>
          <li>
            <strong>To post testimonials.</strong> We post testimonials on our App that may contain
            personal information. Prior to posting a testimonial, we will obtain your consent to use
            your name and the content of the testimonial. If you wish to update, or delete your
            testimonial, please contact us at __________ and be sure to include your name,
            testimonial location, and contact information.
          </li>
          <li>
            <strong>Request feedback.</strong> We may use your information to request feedback and
            to contact you about your use of our App.
          </li>
          <li>
            <strong>To enable user-to-user communications.</strong> We may use your information in
            order to enable user-to-user communications with each user's consent.
          </li>
          <li>
            <strong>To manage user accounts.</strong> We may use your information for the purposes
            of managing our account and keeping it in working order
          </li>
          <li>
            <strong>To send administrative information to you.</strong> We may use your personal
            information to send you product, service and new feature information and/or information
            about changes to our terms, conditions, and policies.
          </li>
          <li>
            <strong>To protect our Services.</strong> We may use your information as part of our
            efforts to keep our App safe and secure (for example, for fraud monitoring and
            prevention).
          </li>
          <li>
            <strong>
              To enforce our terms, conditions and policies for business purposes, to comply with
              legal and regulatory requirements or in connection with our contract.
            </strong>
          </li>
          <li>
            <strong>To respond to legal requests and prevent harm.</strong> If we receive a subpoena
            or other legal request, we may need to inspect the data we hold to determine how to
            respond.
          </li>
          <li>
            <strong>Fulfill and manage your orders.</strong> We may use your information to fulfill
            and manage your orders, payments, returns, and exchanges made through the App.
          </li>
          <li>
            <strong>Administer prize draws and competitions.</strong> We may use your information to
            administer prize draws and competitions when you elect to participate in our
            competitions.
          </li>
          <li>
            <strong>To deliver and facilitate delivery of services to the user.</strong> We may use
            your information to provide you with the requested service.
          </li>
          <li>
            <strong>To respond to user inquiries/offer support to users.</strong> We may use your
            information to respond to your inquiries and solve any potential issues you might have
            with the use of our Services.
          </li>
        </ul>
        <p>
          <strong>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</strong>
        </p>
        <p>
          <i>
            <strong>In Short:</strong> We only share information with your consent, to comply with
            laws, to provide you with services, to protect your rights, or to fulfill business
            obligations.
          </i>
        </p>
        <p>We may process or share your data that we hold based on the following legal basis:</p>
        <ul>
          <li>
            <strong>Consent:</strong> We may process your data if you have given us specific consent
            to use your personal information for a specific purpose.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> We may process your data when it is reasonably
            necessary to achieve our legitimate business interests.
          </li>
          <li>
            <strong>Performance of a Contract:</strong> Where we have entered into a contract with
            you, we may process your personal information to fulfill the terms of our contract.
          </li>
          <li>
            <strong>Legal Obligations:</strong> We may disclose your information where we are
            legally required to do so in order to comply with applicable law, governmental requests,
            a judicial proceeding, court order, or legal process, such as in response to a court
            order or a subpoena (including in response to public authorities to meet national
            security or law enforcement requirements).
          </li>
          <li>
            <strong>Vital Interests:</strong> We may disclose your information where we believe it
            is necessary to investigate, prevent, or take action regarding potential violations of
            our policies, suspected fraud, situations involving potential threats to the safety of
            any person and illegal activities, or as evidence in litigation in which we are
            involved.
          </li>
        </ul>
        <p>
          More specifically, we may need to process your data or share your personal information in
          the following situations:
        </p>
        <ul>
          <li>
            <strong>Business Transfers.</strong> We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of company assets,
            financing, or acquisition of all or a portion of our business to another company.
          </li>
          <li>
            <strong>Other Users.</strong> When you share personal information (for example, by
            posting comments, contributions or other content to the App) or otherwise interact with
            public areas of the App, such personal information may be viewed by all users and may be
            publicly made available outside the App in perpetuity. Similarly, other users will be
            able to view descriptions of your activity, communicate with you within our App, and
            view your profile.
          </li>
        </ul>
        <p>
          <strong>4. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
        </p>
        <p>
          <i>
            <strong>In Short:</strong> We keep your information for as long as necessary to fulfill
            the purposes outlined in this privacy notice unless otherwise required by law.
          </i>
        </p>
        <p>
          We will only keep your personal information for as long as it is necessary for the
          purposes set out in this privacy notice, unless a longer retention period is required or
          permitted by law (such as tax, accounting or other legal requirements). No purpose in this
          notice will require us keeping your personal information for longer than .
        </p>
        <p>
          When we have no ongoing legitimate business need to process your personal information, we
          will either delete or anonymize such information, or, if this is not possible (for
          example, because your personal information has been stored in backup archives), then we
          will securely store your personal information and isolate it from any further processing
          until deletion is possible.
        </p>
        <p>
          <strong>5. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
        </p>
        <p>
          <i>
            <strong>In Short:</strong> You may review, change, or terminate your account at any
            time.
          </i>
        </p>
        <p>
          If you are a resident in the EEA or UK and you believe we are unlawfully processing your
          personal information, you also have the right to complain to your local data protection
          supervisory authority. You can find their contact details here:{' '}
          <a
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
            rel="noreferrer"
          >
            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </a>
          .
        </p>
        <p id="ganeshp" className="pStyle">
          If you are a resident in Switzerland, the contact details for the data protection
          authorities are available here:{' '}
          <p>
            <a
              style={{ lineBreak: 'anywhere' }}
              href="https://www.edoeb.admin.ch/edoeb/en/home.html"
              target="_blank"
              rel="noreferrer"
            >
              https://www.edoeb.admin.ch/edoeb/en/home.html
            </a>
          </p>
        </p>
        <p>
          <strong>Account Information</strong>
        </p>
        <p>
          If you would at any time like to review or change the information in your account or
          terminate your account, you can:
        </p>
        <ul>
          <li>Log in to your account settings and update your user account.</li>
        </ul>
        <p>
          Upon your request to terminate your account, we will deactivate or delete your account and
          information from our active databases. However, we may retain some information in our
          files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our
          Terms of Use and/or comply with applicable legal requirements.
        </p>
        <p>
          <strong>
            <span style={{ borderBottom: '0.1em solid black', color: '#5c5a5a' }}>
              Opting out of email marketing:
            </span>
          </strong>{' '}
          You can unsubscribe from our marketing email list at any time by clicking on the
          unsubscribe link in the emails that we send or by contacting us using the details provided
          below. You will then be removed from the marketing email list — however, we may still
          communicate with you, for example to send you service-related emails that are necessary
          for the administration and use of your account, to respond to service requests, or for
          other non-marketing purposes. To otherwise opt-out, you may:
        </p>
        <ul>
          <li>Access your account settings and update your preferences.</li>
        </ul>
        <p>
          <strong>6. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
        </p>
        <p>
          Most web browsers and some mobile operating systems and mobile applications include a
          Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference
          not to have data about your online browsing activities monitored and collected. At this
          stage no uniform technology standard for recognizing and implementing DNT signals has been
          finalized. As such, we do not currently respond to DNT browser signals or any other
          mechanism that automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the future, we will inform
          you about that practice in a revised version of this privacy notice.{' '}
        </p>
        <p>
          <strong>7. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</strong>
        </p>
        <p>
          <i>
            <strong>In Short:</strong> Yes, if you are a resident of California, you are granted
            specific rights regarding access to your personal information.
          </i>
        </p>
        <p>
          California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits
          our users who are California residents to request and obtain from us, once a year and free
          of charge, information about categories of personal information (if any) we disclosed to
          third parties for direct marketing purposes and the names and addresses of all third
          parties with which we shared personal information in the immediately preceding calendar
          year. If you are a California resident and would like to make such a request, please
          submit your request in writing to us using the contact information provided below.
        </p>
        <p>
          If you are under 18 years of age, reside in California, and have a registered account with
          the App, you have the right to request removal of unwanted data that you publicly post on
          the App. To request removal of such data, please contact us using the contact information
          provided below, and include the email address associated with your account and a statement
          that you reside in California. We will make sure the data is not publicly displayed on the
          App, but please be aware that the data may not be completely or comprehensively removed
          from all our systems (e.g. backups, etc.).
        </p>
        <p>
          <strong>CCPA Privacy Notice</strong>
        </p>
        <p>The California Code of Regulations defines a "resident" as:</p>
        <p className="c1">
          <span style={{ MarginBottom: '15px' }}>
            (1) every individual who is in the State of California for other than a temporary or
            transitory purpose and
          </span>
          <br />
          <span>
            (2) every individual who is domiciled in the State of California who is outside the
            State of California for a temporary or transitory purpose{' '}
          </span>
        </p>
        <p>All other individuals are defined as "non-residents."</p>
        <p>
          If this definition of "resident" applies to you, we must adhere to certain rights and
          obligations regarding your personal information.
        </p>
        <p>
          <strong>What categories of personal information do we collect?</strong>
        </p>
        <p>
          We have collected the following categories of personal information in the past twelve (12)
          months:
        </p>{' '}
        <table>
          <tr>
            <th>Category</th>
            <th>Examples</th>
            <th>Collected</th>
          </tr>
          <tr>
            <td>A. Identifiers</td>
            <td>
              Contact details, such as real name, alias, postal address, telephone or mobile contact
              number, unique personal identifier, online identifier, Internet Protocol address,
              email address and account name
            </td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>
              B. Personal information categories listed in the California Customer Records statute
            </td>
            <td>
              Name, contact information, education, employment, employment history and financial
              information
            </td>
            <td className="collectedTable">YES</td>
          </tr>
          <tr>
            <td>C. Protected classification characteristics under California or federal law</td>
            <td>Gender and date of birth</td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>D. Commercial information</td>
            <td>
              Transaction information, purchase history, financial details and payment information
            </td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>E. Biometric information</td>
            <td>Fingerprints and voiceprints</td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>F. Internet or other similar network activity</td>
            <td>
              Browsing history, search history, online behavior, interest data, and interactions
              with our and other websites, applications, systems and advertisements
            </td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>G. Geolocation data</td>
            <td>Device location</td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
            <td>
              Images and audio, video or call recordings created in connection with our business
              activities
            </td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>I. Professional or employment-related information</td>
            <td>
              Business contact details in order to provide you our services at a business level, job
              title as well as work history and professional qualifications if you apply for a job
              with us
            </td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>J. Education Information</td>
            <td>Student records and directory information</td>
            <td className="collectedTable">NO</td>
          </tr>
          <tr>
            <td>K. Inferences drawn from other personal information</td>
            <td>
              Inferences drawn from any of the collected personal information listed above to create
              a profile or summary about, for example, an individual’s preferences and
              characteristics
            </td>
            <td className="collectedTable">NO</td>
          </tr>
        </table>
        <p>
          We may also collect other personal information outside of these categories instances where
          you interact with us in-person, online, or by phone or mail in the context of:
        </p>
        <ul>
          <li>Receiving help through our customer support channels;</li>
          <li>Participation in customer surveys or contests; and</li>
          <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
        </ul>
        <p>
          <strong>How do we use and share your personal information?</strong>
        </p>
        <p>
          More information about our data collection and sharing practices can be found in this
          privacy notice.
        </p>
        <p>
          You may contact us or by referring to the contact details at the bottom of this document.
        </p>
        <p>
          If you are using an authorized agent to exercise your right to opt-out we may deny a
          request if the authorized agent does not submit proof that they have been validly
          authorized to act on your behalf.
        </p>
        <p>
          <strong>Will your information be shared with anyone else?</strong>
        </p>
        <p>
          We may disclose your personal information with our service providers pursuant to a written
          contract between us and each service provider. Each service provider is a for-profit
          entity that processes the information on our behalf.
        </p>
        <p>
          We may use your personal information for our own business purposes, such as for
          undertaking internal research for technological development and demonstration. This is not
          considered to be "selling" of your personal data.
        </p>
        <p>
          MyPlots has not disclosed or sold any personal information to third parties for a business
          or commercial purpose in the preceding 12 months. MyPlots will not sell personal
          information in the future belonging to website visitors, users and other consumers.
        </p>
        <p>
          <strong>Your rights with respect to your personal data</strong>
        </p>
        <p>
          <span style={{ borderBottom: '0.1em solid black', color: '#5c5a5a' }}>
            Right to request deletion of the data - Request to delete
          </span>
        </p>
        <p>
          You can ask for the deletion of your personal information. If you ask us to delete your
          personal information, we will respect your request and delete your personal information,
          subject to certain exceptions provided by law, such as (but not limited to) the exercise
          by another consumer of his or her right to free speech, our compliance requirements
          resulting from a legal obligation or any processing that may be required to protect
          against illegal activities.
        </p>
        <p>
          <span style={{ borderBottom: '0.1em solid black', color: '#5c5a5a' }}>
            Right to be informed - Request to know
          </span>
        </p>
        <p>Depending on the circumstances, you have a right to know:</p>
        <ul>
          <li>whether we collect and use your personal information;</li>
          <li>the categories of personal information that we collect;</li>
          <li>the purposes for which the collected personal information is used;</li>
          <li>whether we sell your personal information to third parties;</li>
          <li>
            the categories of personal information that we sold or disclosed for a business purpose;
          </li>
          <li>
            the categories of third parties to whom the personal information was sold or disclosed
            for a business purpose; and
          </li>
          <li>
            the business or commercial purpose for collecting or selling personal information.
          </li>
        </ul>
        <p>
          In accordance with applicable law, we are not obligated to provide or delete consumer
          information that is de-identified in response to a consumer request or to re-identify
          individual data to verify a consumer request.
        </p>
        <p>
          <span style={{ borderBottom: '0.1em solid black', color: '#5c5a5a' }}>
            Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
          </span>
        </p>
        <p>We will not discriminate against you if you exercise your privacy rights.</p>
        <p>
          <span style={{ borderBottom: '0.1em solid black', color: '#5c5a5a' }}>
            Verification process
          </span>
        </p>
        <p>
          Upon receiving your request, we will need to verify your identity to determine you are the
          same person about whom we have the information in our system. These verification efforts
          require us to ask you to provide information so that we can match it with information you
          have previously provided us. For instance, depending on the type of request you submit, we
          may ask you to provide certain information so that we can match the information you
          provide with the information we already have on file, or we may contact you through a
          communication method (e.g. phone or email) that you have previously provided to us. We may
          also use other verification methods as the circumstances dictate.
        </p>
        <p>
          We will only use personal information provided in your request to verify your identity or
          authority to make the request. To the extent possible, we will avoid requesting additional
          information from you for the purposes of verification. If, however, we cannot verify your
          identity from the information already maintained by us, we may request that you provide
          additional information for the purposes of verifying your identity, and for security or
          fraud-prevention purposes. We will delete such additionally provided information as soon
          as we finish verifying you.
        </p>
        <p>
          <span style={{ borderBottom: '0.1em solid black', color: '#5c5a5a' }}>
            Other privacy rights
          </span>
        </p>
        <ul>
          <li>you may object to the processing of your personal data.</li>
          <li>
            you may request correction of your personal data if it is incorrect or no longer
            relevant, or ask to restrict the processing of the data.
          </li>
          <li>
            you can designate an authorized agent to make a request under the CCPA on your behalf.
            We may deny a request from an authorized agent that does not submit proof that they have
            been validly authorized to act on your behalf in accordance with the CCPA.
          </li>
          <li>
            you may request to opt-out from future selling of your personal information to third
            parties. Upon receiving a request to opt-out, we will act upon the request as soon as
            feasibly possible, but no later than 15 days from the date of the request submission.
          </li>
        </ul>{' '}
        <p>
          To exercise these rights, you can contact us or by referring to the contact details at the
          bottom of this document. If you have a complaint about how we handle your data, we would
          like to hear from you.
        </p>
        <p>
          <strong>8. DO WE MAKE UPDATES TO THIS NOTICE? </strong>
        </p>
        <p>
          <i>
            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
          </i>
        </p>
        <p>
          We may update this privacy notice from time to time. The updated version will be indicated
          by an updated "Revised" date and the updated version will be effective as soon as it is
          accessible. If we make material changes to this privacy notice, we may notify you either
          by prominently posting a notice of such changes or by directly sending you a notification.
          We encourage you to review this privacy notice frequently to be informed of how we are
          protecting your information.
        </p>
        <p>
          <strong>9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? </strong>
        </p>
        <p>
          If you have questions or comments about this notice, you may email us at __________ or by
          post to:
        </p>
        <p>MyPlots</p>
        <p>__________</p>
        <p>__________</p>
        <p>
          <strong>10. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</strong>
        </p>
        <p>
          Based on the applicable laws of your country, you may have the right to request access to
          the personal information we collect from you, change that information, or delete it in
          some circumstances. To request to review, update, or delete your personal information,
          please submit a request form by clicking{' '}
          <a href="#" target="_blank">
            here
          </a>
          .
        </p>{' '}
        <p>
          This privacy policy was created using Termly's{' '}
          <a href="#" target="_blank">
            {' '}
            Privacy Policy Generator
          </a>
          .
        </p>
      </div>
      <Footer onContactUs={onContactUs} onPrivacy={onPrivacy} onTerms={onTerms} />
      <CustomModal
        open={open}
        modalHeight="400px"
        modalWidth={width < 600 ? '300px' : '600px'}
        left="50%"
        onClose={onClose}
      >
        <Form handleOnClose={onClose} />
      </CustomModal>
    </div>
  );
};

export default Privacy;
