---
title: Is it possible to call getTreatment() function without passing a user ID?
sidebar_label: Is it possible to call getTreatment() function without passing a user ID?
sidebar_position: 4
---

<p>
  <button hidden style={{borderRadius:'8px', border:'1px', fontFamily:'Courier New', fontWeight:'800', textAlign:'left'}}> help.split.io link: https://help.split.io/hc/en-us/articles/360050550752-Is-it-possible-to-call-getTreatment-function-without-passing-a-user-id </button>
</p>

## Question

There are scenarios when there is a need to calculate treatment without specifying a user ID, for example, when using a feature flag as a 100% feature toggle; either `"On"` or `"Off"`. Is there a way to omit the user ID from the `getTreatment` call?

## Answer

The getTreatment function requires a customer ID, which is usually a hash representation of a the current session's customer. The SDK uses the customer ID when the feature flag includes percentage based targeting rules (for example 50% `"On"` and 50% `"Off"`).
In this case this is not relevant since we are assigning 100% of a single treatment. However, the SDK still requires the customer ID to calculate the treatment.

If the implementation will not use percentage based treatments, then apply a dummy customer ID with any string value.