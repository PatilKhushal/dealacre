# DealAcres - Next.js Optimized App

## Overview

This application is a Next.js project demonstrating advanced optimization techniques, including debouncing, memoization, dark mode, skeleton loader, and Material-UI usage optimization.\
Public API used: https://dummyjson.com/users

## Features

### Server-Side Rendering (SSR)

- **SSR for Initial Data Fetching**: `getServerSideProps` is used to fetch data on the server side, ensuring that the data is available on initial render, improving performance and SEO.
  
### Debouncing

- **Search Input**: Debouncing is implemented in the search input to improve performance by limiting the number of times the search function is called. The input waits for 2 seconds after the user stops typing before dispatching the search action.

### Memoization

- **Breakpoint Columns Calculation**: The number of columns in the image grid is calculated using `useMemo` based on the screen size breakpoints. This calculation is memoized to avoid unnecessary re-renders.
- **Filtered Data**: The data filtering based on the search query is memoized to ensure it only recalculates when the search query changes.
- **Image List Items**: The `ImageItem` component is memoized using `React.memo` to prevent unnecessary re-renders when the item props have not changed.

### Redux Toolkit

- **State Management**: Used the Redux Toolkit to manage the state across the whole application. This includes storing data, search query, filter type, and dark mode state.

### Dark Mode

- **Dark Mode Toggle**: Users can toggle dark mode. The dark mode state is managed using Redux and CSS classes are dynamically applied to the document root.

### Material-UI Usage Optimization

- **Custom Theme**: A custom Material-UI theme is used to set default properties for various components such as Popover, Popper, Dialog, and Modal.
- **Styled Components**: Material-UI components are styled using the `styled` function from `@emotion/styled` to apply conditional styles based on the dark mode state.

## Installation

1. Clone the repository:

    ```bash
    https://github.com/PatilKhushal/dealacre.git
    cd dealacre
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## Usage

### Running the Application

- Navigate to the project directory and run `npm run dev` to start the development server.
- Open your browser and go to `http://localhost:3000` to view the application.

### Key Components

- **Home Component**: The main component that fetches data, handles state, and renders the `Header` and `Display` components.
- **Header Component**: Contains the search input with debouncing and a filter dropdown. It also includes a toggle switch for dark mode.
- **Display Component**: Renders the filtered list of images using Material-UI's `ImageList`. It optimizes rendering with memoization.

### State Management

- **Redux**: The application uses Redux for state management, storing the data, search query, filter type, and dark mode state.

### Optimization Techniques

- **Server-Side Rendering (SSR)**: Improves initial load time and SEO by fetching data on the server side.
- **Debouncing**: Reduces the number of API calls and improves performance by delaying the search action until the user stops typing.
- **Memoization**: Optimizes performance by preventing unnecessary re-renders and recalculations.
- **Dark Mode**: Enhances user experience with a theme toggle and conditional styling.
- **Material-UI Optimization**: Ensures consistent theming and optimized component rendering using custom themes and styled components.
