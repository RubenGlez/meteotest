# Meteotest

Please note that this repository was created as part of a selection process and should not be considered a final product.

## Introduction

Meteotest is a SPA (Single Page Application) that displays weather forecasts for three specific cities (London, Toronto, and Singapore).
The interface features a header with the app's title and a language selector (English and Spanish) and a tabbed widget.
Each tab corresponds to one of the cities. For each tab, there is a section with two bands:

- Upper band: Consists of two sections:
  - Current Forecast: Shows the details of the weather forecast for the selected hour.
  - Hourly Forecast: Displays a summary of the forecasts for each hour of the selected day. Clicking on it will show the details in the upper band.
- Lower band: Displays a list with the summary of the daily forecasts. The minimum and maximum temperatures are calculated values based on the hourly values for that particular day. Clicking on any of these items will show the forecast details in the upper band.

## Architecture

The chosen architecture is an adaptation of the hexagonal architecture to functional programming, where business logic is completely isolated from presentation logic, and we maintain the SOLID principles. The `core` folder contains the business logic.

- `domain`: Contains the domain entities of our application
- `application`: Contains the use cases
- `infrastructure`: Contains the API repository and other utilities such as an error class that we will use in this repository and the DTO that transforms the data obtained by the API into our domain entity

## State Management

Given that it's a SPA and doesn't need to share data with other sections or pages of the application (in which case I would have chosen Redux), the React Context API has been used. All the presentational logic is enclosed within a Provider. The consumption of this logic has been delegated to a hook that accesses all the context data. This way, we can isolate all the logic from the components.

## UI

For the presentation layer, a methodology of components and containers has been followed, opting for an atomic design of components. This way, we have completely reusable components, with minimal logic and as agnostic as possible. These components are located in the `components` folder. On the other hand, containers manage all the logic.

For styling the components, StyledComponents was chosen due to its flexibility in creating semantic components that depend on properties, and for the cleanliness it brings as it allows us to separate the styling of components from the views themselves. It also has other advantages, such as automatically adding browser-specific prefixes.

To not excessively extend the test, I decided not to apply "responsive" design and fit the entire widget into an 800px wide container.

## Internationalization

To provide the app with different languages, the `i18n` library was used, setting up the two required languages. Dates and temperatures (Celsius/Fahrenheit) are also internationalized.

## Error Handling

Error handling (in this case, from the API request) has been implemented through an `<Alert/>` component, which displays an error message. It can be tested by starting the app without an internet connection.

## Testing

A unit test of the Tabs component is included, using Jest and React Testing Library.

## Other Considerations

To test the application's functionality, it's necessary to download the repository locally and install the dependencies by executing the command `npm i`. It's also necessary to create a file named `.env` where we will set an environment variable with the API key for the [openweathermap](https://openweathermap.org/forecast5) service like this `VITE_OPEN_WEATHER_API_KEY=your_api_key_here` (If needed, I can provide the one I've created). Once this is done, we can start the app by executing `npm run dev`.
