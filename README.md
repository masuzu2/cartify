<div align="center">

<img src="logo-color.png" alt="Cartify" width="140" />

# 🛒 Cartify

### พรีเมียมสโตร์ออนไลน์ · ของใช้ · แฟชั่น · เครื่องประดับ · อุปกรณ์ IT

_Single-page e-commerce ที่เน้น UX/UI สวย ทันสมัย รองรับไทย/อังกฤษ และใช้งานจริงบนมือถือ_

<br />

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

<br />

![GitHub stars](https://img.shields.io/github/stars/masuzu2/cartify?style=flat-square&color=ffd700)
![GitHub forks](https://img.shields.io/github/forks/masuzu2/cartify?style=flat-square&color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/masuzu2/cartify?style=flat-square&color=brightgreen)
![Repo size](https://img.shields.io/github/repo-size/masuzu2/cartify?style=flat-square&color=orange)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

<br />

### [🌐 Live Demo](https://masuzu2.github.io/cartify/) · [📖 คู่มือ](#-เริ่มต้นใช้งาน) · [🧑‍💻 ทีมผู้พัฒนา](#-ทีมผู้พัฒนา) · [🐛 รายงานบั๊ก](https://github.com/masuzu2/cartify/issues)

</div>

---

## 📑 สารบัญ

<table>
<tr>
<td>

- [📖 ภาพรวม](#-ภาพรวม)
- [✨ ฟีเจอร์เด่น](#-ฟีเจอร์เด่น)
- [🧩 เทคโนโลยีที่ใช้](#-เทคโนโลยีที่ใช้)
- [🚀 เริ่มต้นใช้งาน](#-เริ่มต้นใช้งาน)

</td>
<td>

- [📂 โครงสร้างไฟล์](#-โครงสร้างไฟล์)
- [🧪 คำสั่งสำหรับทดสอบ](#-คำสั่งสำหรับทดสอบ)
- [🧑‍💻 ทีมผู้พัฒนา](#-ทีมผู้พัฒนา)
- [📄 License](#-license)

</td>
</tr>
</table>

---

## 📖 ภาพรวม

**Cartify** เป็นโปรเจคจำลอง e-commerce ที่ครอบคลุมทุกขั้นตอน ตั้งแต่ landing page, แค็ตตาล็อกสินค้า, ตะกร้า, checkout, การชำระเงิน (จำลอง), การสมัครสมาชิก, ไปจนถึง admin dashboard สำหรับดูสถิติ โดย**ไม่ใช้ backend จริง** — ทุกอย่างจำลองผ่าน `localStorage`

<table>
<tr>
<td width="50%" valign="top">

### 🎯 ไฮไลต์
- 📦 สินค้า **19+ รายการ** · 4 หมวดหมู่
- 🌐 รองรับ **ไทย / English** สลับทันที
- 🌓 **Dark / Light mode** + auto-detect
- 📱 **PWA Ready** ติดตั้งเป็นแอปได้
- 🔒 ผ่านมาตรฐาน **PDPA**
- 🔍 **SEO** ครบ: Schema.org + sitemap + robots

</td>
<td width="50%" valign="top">

### 🧭 เหมาะสำหรับ
- 🎓 โปรเจคส่งอาจารย์ / Portfolio
- 🧪 ศึกษา UX/UI + Animation patterns
- 🛠 Template เริ่มต้น e-commerce
- 📚 เรียนรู้ Vanilla JS (ไม่มี framework)

</td>
</tr>
</table>

---

## ✨ ฟีเจอร์เด่น

<table>
<tr>
<td width="50%" valign="top">

### 🛍 หน้าร้านและสินค้า
- Hero พร้อม **typewriter · parallax · animated stats**
- **Flash Sale** countdown timer เรืองแสง
- 🎤 **Voice search** (Web Speech API)
- Filter / sort ตามหมวด / ราคา / ความนิยม
- 🕘 **Recently Viewed** (localStorage)
- 🔍 Product quick view modal + zoom
- 🧠 Related products recommendations
- 💀 Skeleton loading state

### 🛒 ตะกร้าและ Checkout
- Slide-in drawer cart
- Checkout **3 ขั้นตอน** (สรุป → ที่อยู่ → ชำระ)
- 🎟 โค้ดส่วนลด: `CARTIFY15`, `CARTIFY20`
- 🚚 คำนวณค่าจัดส่งอัตโนมัติ (ฟรีเมื่อ ≥ ฿500)
- 📋 สร้าง **Order ID + QR code** tracking

### 👤 ระบบสมาชิก
- Sign up / Log in (localStorage)
- Social login UI (FB / Google / Line)
- Profile dashboard · Wishlist · History
- 🎁 **Referral system** (แชร์รับส่วนลด ฿100)

</td>
<td width="50%" valign="top">

### 🎨 UX / UI
- ✨ Splash: aurora mesh · particles · counter
- 🧊 Team 3D tilt + spotlight effect
- 🖱 Cursor glow · Magnetic buttons
- 📊 Scroll progress bar ไล่ 3 สี
- 🌈 Section heading shimmer
- 🎞 Noise texture overlay
- 🎡 **Exit-intent** wheel spin รับส่วนลด
- 🔔 Real-time order notifications

### ♿ Accessibility (A11y)
- 🔤 ปรับขนาดตัวอักษร 3 ระดับ
- 🎯 High contrast mode
- 🚫 Reduce motion (ปิด animation ทั้งหมด)
- 🎨 ธีมสีเลือกได้ **6 แบบ**
- ARIA labels ครบ · Keyboard navigation

### 🛡 Admin (`?admin=1`)
- 📈 Dashboard รายได้ + order stats
- 📊 Chart.js graphs (รายวัน / เดือน)
- 🗂 Product CRUD
- 📦 Order management

</td>
</tr>
</table>

---

## 🧩 เทคโนโลยีที่ใช้

<div align="center">

| หมวด | เทคโนโลยี |
|:----:|:---------|
| 🎨 **Frontend** | HTML5 · CSS3 (glassmorphism · aurora mesh · conic-gradient) · Vanilla JS (ES6+) |
| 🧱 **UI Framework** | Bootstrap 5.3.3 · Bootstrap Icons 1.11.3 |
| 🎬 **Animations** | AOS 2.3.4 · CSS keyframes · `requestAnimationFrame` |
| 📊 **Charts** | Chart.js 4.4.1 |
| 🌐 **Browser APIs** | Web Speech · LocalStorage · Service Worker · Notification |
| 📱 **PWA** | Service Worker (cache-first) · Web App Manifest |
| 🔎 **SEO** | Schema.org · Open Graph · sitemap.xml · robots.txt |
| 🌏 **i18n** | `data-i18n` attribute (TH / EN) |

</div>

> 🚫 **ไม่มี backend จริง** — ทุกข้อมูลจำลองผ่าน `localStorage` (เหมาะสำหรับ demo / school project)

---

## 🚀 เริ่มต้นใช้งาน

### 1️⃣ Clone repository

```bash
git clone https://github.com/masuzu2/cartify.git
cd cartify
```

### 2️⃣ เปิดไฟล์ (วิธีเร็วสุด)

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

> 💡 เปิด `index.html` ในเบราว์เซอร์ได้เลย **ไม่ต้อง build หรือติดตั้ง dependencies**

### 3️⃣ รันผ่าน local server (แนะนำ — สำหรับ PWA)

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

จากนั้นเปิด <http://localhost:8000>

### 4️⃣ เข้าโหมด Admin

```
http://localhost:8000/?admin=1
```

---

## 📂 โครงสร้างไฟล์

```
cartify/
├── 📄 index.html           Main HTML (SPA) — 2,700+ บรรทัด
├── 🎨 style.css            Stylesheet — 950+ บรรทัด
├── ⚙️  sw.js                Service Worker (PWA cache)
├── 📱 manifest.json        Web App Manifest
├── 🔎 robots.txt           SEO robots
├── 🗺  sitemap.xml          SEO sitemap
├── 🖼  logo-color.png       Logo (light mode)
├── 🖼  logo-white.png       Logo (dark mode)
├── 🖼  logo-black.png       Logo (alternate)
├── 👤 team-1.png           รูปทีม — ชินภัทร
├── 👤 team-2.png           รูปทีม — วรพัธน์
├── 👤 team-3.png           รูปทีม — ชยุต
├── 👤 team-4.png           รูปทีม — รัฐภูมิ
└── 🎓 Logo SPU SIT 2/      โลโก้มหาวิทยาลัย
```

---

## 🧪 คำสั่งสำหรับทดสอบ

<div align="center">

| 🎯 สิ่งที่ต้องการทดสอบ | 👉 วิธี |
|:----------------------|:--------|
| 🌐 สลับภาษา TH / EN | คลิกปุ่มมุมขวาบน |
| 🌙 Dark mode | คลิกไอคอนพระจันทร์ มุมขวาบน |
| ♿ Accessibility panel | คลิกไอคอน A11y ด้านซ้าย |
| 🎤 Voice search | คลิกไมค์ในช่องค้นหา แล้วพูด |
| 🎟 Apply discount | ใส่ `CARTIFY15` หรือ `CARTIFY20` ในตะกร้า |
| 🛡 Admin dashboard | เพิ่ม `?admin=1` ต่อท้าย URL |
| 🎡 Exit intent | ขยับเมาส์ออกนอก viewport ด้านบน |
| 📲 Install PWA | คลิกไอคอนติดตั้งใน URL bar (Chrome) |

</div>

---

## 🧑‍💻 ทีมผู้พัฒนา

<div align="center">

พัฒนาโดยนักศึกษาคณะเทคโนโลยีสารสนเทศ · **มหาวิทยาลัยศรีปทุม (SPU SIT)**

<table>
<tr>
<td align="center" width="25%">
  <img src="team-1.png" width="120" style="border-radius:50%" /><br />
  <sub><b>ชินภัทร บุญยศ</b></sub><br />
  <sub>🆔 68103144</sub><br />
  <sub>🚀 Lead Developer</sub>
</td>
<td align="center" width="25%">
  <img src="team-2.png" width="120" style="border-radius:50%" /><br />
  <sub><b>วรพัธน์ ด้วงแก้ว</b></sub><br />
  <sub>🆔 68043407</sub><br />
  <sub>🎨 UI / UX Designer</sub>
</td>
<td align="center" width="25%">
  <img src="team-3.png" width="120" style="border-radius:50%" /><br />
  <sub><b>ชยุต ปัญญา</b></sub><br />
  <sub>🆔 68049541</sub><br />
  <sub>📋 Product Manager</sub>
</td>
<td align="center" width="25%">
  <img src="team-4.png" width="120" style="border-radius:50%" /><br />
  <sub><b>รัฐภูมิ จันเครือยิ้ม</b></sub><br />
  <sub>🆔 68029125</sub><br />
  <sub>⚙️ Backend Engineer</sub>
</td>
</tr>
</table>

</div>

---

## 📄 License

**MIT © 2026 Cartify Team · SPU SIT**

โปรเจคนี้เป็นส่วนหนึ่งของการศึกษา คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม · สงวนลิขสิทธิ์เพื่อการศึกษา

---

<div align="center">

### ⭐ ถ้าชอบโปรเจคนี้ ฝากกดดาวให้หน่อยนะครับ!

<sub>Crafted with ❤️ at <b>School of Information Technology, Sripatum University</b></sub>

<sub>🎓 SPU SIT · 2026</sub>

</div>
