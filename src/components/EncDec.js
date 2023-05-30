// PlACEHOLDER

// # Author: Daniel Mendes
// # Date:   5/9/23
// # Desc:   This is just a draft of how we could create and operate 
// #         budget objects in the final project. This has basic JSON
// #         file I/O and a general structure for a "Budget" Object

// import json
// from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
// from cryptography.hazmat.primitives import hashes
// import base64


// class EncDec: 
//     ##########################################
//     ### EncDec CLASS DATA MEMBERS
//     ##########################################

//     iv = b"1122334455667788"

//     ##########################################
//     ### EncDec CLASS METHODS
//     ##########################################

//     #Generates a 32-byte has from a string password
//     #   Acts as a Fernet password
//     def generatePassHash(self, password: str) -> bytes: 
//         #First, generate a SHA256 hash of the password
//         digest = hashes.Hash(hashes.SHA256())
//         digest.update(bytes(password, 'utf-8'))
//         encPass = digest.finalize()

//         #Then, cut out only 32-bytes to act as the Fernet Password 
//         encPass = encPass[:32]
//         return encPass
    

//     # Encrypts a file, when given the filename and password
//     def encryptFile(self, filename: str, password: str):
//         key = self.generatePassHash(password)

//         #this opens your json and reads its data into a new variable called 'data'
//         with open(filename,'r') as f:
//             fileData = f.read()

//         fileBytes = fileData.encode('utf8')

//         #cipher = Cipher(algorithms.AES(key), modes.CBC(self.iv))
//         cipher = Cipher(algorithms.AES(key), modes.CFB(self.iv))
//         encryptor = cipher.encryptor()
//         cipherBytes = encryptor.update(fileBytes) + encryptor.finalize()

//         cipherText = base64.b64encode(cipherBytes).decode('utf-8')

//         #print(cipherText)

//         #this writes your new, encrypted data into a new JSON file
//         with open(filename + '.enc','w') as f:
//             f.write(cipherText)


//     # Attempts to decrypt a file
//     #   Returns a 1 if successful
//     #   Returns a 0 if unsuccessful
//     def tryDecryptFile(self, filename: str, password: str) -> int:
//         key = self.generatePassHash(password)

//         #this opens your json and reads its data into a new variable called 'data'
//         with open(filename + '.enc','r') as f:
//             fileData = f.read()
     
//         fileBytes = base64.b64decode(fileData.encode('utf-8'))

//         #cipher = Cipher(algorithms.AES(key), modes.CBC(self.iv))
//         cipher = Cipher(algorithms.AES(key), modes.CFB(self.iv))
//         decryptor = cipher.decryptor()
//         plainBytes = decryptor.update(fileBytes) + decryptor.finalize()

//         #If there is a bad decode, then we know we used the wrong password
//         try:
//             plainText = plainBytes.decode('utf-8')
//         except:
//             print("Incorrect Password inputted!")
//             return 1

//         #this writes your new, encrypted data into a new JSON file
//         with open(filename + '.dec','w') as f:
//             f.write(plainText)
//         return 0

//     #Checks if a file is in proper JSON format
//     #   1 = Correct format
//     #   0 = Incorrect format
//     #   If a file is decrypted with an INCORRECT password, this triggers
//     #ValueError contains "JSONDecodeError" from the json library
//     #   This lets us attempt to decode an encrypted file
//     def checkJsonFormat(self, filename: str) -> int:
//         try:
//             with open(filename, "r") as f:
//                 tempJson = json.load(f)
            
//             #return a 1 if there was no issue with the JSON load
//             return 1
//         except ValueError:
//             #return a 0 as part of the JSON exception
//             print("Incorrect Password!")
//             return 0

// export default EncDec;