# crypto-dashboard-template

Template for crypto dashboard projects.

## Installation

Install/use the pinned node version via [nvm](https://github.com/nvm-sh/nvm).

```
nvm install
```

Install project deps.

```
npm install
```

## Usage

Start the application in dev mode.

```
npm run dev
```

The application will be running on http://localhost:3000

## Summary

- Fetch the trading pairs via the [products API]
  (https://docs.cloud.coinbase.com/exchange/reference/exchangerestapi_getproducts)
  and render them in a list view. Only products that have a `status` value of
  `online` should be displayed in the list. Style the list as you see fit and
  include any metadata from the payload that could be helpful
  (e.g. `base_currency`, `quote_currency`, etc)
- Above the results, add an input field that filters the results in real-time
  as a user types - determine what field makes the most sense to search on.
- [Next.js](https://nextjs.org/) is used as the react framework.
- [Tailwindcss](https://tailwindcss.com/) has been installed to help with
  styling if you'd like to use it.
# blueprint
