Day 3: DNS Basics  

*What I Learned*  

*What is DNS?*  
- DNS (Domain Name System) is like the internet’s phonebook, converting domain names (e.g., example.com) into IP addresses (e.g., 192.0.2.1).  
- It ensures users can access websites without needing to remember IP addresses.  

*DNS Resolution Process*  
1. *User Action:* A user enters a domain name in their browser.  
2. *Recursive Resolver:* The resolver queries DNS servers to find the corresponding IP address.  
3. *Root Server:* Points the resolver to the Top-Level Domain (TLD) server (e.g., .com).  
4. *TLD Server:* Directs the resolver to the authoritative server for the domain.  
5. *Authoritative Server:* Returns the IP address of the requested domain.  

*Key DNS Record Types*  
- *A Record:* Maps a domain to an IPv4 address.  
- *AAAA Record:* Maps a domain to an IPv6 address.  
- *CNAME Record:* An alias for another domain name.  
- *MX Record:* Specifies the mail server for a domain.  
- *TXT Record:* Contains text information for domain verification or configuration.  

*Hands-On Practice*   
- Explored online tools (e.g., DNS Checker) to view DNS propagation and record details.  

*Reflection*  
- Understanding how DNS translates domains to IPs was insightful.  
- Visualizing the resolution process through practical tools helped clarify concepts.  
