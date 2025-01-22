# Pokémon App

A responsive React.js application that fetches Pokémon data from the [PokéAPI](https://pokeapi.co/) and displays it in beautiful Bootstrap-styled cards. The app includes a search functionality to filter Pokémon by name.

## Features
- Fetch Pokémon data from the PokéAPI.
- Display Pokémon data in responsive card layouts.
- Search Pokémon by name.
- Clean and modular code structure.
- Fully responsive design using Bootstrap.

## Screenshots
### Home Page

![Screenshot (140)](https://github.com/user-attachments/assets/a57605af-0535-467a-9e9d-47aeb9feb11f)

![Screenshot (141)](https://github.com/user-attachments/assets/6fcfec1a-c88f-4897-be5b-0b95f8dc69ad)


---

## Tech Stack
- **React.js**: For building the user interface.
- **Axios**: For API calls to fetch Pokémon data.
- **Bootstrap**: For responsive and modern UI design.
- **CSS**: For custom styling.

---

## Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js (v14 or above)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ankki457/Pokemon-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pokemon-App
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage
1. Open the app in your browser at [http://localhost:3000](http://localhost:3000).
2. Browse through the Pokémon cards.
3. Use the search bar to filter Pokémon by name.

---

## File Structure
```
pokemon-app/
├── src/
│   ├── components/
│   │   ├── PokemonCard.js  # Component for displaying Pokémon cards
│   │   └── SearchBar.js    # Component for the search bar
│   ├── styles.css          # Custom styling
│   ├── App.js              # Main application logic
│   └── index.js            # Entry point
├── public/
│   ├── index.html          # Main HTML template
├── package.json            # Project configuration
└── README.md               # Project documentation
```

---

## API Reference
This project uses the [PokéAPI](https://pokeapi.co/).

- **Endpoint**: `/pokemon`
- **Example**:
  ```json
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
  }
  ```

---

## Contributions
Contributions are welcome! Feel free to:
- Report issues.
- Create pull requests.
- Suggest new features.

---

## Author
**Ankit Sahu**  
[GitHub](https://github.com/ankki457) | [LinkedIn](https://www.linkedin.com/in/ankki-shah)
