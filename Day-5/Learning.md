Day 5: Analyzing and Documenting an HTTP Request  

*What I Learned*  

*HTTP Request Structure*  
1. *Request Line:*  
   - Contains the method, URL, and HTTP version.  
   - Example:  
       
     GET /example HTTP/1.1  
       
2. *Headers:*  
   - Provide additional information about the request.  
   - Examples:  
     - User-Agent: Identifies the browser making the request.  
     - Host: Specifies the domain being accessed.  

3. *Body (Optional):*  
   - Contains data for POST or PUT requests (e.g., JSON, form data).  

*HTTP Response Structure*  
1. *Status Line:*  
   - Includes the HTTP version and status code.  
   - Example:  
       
     HTTP/1.1 200 OK  
      
2. *Headers:*  
   - Metadata about the response (e.g., Content-Type, Cache-Control).  

3. *Body:*  
   - The requested resource (e.g., HTML, JSON).  

*Reflection*  
- Analyzing requests and responses helped demystify how browsers and servers communicate.  
- Learning the role of headers in providing context and control was particularly insightful.  
