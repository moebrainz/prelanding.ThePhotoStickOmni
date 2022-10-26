let mobileDevice =
  isMobile.apple.phone ||
  isMobile.android.phone ||
  isMobile.other.device ||
  isMobile.android.device;
console.log(mobileDevice);
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
if (window.gu_qs) {
  if (gu_qs.gucountry === "pr") {
    gu_qs.gucountry = "us";
    gu_qs.gucurrency = "usd";
    window.gu_currency = "usd";
    window.gu_country = "us";
  }
}
jQuery(function ($) {
  $(document).ready(function () {});
});
