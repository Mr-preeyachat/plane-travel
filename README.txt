JAPAN TRIP WEB APP
==================

ไฟล์หลัก
- index.html    หน้าเว็บ
- style.css     หน้าตา/Responsive
- app.js        ข้อมูลทริป + เช็กลิสต์ + ปุ่มลิงก์
- assets/       เก็บไฟล์เอกสารของทริป เช่น ticket.pdf, hotel.pdf, map.pdf

วิธีเพิ่มเอกสารในเครื่อง
1) นำไฟล์จริงไปใส่ใน assets/
2) ใน app.js เพิ่มปุ่มลิงก์ เช่น ['Ticket','assets/ticket.pdf']

หมายเหตุ
- ข้อมูลวันที่ 14–15 ถูกทำให้ใช้งานเป็น Draft จากรายละเอียดในคำขอ
- วันที่ 16 เป็นโครงสำหรับเติมจากแผนจริง
- เช็กลิสต์จำสถานะไว้ใน browser (localStorage)
- เปลี่ยนแผนทั้งหมดได้จากตัวแปร tripData ใน app.js

นำโฟลเดอร์นี้ขึ้น Vercel ได้โดยตรง เป็น Static Site
Build Command: เว้นว่าง
Output Directory: .
