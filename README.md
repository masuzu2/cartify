# Cartify

**พรีเมียมสโตร์ออนไลน์ — ของใช้ · แฟชั่น · เครื่องประดับ · อุปกรณ์ IT**

Single-page e-commerce website พัฒนาโดยนักศึกษา คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม (SPU SIT) เน้น UX/UI สวยงาม ทันสมัย รองรับภาษาไทย/อังกฤษ และใช้งานได้จริงบนมือถือ

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## สารบัญ

- [ภาพรวม](#ภาพรวม)
- [ฟีเจอร์เด่น](#ฟีเจอร์เด่น)
- [เทคโนโลยีที่ใช้](#เทคโนโลยีที่ใช้)
- [เริ่มต้นใช้งาน](#เริ่มต้นใช้งาน)
- [โครงสร้างไฟล์](#โครงสร้างไฟล์)
- [ทีมผู้พัฒนา](#ทีมผู้พัฒนา)
- [License](#license)

---

## ภาพรวม

Cartify เป็นโปรเจคจำลอง e-commerce ที่ครอบคลุมทุกขั้นตอน ตั้งแต่ landing page, แค็ตตาล็อกสินค้า, ตะกร้า, checkout, การชำระเงิน (จำลอง), การสมัครสมาชิก, ไปจนถึง admin dashboard สำหรับดูสถิติ โดยไม่ใช้ backend จริง — ทุกอย่างจำลองผ่าน `localStorage`

**ไฮไลต์:**

- สินค้า 19+ รายการ ครอบคลุม 4 หมวดหมู่: อิเล็กทรอนิกส์ / แฟชั่น / ของใช้ / เครื่องประดับ
- รองรับ 2 ภาษา: ไทย · English (สลับได้ทันที)
- โหมดกลางวัน/กลางคืน พร้อม auto-detect ตามเวลา
- รองรับ PWA ติดตั้งเป็นแอปบนมือถือ/เดสก์ท็อปได้
- ผ่านมาตรฐาน PDPA (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล)
- Schema.org structured data + sitemap.xml + robots.txt พร้อม SEO

---

## ฟีเจอร์เด่น

### หน้าร้านและสินค้า
- Hero section พร้อม typewriter effect, parallax, สถิติ animated
- Flash Sale countdown timer พร้อมเรืองแสง
- Voice search ด้วย Web Speech API
- Filter + sort ตามหมวดหมู่/ราคา/ความนิยม
- Recently Viewed (เก็บ localStorage)
- Product quick view modal พร้อม zoom
- Related products recommendations
- Skeleton loading state

### ตะกร้าและ Checkout
- ตะกร้าสินค้า slide-in drawer
- Checkout 3 ขั้นตอน (สรุป → ที่อยู่ → ชำระเงิน)
- รองรับโค้ดส่วนลด (CARTIFY15, CARTIFY20)
- คำนวณค่าจัดส่งอัตโนมัติ (ฟรีเมื่อครบ ฿500)
- สร้าง Order ID + QR code สำหรับ tracking

### UX / UI
- Splash screen พร้อม aurora mesh, particles, percentage counter
- ทีมผู้สร้างพร้อม 3D tilt + spotlight effect
- Cursor glow ตามเมาส์ (desktop)
- Magnetic buttons
- Scroll progress bar ไล่สี 3 สี
- Section heading shimmer animations
- Noise texture overlay เพิ่มความลึก
- Exit-intent wheel spin รับส่วนลด
- Real-time order notifications (จำลอง)

### Accessibility (A11y)
- ปรับขนาดตัวอักษร 3 ระดับ
- High contrast mode
- Reduce motion (ปิด animations ทั้งหมด)
- ธีมสีเลือกได้ 6 แบบ
- ARIA labels ครบทุก interactive element
- Keyboard navigation

### ระบบสมาชิก
- Sign up / Log in (จำลองผ่าน localStorage)
- Social login UI (Facebook / Google / Line)
- Profile dashboard
- Wishlist + order history
- Referral system (แชร์ให้เพื่อนรับส่วนลด ฿100)

### Admin (เข้าผ่าน `?admin=1`)
- Dashboard รายได้ + order stats
- Chart.js graphs (รายวัน/เดือน)
- Product CRUD
- Order management

---

## เทคโนโลยีที่ใช้

| หมวด | เทคโนโลยี |
|------|----------|
| **Frontend** | HTML5, CSS3 (glassmorphism, aurora mesh, conic-gradient), Vanilla JavaScript (ES6+) |
| **UI Framework** | Bootstrap 5.3.3, Bootstrap Icons 1.11.3 |
| **Animations** | AOS (Animate On Scroll) 2.3.4, CSS keyframes, requestAnimationFrame |
| **Charts** | Chart.js 4.4.1 |
| **Browser APIs** | Web Speech API, LocalStorage, Service Worker, Notification API |
| **PWA** | Service Worker (cache-first strategy), Web App Manifest |
| **SEO** | Schema.org (OnlineStore + Product), Open Graph, sitemap.xml, robots.txt |
| **i18n** | ระบบ i18n ภายในผ่าน `data-i18n` attribute (TH / EN) |

**ไม่มี backend จริง** — ทุกข้อมูลจำลองผ่าน `localStorage` (เหมาะสำหรับ demo / school project)

---

## เริ่มต้นใช้งาน

### 1. Clone repository

```bash
git clone https://github.com/masuzu2/cartify.git
cd cartify
```

### 2. เปิดไฟล์

เปิด `index.html` ในเบราว์เซอร์ได้เลย **ไม่ต้อง build หรือติดตั้ง dependencies**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 3. (ทางเลือก) รันผ่าน local server

เพื่อให้ Service Worker และ PWA ทำงานถูกต้อง แนะนำรันผ่าน local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

จากนั้นเปิด http://localhost:8000

### 4. เข้าโหมด Admin

เพิ่ม `?admin=1` ต่อท้าย URL

```
http://localhost:8000/?admin=1
```

---

## โครงสร้างไฟล์

```
cartify/
├── index.html           Main HTML (SPA) — 2,700+ บรรทัด
├── style.css            Stylesheet — 950+ บรรทัด
├── sw.js                Service Worker (PWA cache)
├── manifest.json        Web App Manifest
├── robots.txt           SEO robots
├── sitemap.xml          SEO sitemap
├── logo-color.png       Logo (light mode)
├── logo-white.png       Logo (dark mode)
├── logo-black.png       Logo (alternate)
├── team-1.png           รูปทีม — ชินภัทร
├── team-2.png           รูปทีม — วรพัธน์
├── team-3.png           รูปทีม — ชยุต
├── team-4.png           รูปทีม — รัฐภูมิ
└── Logo SPU SIT 2/      โลโก้มหาวิทยาลัย
```

---

## ทีมผู้พัฒนา

โปรเจคนี้พัฒนาโดยนักศึกษาคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม (SPU SIT)

| รูป | ชื่อ | รหัสนักศึกษา | ตำแหน่ง |
|-----|------|--------------|---------|
| <img src="team-1.png" width="70"> | **ชินภัทร บุญยศ** | 68103144 | Lead Developer |
| <img src="team-2.png" width="70"> | **วรพัธน์ ด้วงแก้ว** | 68043407 | UI/UX Designer |
| <img src="team-3.png" width="70"> | **ชยุต ปัญญา** | 68049541 | Product Manager |
| <img src="team-4.png" width="70"> | **รัฐภูมิ จันเครือยิ้ม** | 68029125 | Backend Engineer |

---

## คำสั่งสำหรับทดสอบ

| สิ่งที่ต้องการทดสอบ | วิธี |
|---------------------|------|
| สลับภาษา TH/EN | คลิกปุ่มมุมขวาบน |
| Dark mode | คลิกไอคอนพระจันทร์ มุมขวาบน |
| Accessibility panel | คลิกไอคอน A11y ด้านซ้าย |
| Voice search | คลิกไมค์ในช่องค้นหา แล้วพูด |
| Apply discount | ใส่ `CARTIFY15` หรือ `CARTIFY20` ในตะกร้า |
| Admin dashboard | เพิ่ม `?admin=1` ต่อท้าย URL |
| Exit intent | ขยับเมาส์ออกนอก viewport ด้านบน |
| Install PWA | คลิกไอคอนติดตั้งใน URL bar (Chrome) |

---

## License

MIT © 2026 Cartify Team · SPU SIT

โปรเจคนี้เป็นส่วนหนึ่งของการศึกษา คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม สงวนลิขสิทธิ์เพื่อการศึกษาเท่านั้น

---

<p align="center">
  <sub>Made with care at <b>School of Information Technology, Sripatum University</b></sub>
</p>
