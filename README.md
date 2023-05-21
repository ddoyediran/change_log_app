# Change Log App (API)

This app (Api) allows product manager or engineer to post updates about their product so users can see. For this api, the user can or need to be able to create, update, read and delete product updates.

### Framework

Expressjs

### Database:

PostgreSQL
(Prisma - Object relational mapping sdk)

### Routes

### Registration routes

1. Signin - `POST` - `https://change-log-api-z93y.onrender.com/signin`

2. Register - `POST` - `https://change-log-api-z93y.onrender.com/user`

### Product endpoints routes:

1. Get all products - `GET` - `https://change-log-api-z93y.onrender.com/api/product`

2. Get a product - `GET` - `https://change-log-api-z93y.onrender.com/api/product/:id`

3. Create product - `POST` - `https://change-log-api-z93y.onrender.com/api/product/`

4. Delete a product - `DELETE` - `https://change-log-api-z93y.onrender.com/api/product/:id`

5. Update a product - `PUT` - `https://change-log-api-z93y.onrender.com/api/product/:id`

### Update routes

1. Get all updates - `GET` - `https://change-log-api-z93y.onrender.com/api/update`

2. Get an update - `GET` - `https://change-log-api-z93y.onrender.com/api/update/:id`

3. Create update - `POST` - `https://change-log-api-z93y.onrender.com/api/update/`

4. Delete an update - `DELETE` - `https://change-log-api-z93y.onrender.com/api/update/:id`

5. Update an update - `PUT` - `https://change-log-api-z93y.onrender.com/api/update/:id`

### Update point routes

1. Get all update points - `GET` - `https://change-log-api-z93y.onrender.com/api/updatepoint`

2. Get an update point - `GET` - `https://change-log-api-z93y.onrender.com/api/updatepoint/:id`

3. Create update point - `POST` - `https://change-log-api-z93y.onrender.com/api/updatepoint/`

4. Delete an update point - `DELETE` - `https://change-log-api-z93y.onrender.com/api/updatepoint/:id`

5. Update an update point - `PUT` - `https://change-log-api-z93y.onrender.com/api/updatepoint/:id`
