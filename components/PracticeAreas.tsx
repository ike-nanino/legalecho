'use client';

import { useState } from 'react';

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

export default function PracticeAreas() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-16 px-20">
      <div className="container mx-auto flex">
        {/* Sidebar */}
        <div className="w-1/4 border-r-2 pr-4">
          <ul className="space-y-4 text-base font-semibold text-gray-600">
            {practiceAreas.map((area, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeIndex === index ? 'text-gold' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {area.title.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="w-3/4 pl-4">
          <div className="border-1 bg-gray-300 text-center py-12 mb-4 text-sm font-bold text-gold">
            {practiceAreas[activeIndex].title.toUpperCase()}
          </div>
          <div className="text-gray-600 leading-8 space-y-4">
            {practiceAreas[activeIndex].content}
          </div>
        </div>
      </div>
    </section>
  );
}
