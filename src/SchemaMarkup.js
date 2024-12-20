// src/SchemaMarkup.js
import React from "react";
import { Helmet } from "react-helmet";
import { realEstateAgentSchema } from './Schema/HomeSchema';
import { FaqSchema } from "./Schema/FaqSchema";
import { BreadCrumb } from './Schema/BreadCrumb';
import { SitelinkSchema } from "./Schema/SitelinkSchema";
import { Organization } from "./Schema/Organization";
import { blogPostingSchema1, blogPostingSchema2, blogPostingSchema3, blogPostingSchema4, blogPostingSchema5, blogPostingSchema6, blogPostingSchema7 } from './Schema/BlogSchema';
 
const SchemaMarkup = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(realEstateAgentSchema, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(SitelinkSchema, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(Organization, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(FaqSchema, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema1, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema2, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema3, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema4, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(BreadCrumb, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema5, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema6, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema7, null, 2)}
      </script>
    </Helmet>
  );
};
 
export default SchemaMarkup;
 
 