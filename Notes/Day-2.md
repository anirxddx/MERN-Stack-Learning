Day 2: HTTPS and Secure Communication

*What I Learned*

*HTTPS Basics*
- HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, using SSL/TLS encryption.
- It provides:
  - *Confidentiality:* Ensures data is encrypted and cannot be intercepted.
  - *Integrity:* Verifies data hasn’t been altered during transmission.
  - *Authentication:* Confirms the server’s identity via SSL certificates.

*Key Concepts*
1. *SSL/TLS Encryption:*  
   - Encrypts data to protect it from attackers.
   - Involves a "handshake" to establish a secure connection between browser and server.
   
2. *Certificates and Certificate Authorities (CA):*  
   - Websites use SSL certificates to prove authenticity.
   - CAs are trusted organizations that issue these certificates.

3. *Benefits of HTTPS:*  
   - Protects sensitive information (passwords, credit card details).
   - Boosts trust with users (visible by the padlock icon in browsers).
   - Improves SEO rankings.

*Hands-On Practice*
- Observed HTTPS connections using Chrome DevTools:
  - Checked the *Security* tab to verify SSL certificates and encryption details.
  - Compared how browsers handle HTTP vs HTTPS connections.

*Reflection*
- Gained clarity on how encryption secures web communication.
- Learned the role of CAs in ensuring website authenticity.
