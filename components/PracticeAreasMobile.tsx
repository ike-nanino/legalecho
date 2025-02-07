'use client'

import React, { useState } from 'react'

function PracticeAreasMobile() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);


    const practiceAreas = [
        {
          title: 'Litigation',
          content: `
            - Representing clients in civil and commercial disputes.
            - Expertise in contract enforcement, negligence claims, and shareholder disagreements.
            - Tailored legal strategies for favorable court outcomes.
          `,
        },
        {
          title: 'Family Law',
          content: `
            - Handling divorce, child custody, and adoption cases with compassion.
            - Resolving family disputes through mediation and litigation.
            - Assisting with prenuptial agreements and family estate planning.
          `,
        },
        {
          title: 'Contracts',
          content: `
            - Drafting, reviewing, and negotiating business agreements.
            - Protecting clients from contractual disputes and liabilities.
            - Enforcing breach of contract claims.
          `,
        },
        {
          title: 'Tax',
          content: `
            - Providing advisory services on tax planning and compliance.
            - Assisting businesses with VAT, corporate tax, and tax audits.
            - Defending clients in tax-related litigation and disputes.
          `,
        },
        {
          title: 'Capital Markets',
          content: `
            - Structuring equity and debt offerings.
            - Advising on securities regulations and compliance.
            - Supporting initial public offerings (IPOs) and private placements.
          `,
        },
        {
          title: 'Corporate',
          content: `
            - Incorporating businesses and managing corporate governance.
            - Mergers, acquisitions, and restructuring services.
            - Advising on shareholder agreements and corporate compliance.
          `,
        },
        {
          title: 'Debt Recovery',
          content: `
            - Legal enforcement of debt recovery for businesses and individuals.
            - Negotiating repayment terms and out-of-court settlements.
            - Representing clients in bankruptcy and insolvency cases.
          `,
        },
        {
          title: 'Insurance',
          content: `
            - Resolving disputes between policyholders and insurance companies.
            - Assisting in claims processing and recovery.
            - Advising clients on insurance policies and risk management.
          `,
        },
        {
          title: 'Real Estate',
          content: `
            - Drafting and reviewing real estate transactions, including leases and sales.
            - Advising on land acquisitions, zoning laws, and property disputes.
            - Facilitating property title searches and transfers.
          `,
        },
        {
          title: 'Arbitration',
          content: `
            - Offering alternative dispute resolution mechanisms.
            - Serving as arbitrators in contractual and commercial conflicts.
            - Ensuring faster and cost-effective resolutions outside of court.
          `,
        },
        {
          title: 'Criminal Litigation',
          content: `
            - Defending clients in criminal cases with a strategic approach.
            - Expertise in white-collar crimes, fraud, and corporate investigations.
            - Protecting clients’ rights through every stage of the judicial process.
          `,
        },
        {
          title: 'Oil & Gas',
          content: `
            - Advising on oil and gas exploration, licensing, and compliance.
            - Drafting agreements for joint ventures and resource-sharing contracts.
            - Representing clients in disputes arising from energy transactions.
          `,
        },
      ];
    const togglePractice = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };


  return (
    <section className="w-full bg-white">
          <div className="max-w-3xl mx-auto space-y-4 px-8">
          {practiceAreas.map((practice, index) => (
            <div key={index} className="border border-gray-300 rounded-sm py-5">
              <button
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
                onClick={() => togglePractice(index)}
              >
                <span className="text-lg">{practice.title}</span>
              </button>
              <div
                className="px-4 overflow-hidden transition-all duration-200"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0",
                  opacity: openIndex === index ? 1 : 0,
                  padding: openIndex === index ? "0 1rem 1rem 1rem" : "0 1rem",
                }}
              >
                <p className="text-gray-600">{practice.content}</p>
              </div>
            </div>
          ))}
        </div>
        </section>
  )
}

export default PracticeAreasMobile
