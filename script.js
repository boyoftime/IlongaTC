body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    text-align: center;
    background-color: #4CAF50;
    padding: 20px;
    color: white;
}

.logo {
    max-width: 100px;
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.search-section {
    margin: 20px 0;
}

input, button {
    padding: 10px;
    margin: 5px;
    font-size: 16px;
}

.results {
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
}

.results table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    
}

.results th, .results td {
    border: 1px solid #005709;
    padding: 8px;
    border-width: 3px;
    
}

.results th {
    background-color: #253925;
    color: white;
}

.results td:nth-child(even) {
    background-color: #ffffff;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
}

footer button {
    padding: 10px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

/* Roboto Font Classes */
.roboto-thin {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: normal;
}

.roboto-light {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
}

.roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.roboto-medium {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
}

.roboto-bold {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
}

.roboto-black {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: normal;
}

.roboto-thin-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: italic;
}

.roboto-light-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: italic;
}

.roboto-regular-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: italic;
}

.roboto-medium-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: italic;
}

.roboto-bold-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: italic;
}

.roboto-black-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: italic;
}
