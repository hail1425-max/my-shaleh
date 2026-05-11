# دليل الإعداد — حجوزات الشاليه
## المطلوب: 15 دقيقة فقط، كل شي مجاني

---

## الخطوة 1 — إنشاء حساب Firebase

1. افتح: https://firebase.google.com
2. اضغط "Get started" ثم سجّل بحساب Google
3. اضغط "Add project" (إضافة مشروع)
4. اكتب اسم للمشروع مثل: chalet-booking
5. اضغط Continue → Continue → "Create project"

---

## الخطوة 2 — تفعيل قاعدة البيانات

1. من القائمة الجانبية اختر: **Build → Realtime Database**
2. اضغط "Create Database"
3. اختر أي منطقة (Singapore تكفي)
4. اختر **"Start in test mode"** ثم "Enable"

---

## الخطوة 3 — الحصول على بيانات المشروع

1. اضغط على ⚙️ (Settings) بجانب "Project Overview"
2. اختر **"Project settings"**
3. انزل لأسفل لقسم **"Your apps"**
4. اضغط على أيقونة **</>** (Web)
5. اكتب اسم التطبيق مثل: chalet-app ثم اضغط "Register app"
6. **انسخ** الكود اللي يظهر — يشبه هذا:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "chalet-booking.firebaseapp.com",
  databaseURL: "https://chalet-booking-default-rtdb.firebaseio.com",
  projectId: "chalet-booking",
  storageBucket: "chalet-booking.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:abcdef"
};
```

---

## الخطوة 4 — تعديل ملف index.html

1. افتح ملف index.html بـ Notepad أو VS Code
2. ابحث عن هذا السطر:
   ```
   apiKey: "YOUR_API_KEY",
   ```
3. **استبدل كل القيم** بالبيانات اللي نسختها من Firebase

---

## الخطوة 5 — رفع الموقع (Hosting)

### الطريقة السهلة — بدون كود:

1. افتح: https://app.netlify.com
2. سجّل حساب مجاني
3. اسحب ملف **index.html** وأسقطه في المنتصف
4. ✅ خلاص! Netlify يعطيك رابط مثل:
   ```
   https://amazing-chalet-123.netlify.app
   ```
5. شارك هذا الرابط مع شريكك — يفتحه من جواله مباشرة

---

## الخطوة 6 — قواعد الأمان (مهم)

في Firebase → Realtime Database → Rules، غيّر الكود لهذا:

```json
{
  "rules": {
    "bookings": {
      ".read": true,
      ".write": true
    }
  }
}
```

اضغط **Publish**

---

## النتيجة

- الشريك الأول يفتح الرابط من جواله ويضيف حجز
- الشريك الثاني يفتح نفس الرابط ويشوف الحجز فوراً
- يشتغل على أي جهاز (موبايل، لابتوب، تاب)
- البيانات محفوظة حتى لو أغلق الجهاز

---

## مشكلة؟

تواصل مع Claude وأخبره بالخطأ اللي يظهر 👍
