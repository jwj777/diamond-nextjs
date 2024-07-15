import GradeAccordion from "@/app/_components/sections/grading-standards/GradeAccordion";
import Sections from "@/app/_components/sections/sections-array/Sections";
import BodyLarge from "@/app/_components/typography/BodyLarge";
import BodyMedium from "@/app/_components/typography/BodyMedium";
import BodySuper from "@/app/_components/typography/BodySuper";
import HeadlineSmall from "@/app/_components/typography/HeadlineSmall";
import TitleSmall from "@/app/_components/typography/TitleSmall";
import PageContainerGeneral from "@/app/_layout/PageContainerGeneral";
import XlContainer from "@/app/_layout/containers/XlContainer";
import { Box, Image } from "@chakra-ui/react";


export default async function Terms({ params }) {

  const data = await getPage(params);
  const grades = await getGrades();

  console.log('GradingStandards')
  console.log(data)

  return (
 
    <PageContainerGeneral data={data}>
      
      <Box pt='16'>
        <XlContainer>

          <BodyMedium mb='4'>
            Diamond Grade Cards LLC (diamondgradecards.com) appreciates the value of your business. We strongly dedicate and pledge our time to you the customer by way of unsurpassed focus aimed to provide you with the highest quality products and services throughout the industry.
          </BodyMedium>
          <BodyMedium mb='4'>
            In the process of any submission to DGC, please read, understand, and agree to the Terms and Conditions provided below. We ask that you recognize our rights as a company to set forth the following guidelines in achieving a successful order submission for both parties. DGC customers vow to the following terms and conditions, allowing Diamond Grade Cards LLC to respectfully operate under the following criteria. DGC reserves the right to make proper updates and changes to the terms and conditions at any time. DGC members will be notified of any updates to our Privacy Policy and Terms & Conditions through notifications on the DiamondGrade website.
          </BodyMedium>
          <BodyMedium mb='4'>
            AGE CONSENT
          </BodyMedium>
          <BodyMedium mb='4'>
            As stated in the DGC “Privacy Policy,” you consent to being at the age of 18, or over the age of 13 with parental and or legal guardians&apos; permission to use the diamondgradecards.com website. All parents and legal guardians&apos; consent to the above-mentioned request before a minor under the age of 18, and under your supervision, is permitted to use the DGC website to create accounts and perform order submissions that come with binding monetary transactions. Anyone under the age of 13 is prohibited from using our services “directly”, with or without parental consent.
          </BodyMedium>
          <TitleSmall>
            MEMBERSHIP TERMS AND CONDITIONS
          </TitleSmall>
          <BodyMedium mb='4'>
            DGC understands each customer demands diverse needs. As a result, we have developed account levels to accommodate your desired level of engagement with our products and services. DGC requires the customer to create an account before any submissions can be made. Currently there are four types of accounts within the DGC website function, “Standard,” “Diamond Club,” “Diamond Club Premium,” and “Dealers Club.”  If you are a customer just looking to check out what Diamond Grade has to offer, the Standard account comes with no monthly or annual fee and is naturally a free service to you.  A standard membership does not include discounted pricing that comes with the Diamond Club, Diamond Club Premium, and our Dealers Club packages.
          </BodyMedium>
          <BodyMedium mb='4'>
            As mentioned, a Standard membership account is considered a free of charge account and requires no payment for setup. Diamond Club, Diamond Club Premium, and Dealers Club accounts require separate membership fees for various levels of pricing perks, promotional offers, and other valued benefits pertaining to an order submission.  The Diamond Club, Diamond Premium, and Dealers Club accounts can be set up for monthly, or annual payments, entirely based on the preference of the DGC customer. The annual date starts on the day of registration and payment.  You can cancel your membership at any time. If you sign up for the month-to-month payment plan and decide to cancel in the middle of a billing cycle, DGC will pro-rate that current cycle and you will only owe for the time you were considered a paying customer. DGC will put forth the same acknowledgement for pro-rated charging on annual subscriptions. If you sign up for a twelve-month membership and cancel after seven months, you will only be charged for the first seven months and refunded for the remaining five months of your term. Unlike the monthly plan, if you cancel during the seventh month, you will be charged for the entire seventh month, and the remaining portion will not be refunded. Each paying customer who cancels an annual subscription still has access to the pricing structure of the membership plan they chose until the end of the month of cancellation.
          </BodyMedium>
          <BodyMedium mb='4'>
            DGC reserves the right to adjust membership fees (and service fees) to accommodate new benefits and product demands as we improve our services to you, the respected customer.  To see the current DGC pricing structure follow this link “Grading Services & Pricing” or find it on our website homepage under Grading Services & Pricing.
          </BodyMedium>
          <BodyMedium mb='4'>
            A DGC customer should understand all personal information obtained during account registration is treated as confidential, and DGC has taken necessary steps to protect your privacy and you agree to these conditions.
          </BodyMedium>
          <BodyMedium mb='4'>
            For additional information regarding how we use your personal information, please refer to the Diamond Grade “Privacy Policy.”
          </BodyMedium>

          <TitleSmall mb='4'>
            ORDER SUBMISSION
          </TitleSmall>
          <BodyMedium mb='4'>
            Please refer to the complete list of “Terms and Conditions” before submission.
          </BodyMedium>
          <BodyMedium mb='4'>
            Any account holder name registered under the DGC website environment is considered the main point of contact for any order submitted through that account. Again, before any use of the Diamond Grade Cards LLC website to make a purchase or enter a service submission, you must agree and acknowledged to the “Age Consent” section and fully understand our “Terms and Conditions.” DGC will require you to accept our terms and conditions before any order submission is finalized through our processing system (at checkout).
          </BodyMedium>
          <BodyMedium mb='4'>
            DGC will acknowledge the overall value of each card based on your estimated value during submission. We urge each customer to fully understand the true value of the card you are submitting before declaring said value in the order form. For each card, a subtotal will populate based on the value and service option selected for the order. Any additional expenses, such as sales tax, shipping, and insurance etc. will be in addition to the “price per card” stated at the time of your service selection unless otherwise noted.
          </BodyMedium>
          <BodyMedium mb='4'>
            DGC will not grade any card or memorabilia that shows evidence of tampering. Trimming, color enhancement, restoration, and counterfeiting of ANY kind is prohibited. All DGC customers will acknowledge and agree not to submit any card knowingly if tampering has occurred, and the integrity of authenticity is in question. Furthermore, DGC is not required to refund any service cost for any rejected product because we have deemed the card has evidence of tampering. In certain cases, DGC will provide an Authentic descriptor on the grading label even if the card is determined to have tampering.
          </BodyMedium>
          <BodyMedium mb='4'>
            DGC&apos;’s services come with an estimated turnaround or lead time. DGC vows to update the lead times each week to keep the estimations as accurate as possible. Again, turnaround times are only estimations. The customer agrees to waive all rights in seeking damages merely based on estimated turnaround times. All estimated turnaround times refer to business days only. Holidays, weekends, and any day DGC recognizes as a holiday do not count as a business day. DGCs turnaround business day estimation starts from the day we receive customer product, to the day the order leaves our facility. The customer agrees and acknowledges that DGC will not be held accountable for any delays or damage in the shipping process.
          </BodyMedium>
          <BodyMedium mb='4'>
            Pricing for all DGC service-related packages is only final at that time of submission. In some cases, a customer may start an order and finish the same order weeks later. Again, the final price is set at the time of final submission, and DGC reserves the right for any pricing adjustments to any or all the services we provide to accommodate demand and ever-changing economic conditions.
          </BodyMedium>
          <BodyMedium mb='4'>
            All DGC customers place orders through our website order forms found within each of our service links on the diamondgradecards.com website and mobile app (coming soon).
          </BodyMedium>
          <BodyMedium mb='4'>
            Diamond Grade Cards LLC believes the ordering process should be clear, simple, and precise. We have dedicated time and effort to our mailing “Care-Package” option for you the customer to improve the shipping experience unmatched in today&apos;s card grading industry. For more information on shipping needs follow this link “Care-Package” and read the section below titled “Shipping Terms and Conditions.”
          </BodyMedium>
          <TitleSmall mb='4'>
            GRADING AND CLAIMS
          </TitleSmall>
          <BodyMedium mb='4'>
            Grading involves individual judgement and expert opinion that changes quite often. DGC cannot provide assurance, interpretation, or obligation to the customer for final grading or authenticity delegated to any item by DGC. The amount paid to DGC is non-refundable after the grading process has begun.
          </BodyMedium>
          <BodyMedium mb='4'>
            One of the focus points at DGC is the handling of customer products. Your product will NOT touch skin (fingertips etc.) throughout the grading process. If DGC determines your item was lost, or damaged while in our possession, DGC will compensate your item to the full market value determined by us, and in some cases a claim with our insurance provider may be necessary. If we have any updates to this section as our services improve and include other non-card items and details, you will be notified through our website.
          </BodyMedium>
          <BodyMedium mb='4'>
          At no time will compensation EXCEED the current fair market value. DGC reserves the right to decline the customers&apos; fair market value estimation. In any case where DGC is liable for damage to the customer&apos;s product, no charge will apply for the service level paid by the customer for the card involved in a claim. Any compensation transactions therefore will be the sole amendment for the customer in each individual case. The DGC customer will be asked to sign a release form declaring compensation payment satisfies and ends that claim.
          </BodyMedium>
          <BodyMedium mb='4'>
            Diamond Grade applies hours of effort in product quality development to provide paying customers with the absolute best product in the market. However, clerical, and other minor mistakes happen sometimes. The customer agrees to allow DGC to fix any mistakes that may occur during the service process at the sole expense of Diamond Grade Cards LLC.
          </BodyMedium>
          <TitleSmall mb='4'>
            POST SERVICE INSPECTION AND PAYMENT AGREEMENTS
          </TitleSmall>
          <BodyMedium mb='4'>
            DGC requires customer to examine all items directly upon receipt and DGC denies any liability for damage, inconsistencies, or errors, including, but not limited to, errors in the description of the item unless reported to DGC within seven (7) days of Customer's receipt of the item(s). The customer agrees to return any incorrectly described item to DGC upon request for correction and agrees to hold DGC non-liable from all losses and/or claims caused by the circulation or sale of incorrectly described items.
          </BodyMedium>
          <BodyMedium mb='4'>
            Customer agrees (1) to pay to DGC all pricing and other charges when due; (2) that any late balances shall accrue interest at the rate of 15% per year until paid (or, if less, the maximum interest rate permitted by applicable law); and (3) that DGC shall have a security interest in the items submitted, as well as in any other property of Customer in the possession of DGC or its affiliates (collectively, the “Property”), to secure payment. The customer hereby grants to DGC an assignment of and lien against the Property in the amount of any pricing and other charges due and payable pursuant to the terms of this Agreement. Customer hereby authorizes DGC to file, at any time on or after the date such pricing totals and other charges become due, appropriate uniform commercial code financing statements in such jurisdictions and offices as DGC deems necessary in connection with the perfection of a security interest in the Property.
          </BodyMedium>
          <BodyMedium mb='4'>
            Customer represents and warrants that Customer is the cardholder or authorized user of the payment method(s) Customer provides, and Customer authorizes DGC to (1) use the payment method for the “Total Amount Due” (see below) in connection with Customer&apos;s order and (2) store and use the payment method and certain related information for future orders and charges in connection with the any services provided by DGC. Customer furthermore authorizes DGC to charge the payment method for any additional service Customer may select during the DGC online order Submission process or otherwise via the DGC (diamondgradecards.com website). Customer further acknowledges and agrees that DGC may request an authorization when Customer provides a payment method to DGC in connection with any service to ensure that the payment method is valid, and that Customer has sufficient funds to complete the transaction. Customer understands that Customer&apos;s card issuer may hold the authorized amount for a period as determined by such card issuer.
          </BodyMedium>
          <BodyMedium mb='4'>
            The “Total Amount Due” is equal to the price of the Service Level Customer selects multiplied by the number of items in the order, adjusted for the Service Level price applicable to any item for which DGC determines its value to exceed the maximum Declared Value for the selected Service Level. Accordingly, if after grading and processing the submitted items, DGC determines that the value of any item exceeds the maximum Declared Value allowed for the Service Level selected, the Total Amount Due will reflect the higher cost of the Service Level appropriate for all such item(s). All charges will be made in U.S. dollars ($ USD).
          </BodyMedium>
          <BodyMedium mb='4'>
            Customer agrees that the approval provided by Customer for DGC to store and use the payment method and related information for future orders and charges will remain in effect until canceled by Customer. Customers may cancel such an authorization by contacting DGC at dgsales@diamondgradecards.com.
          </BodyMedium>
          <TitleSmall mb='4'>
            IMAGING COLLECTION AGREEMENT
          </TitleSmall>
          <BodyMedium mb='4'>
            DGC reserves the right to capture the image of any item submitted by the Customer for service improvement and marketing. Customer agrees DGC shall be permitted to distribute images and information relating to any items submitted by the Customer without compensation of any kind to said Customer, and DGC further reserves the right to publish images and information relating to items as it deems fit. All images created/produced or modified by DGC are the lone property of DGC and may only be used by DGC in its discrete and outright discretion.
          </BodyMedium>
          <TitleSmall mb='4'>
            PRODUCT DATA COLLECTION AGREEMENT
          </TitleSmall>
          <BodyMedium mb='4'>
            In the ordinary course of its grading operations, DGC (1) compiles data regarding each item submitted for grading, including, but not limited to, data relating to the identity, production, condition, and grade of the item (the “Data”); and (2) may take, or have taken, one or more digital or other types of photographs, images or reproductions of each such item (collectively, the “Images”). In consideration for the grading services being provided by DGC, Customer, on behalf of itself and any third party for whom Customer may be acting, hereby authorizes DGC (1) to compile and maintain such Data with respect to each item submitted hereunder for grading; and (2) to take, or cause to be taken, one or more Images of each such item, and further agrees that DGC will be the owner of such Data and all such Images and that DGC may use and exploit such Data and the Images for commercial and any other purposes, as DGC in its sole discretion deems appropriate, including, but not limited to, the publication and republication or reproduction in or on any media, of such Data and Images. Without limiting the generality of the foregoing, Customer, on behalf of itself and any third party for whom Customer may be acting with respect to this agreement, unconditionally and irrevocably transfers, conveys and assigns to DGC any and all current and any hereafter acquired rights, title and interests (including, without limitation, rights in copyright, patent, trade secret and trademark) that Customer or any such third party may have in or to the Data and the Images (on whatever media or in whatever form such Images may be reproduced or published).
          </BodyMedium>
          <TitleSmall mb='4'>
            CASING AGREEMENT
          </TitleSmall>
          <BodyMedium mb='4'>
            DGC merits no liability whatsoever to Customer, or any third party for whom Customer may be acting, (1) for any personal injury or (2) any damage to any item, or otherwise, resulting from the breaking open of a DGC item holder (slab), or for any damage to any item that DGC can reasonably demonstrate occurred while the item was not in the custody or control of DGC including, but not limited to, loss or damage to items while being shipped to DGC, or while being shipped by DGC to Customer by a method selected and paid for by Customer.
          </BodyMedium>
          <BodyMedium mb='4'>
            The Customer agrees to notify DGC if the Customer knowingly submits an item captured within a case, holder or other protective outer layer that is broken, tampered with, or otherwise defective in any manner. If DGC receives from Customer a case, holder or other protective outer layer that is broken, tampered with, or defective in any matter, regardless of whether or not the Customer knew the case/holder was broken, then DGC shall have no liability whatsoever to Customer, or any third party for whom Customer may be acting, for any further or additional damage that may occur to the case/holder or the item contained therein if DGC opens or otherwise removes the broken or defective case/holder.
          </BodyMedium>
          <BodyMedium mb='4'>
            In the event DGC determines that an item within an DGC holder is fraudulent, tampered with, or is not accurately described, then DGC is authorized, without further notice to Customer, to remove the item from the holder. In addition, if an item has been previously graded by DGC and placed in a holder, and such item is subsequently damaged due to Customer&apos;s lack of care, then DGC reserves the right to remove the item from its holder and is under no commitment to re-grade such an item.
          </BodyMedium>
          <TitleSmall mb='4'>
            ADDITIONAL TERMS AND CONDITIONS
          </TitleSmall>
          <BodyMedium mb='4'>
            Except as expressly set forth herein to the contrary,
          </BodyMedium>
          <BodyMedium mb='4'>
            THE MAXIMUM COLLECTIVE LIABILITY THAT DGC WILL HAVE TO CUSTOMER, OR ANY THIRD PARTY FOR WHOM THE CUSTOMER MAY BE ACTING, ASCENDING FROM ANY CAUSE, ACT, OVERSIGHT OR OTHER CIRCUMSTANCE, WILL IN NO EVENT EXCEED THE GRADING CHARGES OR LESS ACTUALLY PAID BY CUSTOMER FOR THE GRADING SERVICES RENDERED BY DGC WITH RESPECT TO THE ITEMS SUBMITTED FOR GRADING HEREUNDER. IN NO EVENT SHALL DGC OR ANY OF ITS AFFILIATES, OR ANY OF ITS OR THEIR RESPECTIVE EMPLOYEES, OFFICERS, DIRECTORS, OR AGENTS, BE LIABLE TO CUSTOMER OR ANY OTHER PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </BodyMedium>
          <BodyMedium mb='4'>
            The terms and provisions in this Agreement constitutes the entire agreement of DGC and Customer (and any third party for whom Customer may be acting) regarding and replaces all prior agreements and understandings (written or oral) between or among such parties relating to the subject matter hereof. If any term or provision of this Agreement is determined by a final and unappealable ruling or order of a court of competent jurisdiction, to be invalid or unenforceable under applicable law, such invalidity or unenforceability shall not affect the validity or enforceability of any of the other of the terms or provisions of this agreement. Each party shall execute and deliver such additional documents and instruments as any other party may request to better evidence or effectuate the agreements contained herein.
          </BodyMedium>
          <BodyMedium mb='4'>
            The customer consents to receiving transactional communications (“email”), including, but not limited to, a confirmation email confirming account creation and email verification, a password reset email when requested by the customer, a confirmation email that the customer&apos;s order has been received, a notification email that the customer&apos;s order has shipped.
          </BodyMedium>
          <BodyMedium mb='4'>
            The customer consents to DGC sharing their personal information with third-party vendors to fulfill their orders, including payment processors and shipping carriers to print return labels. Our website may contain links to third-party websites, services, content, apps, and advertisements for third parties. We are not responsible for third parties or their Third-Party Services. Use caution when dealing with third parties and consult their terms of use and privacy policies.
          </BodyMedium>
          <BodyMedium mb='4'>
            All information we collect is subject to the DGC “Privacy Policy,” which describes how we collect, use, and share information. By using our website, or otherwise using our services in any manner, you acknowledge that you have read the Privacy Policy, consent to our data practices as described in the Privacy Policy and agree that these Terms and Conditions will govern any disputes arising out of or related to our Privacy Policy.
          </BodyMedium>
          <BodyMedium mb='4'>
            This Agreement is governed by and construed in accordance with the substantive laws of the State of Missouri, without regard to conflicts of laws principles. The parties hereby consent to personal jurisdiction of the courts of the State of Missouri with respect to any legal action to enforce the terms and conditions of this Agreement or otherwise arising under or with respect to this Agreement and agree that venue for all such actions will be in Jackson County, Missouri. The non-prevailing party will pay all costs and expenses, including all attorneys&apos; fees and court costs, incurred by the prevailing party in enforcing the terms and conditions of this Agreement.
          </BodyMedium>

        </XlContainer>
      </Box>

    </PageContainerGeneral>

  );
}

async function getPage(params) {
  try {
    const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/general-pages/8?[populate]=*`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const pages = await response.json();

    // console.log(pages)

    return pages?.data;
  } catch (error) {
    console.error("Error fetching pages data:", error);
    throw new Error("Failed to fetch data");
  }
}

async function getGrades() {
  try {
    // const slug = params.slug;
    const response =
      await fetch(process.env.BASE_URL + `/api/grades?[populate]=*`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const grades = await response.json();

    console.log('grades')
    console.log(grades)


    return grades?.data;
  } catch (error) {
    console.error("Error fetching grade data:", error);
    throw new Error("Failed to fetch grade data");
  }
}