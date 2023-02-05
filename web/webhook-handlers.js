import { DeliveryMethod } from "@shopify/shopify-api";
import { createProductModel } from "./models/product.js";
import { createOrderModel } from "./models/ordersCreate.js";
import { createCartModel } from "./models/cartUpdate.js";

export default {
  /**
   * Customers can request their data from a store owner. When this happens,
   * Shopify invokes this webhook.
   *
   * https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#customers-data_request
   */
  ////////PLEASE REINSTALL APP WHENEVER URL OR NEW WEBHOOK ADDED||||||||||||||||||||||||||||||-AShwin
  PRODUCTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      console.log("--- Product update ---");
      const payload = JSON.parse(body);
      console.log({_id:payload.id,...payload});
      //const product = new createProductModel(payload);
      createProductModel.updateMany({id:payload.id},{$set :payload},{upsert:true},).then(() => {
        console.log("Created product123")
      }).catch((err)=>{console.log("error products",err)})
      console.log("--- /Product update ---");
     },
  },
  PRODUCTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      console.log("--- Product update ---");
      const payload = JSON.parse(body);
      console.log({_id:payload.id,...payload});
      //const product = new createProductModel(payload);
      createProductModel.updateMany({id:payload.id},{$set :payload},{upsert:true},).then(() => {
        console.log("Created product")
      }).catch((err)=>{console.log("error products",err)})
      console.log("--- /Product update ---");
     },
  },
  ORDERS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      console.log("--- ORDER CREATE ---");
      const payload = JSON.parse(body);
     // console.log(payload);
    createOrderModel.updateMany({id:payload.id},{$set :payload},{upsert:true},).then(() => {
        console.log("Created product")
      }).catch((err)=>{console.log("error products",err)})
      console.log("--- /Product update ---");
    },
  },
  CARTS_UPDATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      console.log("--- CARTS_UPDATE ---");
      const payload = JSON.parse(body);
     // console.log(payload);
     createCartModel.updateMany({id:payload.id},{$set :payload},{upsert:true},).then(() => {
        console.log("CARTS_UPDATE")
      }).catch((err)=>{console.log("error products",err)})
      console.log("--- /Cart update ---");
    },
  },
  CARTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      console.log("--- Cart update ---");
      const payload = JSON.parse(body);
     // console.log(payload);
     createCartModel.updateMany({id:payload.id},{$set :payload},{upsert:true},).then(() => {
        console.log("Created cart")
      }).catch((err)=>{console.log("error products",err)})
      console.log("--- /Cart update ---");
    },
  },
  // PRODUCTS_UPDATE: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/addProduct",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },

  // ORDER_TRANSACTIONS_CREATE: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/ordersTransaction",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },
  // ORDERS_CANCELLED: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/ordersCancelled",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },
  // ORDERS_CREATE: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/ordersCreate",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },
  // ORDERS_DELETE: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/orderDelete",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },
  // ORDERS_EDITED: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/orderEdited",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },
  // ORDERS_FULFILLED: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/orderFullfilled",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },
  // ORDERS_PAID: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/orderPaid",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },
  // ORDERS_PARTIALLY_FULFILLED: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/orderPartiallyFullfilled",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- Product update ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /Product update ---");
  //   },
  // },
  // CARTS_UPDATE: {
  //   deliveryMethod: DeliveryMethod.Http,
  //   callbackUrl:
  //     "https://us-central1-xoog-75949.cloudfunctions.net/widgets/cartCreation",
  //   callback: async (topic, shop, body, webhookId) => {
  //     console.log("--- cart create ---");
  //     const payload = JSON.parse(body);
  //     console.log(payload);
  //     console.log("--- /cart create ---");
  //   },
  // },

  CUSTOMERS_DATA_REQUEST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      const payload = JSON.parse(body);
      // Payload has the following shape:
      // {
      //   "shop_id": 954889,
      //   "shop_domain": "{shop}.myshopify.com",
      //   "orders_requested": [
      //     299938,
      //     280263,
      //     220458
      //   ],
      //   "customer": {
      //     "id": 191167,
      //     "email": "john@example.com",
      //     "phone": "555-625-1199"
      //   },
      //   "data_request": {
      //     "id": 9999
      //   }
      // }
    },
  },

  /**
   * Store owners can request that data is deleted on behalf of a customer. When
   * this happens, Shopify invokes this webhook.
   *
   * https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#customers-redact
   */
  CUSTOMERS_REDACT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      const payload = JSON.parse(body);
      // Payload has the following shape:
      // {
      //   "shop_id": 954889,
      //   "shop_domain": "{shop}.myshopify.com",
      //   "customer": {
      //     "id": 191167,
      //     "email": "john@example.com",
      //     "phone": "555-625-1199"
      //   },
      //   "orders_to_redact": [
      //     299938,
      //     280263,
      //     220458
      //   ]
      // }
    },
  },

  /**
   * 48 hours after a store owner uninstalls your app, Shopify invokes this
   * webhook.
   *
   * https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#shop-redact
   */
  SHOP_REDACT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic, shop, body, webhookId) => {
      const payload = JSON.parse(body);
      // Payload has the following shape:
      // {
      //   "shop_id": 954889,
      //   "shop_domain": "{shop}.myshopify.com"
      // }
    },
  },
};
