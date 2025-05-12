## 🖼️ Pixel Manipulation for Image Encryption

**Track Code:** CS
**Project Title:** Image Encryption using Pixel Manipulation

🔗 **Live Demo:** [Pixel Encryption Web App](https://dynamic-jalebi-8d3dec.netlify.app/)

---

### 📌 Project Description

This project demonstrates a simple yet effective method of **image encryption and decryption** using pixel-level manipulation. By modifying the RGB values of an image using reversible mathematical operations, the tool can **encrypt** an image in such a way that it becomes visually unreadable, and then **decrypt** it back to its original form.

---

### 🔐 How It Works

* Each pixel's RGB value is altered using a key (e.g., a simple addition, subtraction, or XOR operation).
* The same key is used in reverse for decryption.
* Operations are reversible to ensure full image recovery.

---

### ⚙️ Features

* Upload any image (JPG/PNG)
* Apply **pixel encryption** using key-based manipulation
* Decrypt encrypted image using the same key
* Works entirely in the browser (client-side)
* Lightweight and fast performance

---

### 🧪 Example Technique

Here's a sample Python-like logic for encryption:

```python
def encrypt_pixel(r, g, b, key):
    return (r ^ key, g ^ key, b ^ key)

def decrypt_pixel(r, g, b, key):
    return (r ^ key, g ^ key, b ^ key)
```

This basic **XOR method** is simple, symmetric, and reversible.

---

### 🖥️ Tech Stack

* HTML, CSS, JavaScript
* Canvas API for pixel manipulation
* Hosted on **Netlify**

---

### 📂 Suggested GitHub Repo Structure

```
ImageEncryption/
├── index.html
├── style.css
├── script.js
├── README.md
```

Update your GitHub repository link below:
👉 **GitHub Repo: (https://github.com/ganeshkrishnareddy/Prodigy_CS_Task_02)*

---

### ✅ How to Use

1. Open the [Live App](https://dynamic-jalebi-8d3dec.netlify.app)
2. Upload your image
3. Enter an encryption key
4. Click **Encrypt** or **Decrypt**
5. Download or view the result

---

### ⚠️ Note

This project is for educational/demo purposes and should not be used for high-security image encryption. For secure applications, use advanced encryption standards like AES or RSA.

---

Would you like a GitHub version of the code or help pushing this to a repository?
