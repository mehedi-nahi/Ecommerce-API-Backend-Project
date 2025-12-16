# E-Commerce Backend API

A comprehensive Node.js/Express backend API for an e-commerce platform with MongoDB database integration, featuring product management, user authentication, cart functionality, and payment gateway integration.

## 🚀 Features

### ✅ Implemented Features

- **Product Catalog Management**
  - Browse products by brand, category, and slider placement
  - Filter products by remark tags (new, trending, popular, special, regular)
  - Full-text search with case-insensitive keyword matching
  - Detailed product information with image gallery support
  - Product reviews and ratings system

- **User Authentication & Authorization**
  - Email-based OTP authentication system
  - JWT token-based session management
  - Secure password-less login flow
  - Token expiration and refresh handling

- **User Profile Management**
  - Complete customer profile with shipping and billing addresses
  - Profile creation and update with validation
  - Upsert operations for seamless data management

- **Wishlist System**
  - Add products to wishlist
  - View wishlist with full product details
  - Remove items from wishlist
  - User-specific wishlist isolation

### 🚧 In Development

- **Shopping Cart**: Multi-item cart with quantity management
- **Order Processing**: Complete checkout and order tracking
- **Payment Gateway**: SSLCommerz integration for secure payments
- **Invoice System**: Automated invoice generation and management

## 📋 Database Models

- **Users**: User authentication and account management
- **Profiles**: Extended user profile information
- **Products**: Product catalog with details
- **Brands**: Product brand categorization
- **Categories**: Product category organization
- **Sliders**: Homepage slider/banner management
- **Reviews**: Product reviews and ratings
- **Details**: Additional product details
- **Carts**: Shopping cart management
- **Wishes**: Wishlist functionality
- **Orders**: Order processing and history
- **Invoices**: Invoice generation
- **InvoiceProducts**: Invoice line items

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, Rate Limiting
- **Email**: Nodemailer
- **Package Manager**: npm

## 📡 API Endpoints

### Product Endpoints
- `GET /api/BrandList` - List all brands
- `GET /api/CategoryList` - List all categories
- `GET /api/ProductListBySlider` - Products featured in slider
- `GET /api/ProductListByCategory/:CategoryID` - Products by category
- `GET /api/ProductListByBrand/:BrandID` - Products by brand
- `GET /api/ProductListByRemark/:Remark` - Products by remark (new, trending, popular)
- `GET /api/ProductListByKeyword/:keyword` - Search products by keyword
- `GET /api/ProductDetailsID/:ProductID` - Product details
- `GET /api/ReviewList/:ProductID` - Product reviews

### User Endpoints
- `POST /api/UserOTP/:email` - Send OTP for registration/login
- `POST /api/VerifyLogin/:email/:otp` - Verify OTP and login
- `GET /api/UserLogout` - User logout
- `POST /api/CreateProfile` - Create user profile
- `POST /api/UpdateProfile` - Update user profile
- `GET /api/ReadProfile` - Get user profile

### Cart & Wishlist
- `GET /api/CartList` - Get cart items
- `POST /api/SaveCartList` - Add to cart
- `POST /api/UpdateCartList/:cartID` - Update cart item
- `POST /api/RemoveCartList` - Remove from cart
- `GET /api/WishList` - Get wishlist
- `POST /api/SaveWishList` - Add to wishlist
- `POST /api/RemoveWishList` - Remove from wishlist

### Orders & Invoices
- `POST /api/CreateInvoice` - Create new order/invoice
- `GET /api/InvoiceList` - Get user invoices
- `GET /api/InvoiceProductList/:invoice_id` - Get invoice details

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/mehedi-nahi/Ecommerce-API-Backend-Project.git

# Navigate to project directory
cd Ecommerce-API-Backend-Project

# Install dependencies
npm install

# Configure environment variables
# Create a .env file and add your configuration

# Start the development server
npm run dev

# Start the production server
npm start
```

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5050
DATABASE=your_mongodb_connection_string
JWT_KEY=your_jwt_secret_key
JWT_EXPIRE_TIME=30d

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Other configurations
MAX_JSON_SIZE=50mb
URL_ENCODE=true
REQUEST_TIME=20*60*1000
REQUEST_NUMBER=2000
WEB_CACHE=false
```

## 🧪 Testing

Use Postman or any API testing tool to test the endpoints. Make sure to:

1. First call the `/api/UserOTP/:email` endpoint to get OTP
2. Then verify with `/api/VerifyLogin/:email/:otp` to get JWT token
3. Include the JWT token in the Authorization header for protected routes:
   ```
   Authorization: Bearer <your_jwt_token>
   ```

## 📁 Project Structure

```
├── app/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── middlewares/    # Custom middleware (Auth)
│   ├── model/          # Mongoose schemas
│   ├── service/        # Business logic layer
│   └── utility/        # Helper functions (Email, Token)
├── routes/
│   └── api.js         # API route definitions
├── dummy_data/        # Sample data for testing (ignored in git)
├── .gitignore
├── app.js             # Application entry point
├── package.json
└── README.md
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. The authentication flow:

1. User requests OTP via email
2. User verifies OTP and receives JWT token
3. JWT token must be included in subsequent requests
4. Token expires after 30 days (configurable)

Protected routes require the `AuthMiddleware` which validates the JWT token.

## 🛡️ Security Features

- **Helmet**: Secures Express apps by setting various HTTP headers
- **CORS**: Cross-Origin Resource Sharing enabled
- **Rate Limiting**: Prevents abuse by limiting requests per IP
- **JWT Authentication**: Secure token-based authentication
- **Email OTP**: Two-factor authentication via email

## 💳 Payment Gateway

Ready for payment gateway integration. The structure supports:
- Order processing
- Invoice generation
- Payment status tracking
- Delivery status management

## 📊 API Response Format

Success Response:
```json
{
  "status": "success",
  "data": { }
}
```

Error Response:
```json
{
  "status": "error",
  "data": "Error description"
}
```

## 🗂️ Database Collections

- `users` - User accounts (email, OTP)
- `profiles` - User profiles (address, contact info)
- `brands` - Product brands
- `categories` - Product categories
- `products` - Product catalog
- `productdetails` - Extended product information
- `productsliders` - Homepage sliders
- `carts` - Shopping cart items
- `wishes` - Wishlist items
- `reviews` - Product reviews
- `invoices` - Order invoices
- `invoiceproducts` - Invoice line items

## 🚀 Deployment

This API can be deployed on:
- **Heroku**
- **AWS EC2**
- **DigitalOcean**
- **Vercel**
- **Railway**

Make sure to:
1. Set environment variables on your hosting platform
2. Configure MongoDB connection string
3. Update CORS settings for your frontend domain

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Mehedi Hasan Nahi**

- GitHub: [@mehedi-nahi](https://github.com/mehedi-nahi)
- Repository: [Ecommerce-API-Backend-Project](https://github.com/mehedi-nahi/Ecommerce-API-Backend-Project)

## 🐛 Troubleshooting & Best Practices

### Common Issues & Solutions

#### Issue: Empty results in aggregation queries
**Solution**: Ensure field names in aggregation stages match schema definitions exactly (case-sensitive). For example:
- Schema uses `categoryId` (lowercase 'd')
- Query must use `{$match: {categoryId: ObjectId}}`, not `{$match: {CategoryID: ObjectId}}`

#### Issue: Aggregation filters out documents unexpectedly
**Solution**: Use `preserveNullAndEmptyArrays: true` in `$unwind` stages:
```javascript
let UnwindStage = {
  $unwind: {
    path: "$fieldName",
    preserveNullAndEmptyArrays: true
  }
};
```

#### Issue: Module import errors with ES6 syntax
**Solution**: Ensure `package.json` includes `"type": "module"` for ES6 import/export support.

#### Issue: JWT token returns empty object
**Solution**: Always `await` async functions when calling them:
```javascript
// Wrong
let token = TokenEncode(email, user_id);

// Correct
let token = await TokenEncode(email, user_id);
```

#### Issue: String vs ObjectId mismatch in database queries
**Solution**: Convert string IDs to ObjectId when matching against MongoDB `_id` fields:
```javascript
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

let id = new ObjectId(req.params.id);
```

### Development Best Practices

1. **Always validate user input** before database operations
2. **Use try-catch blocks** in all service functions for error handling
3. **Return consistent response formats** (`{status, data/message}`)
4. **Log errors appropriately** for debugging and monitoring
5. **Test endpoints with Postman** before marking features as complete
6. **Keep authentication tokens secure** - never log or expose them
7. **Use environment variables** for all sensitive configuration
8. **Index frequently queried fields** for better performance
9. **Implement proper error messages** that don't expose system internals
10. **Document API changes** in the README when adding new endpoints

## 📮 Support

For support, please open an issue in the GitHub repository or contact via email.

## 🙏 Acknowledgments

- Express.js community
- MongoDB & Mongoose documentation
- All contributors and supporters

---

⭐️ If you find this project useful, please consider giving it a star on GitHub!

**Happy Coding! 🚀**

