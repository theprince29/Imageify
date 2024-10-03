import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const FAQ = () => {
  return (
    <div>
      <div className="max-w-3xl mt-12 mx-auto p-4">
  <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
  
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    
    <AccordionItem value="item-2">
      <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
      <AccordionContent>
        We accept major credit cards, PayPal, and bank transfers.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
      <AccordionContent>
        Yes, you can cancel your subscription whenever you want without penalties.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
      <AccordionContent>
        You can reach our customer support team via email at support@example.com or through our contact form on the website.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
      <AccordionContent>
        Yes, we provide a 14-day free trial for new users to explore our services without any commitment.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>What features are included in the basic plan?</AccordionTrigger>
      <AccordionContent>
        The basic plan includes access to essential features, such as user support, limited storage, and basic analytics.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger>Is my data secure with your service?</AccordionTrigger>
      <AccordionContent>
        Absolutely! We prioritize your data security with industry-standard encryption and regular security audits.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger>Can I upgrade my plan later?</AccordionTrigger>
      <AccordionContent>
        Yes, you can easily upgrade your plan at any time through your account settings.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>


    </div>
  )
}

export default FAQ