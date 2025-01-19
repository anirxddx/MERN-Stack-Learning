Day 6: Exploring Cookies, Sessions, and Caching  

*What I Learned*  

*Cookies*  
- Small pieces of data stored in the browser, sent with each HTTP request to maintain state.  
- *Uses:*  
  - Track user sessions.  
  - Store preferences or authentication tokens.  
- *Key Attributes:*  
  - Secure: Ensures the cookie is sent over HTTPS only.  
  - HttpOnly: Prevents access via JavaScript for added security.  


*Sessions*  
- Server-side storage of user data tied to a session ID.  
- Works with cookies to track logged-in users or shopping carts.  


*Caching*  
1. *What is Caching?*  
   - Stores copies of resources to improve web performance and reduce server load.  

2. *Types of Caching:*  
   - *Browser Cache:* Stores resources locally on the user’s device.  
   - *Server Cache:* Serves pre-computed responses for faster delivery.  

3. *Cache-Control Headers:*  
   - no-cache: Forces validation with the server before using the cache.  
   - no-store: Prevents caching entirely.  
   - max-age: Specifies the time (in seconds) the resource is considered fresh.  

*Hands-On Practice*  
- Inspected cookies in Chrome DevTools:  
  - Observed session cookies and their attributes.  
- Tested caching by refreshing and clearing browser cache:  
  - Verified cache-control headers for various websites.  

*Reflection*  
- Gained a better understanding of how cookies and sessions manage state.  
- Practical exploration of cache-control headers clarified their impact on performance.  
