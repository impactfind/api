**Show Detail User**
----
  Returns json data about a single user.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None
  
* **Headers**

  `Authorization=Bearer [token]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, username : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User tidak ditemukan" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Token Tidak Valid" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Show List User**
----
  Returns json data about a single user.

* **URL**

  /users

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   none

* **Data Params**

  None
  
* **Headers**

  `Authorization=Bearer [token]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ id : 12, username : "Michael Bloom" }]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User tidak ditemukan" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Token Tidak Valid" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
  
  **Login User**
  ----
    Returns login token for user.
  
  * **URL**
  
    /user/login
  
  * **Method:**
  
    `POST`
    
  *  **URL Params**
  
     **Required:**
   
     none
  
  * **Data Params**
  
    **Required:**
    
    `username=[string]`
    `password=[string]`
    
  * **Headers**
  
    none
  
  * **Success Response:**
  
    * **Code:** 200 <br />
      **Content:** `{
      "payload": {
        "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFpYTV1cXQwcmszaW44bTl6OWRtZ292d3JiOHB2dSIsInBlcm1pc3Npb25zIjpbIk1lbWJlciJdLCJpYXQiOjE1NjUzMjEyNTZ9.mE2zd42FSixG-MJqJmE1h4iQ2wVj3BfUTrrq4JqSQXCnBtNelItPw6KbGfsW7oLFjGwnlCN_2GpyLzU1INEVaA"
      }`
   
  * **Error Response:**
  
    * **Code:** 404 NOT FOUND <br />
      **Content:** `{
                        "code": 400,
                        "message": "Username atau Password salah",
                        "payload": {}
                      }`
  
    OR
  
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:** `{
                       "code": 400,
                        "message": "Username atau Password salah",
                        "payload": {}
                      }`
  
  * **Sample Call:**
  
    ```javascript
      $.ajax({
        url: "/users/login",
        dataType: "json",
        type : "POST",
        success : function(r) {
          console.log(r);
        }
      });
    ```



**Create User**
----
  create new user.

* **URL**

  /user

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   none

* **Data Params**

  **Required:**
  
  `username=[string]`
  `password=[string]`
  
* **Headers**

  none

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `"payload": {
      "id": "qia5uqt0rk3in8m9z9dmgovwrb8pvu",
      "username": "thor",
      "permissions": [
        "Member"
      ],
      "created_at": 1565314824,
      "updated_at": 1565314824
    }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Something happen, please contact administrator" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "User sudah digunakan" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```



**Change Password User**
----
  Change Password User.

* **URL**

  /user/change-password

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   none

* **Data Params**

  **Required:**
  
  `oldpassword=[string]`
  `password=[string]`
  
* **Headers**

  `Authorization= Bearer [TOKEN]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
  "code": "success",
  "message": "",
  "payload": {
    "code": 200,
    "message": "Password telah diubah",
    "payload": {}
  }
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "USER TIDAK DITEMUKAN" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{
  "code": 400,
  "message": "Password lama tidak valid",
  "payload": {}
}`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/users/change-password",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```
