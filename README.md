# Huddle-io

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


### Key Directories and Files

- `.next/`: Contains the build output and static files generated by Next.js.
- `public/`: Contains static assets like images and fonts.
- `src/`: Contains the source code of the application.
  - `app/`: Contains the main application pages and components.
  - `components/`: Contains reusable UI components.
  - `data/`: Contains static data used in the application.
  - `lib/`: Contains utility functions and libraries.
  - `store/`: Contains Redux store configuration and slices.
- `tailwind.config.ts`: Configuration file for Tailwind CSS.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Contains the project dependencies and scripts.
- `README.md`: This file.

## Project Flow

## Home Page
Users land on the home page where they can see an overview of the application.

## Dashboard
Users can navigate to the dashboard to see their activities and progress.

## Workroom
- **Create Workroom**: Users can select team members, add tasks, and go live.
- **Join Workroom**: Users can join an existing workroom by selecting team members and tasks.

## Friends
Users can view and manage their friends, including inviting new friends and viewing friend activities.

## Leaderboards
Users can view the leaderboards to see their ranking and the rankings of their friends.

---

# Pages and Components

### `app/`
Contains the main application pages.

### `dashboard/`
Contains the dashboard-related pages.

### `workroom/`
Contains the workroom-related pages.
- **`page.js`**: The main page for the workroom.
- **`join/`**: Contains the join workroom page.

### `components/`
Contains reusable UI components.
- **`ui/`**: Contains UI components like buttons, inputs, and toasts.
- **`shared/`**: Contains shared components like the sidebar and notification bar.

### `data/`
Contains static data used in the application.
- **`workroom.ts`**: Contains data related to workroom members and tasks.
- **`friends.ts`**: Contains data related to friends and their tasks.

---

# Redux Store

The Redux store is configured in the `store` directory and contains the following slices:

- **`counterSlice.tsx`**: Contains the counter slice.
- **`screenShareSlice.tsx`**: Contains the screen share slice.


### Development

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
