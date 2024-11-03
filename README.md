<a name="readme-top"></a>

  <h3 align="center">Shop Management - Laract CRUD</h3>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About

<div>
<h3>Shop Management - Laract CRUD</h3>
<p align="justify">Meet Shop Management – the all-in-one solution to streamline operations, boost productivity, and keep your team aligned, wherever they are.</p>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This Project is built with :

* [![ReactJs][React.js]][React-url]
* [![Laravel][LaravelB]][Laravel-url]
* [![MySQL DB][MySQL]][MySQL-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Follow the instruction below to install the project locally.

### Installation

Follow the steps below for installation of this project.

1. Clone the repo.
   ```sh
   git clone https://github.com/sodaAPI/edii-codetest-laract-crud.git
   ```
2. Install NPM packages in ./laract-client-side/
   ```sh
   npm install
   ```
3. Migrate database in ./laract-server-side/.
   ```js
   php artisan migrate
   ```
4. Setting your .env in ./laract-server-side/.env.
  ```sh
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=shop_db
  DB_USERNAME=root
  DB_PASSWORD=
  ```
6. Run your MySQL server (i'm using XAMPP).
7. Start Front-End in ./laract-client-side folder
   ```js
   npm start
   ```
8. Start Back-End in ./laract-server-side folder.
   ```js
   php artisan serve
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React_Js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[LaravelB]: https://img.shields.io/badge/Laravel-20232A?style=for-the-badge&logo=laravel&logoColor=FFFFF
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-20232A?style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4
[MySQL]: https://img.shields.io/badge/MySQL-20232A?style=for-the-badge&logo=mysql&logoColor=4479A1
[TailwindCSS-url]: https://tailwindcss.com/
[MySQL-url]: https://www.mysql.com/
[React-url]: https://reactjs.org/
[Laravel-url]: https://laravel.com/
