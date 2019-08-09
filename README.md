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
  
  
  
  
  
  
  **List Project**
  ----
    return json All list project.
  
  * **URL**
  
    /project
  
  * **Method:**
  
    `GET`
    
  *  **URL Params**
  
     **Required:**
   
     none
  
  * **Data Params**
  
    **Required:**
    
    none
    
  * **Headers**
  
    `Authorization= Bearer [TOKEN]`
  
  * **Success Response:**
  
    * **Code:** 200 <br />
      **Content:** `{payload: [
      {
          "id": "ziwtozia84x06jowfcmoq1o02x5pev",
          "name": "Tesla Hater World",
          "status": 0,
          "created_at": 1565321321,
          "updated_at": 1565321321,
          "users": [
            {
              "id": "qia5uqt0rk3in8m9z9dmgovwrb8pvu",
              "username": "thor",
              "password": "27de6230b7d5889ba5f937e3b250d0bd93703911442c16a1718b72bf4e33866f.Zn2Hs4zhnS3YdTrckGuXaQINDlTcY9kB7Kf",
              "permissions": [
                "Member"
              ],
              "status": 0,
              "created_at": 1565314824,
              "updated_at": 1565329726,
              "project_user": {
                "id": "0qlzj9a39802usht9kbb667m09ii1k",
                "projectId": "ziwtozia84x06jowfcmoq1o02x5pev",
                "userId": "qia5uqt0rk3in8m9z9dmgovwrb8pvu",
                "status": 0,
                "created_at": 1565321321,
                "updated_at": 1565321321
              }
            }
          ]
        },    
  ]
  }`
   
  * **Error Response:**
  
    * **Code:** 404 NOT FOUND <br />
      **Content:** `{ error : "PROJECT TIDAK DITEMUKAN" }`
  
    OR
  
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:** `{
    "code": 400,
    "message": "Token tidak valid",
    "payload": {}
  }`
  
  * **Sample Call:**
  
    ```javascript
      $.ajax({
        url: "/project",
        dataType: "json",
        header: "token",
        type : "GET",
        success : function(r) {
          console.log(r);
        }
      });
    ```
    
    **List User Project**
    ----
      return json All User list project.
    
    * **URL**
    
      /project/list/all
    
    * **Method:**
    
      `GET`
      
    *  **URL Params**
    
       **Required:**
     
       none
    
    * **Data Params**
    
      **Required:**
      
      none
      
    * **Headers**
    
      `Authorization= Bearer [TOKEN]`
    
    * **Success Response:**
    
      * **Code:** 200 <br />
        **Content:** `{payload: [
        {
            "id": "ziwtozia84x06jowfcmoq1o02x5pev",
            "name": "Tesla Hater World",
            "status": 0,
            "created_at": 1565321321,
            "updated_at": 1565321321,
            "users": [
              {
                "id": "qia5uqt0rk3in8m9z9dmgovwrb8pvu",
                "username": "thor",
                "password": "27de6230b7d5889ba5f937e3b250d0bd93703911442c16a1718b72bf4e33866f.Zn2Hs4zhnS3YdTrckGuXaQINDlTcY9kB7Kf",
                "permissions": [
                  "Member"
                ],
                "status": 0,
                "created_at": 1565314824,
                "updated_at": 1565329726,
                "project_user": {
                  "id": "0qlzj9a39802usht9kbb667m09ii1k",
                  "projectId": "ziwtozia84x06jowfcmoq1o02x5pev",
                  "userId": "qia5uqt0rk3in8m9z9dmgovwrb8pvu",
                  "status": 0,
                  "created_at": 1565321321,
                  "updated_at": 1565321321
                }
              }
            ]
          },    
    ]
    }`
     
    * **Error Response:**
    
      * **Code:** 404 NOT FOUND <br />
        **Content:** `{ error : "PROJECT TIDAK DITEMUKAN" }`
    
      OR
    
      * **Code:** 401 UNAUTHORIZED <br />
        **Content:** `{
      "code": 400,
      "message": "Token tidak valid",
      "payload": {}
    }`
    
    * **Sample Call:**
    
      ```javascript
        $.ajax({
          url: "/project/list/all",
          dataType: "json",
          header: "token",
          type : "GET",
          success : function(r) {
            console.log(r);
          }
        });
      ```
      
      **Detail Project**
      ----
        return json detail project.
      
      * **URL**
      
        /project/:id
      
      * **Method:**
      
        `GET`
        
      *  **URL Params**
      
         **Required:**
       
         `id=[string]`
      
      * **Data Params**
      
        **Required:**
        
        none
        
      * **Headers**
      
        `Authorization= Bearer [TOKEN]`
      
      * **Success Response:**
      
        * **Code:** 200 <br />
          **Content:** `{payload: 
          {
              "id": "ziwtozia84x06jowfcmoq1o02x5pev",
              "name": "Tesla Hater World",
              "status": 0,
              "created_at": 1565321321,
              "updated_at": 1565321321,
              "users": [
                {
                  "id": "qia5uqt0rk3in8m9z9dmgovwrb8pvu",
                  "username": "thor",
                  "password": "27de6230b7d5889ba5f937e3b250d0bd93703911442c16a1718b72bf4e33866f.Zn2Hs4zhnS3YdTrckGuXaQINDlTcY9kB7Kf",
                  "permissions": [
                    "Member"
                  ],
                  "status": 0,
                  "created_at": 1565314824,
                  "updated_at": 1565329726,
                  "project_user": {
                    "id": "0qlzj9a39802usht9kbb667m09ii1k",
                    "projectId": "ziwtozia84x06jowfcmoq1o02x5pev",
                    "userId": "qia5uqt0rk3in8m9z9dmgovwrb8pvu",
                    "status": 0,
                    "created_at": 1565321321,
                    "updated_at": 1565321321
                  }
                }
              ]
            },    
      }`
       
      * **Error Response:**
      
        * **Code:** 404 NOT FOUND <br />
          **Content:** `{ error : "PROJECT TIDAK DITEMUKAN" }`
      
        OR
      
        * **Code:** 401 UNAUTHORIZED <br />
          **Content:** `{
        "code": 400,
        "message": "Token tidak valid",
        "payload": {}
      }`
      
      * **Sample Call:**
      
        ```javascript
          $.ajax({
            url: "/project/:id",
            dataType: "json",
            header: "token"
            type : "GET",
            success : function(r) {
              console.log(r);
            }
          });
        ```
        
        **Create Project**
        ----
          create project
        
        * **URL**
        
          /project
        
        * **Method:**
        
          `PUT`
          
        *  **URL Params**
        
           **Required:**
         
           none
        
        * **Data Params**
        
          **Required:**
          
          `name: [string]`
          
        * **Headers**
        
          `Authorization= Bearer [TOKEN]`
        
        * **Success Response:**
        
          * **Code:** 200 <br />
            **Content:** `{
                "code": "success",
                "message": "",
            }`
         
        * **Error Response:**
        
          * **Code:** 404 NOT FOUND <br />
            **Content:** `{ error : "PROJECT TIDAK DITEMUKAN" }`
        
          OR
        
          * **Code:** 401 UNAUTHORIZED <br />
            **Content:** `{
          "code": 400,
          "message": "Token tidak valid",
          "payload": {}
        }`
        
        * **Sample Call:**
        
          ```javascript
            $.ajax({
              url: "/project",
              dataType: "json",
              header: "token"
              type : "PUT",
              success : function(r) {
                console.log(r);
              }
            });
          ```
          
          **Update Project**
          ----
            update project
          
          * **URL**
          
            /project/:id
          
          * **Method:**
          
            `POST`
            
          *  **URL Params**
          
             **Required:**
           
             `id=[string]`
          
          * **Data Params**
          
            **Required:**
            
            `name: [string]`
            
          * **Headers**
          
            `Authorization= Bearer [TOKEN]`
          
          * **Success Response:**
          
            * **Code:** 200 <br />
              **Content:** `{
                  "code": "success",
                  "message": "",
              }`
           
          * **Error Response:**
          
            * **Code:** 404 NOT FOUND <br />
              **Content:** `{ error : "PROJECT TIDAK DITEMUKAN" }`
          
            OR
          
            * **Code:** 401 UNAUTHORIZED <br />
              **Content:** `{
            "code": 400,
            "message": "Token tidak valid",
            "payload": {}
          }`
          
          * **Sample Call:**
          
            ```javascript
              $.ajax({
                url: "/project/:id",
                dataType: "json",
                header: "token"
                type : "POST",
                success : function(r) {
                  console.log(r);
                }
              });
            ```
            
            **Leave Project**
            ----
              leave project
            
            * **URL**
            
              /delete/:id/leave
            
            * **Method:**
            
              `DELETE`
              
            *  **URL Params**
            
               **Required:**
             
               `id=[string]`
            
            * **Data Params**
            
              **Required:**
              
              none
              
            * **Headers**
            
              `Authorization= Bearer [TOKEN]`
            
            * **Success Response:**
            
              * **Code:** 200 <br />
                **Content:** `{
                    "code": "success",
                    "message": "",
                }`
             
            * **Error Response:**
            
              * **Code:** 404 NOT FOUND <br />
                **Content:** `{ error : "PROJECT TIDAK DITEMUKAN" }`
            
              OR
            
              * **Code:** 401 UNAUTHORIZED <br />
                **Content:** `{
              "code": 400,
              "message": "Token tidak valid",
              "payload": {}
            }`
            
            * **Sample Call:**
            
              ```javascript
                $.ajax({
                  url: "/project/:id/leave",
                  dataType: "json",
                  header: "token"
                  type : "DELETE",
                  success : function(r) {
                    console.log(r);
                  }
                });
              ```
    
