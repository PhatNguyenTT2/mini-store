import React, { useState } from 'react';
import { getProductById } from '../../data/products';

export const ProductDetail = ({ productId }) => {
  const [activeTab, setActiveTab] = useState('description');

  // Get product data by ID
  const product = getProductById(productId);

  // Default content if product not found
  const defaultContent = {
    intro: [
      "Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.",
      "Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because."
    ],
    specifications: [
      { label: 'Type Of Packing', value: 'Bottle' },
      { label: 'Color', value: 'Green, Pink, Powder Blue, Purple' },
      { label: 'Quantity Per Case', value: '100ml' },
      { label: 'Ethyl Alcohol', value: '70%' },
      { label: 'Piece In One', value: 'Carton' },
    ],
    additionalDesc: "Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.",
    packaging: [
      "Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.",
      "Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund."
    ],
    suggestedUse: [
      'Refrigeration not necessary.',
      'Stir before serving',
    ],
    otherIngredients: [
      'Organic raw pecans, organic raw cashews.',
      'This butter was produced using a LTG (Low Temperature Grinding) process',
      'Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy',
    ],
    warnings: [
      'Oil separation occurs naturally. May contain pieces of shell.'
    ]
  };

  // Use product's detail description or fallback to default
  const content = product?.detailDescription || defaultContent;

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional info' },
    { id: 'vendor', label: 'Vendor' },
    { id: 'reviews', label: 'Reviews (3)' },
  ];

  return (
    <div className="border border-[#ececec] rounded-[15px] bg-white">
      {/* Tabs */}
      <div className="flex gap-3 px-[51px] pt-[41px] pb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`h-[45px] px-8 rounded-[30px] border border-[#ececec] font-['Quicksand',sans-serif] font-bold text-[17px] leading-[17px] transition-colors ${activeTab === tab.id
              ? 'bg-white text-[#3bb77e]'
              : 'bg-white text-[#7e7e7e] hover:text-[#3bb77e]'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-[51px] pb-[51px]">
        {activeTab === 'description' && (
          <div className="space-y-6">
            {/* Intro Paragraphs */}
            <div className="space-y-4">
              {content.intro.map((paragraph, index) => (
                <p key={index} className="text-[#7e7e7e] text-[16px] font-['Lato',sans-serif] leading-[24px]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Specifications List */}
            <div className="space-y-3">
              {content.specifications.map((spec, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-[#9b9b9b] rounded-full flex-shrink-0" />
                  <span className="text-[#7e7e7e] text-[14px] font-['Lato',sans-serif] min-w-[165px]">
                    {spec.label}
                  </span>
                  <span className="text-[#7e7e7e] text-[14px] font-['Lato',sans-serif]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="h-px bg-[#7e7e7e] opacity-25" />

            {/* Additional Description */}
            <p className="text-[#7e7e7e] text-[16px] font-['Lato',sans-serif] leading-[24px]">
              {content.additionalDesc}
            </p>

            {/* Packaging & Delivery Section */}
            <div className="space-y-4">
              <h3 className="text-[#253d4e] text-[24px] font-bold font-['Quicksand',sans-serif] leading-[28.8px]">
                Packaging & Delivery
              </h3>
              <div className="h-px bg-[#7e7e7e] opacity-25" />
              {content.packaging.map((paragraph, index) => (
                <p key={index} className="text-[#7e7e7e] text-[16px] font-['Lato',sans-serif] leading-[24px]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Suggested Use Section */}
            <div className="space-y-4">
              <h3 className="text-[#253d4e] text-[24px] font-bold font-['Quicksand',sans-serif] leading-[28.8px]">
                Suggested Use
              </h3>
              <div className="space-y-3">
                {content.suggestedUse.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#9b9b9b] rounded-full flex-shrink-0" />
                    <span className="text-[#7e7e7e] text-[14px] font-['Lato',sans-serif]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Ingredients Section */}
            <div className="space-y-4">
              <h3 className="text-[#253d4e] text-[24px] font-bold font-['Quicksand',sans-serif] leading-[28.8px]">
                Other Ingredients
              </h3>
              <div className="space-y-3">
                {content.otherIngredients.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-[#9b9b9b] rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[#7e7e7e] text-[14px] font-['Lato',sans-serif]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warnings Section */}
            <div className="space-y-4">
              <h3 className="text-[#253d4e] text-[24px] font-bold font-['Quicksand',sans-serif] leading-[28.8px]">
                Warnings
              </h3>
              <div className="space-y-3">
                {content.warnings.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-[#9b9b9b] rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[#7e7e7e] text-[14px] font-['Lato',sans-serif]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'additional' && (
          <div className="py-8 text-center text-[#7e7e7e] text-[16px] font-['Lato',sans-serif]">
            Additional information content coming soon...
          </div>
        )}

        {activeTab === 'vendor' && (
          <div className="py-8 text-center text-[#7e7e7e] text-[16px] font-['Lato',sans-serif]">
            Vendor information content coming soon...
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="py-8 text-center text-[#7e7e7e] text-[16px] font-['Lato',sans-serif]">
            Reviews content coming soon...
          </div>
        )}
      </div>
    </div>
  );
};
