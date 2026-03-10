const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "vj86b0-dq.myshopify.com";
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";

const SHOPIFY_CONFIGURED = Boolean(storefrontAccessToken);

const endpoint = `https://${domain}/api/2024-10/graphql.json`;

async function shopifyFetch(query: string, variables?: Record<string, unknown>) {
  if (!SHOPIFY_CONFIGURED) {
    throw new Error("Shopify Storefront API token not configured");
  }
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}

export async function createCart() {
  const query = `
    mutation cartCreate {
      cartCreate {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `;
  const data = await shopifyFetch(query);
  return data.data.cartCreate.cart;
}

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number
) {
  const fullVariantId = variantId.startsWith("gid://")
    ? variantId
    : `gid://shopify/ProductVariant/${variantId}`;

  const query = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first: 100) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    priceV2 { amount currencyCode }
                    product { title }
                  }
                }
              }
            }
          }
          cost { totalAmount { amount currencyCode } }
        }
      }
    }
  `;
  const data = await shopifyFetch(query, {
    cartId,
    lines: [{ merchandiseId: fullVariantId, quantity }],
  });
  return data.data.cartLinesAdd.cart;
}

export async function getCart(cartId: string) {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 { amount currencyCode }
                  product { title }
                }
              }
            }
          }
        }
        cost { totalAmount { amount currencyCode } }
      }
    }
  `;
  const data = await shopifyFetch(query, { cartId });
  return data.data.cart;
}

export async function getCheckoutUrl(cartId: string): Promise<string> {
  const cart = await getCart(cartId);
  return cart.checkoutUrl;
}

export { SHOPIFY_CONFIGURED };
