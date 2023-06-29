# Nuxt 3 Accredify User Dashboard

## Setup

Make sure to install the dependencies:

````bash
# npm
npm install

# pnpm
pnpm install

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev
````

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Testing

```
npm run test
```

Note: as Nuxt's test suite is not ready, testing was limited to utils. I was not able to mount components for testing.
https://nuxt.com/docs/getting-started/testing

### E2E testing

```
npm run cypress:open
```

## User Journey

When you first load the app, you will be at the Beautiful Landing Page.  
There will be 2 buttons at the top: Managed and Personal User log in.  
Click on either and see managed or personal user.

The rest of it should be as per the requirements

## Stack

Nuxt3  
Vitest  
Cypress for E2E testing
Tailwind for CSS

### Notes

Some stuff might not be exactly according to the figma because I used the defaults provided by Tailwind.  
Although it is built with Nuxt3, it is still a Single Page App because SSR is turned off.
