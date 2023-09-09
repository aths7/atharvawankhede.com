## Do websites have an Aadhaar Card? Understanding PKI, Digital Signatures & Digital Certificates.

> _Trust is the belief that somebody is good, honest, or sincere and will not do any harm or trick you._

A short explanation of what is cryptography, public key, private key, digital signature, digital certificate, certificate authority, communication over the internet and how all these components form the Public Key Infrastructure (PKI).

This also builds the basis of understanding a part of _Bitcoin._

---

Alice wants to send Bob a confidential document via the internet. Chandu wants to steal the doc.

Some mathematically proved beliefs:

1. There are two mathematical keys. One can only encrypt (or lock) the data, the other can only decrypt (or unlock) the data.
2. A computer program creates this set of keys. One key cannot be generated from the second key and vice-versa.
3. No two duplicate set of keys can ever be generated mathematically by the computer program. (The set is unique)

Key shared with the public is the **public key** _usually_ used to lock the data. The **private key** is kept a secret, _usually_ for unlocking.

So, Alice requests Bob for his public key. Then Alice encrypts the document with the key and sends it to Bob. If Chandu hijacks their conversation and obtains the file, he cannot decrypt the doc. Bob and Alice get what they want. Chandu fails.

But, what if Chandu pretends to be Bob? And sends his public key instead. How can Alice ensure the authenticity of Bob? Does Bob have an Aadhar Card?

We introduce an authority to validate the authenticity of Bob via an aadhar card — **Certificate Authority (CA)**. It issues a digital certificate for Bob which contains his public key.

Now, Alice requests Bob’s digital certificate from the internet, encrypts the doc using the public key and sends it to Bob.

Again, how to ensure the digital certificate’s authenticity & integrity?

When Bob applies to the CA for the digital certificate he sends his public key. CA creates the digital certificate with the following details:

1. Bob’s Name
2. Bob’s Public Key
3. Date of Expiration.
4. Time Stamp

Then the CA signs this certificate with its _digital signature._

A digital signature is the locking of the hash number of the certificate & the timestamp with its locking key, which is kept private (yes, here the locking key is private instead of the unlocking key).
Hashing is a universal process or a universal mathematical formula (Cryptography) to generate a hash number of a document. The process is such that is even if there is a small change in the document, the hash number changes. So, two unique documents cannot have the same hash number.

A digital signature is the locking of the hash number of the certificate & the timestamp with its locking key, which is kept private (yes, here the locking key is private instead of the unlocking key).

Hashing is a universal process or a universal mathematical formula (Cryptography) to generate a _hash number_ of a document. The process is such that is even if there is a small change in the document, the hash number changes. So, two unique documents cannot have the same hash number.

---

When Alice receives Bob’s certificate signed by a Certificate Authority known to Alice, she can lock her document using Bob’s public key she received from the internet and send it to Bob confidentially.

But how does Alice authenticate Certificate Authority’s digital signature?

Generates the hash number of the certificate using the same universal hashing process.

Then she decrypts the hash number attached to the certificate using CA’s unlocking key (since she knows the CA, which means she has the Certificate Authority’s digital certificate )

If both the hash numbers match, voilà! Aadhar card is valid.

Btw, all this is done by Alice’s browser. Alice only ensures she does not share her private key.

But what if the CA’s digital certificate is compromised? Let’s introduce one more authority, the Root CA, which maintains and distributes the Digital Certificate of CA to the browsers.

The Root CA comes online only when there is a new CA to be registered. It distributes the CA’s certificate to the browsers and then goes offline — off the internet. The process is very stringent and it has a lot of steps. So, when the browsers (meaning the software companies that make the browsers) adds this digital certificate to their list of know CAs, we know it is authentic and we can trust it. Thus ensuring the integrity of the entire system.

Now there is one problem in the entire scenario: What if after Bob has received a digital certificate from the CA, a member of

Bob’s company (Chandu infiltrates the organization) decides to go rogue and steals the private key associated with the digital certificate?

Bob would want everyone to know that this certificate is now invalid. He will make a new certificate. And the CAs add this certificate number to their Certificate Revocation List (CRL). There is also a protocol that just checks the validity of the certificate from the CRL called Online Certificate Status Protocol (OCSP Responder).

Now, when the browsers want to check if the certificate is valid, it just asks the OCSP Responder.

Recently, Google has proposed another solution to this problem — they have created an online log of all the certificates called the Certificate Transparency Log. Here all the certificates are logged. So, if there is a bogus certificate or a duplicate certificate, it would be identified in the log.

To sum it up:

![Public Key Infrastructure](/images/blog/essay2-img1.png)

---

The idea of bitcoin includes sharing a document.

Let’s give that doc some content and say it is a cheque which says that Bob will give Alice ₹50.

Bob signs that document (digital signature).

Alice knows the document came from Bob and not Chandu.

Chandu cannot change the document value either, because Alice would know!

Can you guess why? (Involves a mathematical formula)

So when you read about Bitcoin, you already know how Bob signed the document and how people maintain authenticity over the internet.

> _And the building blocks of trust on the internet._

---

_The essay was orignally published on [Medium](https://atharvaw007.medium.com/do-websites-have-an-aadhaar-card-understanding-pki-digital-signatures-digital-certificates-d7ef455f57d))_
