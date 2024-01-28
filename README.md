# Products App for Getir Case Study

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Tech Stack

- Frontend

  - Development
    - [React](https://react.dev/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [styled-components](https://styled-components.com/)
    - [Redux](https://redux-toolkit.js.org/)
    - [React Content Loader](https://skeletonreact.com)
  - Testing
    - [Jest](https://jestjs.io/)

- Live Versions

  - Frontend Live via Vercell [link]()
  - Backend Api Live via Vercell [link](https://getir-backend-7sjz.vercel.app/)

- Folder Structure

```bash
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── icons
│   │   │   ├── BasketH.tsx
│   │   │   ├── Impluse.tsx
│   │   │   ├── LeftArrow.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Minus.tsx
│   │   │   ├── RightArrow.tsx
│   │   │   └── Tick.tsx
│   │   └── image
│   │       └── defaultImage.png
│   ├── components
│   │   ├── BasketItem
│   │   │   └── BasketItem.tsx
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Card
│   │   │   └── index.tsx
│   │   ├── Checkbox
│   │   │   ├── SkeletonComp.tsx
│   │   │   └── index.tsx
│   │   ├── Input
│   │   │   └── index.tsx
│   │   ├── Pagination
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── ProductItem
│   │   │   ├── SketelonComp.tsx
│   │   │   └── index.tsx
│   │   ├── ShortingRadio
│   │   │   └── ShortingRadio.tsx
│   │   └── __tests__
│   │       ├── BasketItem
│   │       ├── Button
│   │       ├── Card
│   │       ├── CheckBox
│   │       ├── Input
│   │       ├── Pagination
│   │       ├── ProductItem
│   │       └── ShortingRadio
│   ├── constant
│   │   └── api.ts
│   ├── hooks
│   │   └── useAppDistpatch.ts
│   ├── index.tsx
│   ├── layout
│   │   ├── Basket.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Product.tsx
│   │   └── SideMenu.tsx
│   ├── lib
│   │   └── GlobalStyle.ts
│   ├── react-app-env.d.ts
│   ├── store
│   │   ├── brands
│   │   │   └── brandSlice.ts
│   │   ├── cart
│   │   │   └── cartSlice.ts
│   │   ├── filter
│   │   │   └── filterSlice.ts
│   │   ├── product
│   │   │   └── productSlice.ts
│   │   ├── store.ts
│   │   └── tags
│   │       └── tagsSlice.ts
│   ├── theme
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── cardSize.ts
│       └── debounce.ts
├── tsconfig.json
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
```
