import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsPopupOpen = ({ setPopupTermsOpen }) => {
  const termsData = [
    {
      title: `Quiz details and concept`,
      details: [
        {
          details: [
            `The MyBL App Quiz for Padma Bridge Helicopter Ride (“Quiz”), is sponsored by Banglalink Digital Communications Ltd. (“Banglalink”), wherein the subscribers of Banglalink upon registering with Banglalink’s MyBL App (“MyBL App”) and answering the Quiz Questions (defined below) in accordance with the terms and conditions of the Quiz, will have the opportunity to win a helicopter ride (“Prize”) over the Padma river to get an aerial view of the Padma bridge. A total of 10 (ten) Prize will be given to the Participants (defined below) who have registered with the MyBL App and correctly answered the Quiz Questions on a first arrive basis.
            `,
            `
            The Quiz shall be conducted between 25th July, 2022 and 31st July, 2022, both days inclusive (“Quiz Period”).
            `,
            `
            The Participants (as defined herein) will be required to be valid subscribers of Banglalink and  register with the                                                                    MyBL App. The number registered with MyBL App will be considered as the registered mobile number for the Participant and shall be used for all further correspondence with the Participant for the purpose of the Quiz. On submitting all correct answers in the manner prescribed below, the Participant shall become eligible to be chosen as a winner under the Quiz. Existing MyBL App users who are also subscribers of Banglalink can also take part in the Quiz.
            `,
            `
            The Quiz is advertised and promoted, inter alia, through media including digital media including television (news and other channels), Facebook, Youtube, point of sale materials, print publicity through banners, posters, public announcements, website and other available media. 
            `,
            `
            The Quiz is subject to all applicable laws and regulations of Bangladesh.
            `,
            `
            By participating in this Quiz, the Participant accepts and agrees to abide by these terms and conditions of the Quiz (“Terms”) stated herein. The Participant acknowledges and confirms having read and understood the Terms, and specifically agrees to be bound by the Terms thereof.
            `,
            `
            These Terms will be hosted at the webpage www.banglalink.net (“Quiz Website”) and the MyBL App.
            `,
          ],
        },
      ],
    },
    {
      title: `Banglalink and its Partners`,
      details: [
        {
          details: [
            `This Quiz is sponsored by Banglalink, having its registered office at Tigers’ Den, House 4 (SWH), Bir Uttam Mir Shawkat Sharak, Gulshan 1, Dhaka 1212, Bangladesh.
            `,
            `
            Live Technologies (“BP”) shall manage the execution of the Quiz in MyBL App. .
            `,
            `
            A separate, 3rd party vendor will be fully and independently responsible for end to end management and execution of the Prize for the benefit of winning Participants, including all logistics related to the realization of the Prize. Banglalink has no role or responsibility in this regard, except for making payment to the vendor for the Prizes on behalf of winning Participants. 
            `,
          ],
        },
      ],
    },
    {
      title: `Agreement to Terms
      and Conditions`,
      details: [
        {
          details: [
            `Entry and participation in this Quiz will be deemed as an unconditional and an unequivocal acceptance of these Terms, including any modifications, revisions and amendments thereto by Banglalink. Banglalink reserves the right at any time to modify or amend the Terms (or any part or content thereof) without notice at any time.
            `,
            `
            Banglalink shall not be liable to Participants or to any third-party for any modification of the Terms. 
            `,
            `
            The decisions of Banglalink shall be final and binding on the Participants in all matters related to the Quiz.
            `,
            `
            Further, the Participants recognize that these Terms may be modified by Banglalink from time to time without any prior/public notice by posting the applicable terms and conditions on the Quiz Website/MyBL App. 
            `,
            `
            Banglalink, at its sole discretion reserves the right to cancel, suspend or terminate the Quiz at any stage without prior notice and  without assigning any reasons whatsoever and without any liability (whether financial of otherwise). Banglalink further reserves the right to disqualify any Participant who tampers or attempts to tamper with the submission process or any other part of the Quiz. 
            `,
            `
            Successfully entering the Quiz and winning a Prize is subject to all Terms and requirements set forth herein.
            
            `
          ],
        },
      ],
    },
    {
      title: `Quiz Period`,
      details: [
        {
          details: [
            `The Quiz shall be conducted between 25th July, 2022 to 31st July, 2022 both days inclusive.
            `,
            `
            The valid timings for receiving entries are between 25th July, 2022 00.00 am to 31st July, 2022 11.59 pm (“Quiz Timings”)
            `,
            `
            Any entries received outside the Quiz Timings shall not be considered for the purpose of the Quiz. 
            `,
            `
            Only entries received during the Quiz Timings within the Quiz Period, shall be considered as per the Terms for the Prize.
            `,
          ],
        },
      ],
    },
    {
      title: `Eligibility Criteria`,
      details: [
        {
          details: [
            `Entry and participation in this Quiz is open to all subscribers of Banglalink who are currently residing in Bangladesh and who satisfy each of the following criteria:`,
          ],
        },
        {
          list: [
            `are over the age of 18 years;
            `,
            `not an insane person;
            `,
            `own a valid registered subscription with Banglalink;
            `,
            `have to be registered with MyBL App;
            `,
            `have not been arrested or convicted of any crime or been the subject of any criminal investigation;
            `,
            `bear a good moral character and have not been implicated or named in any legal proceedings (either civil or criminal); and
            `,
            `are not management, employees, directors or contractors, or the immediate family members of the management, employees, directors or contractors of Banglalink, BP, Genex Infosys Limited, and their related entities or other agencies, firms or companies, distributors retailers, RSOs;
            `,
            `is physically, mentally fit and/or does not have any physical disability, phobia, fear nor has any underlying health/heart condition and/or related conditions restricting such person from riding a helicopter.
            `
          ],
        },
        {
          details: [
            `Eligible Persons`,
            `For the sake of clarity, this Quiz is not open to Non-Resident Bangladeshi (NRIs), Overseas Citizens of Bangladesh (OCIs) and Persons of Bangladeshi Origin (PBOs) who are not residing in Bangladesh.
            `,
            `
            Eligible persons participating or seeking to participate in the Quiz shall individually be referred to as “Participant” and collectively as “Participants”.
            `,
            `
            By participating in this Quiz, the Participant agrees to receive details and information about this Quiz on his/her mobile, through SMS and/or voice calls, during the tenure of the Quiz.
            `,
          ],
        },
      ],
    },

    {
      title: `How to enter and participate in the Quiz`,
      details: [
        {
          details: [
            `Participants wishing to enter the Quiz may do so through the following route:`,
          ],
        },
        {
          list:[
            `Participants are required to first be registered with MyBL App;
            `,
            `Registered MyBL App users shall receive a pop-up asking confirmation for participation in the Quiz ;
            `,
            `Upon agreeing to these Terms by selecting “Yes”, the Participant would be taken to the Quiz registration page where the Participant will enter personal details including name, gender and mobile number and click “Submit”. 
            `,
            `Upon clicking “Submit”, an OTP will be generated and sent to the Participant’s shared mobile number. 
            `,
            `Thereafter, upon successful entry of the OTP, the Q/A page will appear. 
            `,
            `The Participant shall be asked 5 (five) multiple choice questions (“Quiz Questions”) relating to Padma Bridge. 
            `,
            `After answering all the Quiz Questions, the Participant shall have to press “Finish” button to submit the answers to the Quiz Questions to Banglalink.
            `,
            `Upon pressing the “Finish” button answers to the Quiz Questions shall be submitted and a pop-up would appear with the message “Your answers have been submitted. Thank you for participating the quiz contest. Winners will be notified via SMS”.
            `,
            `Winners will be selected following the terms set in clause 7 of these Terms. 
            
            `
          ]
        }
      ],
    },

    {
      title: `Prizes and Winners`,
      details: [
        {
          details: [
            `T10 (ten) Participants will be eligible to receive the Prize subject to the Terms detailed herein.
            `,
            `
            The Prize
            `,
            `Top 10 (ten) Participants who correctly and successfully answers all the Quiz Questions and submit the same within the shortest possible time within the Quiz Timings in accordance with these Terms, shall each be awarded a helicopter ride over the Padma river to get an aerial view of the Padma bridge. Details of the helicopter ride including the itinerary, boarding point and duration etc will be shared with the winning Participant at a later time. The day, date, time, duration of the helicopter ride will be set by Banglalink at its sole discretion.
            `,
            `
            Total number of Prizes shall be 10 (ten).
            
            `
          ],
        },
      ],
    },

    {
      title: `Selecting and
      Contacting Winners and Tie
      `,
      details: [
        {
          details: [
            `Top 10 (ten) Participants who have correctly and successfully answered all the Quiz Questions within the shortest possible time within the Quiz Timings in accordance with these Terms shall be selected as the winners ("Winners”). Each Winner shall be eligible to win a single Prize, subject to these Terms.`,
            `Tie`,
          ],
        },
        {
          list: [
            `In the event of a tie, the Participant who has registered with MyBL App first shall be the tie Winner;
            `,
            `If the tie cannot be resolved by the above method, then final Winner will be selected based on the duration of the period for which the Participant is registered as a subscriber of Banglalink. The Participant with the longest duration of registration as subscriber of Banglalink shall be the Winner.
            `
          ]
        },
        {
          details: [
            `Notification`,
            `The Winners will be notified via SMS or any chosen modality preferred by Banglalink.
            `,
          ],
        },
      ],
    },

    {
      title: `Conditions relating to the Prize`,
      details: [
        {
          details: [
            `The Winner(s) shall not exchange, substitute or assign the Prizes, and shall not be entitled to any compensation whether in cash or kind from Banglalink and/or its agents in lieu of the Prize or in the event the Prize cannot be provided or is delayed for any reason whatsoever.
            `,
            `
            The names and images of the confirmed Winners may at the sole discretion of Banglalink be announced on the Quiz Website and/or MyBL App or in any manner deemed appropriate by Banglalink during or after the Quiz Period, once the Winners have been confirmed and verified.
            `,
            `
            No portion of the Prizes offered under the Quiz is redeemable for cash. The Prizes are also not refundable or transferable.
            `,
            `
            Banglalink and/or its agents shall not be liable for default, delay, suspension or cancellation of delivery of Prizes due to incorrect personal details provided by the Winner. Banglalink reserves the right to request each Winner to provide proof of their identity and/or proof that they were responsible for the winning entry. 
            `,
            `
            Prizes cannot be transferred or substituted by the Winner. If a Prize is unclaimed within a reasonable time after notification from Banglalink, as determined by Banglalink in its sole discretion, it will be forfeited, and time permitting, an alternate Winner may be selected from the remaining eligible Participants at Banglalink’s sole discretion.
            `,
            `
            If a Winner fails to appear in person or on time to the location of the helicopter ride as set and informed by Banglalink, in such an event the Prize shall be considered forfeited by the said Winner, and if time permits, an alternate Winner may be selected from the remaining eligible Participants at Banglalink’s sole discretion.
            `,
            `
            It shall be the sole responsibility of the Participants to notify Banglalink of any pre-existing medical and/or health conditions which may affect their fitness to fly. The Prize shall be considered forfeited by the Winner, in the event the Winner is physically, mentally unfit and/or have physically disability, phobia, fear or has and underlying health/heart condition and/or related condition barring the Winner to take the helicopter ride and shall relinquish Banglalink and/or its agents, contractors from any and all liabilities.  
            `,
            `
            Banglalink shall not be responsible for the death, personal injury and damage to property, whether direct, indirect, consequential, foreseeable arising due to the failure or omission of the Participant and/or Winner to notify Banglalink of any pre-exiting health and medical conditions. 
            `,
          ],
        }
      ],
    },
    {
      title: `Publicity`,
      details: [
        {
          details: [
            `The Participants undertake and irrevocably and unconditionally permit Banglalink to cover the Quiz, the Winners and the Prizes through various media including newspapers, radio, digital media, television including news and other channels, internet, point of sale materials, etc., and shall not raise any objection, protest or demur whatsoever to such coverage or in this regard.
            `,
            `
            Whilst Banglalink shall make all reasonable efforts, there is no obligation on the part of Banglalink to air any entry.
            `,
            `
            The Winners must, at the request of Banglalink, participate in all promotional activity (such as publicity and photography) surrounding the winning of the Prize, free of charge, and they consent to Banglalink using their name and image in all promotional materials.
            `,
          ],
        }
      ],
    },
    {
      title: `Intellectual Property Rights`,
      details: [
        {
          details: [
            `All right, title and interest, including but not limited to the intellectual property rights, in the promotional material(s) and in any and all responses received in relation to the Quiz shall vest solely and exclusively with Banglalink at all times. Banglalink or any person or entity directly permitted by Banglalink in this regard shall be entitled to use any information in connection with the entry in any media for future promotional, marketing, publicity and any other purpose, without any permission and or payment to the Participant.
            `,
            `
            All materials, information and documents submitted in connection with the Quiz (whether written, audio, electronic or visual form, or a combination of those) or any photographs, video and/or film footage and/or audio recording taken of Participants are assigned to Banglalink upon submission and become the property of Banglalink exclusively. Banglalink may use the material in any medium in any reasonable manner it sees fit at any time. Copyright in any such material remains the sole property of Banglalink indefinitely.
            `,
          ],
        }
      ],
    },
    {
      title: `General Conditions`,
      details: [
        {
          list: [
            `Each Participant represents and warrants that he/she is legally competent to enter into binding contracts under applicable laws of Bangladesh. By taking part and/or entering this Quiz the Participant warrants that all information provided by him/her regarding his/her name, age, state, city, address, phone number, etc., is true, correct, accurate and complete.
            `,
            `
            Each Participant is required to provide full and accurate details of his/her name, permanent address, phone number, age and such other details as may be prescribed by Banglalink. It shall be the responsibility of each Participant to notify Banglalink of any change to their contact and/or personal details. 
            `,
            `
            Banglalink may, at any time, verify or authorize verification of the Participant’s entry (including such Participant’s identity, age, place of residence and affiliations) and disqualify any Participant (at any stage of the Quiz) if it is found that such Participant has submitted an entry, information or any documents that is inconsistent with these Terms.
            `,
            `
            Banglalink may, disqualify any Participant if such Participant engages in or it is found that such Participant has engaged in any illegal, unlawful, fraudulent, misrepresentation, deceptive or improper conduct (with regard to the Quiz or otherwise).
            `,
            `
            The decision of Banglalink as regards the selection of valid entries, Winners, promotion question is final. No correspondence or any other claims whatsoever, from any Participants and/or third parties, in this regard will be entertained. The Prizes cannot be exchanged or substituted and are not transferable or refundable. Further, the Prizes are not redeemable for cash or any monetary benefits in kind.
            `,
            `
            Banglalink reserves the right at its sole discretion to cancel, terminate, postpone, modify or suspend the Quiz in whole or in part at any time including if, for any reason, the Quiz is not capable of running as planned, including due to any technical failure, regulatory reasons or any other causes beyond the reasonable control of Banglalink. In such cases, Banglalink will not be liable for any consequential losses/damages arising due to such cancellation, termination, suspension or modification. All Winners and/or Participants agree that no claims or complaints shall be raised against Banglalink or any of their affiliates, representatives, associates etc. in this respect. Any decision of Banglalink in this regard and in general with respect to this Quiz and the Terms thereto shall be final, binding and non-contestable.
            `,
            `
            Banglalink accepts no responsibility for system errors or any other issues that may result in disruption to, lost, delayed or not received entries, Winner notifications or Prizes.
            `,
            `
            Banglalink further reserves the right to modify or cancel the Prizes offered under this Quiz, at its sole and absolute discretion. The Winners and/or the Participants agree that no claims or complaints whatsoever may be raised against Banglalink or any of their affiliates, representatives, associates, etc., in this respect.
            `,
            `
            Participants shall follow all directions/rules and regulations (whether communicated in written form or verbally) framed by Banglalink at all times in connection with the Quiz. Any deviation or objection by any Participant(s) may result in their disqualification from the Quiz.
            `,
            `
            The Participant(s) hereby undertake to provide and/or execute any documents as may be deemed necessary by Banglalink and/or BP to effectively carry out its obligations under the Quiz and/or these Terms.
            `,
            `
            Management, employees, directors or contractors, or the immediate family members of the management, employees, directors or contractors of Banglalink, BP, Genex Infosys Limited, and their related entities or other agencies, firms or companies, distributors, retailers, RSOs are not eligible to participate in the Quiz.
            `,
            `
            Nothing contained herein amounts to a commitment or representation by Banglalink to conduct further promotions.
             
            The decision of Banglalink shall be final in all regards and no communication shall be entertained in this regard. None of the provisions of these Terms shall be deemed to constitute a partnership or agency between any Participant and Banglalink and the Participant shall not have the authority to bind Banglalink in any manner whatsoever.
            `,
            `
            Banglalink, BP and other agents of Banglalink shall not be liable to perform any of their respective obligations under the Quiz or in respect of the Prizes where they are unable to do so as a result of circumstances beyond their reasonable control in the nature of fire, explosions, natural calamities, state emergency, riots, government restrictions or any other force majeure condition, etc., and shall not be liable to compensate the Winners or the Participants in any manner in these circumstances.
            `,
            `
            Failure to exercise or delay in exercising a right or remedy provided hereunder or by law does not constitute a waiver of the right or remedy or waiver of other rights or remedies on the part of Banglalink.
            `,
            `
            Winners and Participants undertake not to, at any time, disclose, reveal, communicate or otherwise make public any information relating to Banglalink, their respective  business, personnel, servants, agents or officers to anyone.
            `,
            `
            Banglalink accepts no responsibility for dropped calls, late, lost, incomplete, incorrectly submitted, delayed, illegible, corrupted or misdirected entries, communication, documents, claims or correspondence whether due to error, omission, alteration, tampering, unauthorized data hacking, deletion, theft, destruction, virus attack, transmission interruption, communications failure, software failure, hardware failure or otherwise. Banglalink shall not liable for any consequences of user error including (without limitation) costs incurred. 
            `,
            `
            If a Participant is dissatisfied with the Quiz or the Quiz Terms, his/her sole and exclusive remedy is to not participate in the Quiz.
            `,
            `
            The general terms and conditions and privacy policy on the Quiz Website/MyBL App shall be applicable in addition to these Terms.
            `,
            `
            These Terms may be altered by Banglalink at its sole and absolute discretion and without any prior notice to the Winners and/or Participants.
            `,
            `
            Banglalink may withdraw the Prize entitlement where there are reasonable grounds to believe there has been a breach of any these Terms.
            `,
            `
            If any of these clauses should be determined to be illegal, invalid or otherwise unenforceable then it shall be severed and deleted from these Terms and the remaining clauses shall survive and remain in full force and effect.
            `,
            `
            The original text of these Terms shall be in English and there may be translation in Bangla of these Terms. In the event of any conflict between English and Bangla text, English text shall prevail.
            `,
          ],
        }
      ],
    },
    {
      title: `Release and Limitations of Liability`,
      details: [
        {
          list: [
            `By entering into the Quiz, the Participants hereby release from and agree to indemnify Banglalink, BP and/or any of their respective officers/employees from and against all liability, cost, loss or expense arising out of acceptance   and/or use of the Prize or participation in the Quiz including (but not limited to) death, personal injury and damage to property and whether direct, indirect, consequential, foreseeable, due to any negligent act or omission, or otherwise. 
            `,
            `
            Banglalink accepts no liability, whether jointly or severally, for any errors or omissions, whether on behalf of themselves or third parties in relation to the Prizes. Banglalink and any of their respective parent companies, subsidiaries, affiliates, directors, officers, professional advisors, employees and agencies will not be responsible for any late, lost, misrouted, garbled or distorted or damaged transmissions or entries or any delay or cancellation of the Quiz or Prize.
            `,
            `
            The Participant(s) shall be solely responsible for any consequences which may arise due to their participation in the Quiz by conducting an illegal, fraudulent or unlawful act. Participant(s) also undertakes to indemnify Banglalink and their respective officers, directors, employees and agents on the happening of such an event (including without limitation cost of attorney, legal charges etc.) on full indemnity basis for any loss/damage suffered by Banglalink on account of such act on the part of the Participant. Participant(s) hereby agree to indemnify, defend and hold harmless Banglalink in case of any loss or liability (including but not limited to liabilities, judgments, damages, losses, fines and penalties, claims, costs and expenses such as attorneys’ fees and expenses) or any other loss associated with, arising out of or incidental to their ineligibility to participate, any untoward, rash or negligent act on their part, or non-compliance or alleged non-compliance with these Terms, any other rules, regulations, directives (whether written or verbal) issued by Banglalink from time to time, during the Quiz.
            `,
            `
            To the fullest extent permitted by law, in no event shall Banglalink or any of its officers, servants, employees, representatives and/or agents (including without limitation, any third party service providers that Banglalink may engage for purposes of the Quiz), be liable for any loss or damages (including, without limitation loss of income, profits or goodwill, indirect, incidental, consequential, exemplary, punitive or special damages of any party including third parties) howsoever arising whether in contract, tort, negligence or otherwise, in connection with the Quiz and/or the Quiz prizes, even if Banglalink has been advised of the possibility of such damages in advance, and all such damages are expressly excluded. The Participant shall indemnify, defend, and hold Banglalink harmless in the event of there being any third party/entity/organization claims arising from or related to his/her participation in the Quiz. In no event shall Banglalink be liable to any Participant for acts or omissions arising out of or related to the Quiz or his/her participation in the Quiz.
            `,
            `
            In consideration of Banglalink allowing the Participant(s) to take part in the Quiz, to the maximum extent permitted by law, the Participant(s) waive and release each and every right or claim, all actions, causes of actions (present or future) each of them has or may have against Banglalink its respective agents, directors, officers, business associates, group companies, sponsors, employees, or representatives for all and any injuries, accidents, or mishaps (whether known or unknown) or (whether anticipated or unanticipated) arising out of the Quiz or related to the Quiz or the Prizes of the Quiz.
            `,
            `
            By entering into the Quiz, the Participants acknowledges that an independent 3rd party will be operating, managing and executing the helicopter rides and that Banglalink and/or BP has no role, responsibility apart from making the payment of charges for the helicopter rides (i.e. Prizes) and hereby release from and agree to indemnify Banglalink, BP and/or any of their respective officers/employees from and against all liability, cost, loss or expense arising out of acceptance of the Prize including (but not limited to) death, personal injury and damage to property whether direct, indirect, consequential, foreseeable, due to some negligent, fraudulent or illegal  act or omission, or otherwise of the independent 3rd party operating, managing and executing the helicopter rides.
            `,
          ],
        }
      ],
    },
    {
      title: `Dispute Resolution and Governing Laws`,
      details: [
        {
          list: [
            `Any and all disputes arising out of, or in connection with, the Quiz shall be finally settled through arbitration by a single arbitrator following the applicable rules of Bangladesh International Arbitration Centre (BIAC) and the award of the adjudication shall be final and binding upon the parties. The place of Arbitration shall be Dhaka. The language of Arbitration shall be in English.
            `,
            `
            Further all issues and questions concerning the construction, validity, interpretation and enforceability of these Terms, or the rights and obligations of the Participants and/or Banglalink and/or partners of this Quiz, shall be governed and construed in accordance with the laws of Bangladesh.
            `,
          ],
        }
      ],
    },
  ];

  const termsDataBangla = [
    {
      title: `Quiz details and concept`,
      details: [
        {
          details: [
            `The MyBL App Quiz for Padma Bridge Helicopter Ride (“Quiz”), is sponsored by Banglalink Digital Communications Ltd. (“Banglalink”), wherein the subscribers of Banglalink upon registering with Banglalink’s MyBL App (“MyBL App”) and answering the Quiz Questions (defined below) in accordance with the terms and conditions of the Quiz, will have the opportunity to win a helicopter ride (“Prize”) over the Padma river to get an aerial view of the Padma bridge. A total of 10 (ten) Prize will be given to the Participants (defined below) who have registered with the MyBL App and correctly answered the Quiz Questions on a first arrive basis.
            `,
            `
            The Quiz shall be conducted between 19th July, 2022 and 25th July, 2022, both days inclusive (“Quiz Period”).
            `,
            `
            The Participants (as defined herein) will be required to be valid subscribers of Banglalink and  register with the                                                                    MyBL App. The number registered with MyBL App will be considered as the registered mobile number for the Participant and shall be used for all further correspondence with the Participant for the purpose of the Quiz. On submitting all correct answers in the manner prescribed below, the Participant shall become eligible to be chosen as a winner under the Quiz. Existing MyBL App users who are also subscribers of Banglalink can also take part in the Quiz.
            `,
            `
            The Quiz is advertised and promoted, inter alia, through media including digital media including television (news and other channels), Facebook, Youtube, point of sale materials, print publicity through banners, posters, public announcements, website and other available media. 
            `,
            `
            The Quiz is subject to all applicable laws and regulations of Bangladesh.
            `,
            `
            By participating in this Quiz, the Participant accepts and agrees to abide by these terms and conditions of the Quiz (“Terms”) stated herein. The Participant acknowledges and confirms having read and understood the Terms, and specifically agrees to be bound by the Terms thereof.
            `,
            `
            These Terms will be hosted at the webpage www.banglalink.net (“Quiz Website”) and the MyBL App.
            `,
          ],
        },
      ],
      titleBn: `কুইজ-এর বিবরণ এবং ধারণা`,
      detailsBn: [
        {
          details: [
            `পদ্মা সেতু হেলিকপ্টার ভ্রমনের জন্য MyBL App কুইজটি ("কুইজ"), বাংলালিংক ডিজিটাল কমিউনিকেশনস লিমিটেড ("বাংলালিংক") স্পন্সর করছে, যেখানে বাংলালিংক-এর গ্রাহকরা MyBL App ("MyBL App")-এ নিবন্ধন করা সাপেক্ষে, কুইজ-এর প্রশ্নের উত্তর প্রদান করে, এই শর্তাবলী অনুসারে, জিতে নিতে পারে পদ্মা নদীর  উপর দিয়ে পদ্মা সেতুর মনোরম দৃশ্য দেখার জন্য হেলিকপ্টার রাইড পুরষ্কার ("পুরষ্কার")। অংশগ্রহণকারীদের (নীচে সংজ্ঞায়িত) মধ্যে থেকে সর্বমোট ১০ (দশ) জন প্রথম সঠিক উত্তরদাতাকে পুরস্কার দেয়া হবে।`,
            `
            কুইজটি ২৫ই জুলাই, ২০২২ এবং ৩১ই জুলাই, ২০২২-এর মধ্যে অনুষ্ঠিত হবে, উভয় দিনই  অন্তর্ভুক্ত ("কুইজ পিরিয়ড")।

            `,
            `
            অংশগ্রহণকারীদের (নিচে সংজ্ঞায়িত) বাংলালিংক-এর বৈধ গ্রাহক হতে হবে এবং MyBL App-এ নিবন্ধন করতে হবে। MyBL App-এ নিবন্ধিত নম্বরটি অংশগ্রহণকারীর জন্য নিবন্ধিত মোবাইল নম্বর হিসাবে বিবেচিত হবে এবং অংশগ্রহণকারীর সাথে কুইজ-এর উদ্দেশ্যে পরবর্তী সকল যোগাযোগের জন্য ব্যবহার করা হবে। নিম্নে উল্লিখিত পদ্ধতিতে সকল সঠিক উত্তর জমা প্রদানের পরে, অংশগ্রহণকারী কুইজ-এর অধীনে বিজয়ী হিসাবে নির্বাচিত হওয়ার যোগ্যতা অর্জন করবেন। বাংলালিংক-এর গ্রাহক যারা MyBL App-এর বিদ্যমান ব্যবহারকারী, তারাও কুইজ-এ অংশগ্রহন করতে পারবেন।
            `,
            `
            টেলিভিশন (সংবাদ এবং অন্যান্য চ্যানেল), ফেসবুক, ইউটিউব, পয়েন্ট অফ সেল ম্যাটারিয়াল, ব্যানার, পোস্টারের মাধ্যমে প্রচার, গণ বিজ্ঞপ্তি, ওয়েবসাইট, ডিজিটাল মিডিয়াসহ অন্যান্য মিডিয়ার মাধ্যমে কুইজ-এর বিজ্ঞাপন ও প্রচার করা হবে। `,
            `
            কুইজটি বাংলাদেশের সকল প্রযোজ্য আইন ও প্রবিধান সাপেক্ষে পরিচালিত হবে।

            `,
            `
            কুইজ-এ অংশগ্রহণ করার মাধ্যমে, অংশগ্রহণকারী এখানে উল্লিখিত সকল শর্তাবলী ("শর্তাবলী") মেনে  চলার সম্মতি প্রদান করছেন । অংশগ্রহণকারী এতদ্বারা স্বীকার করছেন যে তিনি এসকল শর্তাবলী পড়েছেন  এবং বুঝেছেন এবং যথাযথভাবে শর্তাবলী মেনে চলার সম্মতি জ্ঞাপন করছেন।

            `,
            `
            এই শর্তাবলী www.banglalink.net (“কুইজ ওয়েবসাইট”) ওয়েবপেজ এবং MyBL App-এ প্রকাশিত থাকবে ।
            `,
          ],
        },
      ],
    },
    {
      
      title: `Banglalink and its Partners `,
      titleBn: ` 
      বাংলালিংক এবং ইহার অংশীদার 
      `,
      details: [
        {
          details: [
            `This Quiz is sponsored by Banglalink, having its registered office at Tigers’ Den, House 4 (SWH), Bir Uttam Mir Shawkat Sharak, Gulshan 1, Dhaka 1212, Bangladesh. 
            `,
            `
            Live Technologies (“BP”) shall manage the execution of the Quiz in MyBL App. .
            `,
            `
            A separate, 3rd party vendor will be fully and independently responsible for end to end management and execution of the Prize for the benefit of winning Participants, including all logistics related to the realization of the Prize. Banglalink has no role or responsibility in this regard, except for making payment to the vendor for the Prizes on behalf of winning Participants. 
            `,
          ],
        },
      ],
      detailsBn: [
        {
          details: [
            `এই কুইজটি বাংলালিংক স্পনসর করছে, যার নিবন্ধিত অফিস অবস্থিত টাইগার্স ডেন, বাড়ি নং ৪ (এস. ডাব্লউ. এইচ.), বীর উত্তম মীর শওকত সড়ক, গুলশান ১, ঢাকা ১২১২, বাংলাদেশ। 
            `,
            `
             লাইভ টেকনোলজিস লিমিটেড ("বিজনেজ পার্টনার") MyBL App-এ কুইজটি পরিচালনা করবে। 
            `,
            `
            একটি পৃথক তৃতীয় পক্ষ, পুরষ্কার সম্পর্কিত সমস্ত লজিস্টিক সহ পুরষ্কার প্রদান, পরিচালনা এবং সম্পাদনের জন্য সম্পূর্ণ এবং স্বাধীনভাবে দায়বদ্ধ থাকবে। বিজয়ী শগ্রহণকারীদের পুরস্কারের জন্য তৃতীয় পক্ষকে অর্থ প্রদান ছাড়া বাংলালিংক-এর এ ব্যাপারে কোন ভুমিকা অথবা দায়বদ্ধতা নেই। 
            
            `,
          ],
        },
      ],
    },
    {
      title: `Agreement to Terms
      and Conditions`,
      titleBn: `শর্তাবলী মেনে চলার সম্মতি  `,
      details: [
        {
          details: [
            `Entry and participation in this Quiz will be deemed as an unconditional and an unequivocal acceptance of these Terms, including any modifications, revisions and amendments thereto by Banglalink.`,
            ` Banglalink reserves the right at any time to modify or amend the Terms (or any part or content thereof) without notice at any time.
            `,
            `
            Banglalink shall not be liable to Participants or to any third-party for any modification of the Terms. 
            `,
            `
            The decisions of Banglalink shall be final and binding on the Participants in all matters related to the Quiz.
            `,
            `
            Further, the Participants recognize that these Terms may be modified by Banglalink from time to time without any prior/public notice by posting the applicable terms and conditions on the Quiz Website/MyBL App. 
            `,
            `
            Banglalink, at its sole discretion reserves the right to cancel, suspend or terminate the Quiz at any stage without prior notice and  without assigning any reasons whatsoever and without any liability (whether financial of otherwise). Banglalink further reserves the right to disqualify any Participant who tampers or attempts to tamper with the submission process or any other part of the Quiz. 
            `,
            `
            Successfully entering the Quiz and winning a Prize is subject to all Terms and requirements set forth herein.
            
            `
          ],
        },
      ],
      detailsBn: [
        {
          details: [
            `কুইজ-এ প্রবেশ এবং অংশগ্রহণের মাধ্যমে অংশগ্রহনকারী কুইজ-এর সকল শর্তাবলী এবং বাংলালিংক কর্তৃক উহার যেকোন সংশোধন, পরিবর্তন ও সংস্করণ শর্তহীন ও দ্ব্যর্থহীনভাবে মেনে চলার সম্মতি দিয়েছেন বলে গন্য হবে। বাংলালিংক যে কোন সময় কোন নোটিশ ছাড়াই শর্তাবলী (বা এর কোন অংশ বা বিষয়বস্তু) পরিবর্তন বা সংশোধন করার অধিকার সংরক্ষণ করে। 
            `,
            `
            শর্তাবলীর যে কোন পরিবর্তনের জন্য অংশগ্রহণকারী বা কোন তৃতীয় পক্ষের কাছে বাংলালিংক দায়বদ্ধ থাকবে না।             `,
            `
            কুইজ সংক্রান্ত সকল বিষয়ে বাংলালিংক-এর সিদ্ধান্ত চূড়ান্ত এবং অংশগ্রহণকারীদের জন্য তা বাধ্যতামূলক বলে বিবেচিত হবে।।              `,
            `
            অংশগ্রহণকারীগন  আরো স্বীকৃতি দেয় যে, এই সকল শর্তাবলী বাংলালিংক  যেকোন সময়ে কোন পূর্ব/গণ বিজ্ঞপ্তি ছাড়াই কুইজ ওয়েবসাইট/MyBL App-এ পোস্ট করার মাধ্যমে পরিবর্তন করতে পারে।              `,
            `
            বাংলালিংক তার নিজস্ব বিবেচনার ভিত্তিতে কোনও দায়বদ্ধতা (আর্থিক বা অন্যান্য)  ছাড়াই  কারণ উল্লেখ না করে পূর্ব বিজ্ঞপ্তি ব্যাতিত  যেকোন পর্যায়ে কুইজ বাতিল,স্থগিত বা পরিসমাপ্তির  অধিকার রাখে।              `,
            `
            যেসকল অংশগ্রহণকারী কুইজ-এর অংশগ্রহন প্রক্রিয়া অথবা অন্য কোন কিছুতে হস্তখেপ বা উহা নষ্ট করে বা করার চেষ্টা করে, বাংলালিংক তাদেরকে অযোগ্য ঘোষনা করারও অধিকার সংরক্ষণ করে।              
            `,
            `সফলভাবে কুইজ-এ অংশগ্রহণ এবং পুরস্কার জেতা এখানে উল্লিখিত সমস্ত নির্দেশনা সাপেক্ষে পরিচালিত হবে। `
          ],
        },
      ],
    },
    {
      title: `Quiz Period`,
      titleBn: ` 
      কুইজ-এর মেয়াদ `,
      details: [
        {
          details: [
            `The Quiz shall be conducted between 19th July, 2022 to 25th July, 2022 both days inclusive.
            `,
            `
            The valid timings for receiving entries are between 19th July, 2022 00.00 am to 25th July, 2022 11.59 pm (“Quiz Timings”)
            `,
            `
            Any entries received outside the Quiz Timings shall not be considered for the purpose of the Quiz. 
            `,
            `
            Only entries received during the Quiz Timings within the Quiz Period, shall be considered as per the Terms for the Prize.
            `,
          ],
        },
      ],
      detailsBn: [
        {
          details: [
            `
            কুইজটি ২৫ই জুলাই, ২০২২ হতে ৩১ই জুলাই, ২০২২ এর মধ্যে পরিচালিত হবে । 
            `,
            `
            এন্ট্রি গ্রহণের বৈধ সময় ২৫ই জুলাই, ২০২২  ০০.০০ ঘটিকা থেকে ৩১ই জুলাই, ২০২২ রাত ১১.৫৯ ঘটিকা ("কুইজ-এর সময়") কুইজ-এর সময়সীমার বাইরে প্রাপ্ত কোন এন্ট্রি কুইজ-এর মধ্যে বিবেচনা করা হবে না।             `,
            `
            শুধুমাত্র কুইজ চলাকালীন সময়ের মধ্যে কুইজ-এর প্রাপ্ত এন্ট্রি, পুরস্কারের শর্তাবলী অনুযাইয়ী বিবেচনা করা হবে।            
            `,
          ],
        },
      ],
    },
    {
      title: `Eligibility Criteria`,
      titleBn: ` 

      যোগ্যতার মানদন্ড `,
      details: [
        {
          details: [
            `Entry and participation in this Quiz is open to all subscribers of Banglalink who are currently residing in Bangladesh and who satisfy each of the following criteria:`,
          ],
        },
        {
          list: [
            `are over the age of 18 years;
            `,
            `not an insane person;
            `,
            `own a valid registered subscription with Banglalink;
            `,
            `have to be registered with MyBL App;
            `,
            `have not been arrested or convicted of any crime or been the subject of any criminal investigation;
            `,
            `bear a good moral character and have not been implicated or named in any legal proceedings (either civil or criminal); and
            `,
            `are not management, employees, directors or contractors, or the immediate family members of the management, employees, directors or contractors of Banglalink, BP, Genex Infosys Limited, and their related entities or other agencies, firms or companies, distributors retailers, RSOs;
            `,
            `is physically, mentally fit and/or does not have any physical disability, phobia, fear nor has any underlying health/heart condition and/or related conditions restricting such person from riding a helicopter.
            `
          ],
        },
        {
          details: [
            `Eligible Persons`,
            `For the sake of clarity, this Quiz is not open to Non-Resident Bangladeshi (NRIs), Overseas Citizens of Bangladesh (OCIs) and Persons of Bangladeshi Origin (PBOs) who are not residing in Bangladesh.
            `,
            `
            Eligible persons participating or seeking to participate in the Quiz shall individually be referred to as “Participant” and collectively as “Participants”.
            `,
            `
            By participating in this Quiz, the Participant agrees to receive details and information about this Quiz on his/her mobile, through SMS and/or voice calls, during the tenure of the Quiz.
            `,
          ],
        },
      ],
      detailsBn: [
        {
          details: [
            `
            বাংলালিংক-এর সকল গ্রাহক যারা বর্তমানে বাংলাদেশে বসবাস করছেন এবং যারা নিম্নলিখিত প্রতিটি মানদণ্ড পূরণ করেন তারা এই কুইজ-এ প্রবেশ ও অংশগ্রহণ করতে পারবেন: 
            `,
          ],
        },
        {
          list: [
            `যাদের বয়স ১৮ বছরের বেশি; 
            `,
            `উন্মাদ নয় এমন ব্যক্তি; 
            `,
            `যিনি বাংলালিংক-এর  একটি বৈধ নিবন্ধিত সাবস্ক্রিপশনের মালিক; 
            `,
            `MyBL App-এ নিবন্ধন থাকতে হবে; 
            `,
            `কোন অপরাধে গ্রেফতার বা দোষী সাব্যস্ত হননি বা যার বিরুদ্ধে কোন ফৌজদারি তদন্ত হয়নি এমন ব্যাক্তি; 
            `,
            `নৈতিক চরিত্রের অধিকারী এবং কোন আইনি প্রক্রিয়ায় (দেওয়ানি বা ফৌজদারি)    জড়িত বা নামকরণ করা হয়নি এমন ব্যাক্তি; 
            `,
            `বাংলালিংক, বিজনেজ পার্টনার, জেনেক্স ইনফোসিস লিমিটেড-এর ব্যবস্থাপনা সদস্য, কর্মচারী, পরিচালক অথবা ব্যবস্থাপনা সদস্য, কর্মচারী, পরিচালকগনের আশু পরিবারের সদস্য এবং বাংলালিংক নিয়োগকৃত ডিস্ট্রিবিউটর, খুচরা বিক্রেতা, আরএসও অযোগ্য বলে বিবেচিত হবে; 
            `,
            `যিনি শারিরীক ও মানসিকভাবে সুস্থ এবং/অথবা যার কোন শারিরীক অক্ষমতা, ফবিয়া, ভয় বা স্বস্থ্যগত বা হৃদরোগের ঝুকি নাই যাহা কিনা তরুপ ব্যক্তিকে হেলিকপ্টারে চড়তে বারন করে। 
            `
          ],
        },
        {
          details: [
            `যোগ্য ব্যক্তি `,
            `কুইজ-এর স্বছতা অব্যাহত রাখার জন্য, এই কুইজটি অনাবাসিক বাংলাদেশি (এনআরআই), বাংলাদেশের প্রবাসী নাগরিক (ওসিআই) এবং বাংলাদেশে বসবাসকারী নয় এমন বাংলাদেশি বংশোদ্ভূত ব্যক্তিদের (পিবিও) জন্য উন্মুক্ত নয়। 
            `,
            `
            কুইজ-এ অংশগ্রহণকারী বা অংশগ্রহণ করতে চাওয়া যোগ্য ব্যক্তিদের পৃথকভাবে "অংশগ্রহণকারী" এবং সম্মিলিতভাবে "অংশগ্রহণকারীগণ" হিসাবে উল্লেখ করা হবে। 
            `,
            `
            এই কুইজ-এ অংশগ্রহণ করার মাধ্যমে, অংশগ্রহণকারী কুইজ চলাকালীন সময়ে তার মোবাইলে এসএমএস অথবা ভয়েস কলের মাধ্যমে এই কুইজ সম্পর্কে বিস্তারিত তথ্য পেতে সম্মতি জ্ঞাপন করছেন। 
            `,
          ],
        },
      ],
    },

    {
      title: `How to enter and participate in the Quiz`,
      titleBn: ` 

      কিভাবে কুইজ-এ প্রবেশ ও অংশগ্রহন করবেন `,
      details: [
        {
          details: [
            `Participants wishing to enter the Quiz may do so through the following route:`,
          ],
        },
        {
          list:[
            `Participants are required to first be registered with MyBL App;
            `,
            `Registered MyBL App users shall receive a pop-up asking confirmation for participation in the Quiz ;
            `,
            `Upon agreeing to these Terms by selecting “Yes”, the Participant would be taken to the Quiz registration page where the Participant will enter personal details including name, gender and mobile number and click “Submit”. 
            `,
            `Upon clicking “Submit”, an OTP will be generated and sent to the Participant’s shared mobile number. 
            `,
            `Thereafter, upon successful entry of the OTP, the Q/A page will appear. 
            `,
            `The Participant shall be asked 5 (five) multiple choice questions (“Quiz Questions”) relating to Padma Bridge. 
            `,
            `After answering all the Quiz Questions, the Participant shall have to press “Finish” button to submit the answers to the Quiz Questions to Banglalink.
            `,
            `Upon pressing the “Finish” button answers to the Quiz Questions shall be submitted and a pop-up would appear with the message “Your answers have been submitted. Thank you for participating the quiz contest. Winners will be notified via SMS”.
            `,
            `Winners will be selected following the terms set in clause 7 of these Terms. 
            
            `
          ]
        }
      ],
      detailsBn: [
        {
          details: [
            `কুইজ-এ প্রবেশ করতে ইচ্ছুক অংশগ্রহণকারীগণ নিম্নলিখিত পদ্ধতি অনুসরন করবেন: `,
          ],
        },
        {
          list:[
            ` অংশগ্রহণকারীদের প্রথমে MyBL App-এ নিবন্ধন করতে হবে; 
            `,
            `নিবন্ধিত MyBL App ব্যবহারকারীর কুইজ-এ অংশগ্রহণ  নিশ্চিতকরণের জন্য  একটি পপ-আপ পাবেন;
            `,
            `এই শর্তাবলীতে "হ্যাঁ" নির্বাচন করে সম্মত হওয়ার পরে, অংশগ্রহণকারী কুইজ নিবন্ধন পৃষ্ঠায়  চলে যাবেন যেখানে অংশগ্রহণকারী তার নাম, লিঙ্গ এবং মোবাইল নম্বর সহ ব্যক্তিগত তথ্য ইনপুট দিবেন এবং "সাবমিট" –এ ক্লিক করুণ।  
            `,
            `" সাবমিট"-এ ক্লিক করার পরে, একটি ওটিপি তৈরি হবে এবং অংশগ্রহণকারীর প্রদান করা মোবাইল নম্বরে পাঠানো হবে।  
            `,
            `সফলভাবে ওটিপি প্রবেশের পরে প্রতিযোগিতা শুরুর পৃষ্ঠাটি উপস্থাপিত হবে। 
            `,
            `অংশগ্রহণকারীকে পদ্মা সেতু সম্পর্কিত ৫(পাঁচ)টি বহুনির্বাচনী  প্রশ্ন ("কুইজ প্রশ্ন") জিজ্ঞাসা করা হবে। 
            `,
            `সমস্ত কুইজ-এর প্রশ্নের উত্তর দেওয়ার পর, বাংলালিংক-এর কাছে জমা দেওয়ার জন্য “Finish”-এ  ক্লিক করতে হবে। 
            `,
            `“Finish”-এ ক্লিক করে কুইজ-এর প্রশ্নের উত্তর জমা দেওয়ার পর  "আপনার কুইজ-এর  উত্তর জমা দেওয়া হয়েছে। কুইজ প্রতিযোগিতায় অংশগ্রহণ করার জন্য আপনাকে ধন্যবাদ। বিজয়ীদের SMS এর মাধ্যমে জানানো হবে” –এরকম বার্তা সহ একটি পপ-আপ প্রদর্শিত হবে ৷  
            `,
            `এই শর্তাবলীর ৭ ধারা অনুসরণ করে বিজয়ীদের নির্বাচন করা হবে। 
            `
          ]
        }
      ],
    },

    {
      title: `Prizes and Winners`,
      titleBn: ` 

      পুরস্কার ও বিজয়ী `,
      details: [
        {
          details: [
            `10 (ten) Participants will be eligible to receive the Prize subject to the Terms detailed herein. 
            `,
            `
            The Prize
            `,
            `Top 10 (ten) Participants who correctly and successfully answers all the Quiz Questions and submit the same within the shortest possible time within the Quiz Timings in accordance with these Terms, shall each be awarded a helicopter ride over the Padma river to get an aerial view of the Padma bridge. Details of the helicopter ride including the itinerary, boarding point and duration etc will be shared with the winning Participant at a later time. The day, date, time, duration of the helicopter ride will be set by Banglalink at its sole discretion. 
            `,
            `
            Total number of Prizes shall be 10 (ten).
            
            `
          ],
        },
      ],
      detailsBn: [
        {
          details: [
            `এখানে উল্লিখিত শর্তাবলী সাপেক্ষে ১০ (দশ) জন অংশগ্রহণকারী পুরস্কার পাওয়ার যোগ্য হবে।  
            `,
            `
            পুরস্কার
            `,
            ` শীর্ষ দশ জন অংশগ্রহণকারী যারা এই শর্তাবলী অনুসারে কুইজ-এর নির্ধারিত  সময়ের মধ্যে সবচেয়ে কম সময়ে কুইজ-এর   সমস্ত  প্রশ্নের সঠিক উত্তর সফল্ভাবে জমা দিবে তারা প্রত্যেকে পদ্মা সেতুর মনোরম দৃশ্য দেখতে পদ্মা নদীর উপর হেলিকপ্টার রাইড জিতবেন। ভ্রমণপথ, বোর্ডিং পয়েন্ট এবং সময়কাল ইত্যাদি সহ হেলিকপ্টার যাত্রার  বিস্তারিত বিবরণ পরবর্তিতে বিজয়ীদের জানানো হবে । হেলিকপ্টার যাত্রার দিন, তারিখ, সময়, সময়কাল বাংলালিংক-এর নিজস্ব বিবেচনার ভিত্তিতে নির্ধারণ করা হবে। 
            `,
            `
            মোট পুরস্কারের সংখ্যা হবে ১০ (দশ)টি। 
            
            `
          ],
        },
      ],
    },

    {
      title: `Selecting and
      Contacting Winners and Tie
      `,
      titleBn: ` 

      বাছাইকরণ, বিজয়ীদের সাথে যোগাযগ এবং সমতা  
      `,
      details: [
        {
          details: [
            `Top 10 (ten) Participants who have correctly and successfully answered all the Quiz Questions within the shortest possible time within the Quiz Timings in accordance with these Terms shall be selected as the winners ("Winners”). Each Winner shall be eligible to win a single Prize, subject to these Terms.`,
            `Tie`,
          ],
        },
        {
          list: [
            `In the event of a tie, the Participant who has registered with MyBL App first shall be the tie Winner;
            `,
            `If the tie cannot be resolved by the above method, then final Winner will be selected based on the duration of the period for which the Participant is registered as a subscriber of Banglalink. The Participant with the longest duration of registration as subscriber of Banglalink shall be the Winner.
            `
          ]
        },
        {
          details: [
            `Notification`,
            `The Winners will be notified via SMS or any chosen modality preferred by Banglalink.
            `,
          ],
        },
      ],
      detailsBn: [
        {
          details: [
            `শীর্ষ দশ জন অংশগ্রহণকারী যারা এই শর্তাবলী অনুসারে কুইজ-এর নির্ধারিত  সময়ের মধ্যে সবচেয়ে কম সময়ে কুইজ-এর   সমস্ত  প্রশ্নের উত্তর সঠিক ও সফল্ভাবে দিতে পারবে তারা বিজয়ী নির্বাচিত করা হবে এবং প্রত্যেক বিজয়ী এই শর্তাবলী সাপেক্ষে একটি একক পুরস্কার জেতার যোগ্য বলে বিবেচিত হবেন। `,
            `সমতা`,
          ],
        },
        {
          list: [
            `সমতার ক্ষেত্রে, যে অংশগ্রহণকারী প্রথমে MyBL App-এ নিবন্ধন করেছেন তিনি  বিজয়ী হবেন;
            `,
            `যদি উপরের পদ্ধতিতে সমতা সমাধান করা না যায়, তাহলে চূড়ান্ত বিজয়ী নির্বাচন করা হবে যে সময়ের জন্য অংশগ্রহণকারী বাংলালিংক-এর গ্রাহক হিসাবে নিবন্ধিত হয়েছে তার সময়কালের উপর ভিত্তি করে।  বাংলালিংক-এর গ্রাহক হিসেবে নিবন্ধনকৃত দীর্ঘতম মেয়াদের অংশগ্রহণকারী বিজয়ী হবেন। 
            `
          ]
        },
        {
          details: [
            `নোটিফিকাশন `,
            `বিজয়ীদের এসএমএস বা বাংলালিংক দ্বারা নির্বাচিত যে কোন পদ্ধতির মাধ্যমে অবহিত করা হবে। 
            `,
          ],
        },
      ],
    },

    {
      title: `Conditions relating to the Prize`,
      titleBn: ` 
      পুরস্কার সংক্রান্ত শর্তাবলী `,
      details: [
        {
          details: [
            `The Winner(s) shall not exchange, substitute or assign the Prizes, and shall not be entitled to any compensation whether in cash or kind from Banglalink and/or its agents in lieu of the Prize or in the event the Prize cannot be provided or is delayed for any reason whatsoever.
            `,
            `
            The names and images of the confirmed Winners may at the sole discretion of Banglalink be announced on the Quiz Website and/or MyBL App or in any manner deemed appropriate by Banglalink during or after the Quiz Period, once the Winners have been confirmed and verified.
            `,
            `
            No portion of the Prizes offered under the Quiz is redeemable for cash. The Prizes are also not refundable or transferable.
            `,
            `
            Banglalink and/or its agents shall not be liable for default, delay, suspension or cancellation of delivery of Prizes due to incorrect personal details provided by the Winner. Banglalink reserves the right to request each Winner to provide proof of their identity and/or proof that they were responsible for the winning entry. 
            `,
            `
            Prizes cannot be transferred or substituted by the Winner. If a Prize is unclaimed within a reasonable time after notification from Banglalink, as determined by Banglalink in its sole discretion, it will be forfeited, and time permitting, an alternate Winner may be selected from the remaining eligible Participants at Banglalink’s sole discretion.
            `,
            `
            If a Winner fails to appear in person or on time to the location of the helicopter ride as set and informed by Banglalink, in such an event the Prize shall be considered forfeited by the said Winner, and if time permits, an alternate Winner may be selected from the remaining eligible Participants at Banglalink’s sole discretion.
            `,
            `
            It shall be the sole responsibility of the Participants to notify Banglalink of any pre-existing medical and/or health conditions which may affect their fitness to fly. The Prize shall be considered forfeited by the Winner, in the event the Winner is physically, mentally unfit and/or have physically disability, phobia, fear or has and underlying health/heart condition and/or related condition barring the Winner to take the helicopter ride and shall relinquish Banglalink and/or its agents, contractors from any and all liabilities.  
            `,
            `
            Banglalink shall not be responsible for the death, personal injury and damage to property, whether direct, indirect, consequential, foreseeable arising due to the failure or omission of the Participant and/or Winner to notify Banglalink of any pre-exiting health and medical conditions. 
            `,
          ],
        }
      ],
      detailsBn: [
        {
          details: [
            `বিজয়ী(রা) পুরস্কার বিনিময়, বিকল্প বা অন্য ব্যক্তিকে বরাদ্দ করতে পারবেন না এবং বাংলালিংক বা এর এজেন্টদের কাছ থেকে পুরষ্কারের পরিবর্তে বা ইভেন্টে পুরষ্কার প্রদান করতে ব্যার্থ বা কোনও কারণে বিলম্বিত হলে, নগদ বা কোন প্রকারের ক্ষতিপূরণ পাওয়ার অধিকারী হবেন না।  
            `,
            `
            বিজয়ীদের নাম এবং ছবি  নিশ্চিত ও যাচাই করা হয়ে গেলে তাদের নাম এবং ছবি কুইজ সময়কালে বা তার পরে বাংলালিংক-এর একান্ত বিবেচনার ভিত্তিতে কুইজ ওয়েবসাইট অথবা MyBL App যা বাংলালিংক উপযুক্ত মনে করে সেখান থেকে ঘোষনা করা যেতে পারে।             `,
            `
            কুইজ-এর অধীনে প্রদত্ত পুরষ্কারগুলির কোনও অংশ নগদ অর্থের জন্য পুনরুদ্ধারযোগ্য নয়। পুরস্কারগুলি ফেরতযোগ্য বা হস্তান্তরযোগ্য নয়।             `,
            `
            ব্যক্তিগত বিবরণে ভূল তথ্য দেয়ার কারণে বিজয়ীর পুরস্কার বিতরণে ত্রুটি বা বিলম্ব, সাময়িক বরখাস্ত বা বাতিলকরনের জন্য বাংলালিংক এবং/অথবা এর এজেন্টরা দায়ী থাকবে না।             `,
            `
            প্রত্যেক বিজয়ীকে তাদের পরিচয়ের প্রমাণ এবং/অথবা  তাদের বিজয়ী এন্ট্রির প্রমাণ প্রদানের জন্য বাংলালিংক অনুরোধ করতে পারবে।             `,
            `
            বিজয়ী তার পুরষ্কার বিকল্প বা হস্তান্তর করতে পারবে  না। বাংলালিংক-এর বিজ্ঞপ্তি প্রকাশের পর যুক্তিসঙ্গত সময়ের মধ্যে যদি কোন পুরস্কার দাবিহীন অবস্থায় থাকে তাহলে বাংলালিংক-এর নিজস্ব বিবেচনার ভিত্তিতে পুরষ্কারটি বাজেয়াপ্ত করা হবে এবং যদি সময় থাকে, অবশিষ্ট যোগ্য অংশগ্রহণকারীদের মধ্য থেকে একজন বিকল্প বিজয়ী নির্বাচন করা হতে পারে।             `,
            `
            পূর্ব-বিদ্যমান মেডিক্যাল এবং/অথবা স্বাস্থ্যগত অবস্থা  যা অংশগ্রহণকারীদের উড্ডয়নের ফিটনেসকে প্রভাবিত করতে পারে এমন বিষয়ে বাংলালিংক-কে জানানো অংশগ্রহণকারী একান্ত  দায়িত্ব। যদি কোন বিজয়ী বাংলালিংক কর্তৃক অবহিত করা  সময়ে হেলিকপ্টার যাত্রার স্থানে উপস্থিত হতে ব্যর্থ হন  তবে পুরস্কারটি বাজেয়াপ্ত বলে বিবেচিত হবে এবং সময়সাপেক্ষ্যে বাংলালিংক-এর  নিজস্ব বিবেচনার ভিত্তিতে অবশিষ্ট যোগ্য অংশগ্রহণকারীদের মধ্য থেকে একজন বিকল্প বিজয়ী নির্বাচন করা যেতে পারে। বিজয়ী যদি শারীরিক, মানসিকভাবে অযোগ্য, শারীরিকভাবে অক্ষম, ফোবিয়া, ভয়,  স্বাস্থ্য/হার্টের  দূরাবস্থা এবং/অথবা এরকম কোন অবস্থা যা বিজয়ীকে হেলিকপ্টার যাত্রায় যেতে বাধা প্রদান করে সেক্ষেত্রে  পুরস্কারটি উক্ত বিজয়ী কর্তৃক বাজেয়াপ্ত বলে বিবেচিত হবে এবং বাংলালিংক এবং/অথবা তার এজেন্টের  এ ব্যাপারে কোন দায়বদ্ধতা থাকবে না।             `,
            `
            অংশগ্রহণকারী এবং/অথবা বিজয়ী তার পূর্বের  স্বাস্থাবস্থা বাংলালিংকে না জানানোর পরিপ্রেক্ষিতে প্রত্যক্ষ, পরোক্ষ বা এর ফলস্বরূপ  মৃত্যু, আহত হওয়া এবং সম্পত্তির যেকোন ক্ষতির জন্য বাংলালিংক দায়ী থাকবে না।             `,
          ],
        }
      ],
    },
    {
      title: `Publicity`,
      titleBn: ` 

      প্রচার `,
      details: [
        {
          details: [
            `The Participants undertake and irrevocably and unconditionally permit Banglalink to cover the Quiz, the Winners and the Prizes through various media including newspapers, radio, digital media, television including news and other channels, internet, point of sale materials, etc., and shall not raise any objection, protest or demur whatsoever to such coverage or in this regard.
            `,
            `
            Whilst Banglalink shall make all reasonable efforts, there is no obligation on the part of Banglalink to air any entry.
            `,
            `
            The Winners must, at the request of Banglalink, participate in all promotional activity (such as publicity and photography) surrounding the winning of the Prize, free of charge, and they consent to Banglalink using their name and image in all promotional materials.
            `,
          ],
        }
      ],
      detailsBn: [
        {
          details: [
            `অনিবার্য এবং নিঃশর্তভাবে অংশগ্রহণকারীগণ প্রতিশ্রুতি দেয় যে বাংলালিংক- সংবাদপত্র, রেডিও, ডিজিটাল মিডিয়া, টেলিভিশন সহ সংবাদ এবং অন্যান্য চ্যানেল, ইন্টারনেট, বিক্রয়ের পয়েন্ট ইত্যাদি সহ বিভিন্ন মাধ্যমে কুইজ, বিজয়ী এবং পুরষ্কার  প্রচারনা করতে পারবে এবং এই ধরনের কভারেজ বা এই বিষয়ে যাই হোক না কেন কোন আপত্তি, প্রতিবাদ  উত্থাপন করবেন না।  
            `,
            `
            যদিও বাংলালিংক সমস্ত যুক্তিসঙ্গত প্রচেষ্টা চালাবে কিন্তু  কোন এন্ট্রি সম্প্রচার করার ক্ষেত্রে বাংলালিংক-এর  কোন বাধ্যবাধকতা নেই।             `,
            `
            বাংলালিংক-এর অনুরোধে  বিজয়ীদের অবশ্যই, পুরস্কার জয় এবং অন্যান্য প্রচারমূলক কার্যকলাপে (যেমন প্রচার এবং ফটোগ্রাফি) বিনামূল্যে  অংশগ্রহণ করতে হবে, , এবং তারা সমস্ত প্রচারমূলক সামগ্রীতে তাদের নাম এবং ছবি ব্যবহার করতে বাংলালিংকে সম্মতি দিচ্ছে।             `,
          ],
        }
      ],
    },
    {
      title: `Intellectual Property Rights`,
      titleBn: ` 
      মেধাস্বতাধাকার `,
      details: [
        {
          details: [
            `All right, title and interest, including but not limited to the intellectual property rights, in the promotional material(s) and in any and all responses received in relation to the Quiz shall vest solely and exclusively with Banglalink at all times. Banglalink or any person or entity directly permitted by Banglalink in this regard shall be entitled to use any information in connection with the entry in any media for future promotional, marketing, publicity and any other purpose, without any permission and or payment to the Participant.
            `,
            `
            All materials, information and documents submitted in connection with the Quiz (whether written, audio, electronic or visual form, or a combination of those) or any photographs, video and/or film footage and/or audio recording taken of Participants are assigned to Banglalink upon submission and become the property of Banglalink exclusively. Banglalink may use the material in any medium in any reasonable manner it sees fit at any time. Copyright in any such material remains the sole property of Banglalink indefinitely.
            `,
          ],
        }
      ],
      detailsBn: [
        {
          details: [
            `প্রচারমূলক উপাদানের(গুলি) বুদ্ধিবৃত্তিক সম্পত্তিসহ সমস্ত অধিকার, স্বত্ব এবং স্বর্থ এককভাবে এবং কেবলমাত্র বাংলালিংক-এর  কাছে সর্বদা ন্যস্ত থাকবে। বাংলালিংক বা বাংলালিংক কর্তৃক অনুমোদিত যেকোন ব্যক্তি বা সত্তা, কুইজ-এর  এন্ট্রির সময় অংশগ্রহণকারীর উল্লিখিত তথ্য  ভবিষ্যতে প্রচার, বিপণন বা অন্য কোন উদ্দেশ্যে অংশগ্রহণকারীকে অর্থ প্রদান বা তার অনুমতি ছাড়াই ব্যবহার করার অধিকারী হবে।  
            `,
            `
            কুইজ-এর সাথে জমা দেওয়া সমস্ত ম্যাটারিয়াল, তথ্য এবং কাগজপত্র (লিখিত, অডিও, ইলেকট্রনিক বা ভিজ্যুয়াল ফর্ম, বা সেগুলির সংমিশ্রণ হোক) বা অংশগ্রহণকারীদের তোলা কোনও ফটোগ্রাফ, ভিডিও এবং/অথবা ফিল্ম ফুটেজ এবং/অথবা অডিও রেকর্ডিং জমা দেওয়ার পরে কেবলমাত্র বাংলালিংক-এর সম্পত্তি হিসেবে বিবেচিত হবে। বাংলালিংক উপযুক্ত মনে করে এমন  যেকোন যুক্তিসঙ্গত উপায়ে যে কোন মাধ্যমে যেকোন সময় তা ব্যবহার করতে পারবে। অনির্দিষ্টকালের জন্য এই ধরনের যেকোন উপাদানের কপিরাইট একমাত্র বাংলালিংক-এর।             `,
          ],
        }
      ],
    },
    {
      title: `General Conditions`,
      titleBn: ` 
      সাধারণ শর্তাবলী `,
      details: [
        {
          list: [
            `Each Participant represents and warrants that he/she is legally competent to enter into binding contracts under applicable laws of Bangladesh. By taking part and/or entering this Quiz the Participant warrants that all information provided by him/her regarding his/her name, age, state, city, address, phone number, etc., is true, correct, accurate and complete.
            `,
            `
            Each Participant is required to provide full and accurate details of his/her name, permanent address, phone number, age and such other details as may be prescribed by Banglalink. It shall be the responsibility of each Participant to notify Banglalink of any change to their contact and/or personal details. 
            `,
            `
            Banglalink may, at any time, verify or authorize verification of the Participant’s entry (including such Participant’s identity, age, place of residence and affiliations) and disqualify any Participant (at any stage of the Quiz) if it is found that such Participant has submitted an entry, information or any documents that is inconsistent with these Terms.
            `,
            `
            Banglalink may, disqualify any Participant if such Participant engages in or it is found that such Participant has engaged in any illegal, unlawful, fraudulent, misrepresentation, deceptive or improper conduct (with regard to the Quiz or otherwise).
            `,
            `
            The decision of Banglalink as regards the selection of valid entries, Winners, promotion question is final. No correspondence or any other claims whatsoever, from any Participants and/or third parties, in this regard will be entertained. The Prizes cannot be exchanged or substituted and are not transferable or refundable. Further, the Prizes are not redeemable for cash or any monetary benefits in kind.
            `,
            `
            Banglalink reserves the right at its sole discretion to cancel, terminate, postpone, modify or suspend the Quiz in whole or in part at any time including if, for any reason, the Quiz is not capable of running as planned, including due to any technical failure, regulatory reasons or any other causes beyond the reasonable control of Banglalink. In such cases, Banglalink will not be liable for any consequential losses/damages arising due to such cancellation, termination, suspension or modification. All Winners and/or Participants agree that no claims or complaints shall be raised against Banglalink or any of their affiliates, representatives, associates etc. in this respect. Any decision of Banglalink in this regard and in general with respect to this Quiz and the Terms thereto shall be final, binding and non-contestable.
            `,
            `
            Banglalink accepts no responsibility for system errors or any other issues that may result in disruption to, lost, delayed or not received entries, Winner notifications or Prizes.
            `,
            `
            Banglalink further reserves the right to modify or cancel the Prizes offered under this Quiz, at its sole and absolute discretion. The Winners and/or the Participants agree that no claims or complaints whatsoever may be raised against Banglalink or any of their affiliates, representatives, associates, etc., in this respect.
            `,
            `
            Participants shall follow all directions/rules and regulations (whether communicated in written form or verbally) framed by Banglalink at all times in connection with the Quiz. Any deviation or objection by any Participant(s) may result in their disqualification from the Quiz.
            `,
            `
            The Participant(s) hereby undertake to provide and/or execute any documents as may be deemed necessary by Banglalink and/or BP to effectively carry out its obligations under the Quiz and/or these Terms.
            `,
            `
            Management, employees, directors or contractors, or the immediate family members of the management, employees, directors or contractors of Banglalink, BP, Genex Infosys Limited, and their related entities or other agencies, firms or companies, distributors, retailers, RSOs are not eligible to participate in the Quiz.
            `,
            `
            Nothing contained herein amounts to a commitment or representation by Banglalink to conduct further promotions.
             
            The decision of Banglalink shall be final in all regards and no communication shall be entertained in this regard. None of the provisions of these Terms shall be deemed to constitute a partnership or agency between any Participant and Banglalink and the Participant shall not have the authority to bind Banglalink in any manner whatsoever.
            `,
            `
            Banglalink, BP and other agents of Banglalink shall not be liable to perform any of their respective obligations under the Quiz or in respect of the Prizes where they are unable to do so as a result of circumstances beyond their reasonable control in the nature of fire, explosions, natural calamities, state emergency, riots, government restrictions or any other force majeure condition, etc., and shall not be liable to compensate the Winners or the Participants in any manner in these circumstances.
            `,
            `
            Failure to exercise or delay in exercising a right or remedy provided hereunder or by law does not constitute a waiver of the right or remedy or waiver of other rights or remedies on the part of Banglalink.
            `,
            `
            Winners and Participants undertake not to, at any time, disclose, reveal, communicate or otherwise make public any information relating to Banglalink, their respective  business, personnel, servants, agents or officers to anyone.
            `,
            `
            Banglalink accepts no responsibility for dropped calls, late, lost, incomplete, incorrectly submitted, delayed, illegible, corrupted or misdirected entries, communication, documents, claims or correspondence whether due to error, omission, alteration, tampering, unauthorized data hacking, deletion, theft, destruction, virus attack, transmission interruption, communications failure, software failure, hardware failure or otherwise. Banglalink shall not liable for any consequences of user error including (without limitation) costs incurred. 
            `,
            `
            If a Participant is dissatisfied with the Quiz or the Quiz Terms, his/her sole and exclusive remedy is to not participate in the Quiz.
            `,
            `
            The general terms and conditions and privacy policy on the Quiz Website/MyBL App shall be applicable in addition to these Terms.
            `,
            `
            These Terms may be altered by Banglalink at its sole and absolute discretion and without any prior notice to the Winners and/or Participants.
            `,
            `
            Banglalink may withdraw the Prize entitlement where there are reasonable grounds to believe there has been a breach of any these Terms.
            `,
            `
            If any of these clauses should be determined to be illegal, invalid or otherwise unenforceable then it shall be severed and deleted from these Terms and the remaining clauses shall survive and remain in full force and effect.
            `,
            `
            The original text of these Terms shall be in English and there may be translation in Bangla of these Terms. In the event of any conflict between English and Bangla text, English text shall prevail.
            `,
          ],
        }
      ],
      detailsBn: [
        {
          list: [
            `প্রত্যেক অংশগ্রহণকারী স্বীকার করে এবং ওয়ারেন্টি দেয় যে তিনি বাংলাদেশে প্রযোজ্য আইনের অধীনে চুক্তিতে প্রবেশ করতে সক্ষম। এই কুইজ-এ অংশ নেওয়া এবং/অথবা প্রবেশ করার মাধ্যমে অংশগ্রহণকারী নিশ্চিত করে যে তার নাম, বয়স, শহর, ঠিকানা, ফোন নম্বর ইত্যাদি সম্পর্কিত সমস্ত তথ্য সত্য, সঠিক, নির্ভুল এবং সম্পূর্ণ। 
            `,
            `
            প্রত্যেক অংশগ্রহণকারীকে তার সঠিক ও সম্পূর্ন নাম, স্থায়ী ঠিকানা, ফোন নম্বর, বয়স এবং বাংলালিংক কর্তৃক নির্ধারিত এমন অন্য কোন তথ্যের বিস্তারিত দিতে হবে। অংশগ্রহণকারীদের  যোগাযোগ এবং/অথবা ব্যক্তিগত তথ্যে যে কোন পরিবর্তন সম্পর্কে বাংলালিংককে  অবহিত করা  প্রত্যেক অংশগ্রহণকারীর দায়িত্ব।             `,
            `
            বাংলালিংক, যেকোন সময়ে, অংশগ্রহণকারীর তথ্য (যেমন অংশগ্রহণকারীর পরিচয়, বয়স, বসবাসের স্থান এবং অধিভুক্তি সহ) যাচাই করতে পারে অথবা যাচাই করার অনুমদন দিতে পারে এবং যদি দেখা যায় অংশগ্রহণকারী একটি এন্ট্রি, তথ্য বা কোন নথিপত্র জমা দিয়েছেন যা এই শর্তাবলীর সাথে অসামঞ্জস্যপূর্ণ তাহলে সেই অংশগ্রহণকারীকে (কুইজ-এর যেকোন পর্যায়ে) অযোগ্য ঘোষণা করতে পারে                `,
            `
            যদি কোন  অংশগ্রহণকারী অবৈধ, বেআইনি প্রতারণামূলক বা অনুপযুক্ত আচরণে (কুইজ বা অন্যথায়) জড়িত থাকে তাহলে বাংলালিংক সেই অংশগ্রহণকারীকে অযোগ্য ঘোষণা করতে পারে।             `,
            `
            বিজয়ী এবং বৈধ এন্ট্রি  নির্বাচনের ক্ষেত্রে বাংলালিংক-এর সিদ্ধান্তই চূড়ান্ত। এ ব্যাপারে অংশগ্রহণকারী বা তৃতীয় পক্ষের কোন অভিযোগ গ্রহন করা হবে না। পুরস্কার বিনিময়, হস্তান্তরযোগ্য বা ফেরতযোগ্য নয়। এছাড়া পুরস্কারটি নগদ বা অন্য কোন আর্থিক সুবিধার  মাধ্যমে রিডিমেবল নয়।             `,
            `
            যে কোন প্রযুক্তিগত ব্যর্থতা, নিয়ন্ত্রকের কারণে বা বাংলালিংক-এর যুক্তিসঙ্গত নিয়ন্ত্রণের বাইরে অন্য কোন কারণে, কুইজটি পরিকল্পনা অনুযায়ী পরিচালন সক্ষম না হয় তাহলে বাংলালিংক তার নিজস্ব বিবেচনার ভিত্তিতে সম্পূর্ণ বা আংশিকভাবে কুইজটি বাতিল, সমাপ্ত, পরিবর্তন বা স্থগিত করার সম্পূর্ণরূপে অধিকার রাখে। এক্ষেত্রে এরূপ বাতিলকরণ, সমাপ্তি, সাসপেনশন বা পরিবর্তনের ফলস্বরূপ কোন ক্ষতির জন্য বাংলালিংক দায়ী থাকবে না। এই বিষয়ে বাংলালিংক বা ইহার কোন সহযোগী, প্রতিনিধি, সহকারী ইত্যাদির বিরুদ্ধে কোন দাবি বা অভিযোগ উত্থাপন করা যাবে না এই মর্মে সকল বিজয়ী এবং/অথবা অংশগ্রহণকারীরা সম্মত হন। এ ব্যাপারে  এবং সাধারণভাবে এই কুইজ-এর শর্তাবলীর সকল বিষয়ে বাংলালিংক-এর যেকোন সিদ্ধান্ত চূড়ান্ত, বাধ্যতামূলক এবং অ-প্রতিদ্বন্দ্বিতাযোগ্য (non-contestable) হবে।             `,
            `
            সিস্টেম ত্রুটি বা অন্য কোন সমস্যার জন্য এন্ট্রি, বিজয়ী বিজ্ঞপ্তি বা পুরষ্কারে বিঘ্ন ঘটা, হারিয়ে যাওয়া বা বিলম্ব হওয়ার ক্ষেত্রে  বাংলালিংক-এর কোন দায়বদ্ধতা থাকবে না।             `,
            `
            বাংলালিংক তার একক এবং সম্পূর্ণ বিবেচনার ভিত্তিতে এই কুইজ-এর অধীনে প্রদত্ত পুরস্কারগুলি পরিবর্তন বা বাতিল করার অধিকার সংরক্ষণ করে। বিজয়ীরা অথবা অংশগ্রহণকারীরা সম্মত হন যে এই বিষয়ে বাংলালিংক বা ইহার কোন সহযোগী, প্রতিনিধি, সহকারী, ইত্যাদির বিরুদ্ধে কোন দাবি বা অভিযোগ উত্থাপন করা যাবে না।             `,
            `
            অংশগ্রহণকারীরা কুইজ-এর সাথে সম্পর্কিত বাংলালিংক দ্বারা প্রণীত সমস্ত নির্দেশাবলী/নিয়ম এবং প্রবিধান (তা লিখিত আকারে বা মৌখিকভাবে যোগাযোগ করা হোক না কেন) অনুসরণ করবে। এ ব্যাপারে কোন ব্যত্যয় বা আপত্তি অংশগ্রহণকারীর(দের)  কুইজ থেকে অযোগ্যতার কারণ হতে পারে।             `,
            `
            কুইজ-এর শর্তাবলী কার্যকরভাবে সম্পাদনের ক্ষেত্রে বাংলালিংক এবং/অথবা বিজনেজ পার্টনার দ্বারা প্রয়োজনীয় বলে মনে করা হয় এমন সকল ডকুমেন্ট  অংশগ্রহণকারী  প্রদান বা সম্পাদন  করতে বাধ্য থাকবেন।             `,
            `
            বাংলালিংক, বিজনেজ পার্টনার, জেনেক্স ইনফোসিস লিমিটেড-এর ব্যবস্থাপনা সদস্য, কর্মচারী, পরিচালক বা ঠিকাদার এবং তাদের আশু পরিবারের সদস্য এবং তাদের সংশ্লিষ্ট সংস্থা বা অন্যান্য সংস্থা, ফার্ম বা কোম্পানি, পরিবেশক, খুচরা বিক্রেতা, আরএসও কুইজ-এ অংশগ্রহণের যোগ্য নয়।             `,
            `
            এখানে উল্লিখিত কোনকিছুই বাংলালিংক-এর আরো এধরনের প্রচারনা চালানোর প্রতিশ্রুতি বা অঙ্গীকার হিসেবে বিবেচিত হবে না। 
              `,
            `            
            সকল ক্ষেত্রে বাংলালিংক-এর সিদ্ধান্ত চূড়ান্ত হবে এবং এই বিষয়ে কোন অভিযোগ করা যাবে না। এই শর্তাবলীর মাধ্যমে কোন অংশগ্রহণকারী এবং বাংলালিংক-এর মধ্যে  অংশীদারিত্ব বা প্রতিনিধিত্ব গঠিত হয়েছে বলে বিবেচিত হবে না। এবং অংশগ্রহণকারী যেকোন ব্যাপারে কোনভাবেই বাংলালিংককে দায়বদ্ধ করতে পারবে না।             `,
            `
            অগ্নি, বিস্ফোরণ, প্রাকৃতিক দুর্যোগ, রাষ্ট্রীয় জরুরি অবস্থা, দাঙ্গা, সরকারী বিধিনিষেধ বা অন্য কোন জরুরী অবস্থা ইত্যাদি যা বাংলালিংক, বিজনেজ পার্টনার এবং বাংলালিংক-এর অন্যান্য এজেন্টদের নিয়ন্ত্রণের বাইরের এসকল ক্ষেত্রে তারা নিজ নিজ দায়িত্ব পালন করতে দায়বদ্ধ থাকবে না  এবং এই পরিস্থিতিতে বিজয়ী বা অংশগ্রহণকারীদের ক্ষতিপূরণ দিতে দায়বদ্ধ থাকবে না।             `,
            `
            এখানে উল্লিখিত বা আইনের অধীনে প্রদত্ত অধিকার বা প্রতিকার প্রয়োগে ব্যর্থতা বা বিলম্ব, বাংলালিংক-এর পক্ষ থেকে এরুপ অধিকার বা  প্রতিকার বা অন্যান্য অধিকার বা প্রতিকার পরিত্যাগ বলে গন্য হবে না।             `,
            `
            বিজয়ী এবং অংশগ্রহণকারীগণ বাংলালিংক, তাদের ব্যবসা, কর্মকর্তা, কর্মচারী, এজেন্ট বা কর্মকর্তাদের সাথে সম্পর্কিত যেকোন তথ্য প্রকাশ বা সর্বসাধারনের জন্য উন্মুক্ত করবেন না অঙ্গীকার বদ্ধ।             `,
            `
            বাংলালিংক ড্রপড কল, দেরি করা, হারিয়ে যাওয়া, অসম্পূর্ণ, ভুলভাবে জমা দেওয়া, বিলম্বিত, অপাঠ্য, করাপ্টেড বা ভুল নির্দেশিত এন্ট্রি, যোগাযোগ, নথি,  বাদ দেওয়া, পরিবর্তন, টেম্পারিং, অননুমোদিত ডেটা হ্যাকিংয়, ডেটা, মুছে ফেলা, চুরি, ধ্বংস, ভাইরাস আক্রমণ, সংক্রমণ বাধা, যোগাযোগ ব্যর্থতা, সফ্টওয়্যার ব্যর্থতা, হার্ডওয়্যার ব্যর্থতা বা অন্যান্য  সকল কারণে কোনভাবে দায়বদ্ধ থাকবে না। । বাংলালিংক ব্যবহারকারীর ত্রুটির কারণে উদ্ভুত পরিস্থিতির এবং খরচের জন্য দায়ী থাকবে না।              `,
            `
            যদি একজন অংশগ্রহণকারী কুইজ বা কুইজ-এর শর্তাবলীতে সন্তুষ্ট না হন, তাহলে কুইজ-এ অংশগ্রহণ না করা তার একমাত্র প্রতিকার।             `,
            `
            এই শর্তাদি ছাড়াও ওয়েবসাইট/MyBL App-এর  সাধারণ নিয়ম ও শর্তাবলী এবং গোপনীয়তা নীতি অংশগ্রহণকারীদের জন্য প্রযোজ্য হবে।             `,
            `
            এই শর্তাবলী বাংলালিংক তার একক এবং সম্পূর্ণ নিজস্ব বিবেচনার ভিত্তিতে এবং বিজয়ীদের এবং অংশগ্রহণকারীদের কোন পূর্ব নোটিশ ছাড়াই পরিবর্তন করতে পারে।             `,
            `
            এই শর্তাবলীর কোন লঙ্ঘন হয়েছে বলে বাংলালিংক-এর বিশ্বাস করার যৌক্তিক কারণ থাকলে বাংলালিংক কুইজ-এর  পুরস্কার প্রত্যাহার করে নিতে পারে।             `,
            `
            যদি এই ধারাগুলির মধ্যে কোনটি অবৈধ, বা অকার্যকর বলে চিনহিত করা হয় তবে শর্তাবলী থেকে সেই ধারাটি বিচ্ছিন্ন এবং মুছে ফেলা হবে এবং অবশিষ্ট ধারাগুলি পূর্ণ শক্তি এবং ইফেক্টে প্রচলিত  থাকবে।             `,
            `
            এই শর্তাবলীর মূল পাঠ্য ইংরেজিতে হবে এবং শর্তাবলীর একটি বাংলা অনুবাদও হতে পারে। ইংরেজি এবং বাংলা পাঠ্যের মধ্যে কোনও দ্বন্দ্ব থাকলে, ইংরেজি পাঠ্য প্রাধান্য পাবে।              `,
          ],
        }
      ],
    },
    {
      title: `Release and Limitations of Liability`,
      titleBn: ` 
      দায়মুক্তি ও দায়ভারের সীমাবদ্ধতা  `,
      details: [
        {
          list: [
            `By entering into the Quiz, the Participants hereby release from and agree to indemnify Banglalink, BP and/or any of their respective officers/employees from and against all liability, cost, loss or expense arising out of acceptance   and/or use of the Prize or participation in the Quiz including (but not limited to) death, personal injury and damage to property and whether direct, indirect, consequential, foreseeable, due to any negligent act or omission, or otherwise. 
            `,
            `
            Banglalink accepts no liability, whether jointly or severally, for any errors or omissions, whether on behalf of themselves or third parties in relation to the Prizes. Banglalink and any of their respective parent companies, subsidiaries, affiliates, directors, officers, professional advisors, employees and agencies will not be responsible for any late, lost, misrouted, garbled or distorted or damaged transmissions or entries or any delay or cancellation of the Quiz or Prize.
            `,
            `
            The Participant(s) shall be solely responsible for any consequences which may arise due to their participation in the Quiz by conducting an illegal, fraudulent or unlawful act. Participant(s) also undertakes to indemnify Banglalink and their respective officers, directors, employees and agents on the happening of such an event (including without limitation cost of attorney, legal charges etc.) on full indemnity basis for any loss/damage suffered by Banglalink on account of such act on the part of the Participant. Participant(s) hereby agree to indemnify, defend and hold harmless Banglalink in case of any loss or liability (including but not limited to liabilities, judgments, damages, losses, fines and penalties, claims, costs and expenses such as attorneys’ fees and expenses) or any other loss associated with, arising out of or incidental to their ineligibility to participate, any untoward, rash or negligent act on their part, or non-compliance or alleged non-compliance with these Terms, any other rules, regulations, directives (whether written or verbal) issued by Banglalink from time to time, during the Quiz.
            `,
            `
            To the fullest extent permitted by law, in no event shall Banglalink or any of its officers, servants, employees, representatives and/or agents (including without limitation, any third party service providers that Banglalink may engage for purposes of the Quiz), be liable for any loss or damages (including, without limitation loss of income, profits or goodwill, indirect, incidental, consequential, exemplary, punitive or special damages of any party including third parties) howsoever arising whether in contract, tort, negligence or otherwise, in connection with the Quiz and/or the Quiz prizes, even if Banglalink has been advised of the possibility of such damages in advance, and all such damages are expressly excluded. The Participant shall indemnify, defend, and hold Banglalink harmless in the event of there being any third party/entity/organization claims arising from or related to his/her participation in the Quiz. In no event shall Banglalink be liable to any Participant for acts or omissions arising out of or related to the Quiz or his/her participation in the Quiz.
            `,
            `
            In consideration of Banglalink allowing the Participant(s) to take part in the Quiz, to the maximum extent permitted by law, the Participant(s) waive and release each and every right or claim, all actions, causes of actions (present or future) each of them has or may have against Banglalink its respective agents, directors, officers, business associates, group companies, sponsors, employees, or representatives for all and any injuries, accidents, or mishaps (whether known or unknown) or (whether anticipated or unanticipated) arising out of the Quiz or related to the Quiz or the Prizes of the Quiz.
            `,
            `
            By entering into the Quiz, the Participants acknowledges that an independent 3rd party will be operating, managing and executing the helicopter rides and that Banglalink and/or BP has no role, responsibility apart from making the payment of charges for the helicopter rides (i.e. Prizes) and hereby release from and agree to indemnify Banglalink, BP and/or any of their respective officers/employees from and against all liability, cost, loss or expense arising out of acceptance of the Prize including (but not limited to) death, personal injury and damage to property whether direct, indirect, consequential, foreseeable, due to some negligent, fraudulent or illegal  act or omission, or otherwise of the independent 3rd party operating, managing and executing the helicopter rides.
            `,
          ],
        }
      ],
      detailsBn: [
        {
          list: [
            `
            কুইজ-এ অংশগ্রহনের কারণে অথবা পুরষ্কার ব্যবহার বা গ্রহনের কারণে কোন অবহেলা জনিত, দায়িত্বপালন না করা না অন্য কোন প্রত্যক্ষ, পরোক্ষ বা পরিস্থিতিগত কারণে অংশগ্রহনকারীর মৃত্যু, ব্যক্তিগত আঘাত এবং সম্পত্তির ক্ষতিসহ অন্য কোন দায়, খরচ, ব্যয়, লোকশান ইত্যাদির জন্য অংশগ্রহনকারী বাংলালিংক, বিজনেজ পার্টনার এবং/অথবা তাদের কর্মকর্তা ও কর্মচারীদের অব্যাহতি ও হায়মুক্ত করতে সম্মত আছেন।             `,
            `
            পুরস্কারের কোন ত্রুটির ক্ষেত্রে বাংলালিংক যৌথভাবে বা এককভাবে, নিজেদের বা তৃতীয় পক্ষের পক্ষ থেকে কোন দায় স্বীকার করে না। কুইজ-এর পুরষ্কারের কোন বিলম্বতা, হারানো, বিকৃত বা ক্ষতিগ্রস্ত ট্রান্সমিশ্নের জন্য বাংলালিংক এবং তাদের প্যারেন্ট কোম্পানিসহ সকল  সহযোগী, পরিচালক, কর্মকর্তা, উপদেষ্টা, কর্মচারী এবং সংস্থা কোনভাবে দায়বদ্ধ থাকবে না।             `,
            `
            বেআইনি বা প্রতারণাপূর্ণ কাজের কারনে উদ্ভূত যে কোন পরিণতির জন্য কুইজ-এ অংশগ্রহণকারী(রা) সম্পূর্ণরূপে দায়ী থাকবেন। এই ধরনের কোন ঘটনার জন্য বাংলালিংক-এর কোন ক্ষতি হলে অংশগ্রহণকারী(রা) বাংলালিংক এবং এর  কর্মকর্তা, পরিচালক, কর্মচারী এবং এজেন্টদের ক্ষতিপূরণ (অ্যাটর্নি খরচ, আইনি চার্জ ইত্যাদি সহ অন্যান্য) প্রদান করবেন।অংশগ্রহণকারী(রা) আরো সম্মত হয় যে, তাদের অযোগ্যতা, অপ্রীতিকর অবস্থা, বা অবহেলামূলক কাজ, যা এইখানে বর্ণিত বাংলালিংক কর্তৃক বিভিন্ন সময়ে জারিকৃত  শর্তাদির সাথে অসামঞ্জস্যতাপূর্ন এসবের কারনে উদ্ভূত ঘটনার কারনে বাংলালিংক ক্ষতিগ্রস্থ হলে অংশগ্রহণকারী(রা) বাংলালিংক–কে নির্দোষ, ডিফেন্ড ও ক্ষতিপূরন (অটর্নির ব্যায়সহ,জরিমানা এবং অন্যান্) দিতে বাধ্য থাকবে।             `,
            `
            আইন দ্বারা সম্পুর্নভাবে অনুমোদিত, কুইজ এবং/অথবা কুইজ পুরষ্কারের সাথে সম্পর্কিত চুক্তি, টর্ট, ইত্যাদির মাধ্যমে উদ্ভুত কোন ক্ষতির (আয়, লাভ সহ, পরোক্ষ, দৃষ্টান্তমূলক, শাস্তিমূলক বা তৃতীয় পক্ষ সহ কোনও পক্ষের বিশেষ ক্ষতি) ক্ষেত্রে কোন অবস্থাতেই বাংলালিংক বা তার কোন কর্মকর্তা, চাকর, কর্মচারী, প্রতিনিধি এবং/অথবা এজেন্ট, বাংলালিংক কুইজের উদ্দেশ্যে নিযুক্ত হতে পারে এমন কোন তৃতীয় পক্ষের পরিষেবা প্রদানকারীকে, দায়বদ্ধ করা যাইবে না এমনকি যদি বাংলালিংক-কে এই ধরনের ক্ষতির সম্ভাবনা সম্পর্কে আগে থেকেই পরামর্শ প্রদান করা হয় তবুও। যদি কোন তৃতীয় পক্ষ/সত্তা/প্রতিষ্ঠান, অংশগ্রহণকারীর কুইজে অংশগ্রহণের ফলে কোন দাবী উত্থাপন করে সেক্ষেত্রে অংশগ্রহণকারী বাংলালিংক-কে নির্দোষ, ডিফেন্ড ও দায়মুক্তি প্রদান করবে। কোন ক্ষেত্রেই অংশগ্রহণকারী বাংলালিংক-কে কুইজ বা এর সাথে সম্পর্কিত কোন কাজ বা  ভুলের জন্য দায়ী করবে না।             `,
            `
            আইনে উল্লিখিত সর্বাধিক পরিমাণে অংশগ্রহণকারীদের বাংলালিংক কতৃক  কুইজ-এ অংশ নেওয়ার সুযোগ করে দেয়ার মাধ্যমে  অংশগ্রহণকারীরা কুইজ থেকে উদ্ভূত বা কুইজ বা কুইজ-এর পুরস্কার সম্পর্কিত সকল অধিকার বা দাবি এবং কোন আঘাত, বা দুর্ঘটনা (জানা বা অজানা) অথবা (প্রত্যাশিত হোক বা অপ্রত্যাশিত হোক) যা কুইজ বা কুইজ-এর পুরষ্কারের সাথে সম্পরকিত  এ ব্যাপারে বাংলালিংকে-কে( বর্তমান বা ভবিষ্যৎ) বা এর এজেন্ট, পরিচালক, কর্মকর্তা, ব্যবসায়িক সহযোগী, স্পন্সর, কর্মচারী, বা প্রতিনিধিদের দায়মুক্তি প্রাদান করে।              `,
            `
            কুইজ-এ প্রবেশের মাধ্যমে অংশগ্রহণকারীরা স্বীকার করে যে একটি স্বাধীন তৃতীয় পক্ষ হেলিকপ্টার রাইডগুলি পরিচালনা এবং সম্পাদন করবে এবং বাংলালিংক এবং/অথবা বিজনেজ পার্টনার-এর হেলিকপ্টার রাইডের জন্য চার্জ প্রদান করা ছাড়া কোনও ভূমিকা বা দায়িত্ব নেই এবং অংশগ্রহনকারী পুরস্কার গ্রহণের ফলে উদ্ভূত দায়, যার মধ্যে মৃত্যু, ব্যক্তিগত আঘাত এবং তৃতীয় পক্ষের হেলিকপ্টার রাইড পরিচালনা ও সম্পাদনের সময়  প্রত্যক্ষ, পরোক্ষ, অদূরদর্শী বা অবহেলামূলক, প্রতারণাপূর্ণ বা অবৈধ কোন কাজের কারনে যেকোন ক্ষতির ক্ষেত্রে   বাংলালিংক, বিজনেজ পার্টনার এবং/অথবা তাদের কর্মকর্তা/কর্মচারীদের দায়মুক্ত করবে।             `,
          ],
        }
      ],
    },
    {
      title: `Dispute Resolution and Governing Laws`,
      titleBn: ` 

      বিরোধ নিষ্পত্তি ও প্রযোজ্য আইন `,
      details: [
        {
          list: [
            `Any and all disputes arising out of, or in connection with, the Quiz shall be finally settled through arbitration by a single arbitrator following the applicable rules of Bangladesh International Arbitration Centre (BIAC) and the award of the adjudication shall be final and binding upon the parties. The place of Arbitration shall be Dhaka. The language of Arbitration shall be in English.
            `,
            `
            Further all issues and questions concerning the construction, validity, interpretation and enforceability of these Terms, or the rights and obligations of the Participants and/or Banglalink and/or partners of this Quiz, shall be governed and construed in accordance with the laws of Bangladesh.
            `,
          ],
        }
      ],
      detailsBn: [
        {
          list: [
            `কুইজ-এর সাথে সম্পর্কিত সকল বিরোধ বাংলাদেশ আন্তর্জাতিক সালিস কেন্দ্র (BIAC) এর প্রযোজ্য নিয়ম অনুসরণ করে সালিসের মাধ্যমে নিষ্পত্তি করা হবে এবং বিচারের রায় চূড়ান্ত এবং উভয়পক্ষের উপর বাধ্যতামূলক বলে বিবেচিত হবে। সালিসের স্থান হবে ঢাকা। সালিশ  ইংরেজি ভাষায় পরিচালিত হবে। 
            `,
            `
            এই শর্তাবলীর মেয়াদ, ব্যাখ্যা এবং প্রয়োগ সম্পর্কিত সমস্ত প্রশ্ন এবং বিভ্রান্তি , অথবা এই কুইজ-এ অংশগ্রহণকারীদের এবং/অথবা বাংলালিংক-এর অধিকার এবং নিয়মাবলী, বাংলাদেশের আইন অনুযায়ী সংজ্ঞায়িত ও পরিচালিত করা হবে।             `,
          ],
        }
      ],
    },
  ];

  return (
    <div className="TermsPopupOpen">
      <div className="TermsPopupOpenInner">
        <div className="TermsPopupOpenMainContent">
          <>
            <div className="UserLoginWrap">
              <div className="banner"></div>

              <div className="User_loginContent">
                <div className="userLoginFormWrap">
                  {/* <h5 className="texxt-center">MyBL App Quiz</h5> */}
                  <h2 className="secTitle">Terms & Conditions</h2>

                  <div className="table-responsive">
                    
                  <Table bordered hover className="termsTable">
                    <tbody>
                      <tr>
                        <th>Clause <br /> ধারা</th>
                        <th>Title <br /> শিররানাম</th>
                        <th>Terms and Conditions</th>
                        <th>শর্তাবলী</th>
                      </tr>
                      {termsDataBangla &&
                        termsDataBangla.length > 0 &&
                        termsDataBangla.map((item, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.title}  <br />{item.titleBn} </td>
                            <td>
                              {item.details &&
                                item.details.length > 0 &&
                                item.details.map((detailsItem, i) => (
                                  <>
                                    {detailsItem.details &&
                                      detailsItem.details.length > 0 &&
                                      detailsItem.details.map((item, i) => (
                                        <p key={i}>{item}</p>
                                      ))}
                                    {detailsItem.list &&
                                      detailsItem.list.length > 0 && (
                                        <ul>
                                          {detailsItem.list.map(
                                            (listItem, i) => (
                                              <li key={i}>{listItem}</li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                  </>
                                ))}
                            </td>
                            <td>
                              {item.detailsBn &&
                                item.detailsBn.length > 0 &&
                                item.detailsBn.map((detailsItem, i) => (
                                  <>
                                    {detailsItem.details &&
                                      detailsItem.details.length > 0 &&
                                      detailsItem.details.map((item, i) => (
                                        <p key={i}>{item}</p>
                                      ))}
                                    {detailsItem.list &&
                                      detailsItem.list.length > 0 && (
                                        <ul>
                                          {detailsItem.list.map(
                                            (listItem, i) => (
                                              <li key={i}>{listItem}</li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                  </>
                                ))}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                  </div>
                  <div className="acBtnWrap">
                    <Link
                      to={"/login"}
                      onClick={() => setPopupTermsOpen(false)}
                      className="btn sendBtn"
                    >
                      <div className="text">Ok</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default TermsPopupOpen;
