# Cartify

เว็บขายของออนไลน์หน้าเดียว ทำเป็นโปรเจคส่งมหา’ลัย คณะ IT ม.ศรีปทุม (SPU SIT)

มีของ 4 หมวด — ของใช้ แฟชั่น เครื่องประดับ อุปกรณ์ IT — สลับภาษาไทย/อังกฤษได้ มีโหมดมืด ลง PWA เป็นแอปได้ และมีหน้า admin ไว้ดูยอด

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**[ลองเล่นของจริง →](https://masuzu2.github.io/cartify/)**

---

## ที่มา

งานชิ้นนี้ไม่มี backend จริง ข้อมูลทั้งหมดเก็บไว้ใน `localStorage` ของเบราว์เซอร์ — ลบประวัติเมื่อไรก็หายเมื่อนั้น เหมาะกับใช้เป็นเดโม่ ส่งอาจารย์ หรือเอาไปเป็น template ต่อยอดครับ

## มีอะไรบ้าง

**หน้าร้าน**
- สินค้า 19 ตัว แบ่งหมวด กรอง/เรียงได้
- ค้นหาด้วยเสียง (Web Speech API)
- Flash sale นับถอยหลัง
- Recently viewed เก็บของที่เคยดู
- Quick view แบบ modal + ซูมรูป
- แนะนำสินค้าใกล้เคียง

**ตะกร้า / Checkout**
- ตะกร้าเป็น drawer เลื่อนจากขวา
- จ่าย 3 สเต็ป (สรุป → ที่อยู่ → ชำระเงิน)
- โค้ดส่วนลด `CARTIFY15` กับ `CARTIFY20`
- ส่งฟรีเมื่อซื้อครบ 500 บาท
- ได้ Order ID + QR code ไว้ track

**สมาชิก**
- สมัคร/ล็อกอินได้ (เก็บใน localStorage)
- มีหน้า profile, wishlist, ประวัติสั่งซื้อ
- ระบบชวนเพื่อน ได้ส่วนลด 100 บาท
- UI social login (FB / Google / Line) — เป็นแค่หน้าตา

**UX/UI ที่ใส่มาเล่น**
- Splash screen ตอนเปิด
- Cursor glow, magnetic button
- Scroll progress bar
- Exit intent — พอเมาส์ออกจากจอจะมีวงล้อหมุนชิงส่วนลด
- Noise texture overlay, shimmer heading
- Dark/light mode auto ตามเวลา

**Accessibility**
- ปรับขนาดตัวอักษร 3 ระดับ
- High contrast
- ปิด animation ได้ (reduce motion)
- เลือกธีมสีได้ 6 แบบ
- Keyboard navigation + ARIA labels

**Admin (`?admin=1`)**
- Dashboard ยอดขาย ใช้ Chart.js
- CRUD สินค้า
- จัดการ order

**อื่น ๆ**
- 2 ภาษา ไทย/อังกฤษ (สลับทันทีไม่ต้อง reload)
- PWA ติดตั้งเป็นแอปได้
- SEO พร้อม — Schema.org, sitemap, robots, Open Graph
- ทำตามแนวทาง PDPA

## ที่ใช้

| | |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JS (ES6+) |
| UI | Bootstrap 5.3.3 + Bootstrap Icons 1.11.3 |
| Animation | AOS 2.3.4, CSS keyframes |
| Chart | Chart.js 4.4.1 |
| PWA | Service Worker (cache-first) + Web App Manifest |
| Browser API | Web Speech, LocalStorage, Service Worker, Notification |
| i18n | ใช้ `data-i18n` attribute เอง ไม่ได้ใช้ library |

ไม่ได้ใช้ framework ใหญ่ ๆ อย่าง React/Vue เลย — Vanilla JS ล้วน

## รันยังไง

โหลดมาเปิด `index.html` ได้เลย ไม่ต้องลง dependencies

```bash
git clone https://github.com/masuzu2/cartify.git
cd cartify
open index.html     # macOS
# start index.html  # Windows
```

ถ้าอยากให้ PWA/Service Worker ทำงานครบ แนะนำให้รันผ่าน local server

```bash
python3 -m http.server 8000
# หรือ
npx serve .
```

แล้วเปิด <http://localhost:8000>

เข้าหน้า admin โดยต่อท้าย URL ด้วย `?admin=1`

## วิธีลองฟีเจอร์ต่าง ๆ

| อยากลอง | ทำยังไง |
|---|---|
| สลับภาษา | ปุ่มมุมขวาบน |
| Dark mode | ไอคอนพระจันทร์ มุมขวาบน |
| Accessibility | ไอคอน A11y ด้านซ้าย |
| Voice search | กดไมค์ในช่องค้นหาแล้วพูด |
| ใส่โค้ดส่วนลด | พิมพ์ `CARTIFY15` หรือ `CARTIFY20` ในตะกร้า |
| Exit intent | ขยับเมาส์ขึ้นไปนอกจอด้านบน |
| Admin | ต่อ `?admin=1` หลัง URL |
| ติดตั้งเป็นแอป | ไอคอน install ใน address bar (Chrome) |

## โครงสร้างไฟล์

```
cartify/
├── index.html           HTML หลัก (~2,700 บรรทัด)
├── style.css            CSS (~950 บรรทัด)
├── sw.js                Service Worker
├── manifest.json        Web App Manifest
├── robots.txt
├── sitemap.xml
├── logo-color.png       logo โหมดสว่าง
├── logo-white.png       logo โหมดมืด
├── logo-black.png
├── team-1.png ... team-4.png
└── Logo SPU SIT 2/      โลโก้มหา’ลัย
```

## คนทำ

นักศึกษาคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม (SPU SIT)

| | ชื่อ | รหัส | หน้าที่ |
|---|---|---|---|
| <img src="team-1.png" width="60"> | ชินภัทร บุญยศ | 68103144 | Lead Developer |
| <img src="team-2.png" width="60"> | วรพัธน์ ด้วงแก้ว | 68043407 | UI/UX |
| <img src="team-3.png" width="60"> | ชยุต ปัญญา | 68049541 | Product |
| <img src="team-4.png" width="60"> | รัฐภูมิ จันเครือยิ้ม | 68029125 | Backend |

## License

MIT — ดูได้ที่ [LICENSE](LICENSE)

โปรเจคนี้เป็นงานส่งวิชาเรียน ใครจะเอาไปศึกษา/ดัดแปลงก็ตามสบายครับ
