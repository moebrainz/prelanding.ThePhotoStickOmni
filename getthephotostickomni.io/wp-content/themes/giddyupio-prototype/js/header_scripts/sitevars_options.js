var gu_offer = site_vars.gu_offer_url;
var gu_checkout_ver = "2.0";
var shopifySafety = site_vars.shopify_safety;
var gu_autoplay_default = site_vars.autoplay_videos;
var gu_salespopup_default = site_vars.salespopup_default;
var gu_splash_page_show_header = site_vars.splashpage_header;
var gu_checkout_paypal_pay = site_vars.paypal_button;
var gu_checkout_native_paypal = site_vars.native_paypal;
console.log("is native paypal here: " + gu_checkout_native_paypal);
var gu_aff = site_vars.affiliate_link;
window.gu_gtm_id = site_vars.gu_gtm_id;
var gu_shopify_name = site_vars.shopifyname;
var gu_salespopupURL = site_vars.salespopup_url;
var gu_serverURL = site_vars.server_url;
var gu_shopify_domain = gu_shopify_name + ".myshopify.com";
var gu_shopify_url = "https://" + gu_shopify_domain;
var gu_shopify_checkout_url = gu_shopify_name + ".myshopify.com";
var gu_shopify_cart_url = gu_shopify_url + "/cart/";
var shopifyURL = gu_shopify_cart_url;
var shopifyURL_checkout = gu_shopify_checkout_url;
var initiate_checkout_event = parseInt(site_vars.initiate_checkout_event);
var v20_interim_shipping = site_vars.v20_interim_shipping;
if (site_vars.product_name_override === "1") {
  if (
    site_vars.new_product_name !== "" ||
    site_vars.new_product_name !== undefined
  ) {
    var salesPopupProductNameOverride = site_vars.new_product_name;
  }
}
if (site_vars.product_image_override === "1") {
  if (
    site_vars.new_product_image !== null ||
    site_vars.new_product_image !== undefined
  ) {
    var salesPopupImage = site_vars.new_product_image;
  }
}
var serverURL = gu_serverURL;
var usingAdyen = site_vars.useAdyen;
window.advertiser_id = parseInt(site_vars.advertiser_id);
window.landing_page_event = parseInt(site_vars.landing_page_event);
window.landing_page_start_event = parseInt(site_vars.landing_page_start_event);
window.add_to_cart_event = parseInt(site_vars.add_to_cart_event);
window.initiate_checkout_event = parseInt(site_vars.initiate_checkout_event);
window.shipping_info_event = parseInt(site_vars.shipping_info_event);
window.presell_landing_event = parseInt(site_vars.presell_landing_event);
window.presell_landing_start_event = parseInt(
  site_vars.presell_landing_start_event
);
window.vsl_landing_event = parseInt(site_vars.vsl_landing_event);
window.vsl_landing_start_event = parseInt(site_vars.vsl_landing_start_event);
window.ga_account_id = site_vars.ga_account_id;
window.fb_id = site_vars.fb_id;
window.brand_name = site_vars.brand_name;
if (site_vars.is_mor !== "1") {
  window.is_mor = 0;
} else {
  window.is_mor = 1;
}
