# diary
----
 <br>**Diarys**
| METHOD | URL                                       |
|--------|-------------------------------------------|
| POST   | https://127.0.0.1:8080/diary/new          |
| GET    | https://127.0.0.1:8080/diarys             |
| GET    | https://127.0.0.1:8080/diary/{id}         |
| PUT    | https://127.0.0.1:8080/diary/{id}         |
| DELETE | https://127.0.0.1:8080/diary/{id}         |
| GET    | https://127.0.0.1:8080/bookmarks          |
**Users**
| METHOD | URL                                |
| ------ | :--------------------------------- |
| POST   | https://127.0.0.1:8080/user/new    |
| GET    | https://127.0.0.1:8080/users       |
| GET    | https://127.0.0.1:8080/user/{id}   |
| PUT    | https://127.0.0.1:8080/user/{id}   |
| DELETE | https://127.0.0.1:8080/user/{id}   |

**Images**
| METHOD | URL                                |
| ------ | :--------------------------------- |
| POST   | https://127.0.0.1:8080/image/new   |
| PUT    | https://127.0.0.1:8080/image/{id}  |

*  **URL Params**

   **Required:**
   `id=[Long Type]`

**Data Params** <br />
Diary Class: 
| Parameter Name | Data Type | Description| 
| -------------- |-----------|---------------------------------|
| id | Long int | primary key of Diary class|
| title | String | title of diary|
| content | String | content of diary |
| createdAt | LocalDateTime | created date and time of diary |
| updatedAt | LocalDateTime | updated date and time of diary |
| deletedAt | LocalDateTime | deleted date and time of diary |
| bookmark | boolean | whether it is bookmarked |
| User | user | Foreign key of Many to One relation with User class |

User Class: 
| Parameter Name | Data Type | Description| 
| -------------- |-----------|---------------------------------|
| id | Long int | primary key of User class |
| account | String | account of user |
| password | String | encrypted password of user |
| name | String | name of user |
| email | String | email address of user |
| auth | String | authentication of user |
| createdAt | LocalDateTime | created date and time of user |
| updatedAt | LocalDateTime | updated date and time of user |
| deletedAt | LocalDateTime | deleted date and time of user |
| List<Diary> | diaryList | One to Many relation with Diary class |

Image Class: 
| Parameter Name | Data Type | Description| 
| -------------- |-----------|---------------------------------|
| id | Long int | primary key of Image class |
| originalFileName | String | original file name |
| storedFilePath | String | stored file path |
| fileSize | Long | size of file |
| diary | Diary | one to one relation with diary class |


