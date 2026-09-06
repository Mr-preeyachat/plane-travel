const tripData = [
  {
    id:'d14', date:'14', month:'วันเตรียมตัว', title:'PACK • CHECK • READY',
    subtitle:'เตรียมของ + ตรวจเอกสาร + ออกเดินทางจากบ้านประมาณ 21:00',
    image:'assets/04.webp',
    chips:['Packing','Passport','Airport','22:00-ish'],
    story:'วันนี้ไม่เน้นเที่ยว แต่คือวันที่ทำให้วันที่ 15 เดินทางแบบสบายใจที่สุด แนะนำเก็บของให้เสร็จก่อนเย็น และย้ายเอกสารสำคัญไว้ในกระเป๋าใบเล็กที่หยิบง่าย',
    events:[
      ['ทั้งวัน','เตรียมกระเป๋า','ติ๊กเช็กลิสต์ของด้านล่างให้ครบ'],
      ['18:00','Final Check','เช็กพาสปอร์ต ตั๋ว เครื่องชาร์จ power bank เงิน บัตร'],
      ['21:00','ออกจากบ้าน','เผื่อเวลารถติด + เข้าอาคารผู้โดยสาร'],
      ['22:00+','สนามบินดอนเมือง','เช็กอิน / โหลดกระเป๋า / ผ่าน security แล้วพักรอ']
    ],
    links:[
      ['Visit Japan Web','https://www.vjw.digital.go.jp/'],
      ['✈️ ตั๋วเครื่องบิน', 'assets/ticket.pdf']
    ]
  },
  {
    id: 'd15', 
    date: '15', 
    month: 'ตุลาคม 2569', 
    title: 'BANGKOK → OSAKA & CITY EXPLORATION',
    subtitle: '01:10 ออกเดินทาง • 08:40 ถึงโอซากะ • เที่ยวTsutenkaku, Dotonbori, Osaka Castle, Shinsaibashi',
    image: 'assets/02.jpg',
    chips: ['01:10 Flight', '08:40 Arrival', 'KIX Airport', 'Tsutenkaku', 'Dotonbori', 'Osaka Castle', 'Umeda Shopping'],
    story: 'วันแรกเน้นปรับตัว เก็บแลนด์มาร์กสำคัญ ฝากกระเป๋า ชิมของอร่อย ชมวิวเมือง และช้อปปิ้งย่านดังก่อนเข้าเช็คอินที่พัก',
    events: [
          ['01:10', '✈️ บินไปญี่ปุ่น', `เที่ยวบินออกจากประเทศไทย (ดอนเมือง/สุวรรณภูมิ):
          • เช็กอินและโหลดกระเป๋าเรียบร้อย
          • เตรียมพาสปอร์ต Boarding Pass และเปิดหน้า Visit Japan Web QR Code (ทั้ง Immigration และ Customs) ใส่โทรศัพท์มือถือแบบ offline/แคปหน้าจอไว้`],

          ['08:40', '✈️ ถึงบินไปญี่ปุ่นแล้ว', `เดินทางถึง Kansai International Airport (KIX) Terminal 1:
          • รถลงที่อาคารผู้โดยสารขาเข้า เดินตามป้าย "Arrivals / Immigration" เข้าสู่อาคารหลัก`],

          ['08:40 - 09:40', '👨‍✈️ เข้า ตม. รับกระเป๋า', `ขั้นตอนการผ่านด่านเข้าเมืองและรับกระเป๋า:
          1. เข้าแถวตรวจคนเข้าเมือง (ตม.) สแกนลายนิ้วมือ ถ่ายรูป และยื่น Visit Japan Web (Immigration QR Code)
          2. เดินลงมายังโถงรับกระเป๋า (Baggage Claim) ดูจอแสดงสายการบินเพื่อรับกระเป๋าเดินทาง
          3. สแกน Visit Japan Web (Customs QR Code) ที่ตู้สแกนศุลกากรอัตโนมัติ แล้วเดินผ่านช่องทางออกสู่ Arrival Hall ชั้น 1`],

          ['09:40 - 10:40', '🚈 เดินทางไป Shin-Imamiya Station', `เดินทางจากสนามบินคันไซ เข้าสู่ตัวเมืองโอซากะ:
          • ขึ้นเอสการ์เลเตอร์/ลิฟต์ไปชั้น 2 เดินข้ามทางเชื่อมไปสถานีรถไฟ Kansai-Airport Station
          • การซื้อบัตร IC Card (บัตร ICOCA): 
            - ซื้อได้ที่ "ตู้ขายตั๋วอัตโนมัติ (สีฟ้า)" หรือ "ศูนย์บริการลูกค้า Nankai / JR Ticket Office" หน้าทางเข้าสถานีชั้น 2
            - หรือหากใช้ iPhone สามารถกดเพิ่มบัตร ICOCA / Suica เข้า Apple Wallet แล้วแตะผ่านมือถือได้ทันที
          • แตะบัตร IC Card เข้าเกต แล้วขึ้นรถไฟขบวน Nankai Airport Express (สาย Nankai Main Line) มุ่งหน้า Namba
          • ขึ้นรถไฟขบวน Nankai Airport Express (ค่าโดยสาร: 930 เยน, ใช้เวลาประมาณ 44 นาที)
          • ลงที่สถานี Shin-Imamiya Station (NK03) ออกทาง Exit East (ทางออกทิศตะวันออก)
          • เดินเท้าออกจากสถานีไปทางขวามือ มุ่งหน้าสถานี Dobutsuen-Mae ประมาณ 400 เมตร (ใช้เวลาเดิน 5 นาที)`],

          ['10:40 - 11:10', '👜 ฝากกระเป๋า', `นำกระเป๋าเดินทางไปฝากที่ Fujiya Locker:
          • เดินถึงร้าน Fujiya Locker แถวสถานี Dobutsuen-Mae
          • ฝากกระเป๋าเดินทางชิ้นใหญ่และสัมภาระหนักไว้ที่ตู้ฝาก (ค่าฝากประมาณ 500-800 เยน/ตู้ ขึ้นอยู่กับขนาด)
          • เก็บกุญแจ/รหัสรับกระเป๋าไว้ให้ดี เพื่อกลับมารับตอนช่วงค่ำ`],

          ['11:10 - 12:00', '🏃TSUTENKAKU AREA', `เดินท่องเที่ยวและถ่ายรูปย่าน Shinsekai:
          • เดินจากร้าน Fujiya Locker เข้าสู่ใจกลางย่านชินเซไก (Shinsekai) ประมาณ 300 เมตร
          • สัมผัสบรรยากาศย่านคลาสสิกเรโทรยุคโชวะ ถ่ายรูปคู่กับหอคอยสึเต็งกากุ (Tsutenkaku Tower) และป้ายโคมไฟฟุคุโระโกจิน`],

          ['12:00 - 12:30', '🚈 TRAVEL TO DOTONBORI', `เดินทางจากย่าน Shinsekai ไป Dotonbori:
          • เดินไปขึ้นรถไฟ Osaka Metro สาย Midosuji Line (สีแดง) ที่สถานี Dobutsuen-Mae Station (M22)
          • ขึ้นรถไฟมุ่งหน้า Shin-Osaka / Senri-Chuo
          • ลงที่สถานี Namba Station (M20) (ค่าโดยสาร: 190 เยน, ใช้เวลาเดินทางประมาณ 4 นาที)
          • เดินออกทางออก Exit 14 หรือ Exit 25 ขึ้นสู่ระดับดิน แล้วเดินต่อประมาณ 3-5 นาที เข้าสู่ย่าน Dotonbori`],

          ['12:30 - 14:00', '🍽️LUNCH & SWEETS', `รับประทานอาหารเที่ยง ชิมขนมหวาน และถ่ายรูปย่านโดทงโบะริ:
          1. มื้อเที่ยง: เดินไปร้าน Tempura Makino Namba (〒542-0076 Osaka, Chuo Ward, Namba, 3-chōme−3−４) ลิ้มลองเทมปูระทอดสดใหม่ตามสั่ง
          2. หลังอาหาร: เดินเลียบถนนช้อปปิ้ง Shinsaibashi-suji ไปยังร้าน Ripplu (〒542-0085 Osaka, Chuo Ward, Shinsaibashisuji, 1-chōme−5−๒๖ Nippo Osakaya Bldg 1F) เลือกดูและชิมขนมหวานอร่อยๆ
          3. แวะถ่ายรูปจุดเช็กอินยอดฮิต: ป้ายกูลิโกะ (Glico Running Man Sign) สะพานเอบิสึ (Ebisubashi) และบรรยากาศเลียบคลองโดทงโบะริ`],

          ['14:00 - 14:30', '🚈 TRAVEL TO OSAKA CASTLE', `เดินทางจาก Shinsaibashi ไปปราสาทโอซากะ (Osaka Castle):
          • เดินไปขึ้นรถไฟใต้ดินที่สถานี Shinsaibashi Station (N15)
          • ขึ้นสาย Nagahori Tsurumi-ryokuchi Line (สีเขียว) มุ่งหน้า Kadoma-minami
          • ลงที่สถานี Business Park Station (N21) (ค่าโดยสาร: 240 เยน, ใช้เวลาประมาณ 9 นาที)
          • ออกทางออก Exit 1 เดินข้ามสะพานเข้าสู่บริเวณสวนสาธารณะปราสาทโอซากะ (เดินประมาณ 10-12 นาที)`],

          ['14:30 - 16:30', '👀 OSAKA CASTLE', `เที่ยวชมปราสาทโอซากะ (Osaka Castle):
          • เดินชมความอลังการของตัวปราสาท คูเมืองคูชั้นนอกและชั้นใน พร้อมประตูคูโบะและกำแพงหินโบราณ
          • ถ่ายรูปมุมมหาชนคู่กับหอคอยปราสาทหลัก (Main Keep)
          • (ทางเลือกเพิ่มเติม): หากต้องการขึ้นชมวิวด้านบนหอคอยปราสาทและพิพิธภัณฑ์ประวัติศาสตร์ สามารถซื้อตั๋วเข้าชมได้ในราคา 600 เยน/คน`],

          ['16:30 - 17:00', '🚈 TRAVEL TO UMEDA (SHOPPING)', `เดินทางจากปราสาทโอซากะ ไปย่านช้อปปิ้งอุเมดะ (Umeda):
          • เดินจากบริเวณปราสาทไปขึ้นรถไฟที่สถานี Tanimachi 4-chome Station (T23)
          • ขึ้นรถไฟ Osaka Metro สาย Tanimachi Line (สีม่วง) มุ่งหน้า Dainichi
          • ลงที่สถานี Higashi-Umeda Station (T20) (ค่าโดยสาร: 240 เยน, ใช้เวลาประมาณ 7 นาที)
          • เดินตามทางเชื่อมใต้ดิน (Underground Mall) เชื่อมต่อไปยังย่านช้อปปิ้ง Umeda`],

          ['17:00 - 19:30', '🎁 SHOPPING AT UMEDA', `ช้อปปิ้งและรับประทานอาหารเย็นย่านอุเมดะ:
          • เดินเลือกซื้อสินค้าในศูนย์การค้าขนาดใหญ่รอบสถานี:
            - Grand Front Osaka / Lucua Osaka: รวมแฟชั่น เสื้อผ้า แบรนด์เนม สินค้าไลฟ์สไตล์
            - Yodobashi Camera Multimedia Umeda: อาณาจักรเครื่องใช้ไฟฟ้า กล้องถ่ายรูป โมเดล และของเล่น
          • มื้อค่ำ: รับประทานอาหารเย็นใน Lucua Food Hall (ชั้น B2) หรือโซนร้านอาหารชั้นบนของห้างสรรพสินค้า`],

          ['19:30 - 20:15', '🚈 RETRIEVE LUGGAGE', `เดินทางกลับไปรับกระเป๋าเดินทางที่ฝากไว้:
          • เดินไปขึ้นรถไฟ Osaka Metro สาย Midosuji Line (สีแดง) ที่สถานี Umeda Station (M16)
          • ขึ้นรถไฟมุ่งหน้า Nakamozu
          • ลงที่สถานี Dobutsuen-Mae Station (M22) (ค่าโดยสาร: 240 เยน, ใช้เวลาประมาณ 13 นาที)
          • เดินไปที่ร้าน Fujiya Locker ไขตู้รับกระเป๋าเดินทางคืน`],

          ['20:15 - 20:30', '🏚️ CHECK-IN HOTEL', `เดินทางเข้าเช็กอินที่พักย่าน Imamiyaebisu Station:
          • ตัวเลือกที่ 1 (เดินเท้า): ลากกระเป๋าจาก Fujiya Locker ไปยังที่พัก (ระยะทางประมาณ 600-800 เมตร ใช้เวลาเดิน 8-10 นาที)
          • ตัวเลือกที่ 2 (รถไฟ): เดินไปสถานี Shin-Imamiya ขึ้นรถไฟสาย Nankai Koya Line ไปลงสถานี Imamiyaebisu Station (1 สถานี, ค่าโดยสาร 170 เยน)
          • ทำการ Check-in เข้าห้องพัก จัดเก็บสัมภาระ พักผ่อนตามอัธยาศัยเพื่อเตรียมลุยต่อในวันถัดไป`]
        ],
    links: [
      ['Visit Japan Web', 'https://www.vjw.digital.go.jp/'],
      ['KIX Airport', 'https://www.kansai-airport.or.jp/en/'],
      ['Nankai Electric Railway', 'https://www.howto-osaka.com/en/'],
      ['Osaka Metro Route Map', 'https://subway.osakametro.co.jp/en/'],
      ['Google Maps (KIX to City)', 'https://www.google.com/maps']
    ]
  },
  {
    id: 'd16',
    date: '16',
    month: 'ตุลาคม 2569',
    title: 'KYOTO NATURE & HERITAGE DAY TRIP',
    subtitle: '08:00 ออกเดินทาง • เดินป่า Kurama-Kifune • ตลาดนิชิกิ • วัดเอกันโด • วัดคิโยมิซุ • ช็อปปิ้ง & illy BANCO',
    image: 'assets/03.webp',
    chips: ['Shinkansen', 'Kurama-Kifune Hike', 'Nishiki Market', 'Eikan-do', 'Kiyomizu-dera', 'illy BANCO'],
    story: 'ปรับแผนเอาการเดินป่า Kurama-Kifune มาไว้นวดเช้าขณะร่างกายยังสดชื่น สูดอากาศธรรมชาติ แล้วค่อยลงมาเที่ยวในเมือง เก็บวัดสำคัญ ชิมของอร่อย และกลับไปดื่มชิลที่โอซากะไม่ดึกจนเกินไป',
    events: [
      ['08:00 - 08:15', '🚈 IMAMIYAEBISU TO SHIN-OSAKA', `ออกเดินทางจากที่พักย่าน Imamiyaebisu ไปยังสถานี Shin-Osaka
      • เดินไปสถานี Daikokucho Station (M21) หรือขึ้น Nankai ไปลง Namba แล้วต่อสาย Midosuji Line (สีแดง)
      • ขึ้น Osaka Metro Midosuji Line มุ่งหน้า Shin-Osaka / Senri-Chuo
      • ลงสถานี Shin-Osaka Station (M13)
      • ค่าโดยสาร: 290 เยน (ใช้เวลาประมาณ 20 นาที)`],

      ['08:15 - 08:35', '🚄 SHINKANSEN BOARDING', `ขึ้น Shinkansen ที่สถานี Shin-Osaka ไป Kyoto Station:
      1. เดินตามป้าย "Shinkansen" (สีส้ม) ขึ้นชั้นโถงซื้อตั๋ว
      2. ซื้อตั๋วที่ตู้/ห้องตั๋ว JR (Midori-no-Madoguchi) เลือกประเภท Non-Reserved (自由席)
      • ราคาตั๋ว: 1,440 เยน (ตั๋วธรรมดา 570 + ค่าธรรมเนียมด่วนพิเศษ 870 เยน)
      3. เสียบตั๋วเข้าตู้ตรวจตั๋ว Shinkansen Gate (รับตั๋วคืนด้วย)
      4. ไปชานชาลา 23-26 (สายที่จะไป Tokyo)
      5. ขึ้นรถไฟ Shinkansen (Nozomi / Hikari / Kodama)
      • ใช้เวลาเดินทาง 13-15 นาที ถึงสถานี Kyoto`],

      ['08:35 - 09:40', '🚈 KYOTO TO KURAMA', `เดินทางจาก Kyoto Station ไปสถานี Kurama:
      • ขึ้น Kyoto Subway Karasuma Line (สีเขียว) ไปลง Karasuma Oike (K07) (220 เยน, 6 นาที)
      • เปลี่ยนเป็นสาย Tozai Line (สีส้ม) ไปลง Sanjo Keihan (T11) (220 เยน, 3 นาที)
      • เดินไป Keihan Sanjo ขึ้น Keihan Main Line ไปลง Demachiyanagi (KH42) (220 เยน, 3 นาที)
      • เปลี่ยนขึ้น Eizan Electric Railway (Kurama Line) ไปลงสุดสายสถานี Kurama (E17) (470 เยน, 30 นาที)
      • ราคารวม: 910 เยน (ใช้เวลาเดินทางรวมประมาณ 50-60 นาที)`],

      ['09:40 - 12:00', '🏃KURAMA TO KIFUNE HIKE', `เดินป่าชมธรรมชาติและสิ่งศักดิ์สิทธิ์:
      • ถ่ายรูปกับหน้ากากเท็งงุ (Tengu) หน้าสถานี Kurama
      • เดินขึ้นวัดคุรามะเดระ (Kurama-dera) (ค่าบำรุงวัด 500 เยน)
      • เดินป่าตามเส้นทางธรรมชาติผ่านเขา Kurama ข้ามไปศาลเจ้าคิฟุเนะ (Kifune Shrine)
      • ระยะทางรวม 3.9 กม. เดินสบายๆ ถ่ายรูปธรรมชาติ ใช้เวลา 1.5 - 2 ชั่วโมง`],

      ['12:00 - 12:40', '🚌 RETURN FROM KIFUNE', `เดินทางออกจากศาลเจ้าคิฟุเนะเข้าเมือง:
      • เดินไปป้ายรถบัส Kifune ขึ้น Kyoto Bus สาย 33 ไปลงสถานี Kibuneguchi (170 เยน, 5 นาที)
      • ขึ้นรถไฟ Eizan Railway จาก Kibuneguchi (E16) กลับไปสถานี Demachiyanagi (E01) (470 เยน, 27 นาที)`],

      ['12:40 - 14:00', '🍽️ NISHIKI MARKET (LUNCH)', `ทานมื้อเที่ยงที่ตลาดนิชิกิ:
      • จาก Demachiyanagi ขึ้น Keihan Main Line ไปลง Gion-Shijo (KH39) (170 เยน, 5 นาที)
      • เดินข้ามสะพานแม่น้ำกาโมะ เข้าถนน Shijo และตลาดนิชิกิ (เดิน 8-10 นาที)
      • ลิ้มลอง Street Food: เนื้อวากิวเสียบไม้ อาหารทะเลสด สกิยากิคำเล็ก ขนมหวาน (งบประมาณ 1,500 - 3,000 เยน)`],

      ['14:00 - 15:30', '👀 EIKAN-DO ZENRIN-JI', `ชมสวนสวยและสถาปัตยกรรมวัดเอกันโด:
      • เดินไปสถานี Kyoto-Shijo นั่ง Kyoto Bus สาย 5 หรือ 203 ไปลงป้าย Nanzenji-Eikando-michi (230 เยน, 20 นาที)
      • เข้าชมวัดเอกันโด (Eikan-do) ชมสวนญี่ปุ่น อาคารไม้โบราณ และพระพุทธรูปเหลียวหลัง (ค่าเข้าชม 600 เยน)`],

      ['15:30 - 17:30', '👀 KIYOMIZU-DERA', `ชมวิวระเบียงไม้ริมหน้าผา วัดคิโยมิซุ (วัดน้ำใส):
      • จากหน้าวัดเอกันโด ขึ้น Kyoto Bus สาย 100 หรือ 206 ไปลงป้าย Kiyomizu-michi หรือ Gojo-zaka (230 เยน, 15 นาที)
      • เดินขึ้นเนินผ่านถนน Ninenzaka / Sannenzaka เข้าสู่วัดคิโยมิซุ
      • สักการะขอพร ดื่มน้ำสามสายที่น้ำตกโอโตวะ และถ่ายรูปวิวเมืองเกียวโต (ค่าเข้าชม 400 เยน)`],

      ['17:30 - 18:30', '🚄 RETURN TO OSAKA (TENMA)', `เดินทางออกจากเกียวโตรวดเร็วกลับสู่โอซากะ (ย่าน Tenma):
      • เดินลงจากวัดไปสถานี Kiyomizu-Gojo (KH38) สาย Keihan Main Line
      • ขึ้นรถไฟ Keihan Limited Express ไปลงสถานี Kyobashi (KH04) (420 เยน, 40 นาที)
      • เปลี่ยนขึ้น JR Osaka Loop Line ไปลงสถานี JR Tenma (JR-O09) (140 เยน, 2 นาที)`],

      ['18:30 - 20:00', '🍽️ DRINK & RELAX @ illy BANCO', `นั่งดื่มผ่อนคลายยามค่ำคืนที่ไม่ดึกจนเกินไป:
      • เดินจากสถานี JR Tenma 300 เมตร ไปร้าน illy BANCO Tenma (6-17 Ikedachō, Kita Ward, Osaka)
      • สั่งกาแฟ เครื่องดื่มรีเฟรชชิ่ง หรือค็อกเทลเบาๆ พร้อมของทานเล่น สังสรรค์และพักผ่อนหลังจบวัน`],

      ['20:00 - 20:30', '🚈 RETURN TO HOTEL', `เดินทางกลับที่พักย่าน Imamiyaebisu:
      • จากสถานี JR Tenma ขึ้น JR Osaka Loop Line ไปลงสถานี Shin-Imamiya (180 เยน, 15 นาที)
      • เดินเท้ากลับเข้าที่พัก หรือต่อ Nankai Line 1 สถานีลง Imamiyaebisu`]
    ],
    budget_summary: {
      transportation: 'ประมาณ 4,450 เยน / คน (รวม Shinkansen, รถไฟใต้ดิน, Eizan Line, Keihan Line และ Bus)',
      entrances: 'ประมาณ 1,500 เยน / คน (วัด Kurama 500 + วัด Eikan-do 600 + วัด Kiyomizu 400)',
      food_drinks: 'ประมาณ 3,500 - 5,000 เยน / คน (มื้อเที่ยงตลาดนิชิกิ + ร้าน illy BANCO)'
    },
    links: [
      ['Tokaido Shinkansen Info', 'https://railway.jr-central.co.jp/'],
      ['Eizan Electric Railway (Kurama)', 'https://eizandensha.co.jp/en/'],
      ['Kiyomizu-dera Official', 'https://www.kiyomizudera.or.jp/en/'],
      ['illy BANCO Tenma (Google Maps)', 'https://maps.google.com/?q=illy+BANCO+Tenma']
    ]
  },
  {
    id: 'd17',
    date: '17',
    month: 'ตุลาคม 2569',
    title: 'OSAKA LOCAL MARKET, AQUARIUM & YAKINIKU',
    subtitle: '08:00 ออกเดินทาง • ตลาดปลาคิซุ • พิพิธภัณฑ์สัตว์น้ำไคยูคัง & ชิงช้าสวรรค์ • ยากินิกุบุฟเฟต์ Umeda',
    image: 'assets/06.jpg',
    chips: ['Kizu Market', 'Kaiyukan Aquarium', 'Tempozan', 'Ohatsu Tenjin', 'Yakiniku Rikimaru'],
    story: 'สัมผัสบรรยากาศตลาดเช้าแบบท้องถิ่นแท้ๆ ลิ้มลองอาหารทะเลสด ชมความยิ่งใหญ่ของฉลามวาฬที่ไคยูคัง และปิดท้ายวันด้วยยากินิกุบุฟเฟต์สุดพรีเมียมย่านอุเมดะ',
    events: [
      ['08:00 - 08:20', '🏃 HOTEL TO KIZU MARKET', `เดินทางจากที่พักย่าน Imamiyaebisu ไปตลาดปลาคิซุ (Osaka Kizu Wholesale Market):
      • ออกเดินทางจากที่พัก เดินเท้ามุ่งหน้าไปทางทิศเหนือประมาณ 500-600 เมตร (ใช้เวลาเดินประมาณ 7-10 นาที)
      • ตลาดตั้งอยู่ใกล้กับสถานี Daikokucho Station สามารถเดินถึงได้โดยไม่ต้องขึ้นรถไฟ`],

      ['08:20 - 10:30', 'KIZU MARKET & NEIGHBORHOOD', `เที่ยวชมตลาดปลาคิซุและเดินเล่นย่านรอบๆ:
      • สัมผัสบรรยากาศตลาดค้าส่งเก่าแก่ของโอซากะ (คนไม่แน่นเท่าตลาดคุโรมง ได้ฟีลท้องถิ่นแท้ๆ)
      • มื้อเช้า: ลิ้มลองข้าวหน้าปลาดิบ (Kaisen-don) สดๆ หรือซูชิหน้าแน่นจากร้านในตลาด เช่น ร้าน Kizu Ichiba Shokudo
      • เดินเล่นถ่ายรูปบรรยากาศตลาด เลือกซื้อผลไม้สดตามฤดูกาล และของแห้งคุณภาพดี`],

      ['10:30 - 11:15', 'TRAVEL TO KAIYUKAN', `เดินทางจากตลาดคิซุ ไปพิพิธภัณฑ์สัตว์น้ำไคยูคัง (Kaiyukan Aquarium):
      • เดินไปขึ้นรถไฟใต้ดิน Osaka Metro สาย Midosuji Line (สีแดง) ที่สถานี Daikokucho Station (M21)
      • ขึ้นรถไฟมุ่งหน้า Senri-Chuo ไปลงที่สถานี Hommachi Station (M19)
      • เปลี่ยนไปขึ้นสาย Chuo Line (สีเขียว) มุ่งหน้า Cosmo Square
      • ไปลงที่สถานี Osakako Station (C11) (ค่าโดยสารรวม: 290 เยน, ใช้เวลาเดินทางประมาณ 20 นาที)
      • เดินออกจากทางออก Exit 1-2 เดินตรงไปตามทางประมาณ 600 เมตร (5 นาที) ถึงตึกไคยูคัง`],

      ['11:15 - 12:00', 'TEMPOZAN LUNCH & PREP', `แวะทานมื้อเที่ยงเบาๆ และเตรียมเข้าชมไคยูคัง:
      • เดินเข้าศูนย์การค้า Tempozan Marketplace (ติดกับพิพิธภัณฑ์)
      • ลิ้มลองอาหารท้องถิ่นในโซน Naniwa Kuishinbo Yokocho (จำลองเมืองโอซากะยุคโชวะ) เช่น ข้าวหน้าข้าวหน้าเนื้อ หรือทาโกะยากิร้านดัง
      • (แนะนำ): ควรจองตั๋วเข้าชม Kaiyukan ล่วงหน้าผ่านออนไลน์เพื่อระบุเวลารอบเข้าชม จะได้ไม่ต้องยืนต่อคิวซื้อตั๋วยาว`],

      ['12:00 - 15:00', 'KAIYUKAN AQUARIUM', `ท่องโลกใต้ทะเลที่พิพิธภัณฑ์สัตว์น้ำไคยูคัง:
      • เข้าชมหนึ่งในพิพิธภัณฑ์สัตว์น้ำที่ใหญ่ที่สุดในโลก ไฮไลต์คือตู้แท็งก์ยักษ์ Pacific Ocean สูงเท่าตึก 9 ชั้น
      • ชมฉลามวาฬ (Whale Shark) พระเอกของไคยูคัง ปลากระเบนราหู และเพนกวินจักรพรรดิ
      • เดินตามทางวนลงจากชั้นบนลงล่าง ชมสัตว์ทะเลจากทั่วทุกมุมโลก (ใช้เวลาเดินชมประมาณ 2 - 2.5 ชั่วโมง)`],

      ['15:00 - 16:30', 'TEMPOZAN FERRIS WHEEL', `ชมวิวริมอ่าวโอซากะที่ Tempozan Giant Ferris Wheel:
      • เดินออกจากไคยูคังไปยังชิงช้าสวรรค์เท็มโปซาน (ตั้งอยู่ข้างๆ กัน)
      • ขึ้นชิงช้าสวรรค์ยักษ์ชมวิวอ่าวโอซากะแบบ 360 องศา (ค่าเข้า: 800 เยน, ใช้เวลาหมุน 1 รอบประมาณ 15 นาที)
      • มีตู้แบบพื้นกระจกซีทรู (See-through Cabin) สำหรับคนชอบความตื่นเต้น
      • เดินเล่นถ่ายรูปรับลมทะเลบริเวณท่าเรือริมอ่าว`],

      ['16:30 - 17:15', 'TRAVEL TO UMEDA', 
        `เดินทางจากอ่าวโอซากะ ไปย่านโอฮาซึ เท็นจิน (Umeda / Sonezaki):
      • เดินกลับไปสถานี Osakako Station (C11) ขึ้นรถไฟ Osaka Metro สาย Chuo Line (สีเขียว)
      • ลงที่สถานี Hommachi Station (C16) เปลี่ยนไปขึ้นสาย Midosuji Line (สีแดง) มุ่งหน้า Shin-Osaka / Senri-Chuo
      • ลงที่สถานี Umeda Station (M16) (ค่าโดยสารรวม: 290 เยน, ใช้เวลาประมาณ 20 นาที)
      • เดินออกทางออกไปฝั่ง Sonezaki / Ohatsu Tenjin เดินต่อประมาณ 5-7 นาทีไปยังร้านยากินิกุ`],

      ['17:15 - 17:45', 'OHATSU TENJIN SHRINE', `เดินเล่นถ่ายรูปศาลเจ้าโอฮาซึ เท็นจิน (Ohatsu Tenjin Shrine / Tsuyu no Tenjinja):
      • แวะถ่ายรูปบรรยากาศศาลเจ้าเก่าแก่ที่มีชื่อเสียงเรื่องความรักและการขอพร ตั้งอยู่ทางเข้าซอยตรอกร้านอาหาร
      • เดินชมโคมไฟประดับยุคคลาสสิกรอบซอย Ohatsu Tenjin Dori ก่อนถึงเวลานัดหมายมื้อค่ำ`],

      ['17:45 - 20:00', 'DINNER @ YAKINIKU RIKIMARU', `รับประทานอาหารเย็น ยากินิกุบุฟเฟต์สุดพรีเมียม:
      • เข้าทานที่ร้าน Yakiniku Rikimaru Umeda-ohatsutenjin (八幸ビル B1F)
      • ลิ้มลองเนื้อวัวญี่ปุ่นคุณภาพเยี่ยม คัลบี้ ลิ้นวัว สเต๊กเนื้อหนานุ่ม และเครื่องดื่มแบบสั่งได้ไม่จำกัด (Buffet All-You-Can-Eat)
      • (แนะนำ): ควรทำการสำรองโต๊ะล่วงหน้าผ่านเว็บไซต์ของร้านเพื่อประกันคิว`],

      ['20:00 - 20:30', 'RETURN TO HOTEL', `เดินทางกลับที่พักย่าน Imamiyaebisu:
      • เดินไปสถานี Higashi-Umeda ขึ้น Tanimachi Line ไปลง Tanimachi 9-chome แล้วเปลี่ยนสาย หรือเดินไปสถานี Umeda (M16) ขึ้น Midosuji Line
      • นั่งสาย Midosuji Line มุ่งหน้า Nakamozu ไปลงสถานี Daikokucho Station (M21) (ค่าโดยสาร: 240 เยน, ใช้เวลา 12 นาที)
      • เดินเท้ากลับเข้าที่พัก พักผ่อนตามอัธยาศัย`]
    ],
    budget_summary: {
      transportation: 'ประมาณ 820 เยน / คน (รถไฟใต้ดิน Osaka Metro ตลอดวัน)',
      entrances: 'ประมาณ 3,500 เยน / คน (ตั๋ว Kaiyukan ~2,700 เยน + ชิงช้าสวรรค์ Tempozan 800 เยน)',
      food_drinks: 'ประมาณ 6,000 - 8,000 เยน / คน (มื้อเช้าตลาดคิซุ ~1,500 เยน + ยากินิกุบุฟเฟต์ Rikimaru ~4,500 - 6,000 เยน)'
    },
    links: [
      ['Osaka Kizu Market', 'https://a-kizu.or.jp/'],
      ['Kaiyukan Aquarium Official', 'https://www.kaiyukan.com/language/eng/'],
      ['Yakiniku Rikimaru Official', 'http://www.nikurikimaru.com/']
    ]
  },
  {
    id: 'd18',
    date: '18',
    month: 'ตุลาคม 2569',
    title: 'KOBE HIGHLIGHTS & OSAKA FUKUSHIMA DINNER',
    subtitle: '08:00 ออกเดินทาง • Kobe Suma Seaworld • มื้อเที่ยง Shinjidai • พิพิธภัณฑ์ศิลปะ Hyogo • átoa Aquarium • แฮมเบิร์ก New Bungo',
    image: 'assets/07.avif',
    chips: ['Kobe Suma Seaworld', 'Shinjidai', 'Hyogo Prefectural Museum of Art', 'átoa Aquarium', 'New Bungo Fukushima'],
    story: 'จัดเต็มวันเที่ยวโกเบ สัมผัสความน่ารักของสัตว์ทะเลระดับโลก ลิ้มลองอิซากายะไก่ทอดเจ้าดัง เดินเสพงานศิลป์สถาปัตยกรรม Tadao Ando ต่อด้วยอควาเรียมดิจิทัลอาร์ต และกลับมาปิดท้ายมื้อค่ำที่โอซากะด้วยแฮมเบิร์กเนื้อวัวสไตล์พรีเมียม',
    events: [
      ['08:00 - 08:30', 'IMAMIYAEBISU TO SHIN-IMAMIYA', `ออกเดินทางจากที่พักไปขึ้นรถไฟหลัก:
      • เดินจากที่พักไปยังสถานี JR Shin-Imamiya Station (ระยะทางประมาณ 500-600 เมตร ใช้เวลาเดิน 7-10 นาที)
      • เตรียมบัตร IC Card (Suica/ICOCA) ให้พร้อม`],

      ['08:30 - 09:30', 'SHIN-IMAMIYA TO SUMAKAISEIKAN-MAE', `เดินทางมุ่งหน้า Kobe Suma Seaworld (ฝั่งซูมะ เมืองโกเบ):
      • จากสถานี JR Shin-Imamiya ขึ้นรถไฟสาย JR Yamatoji Line ไปลงสถานี JR Osaka Station (180 เยน, 15 นาที)
      • ที่สถานี JR Osaka เปลี่ยนไปขึ้นรถไฟสาย JR Kobe Line Special Rapid Service มุ่งหน้า Himeji
      • ไปลงที่สถานี JR Shin-Nagata Station แล้วต่อรถไฟ Local ไปลงที่สถานี JR Sumakaihinkoen Station (JR Suma Seaside Park Station) (ค่าโดยสารรวมช่วง JR: 950 เยน, ใช้เวลาเดินทางรวมประมาณ 45-50 นาที)
      • เดินออกจากสถานี JR Sumakaihinkoen ทางออก South Exit เดินตรงไปทางชายหาดประมาณ 400 เมตร (5 นาที) ถึง Kobe Suma Seaworld`],

      ['09:30 - 12:00', 'KOBE SUMA SEAWORLD', `เที่ยวชม Kobe Suma Seaworld:
      • เข้าชมพิพิธภัณฑ์สัตว์น้ำริมทะเลขนาดใหญ่เปิดใหม่แห่งเมืองโกเบ
      • ไฮไลต์: ชมการแสดงวาฬเพชฌฆาต (Orca Performance) ที่ Orca Stadium แห่งเดียวในภูมิภาคคันไซ
      • ชมการแสดงโลมา (Dolphin Stadium) และโซนจัดแสดงสัตว์ขั้วโลก/ปลาทะเลนานาชนิด
      • (ค่าเข้าชม: ประมาณ 3,100 เยน/คน แนะนำซื้อตั๋วระบุเวลิต้นทางออนไลน์ล่วงหน้า)`],

      ['12:00 - 12:30', 'TRAVEL TO KITANAGASADORI', `เดินทางจาก Suma เข้าสู่ใจกลางเมืองโกเบ (ย่าน Motomachi / Sannomiya):
      • เดินกลับมายังสถานี JR Sumakaihinkoen Station
      • ขึ้นรถไฟ JR Kobe Line Local / Rapid มุ่งหน้า Osaka / Kyoto
      • ไปลงที่สถานี JR Motomachi Station (NK16) หรือ JR Sannomiya Station (ค่าโดยสาร: 240 เยน, ใช้เวลาเดินทางประมาณ 12 นาที)
      • เดินออกจากสถานี Motomachi ทางออก East Exit เดินต่อประมาณ 3 นาที เข้าสู่ถนน Kitanagasadori`],

      ['12:30 - 14:00', 'LUNCH @ SHINJIDAI', `ทานมื้อเที่ยงสุดคึกคักที่ร้าน Shinjidai (新時代 神戸北長狭通店):
      • พิกัด: 2-chōme-12-10 Kitanagasadōri, Chuo Ward, Kobe (เดินจากสถานี Motomachi หรือ Sannomiya เพียง 3-5 นาที)
      • ลิ้มลองเมนูเด็ด "Densetsu no Denskawa" หนังไก่ทอดกรอบสูตรเฉพาะไม้ละ 50 เยน จิ้มผงพริกสไปซี่สั่งทานคู่กับเครื่องดื่มเย็นๆ
      • เมนูของทอด ข้าวหน้าต่างๆ และอาหารสไตล์อิซากายะราคามิตรภาพ (งบประมาณประมาณ 1,500 - 2,500 เยน/คน)`],

      ['14:00 - 14:30', 'TRAVEL TO HYOGO ART MUSEUM', `เดินทางไปพิพิธภัณฑ์ศิลปะประจำจังหวัดเฮียวโงะ (Hyogo Prefectural Museum of Art):
      • เดินจากร้าน Shinjidai ไปขึ้นรถไฟที่สถานี Hanshin Motomachi หรือ Hanshin Sannomiya Station
      • ขึ้นรถไฟสาย Hanshin Main Line Local ไปลงที่สถานี Iwaya Station (HS23) (ค่าโดยสาร: 160 เยน, ใช้เวลาประมาณ 5 นาที)
      • เดินออกจากสถานี Iwaya ทางออก South Exit เดินลงไปทางชายฝั่งทะเลประมาณ 600 เมตร (ใช้เวลาเดิน 8-10 นาที)`],

      ['14:30 - 16:00', 'HYOGO PREFECTURAL MUSEUM OF ART', `เสพงานศิลป์และสถาปัตยกรรมระดับโลก:
      • ตัวอาคารออกแบบโดย Tadao Ando สถาปัตยกรรมคอนกรีตเปลือย ผสมผสานแสงเงาและวิวทะเลอันโดดเด่น
      • ถ่ายรูปจุดเช็กอิน "Green Apple" (รูปปั้นแอปเปิลสีเขียวยักษ์ริมระเบียงทะเล) และบันไดวนคอนกรีตสุดเท่
      • เดินชมงานประติมากรรม ภาพเขียนศิลปะญี่ปุ่นและตะวันตก (ค่าเข้าชมโซนนิทรรศการถาวร: 500 เยน)`],

      ['16:00 - 16:30', 'TRAVEL TO átoa AQUARIUM', `เดินทางไป átoa (Kobe Port Museum):
      • เดินจากพิพิธภัณฑ์ศิลปะประมาณ 3 นาที ไปขึ้นรถบัสท่องเที่ยวสาย Port Loop Bus ที่ป้าย Hatoba-cho / Museum Side
      • นั่งรถบัส Port Loop ไปลงที่ป้าย Shinko-cho (ค่ารถบัส: 210 เยน, ใช้เวลาประมาณ 10 นาที)
      • เดินต่อ 1 นาทีถึงตึก Kobe Port Museum (átoa)`],

      ['16:30 - 18:00', 'átoa AQUARIUM (THEATRICAL AQUARIUM)', `เที่ยวชม átoa (Aquarium x Art):
      • พิพิธภัณฑ์สัตว์น้ำเชิงละครเวทีและดิจิทัลอาร์ต (Theatrical Aquarium) สุดล้ำ
      • ไฮไลต์: โซน MIYABI (ชมปลาคราฟใต้เงาบอนไซและ Projection Mapping 4 ฤดู) และตู้ปลาทรงกลมยักษ์ "AQUA TERRA" ใต้แสงสีสุดอลังการ
      • เดินขึ้นชั้นดาดฟ้า (Rooftop) ชมวิวท่าเรือโกเบและเสพบรรยากาศพระอาทิตย์ตกดิน (ค่าเข้าชม: 2,400 เยน)`],

      ['18:00 - 18:45', 'TRAVEL TO OSAKA (FUKUSHIMA)', `เดินทางจากโกเบ กลับโอซากะ เพื่อทานมื้อค่ำย่านฟุคุชิมะ:
      • เดินจาก átoa ประมาณ 12-15 นาที (หรือนั่ง Port Loop Bus 210 เยน) ไปยังสถานี JR Sannomiya Station
      • ขึ้นรถไฟ JR Kobe Line Special Rapid Service มุ่งหน้า Osaka/Kyoto
      • ไปลงที่สถานี JR Osaka Station (410 เยน, 21 นาที)
      • เปลี่ยนไปขึ้นรถไฟ JR Osaka Loop Line หรือ JR Tozai Line 1 สถานี ไปลงที่สถานี JR Fukushima Station (140 เยน, 2 นาที)
      • เดินออกจากสถานี JR Fukushima ประมาณ 250 เมตร (3 นาที) ไปยังร้าน New Bungo`],

      ['18:45 - 20:30', 'DINNER @ NEW BUNGO FUKUSHIMA', `รับประทานมื้อค่ำระดับพรีเมียม ร้าน New Bungo (焼肉ホルモン ニューブンゴ 福島本店):
      • พิกัด: 7-chōme-11-51 Fukushima, Fukushima Ward, Osaka
      • ลิ้มลองแฮมเบิร์กเนื้อวัวญี่ปุ่น (Wagyu Hamburg) ย่างบนเตาถ่าน รสชาติฉ่ำนุ่ม เข้มข้น ซอสสูตรพิเศษ และเมนูเนื้อยากินิกุเกรดพรีเมียม
      • (งบประมาณประมาณ 3,000 - 5,000 เยน/คน แนะนำให้จองคิวล่วงหน้าเพื่อความชัวร์)`],

      ['20:30 - 21:00', 'RETURN TO HOTEL', `เดินทางกลับที่พักย่าน Imamiyaebisu:
      • เดินกลับมาสถานี JR Fukushima Station
      • ขึ้นรถไฟ JR Osaka Loop Line (Inner Loop) มุ่งหน้า Tennoji
      • ไปลงที่สถานี JR Shin-Imamiya Station (180 เยน, 12 นาที)
      • เดินเท้ากลับเข้าที่พักผ่อนอย่างสบายใจ`]
    ],
    budget_summary: {
      transportation: 'ประมาณ 2,330 เยน / คน (รถไฟ JR, Hanshin และ Port Loop Bus ตลอดทริป)',
      entrances: 'ประมาณ 6,000 เยน / คน (Kobe Suma Seaworld ~3,100 เยน + Hyogo Art Museum 500 เยน + átoa 2,400 เยน)',
      food_drinks: 'ประมาณ 5,000 - 7,500 เยน / คน (เที่ยง Shinjidai ~2,000 เยน + เย็น New Bungo ~4,000-5,000 เยน)'
    },
    links: [
      ['Kobe Suma Seaworld', 'https://www.kobesuma-seaworld.jp/'],
      ['Shinjidai Kitanagasadori', 'https://www.hotpepper.jp/strJ003807104/'],
      ['Hyogo Prefectural Museum of Art', 'http://www.artm.pref.hyogo.jp/'],
      ['átoa Aquarium Kobe', 'https://atoa-kobe.jp/'],
      ['New Bungo Fukushima (Google Maps)', 'https://maps.google.com/?cid=7916299416785205822&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ']
    ]
  },
  {
    id: 'd19',
    date: '19',
    month: 'ตุลาคม 2569',
    title: 'KYOTO WESTSIDE VESPA RIDE & ARASHIYAMA',
    subtitle: '07:30 ออกเดินทาง • เช่า Vespa ร้าน Inoda Motors • ขี่เที่ยวฝั่งตะวันตก (Arashiyama/Kinkakuji) • คืนรถ • กลับโอซากะ',
    image: 'assets/08.webp',
    chips: ['Vespa Ride', 'Inoda Motors', 'Arashiyama', 'Bamboo Grove', 'Kinkakuji', 'Kyoto West'],
    story: 'รับลมฟินๆ ขับ Vespa ตระเวนเที่ยวเกียวโตฝั่งตะวันตก ลัดเลาะเส้นทางสายธรรมชาติและวัดมรดกโลกอย่างอาราชิยามะ และวัดทอง คินคะคุจิ เปิดประสบการณ์ท่องเที่ยวรูปแบบใหม่ไม่ซ้ำใคร',
    driving_requirements: {
      license: 'ใบขับขี่สากล (International Driving Permit - IDP) ตามอนุสัญญาเจนีวา 1949 (ต้องมีตราปั๊มช่อง A สำหรับรถจักรยานยนต์) + ใบขับขี่ไทยจริง (ประเภทรถจักรยานยนต์) + พาสปอร์ต',
      japan_traffic_rules: [
        'เลนวิ่ง: ชิดซ้ายเสมอ เหมือนประเทศไทย',
        'การจอดรถ: ห้ามจอดบนทางเท้าหรือข้างถนนส่งเดช ต้องจอดในที่จอดรถจักรยานยนต์ (駐輪場 - Churinjo) เท่านั้น',
        'หมวกกันน็อก: ต้องสวมหมวกกันน็อกตลอดเวลาขณะขับขี่',
        'ป้าย Stop (一時停止 - Ichiji Teishi): เจอป้ายสีแดงสามเหลี่ยม ต้องเอาเท้าแตะพื้นจอดสนิท 3 วินาทีก่อนไปต่อ',
        'การดื่ม: ดื่มไม่ขับเด็ดขาด (Zero Tolerance) กฎหมายญี่ปุ่นปรับหนักมากและมีโทษจำคุก'
      ]
    },
    events: [
      ['07:30 - 08:30', 'OSAKA TO KYOTO (INODA MOTORS)', `เดินทางจากโอซากะไปร้านเช่ารถ Inoda Motors เกียวโต:
      • นั่ง Osaka Metro จาก Daikokucho ไปลง Midosuji Line สถานี Yodoyabashi (190 เยน, 8 นาที)
      • เปลี่ยนเป็นสาย Keihan Main Line Limited Express ไปลงสถานี Sanjo Station (430 เยน, 50 นาที)
      • เปลี่ยนขึ้น Kyoto Subway Tozai Line 1 สถานี ไปลง Karasuma Oike Station (K08/T13) (220 เยน, 2 นาที)
      • เดินออกทางออก Exit 1 เดินต่อประมาณ 350 เมตร (4 นาที) ถึงร้าน Inoda Motors (〒604-0831 Kyoto, Nakagyo Ward, Matsuyacho)`],

      ['08:30 - 09:30', 'SCOOTER PICKUP & SAFETY BRIEF', `รับรถ Vespa และเตรียมความพร้อม:
      • ยื่นเอกสาร: พาสปอร์ต + ใบขับขี่สากล (ตราปั๊มจักรยานยนต์) + ใบขับขี่ไทย
      • ตรวจเช็กรถ ตรวจสภาพรอยรอบคัน รับหมวกกันน็อก และฟังคำแนะนำการใช้งาน/การเติมน้ำมัน
      • สแกนและตั้งค่า Google Maps/GPS ติดมือถือบนแฮนด์รถ`],

      ['09:30 - 10:30', 'SCENIC DRIVE TO ARASHIYAMA', `ขับ Vespa มุ่งหน้าสู่ย่านอาราชิยามะ (Arashiyama - ฝั่งตะวันตก):
      • ขี่ออกจากร้าน Inoda Motors วิ่งออกทางถนน Sanjo-dori หรือ Marutamachi-dori มุ่งหน้าทิศตะวันตก
      • สัมผัสบรรยากาศย่านชุมชนเมืองเก่าเกียวโต และถนนสายธรรมชาติเขียวขจี (ระยะทางประมาณ 9-10 กม. ใช้เวลาขับประมาณ 30-40 นาที)
      • นำรถเข้าจอดที่ลานจอดรถจักรยานยนต์ Arashiyama Parking Area (ค่าจอดประมาณ 200-300 เยน)`],

      ['10:30 - 13:00', 'EXPLORE ARASHIYAMA & LUNCH', `เที่ยวชมอาราชิยามะและรับประทานมื้อเที่ยง:
      • เดินชมสะพานโทเก็ตสึเคียว (Togetsukyo Bridge) จุดเช็กอินริมแม่น้ำคัตสึระ
      • เดินลอดป่าไผ่อาราชิยามะ (Arashiyama Bamboo Grove) สัมผัสบรรยากาศอันร่มรื่น
      • มื้อเที่ยง: ลิ้มลองอาหารริมทาง เช่น โครกเกะเนื้อเต้าหู้ ข้าวหน้าปลาไหล หรือยูดาฟุ (เต้าหู้ต้มเกียวโต)`],

      ['13:00 - 13:40', 'DRIVE TO KINKAKUJI (GOLDEN PAVILION)', `ขี่ Vespa ต่อไปยังวัดทอง คินคะคุจิ:
      • ขี่ออกจากอาราชิยามะ วิ่งขึ้นทางทิศตะวันตกเฉียงเหนือผ่านเส้นทาง Kinukake no Michi (Road of Silk)
      • เส้นทางขับขี่สวยงาม ผ่านธรรมชาติและภูเขาทางตะวันตก (ระยะทางประมาณ 8 กม. ใช้เวลาขับประมาณ 25-30 นาที)
      • จอดรถที่ลานจอดรถจักรยานยนต์ของวัดคินคะคุจิ (Kinkakuji Motorcycle Parking Area)`],

      ['13:40 - 15:00', 'VISIT KINKAKUJI TEMPLE', `ชมความงามของวัดทอง คินคะคุจิ:
      • เดินเข้าชมปราสาททองคำส่องแสงสะท้อนบนผืนน้ำในสวนญี่ปุ่นสไตล์อาชิคะงะ (ค่าเข้าชม: 500 เยน)
      • ถ่ายรูปมุมมหาชนคู่กับปราสาท 3 ชั้นที่โค้งรับกับสวนหินและต้นสนโบราณ`],

      ['15:00 - 15:40', 'DRIVE TO KITANO TENMANGU', `ขี่รถต่อไปยังศาลเจ้าคิตาโนะ เท็นมังกู:
      • ขี่ลงมาทางทิศใต้เพียง 1.5 กม. (ใช้เวลาขับขี่ประมาณ 5-7 นาที)
      • แวะสักการะศาลเจ้าคิตาโนะ เท็นมังกู (Kitano Tenmangu Shrine) ศาลเจ้าแห่งเทพเจ้าการเรียนรู้
      • แวะชิมขนมหวานโบราณจิบชา หรือพักผ่อนที่คาเฟ่เก๋ๆ ย่าน Kamishichiken (ย่านเกอิชาเก่าแก่ที่ตั้งอยู่ข้างศาลเจ้า)`],

      ['15:40 - 16:30', 'RETURN VESPA & GAS FILL-UP', `เติมน้ำมันและคืนรถที่ Inoda Motors:
      • แวะเติมน้ำมันเบนซิน (Regular / เลกูลาร์) ให้เต็มถังที่ปั๊มน้ำมันใกล้ร้าน (ต้องเก็บใบเสร็จน้ำมันไว้แสดงตอนคืนรถ)
      • ขี่กลับมายังร้าน Inoda Motors คืนรถ ตรวจเช็กความเรียบร้อยรอบคัน (ต้องคืนรถก่อนเวลา 17:00 น.)`],

      ['16:30 - 18:30', 'RETURN TO OSAKA & SHOPPING', `เดินทางกลับโอซากะและพักผ่อนย่านช้อปปิ้ง:
      • เดินไปสถานี Karasuma Oike ขึ้นรถไฟใต้ดินลง Sanjo / Shijo เปลี่ยนขึ้น Keihan หรือ Hankyu Line กลับเข้าโอซากะ (ประมาณ 50 นาที, 430-600 เยน)
      • เดินเล่นช้อปปิ้งซื้อของฝากเบาๆ แถวย่าน Namba หรือ Shinsaibashi`],

      ['18:30 - 20:30', 'DINNER & HOTEL REST', `รับประทานอาหารค่ำและกลับที่พัก:
      • ทานมื้อค่ำตามอัธยาศัยในโอซากะ
      • เดินทางกลับเข้าที่พักย่าน Imamiyaebisu เก็บสัมภาระเตรียมตัวเดินทางกลับในวันรุ่งขึ้น`]
    ],
    budget_summary: {
      transportation: 'ประมาณ 1,500 เยน / คน (ค่ารถไฟไป-กลับ โอซากะ-เกียวโต)',
      vespa_rental: 'ประมาณ 5,000 - 8,000 เยน / คัน (ขึ้นอยู่กับรุ่น 50cc หรือ 125cc + ค่าน้ำมันเต็มถัง ~500 เยน + ค่าจอดรถ ~500 เยน)',
      entrances: 'ประมาณ 500 เยน / คน (ค่าเข้าวัดคินคะคุจิ)',
      food_drinks: 'ประมาณ 3,000 - 5,000 เยน / คน'
    },
    links: [
      ['Inoda Motors Official', 'https://inoda-m.com/'],
      ['Kyoto Traffic Rules for Foreigners', 'https://www.pref.kyoto.jp/furyokyo/'],
      ['Arashiyama Tourism', 'https://www.arashiyama-kyoto.com/'],
      ['Kinkakuji Official', 'https://www.kinkaku-ji.or.jp/']
    ]
  },
  {
    id: 'd19_2',
    date: '19',
    month: 'ตุลาคม 2569',
    title: 'OSAKA ULTIMATE FOOD & VINTAGE SHOPPING (ALTERNATIVE PLAN)',
    subtitle: '09:00 Kuromon Market • ย่านวินเทจ Amerikamura & Shinsaibashi • สวรรค์ของมือสอง Nipponbashi & Ota Road • ช้อปมินิมอล Horie • ปิดท้ายมื้อเย็น Dotonbori',
    image: 'assets/05.webp',
    chips: ['Kuromon Market', 'Amerikamura', 'Shinsaibashi', 'Nipponbashi', 'Horie', 'Dotonbori'],
    story: 'แผนสำรองสุดชิลสำหรับวันช้อปและกินทั่วโอซากะ ลุยตลาดเช้ากินอาหารทะเลสดๆ ต่อด้วยแหล่งเสื้อผ้ามือสอง แบรนด์เนมวินเทจ ฟิกเกอร์ โมเดล สินค้าไอทีราคาดี และช้อปปิ้งสตรีทแวร์ย่านฮิปๆ พร้อมตบท้ายด้วยสตรีทฟู้ดรอบดัดอันเลื่องชื่อ',
    events: [
      ['09:00 - 11:00', 'KUROMON ICH IBA MARKET', `ตะเวนกินอาหารทะเลสดๆ ยามเช้าที่ตลาดคุโรมง (Kuromon Ichiba Market):
      • เดินจากที่พักย่าน Imamiyaebisu ไปขึ้นรถไฟใต้ดิน Sakuraisuji Line ลงสถานี Nippombashi Station (190 เยน, 5 นาที) หรือเดินเท้าประมาณ 15 นาที
      • จัดเต็มสตรีทฟู้ดสดใหม่: ขาปูยักษ์ย่าง, ข้าวหน้าปลาดิบสามสี, หอยเชลล์ย่างเนย, เนื้อวัววากิว A5 เสียบไม้ย่าง, และสตรอว์เบอร์รีลูกโต
      • (งบประมาณอาหารเช้า/สาย: ประมาณ 2,500 - 4,000 เยน/คน)`],

      ['11:00 - 13:00', 'AMERIKAMURA (AMEMURA) VINTAGE CLOTHES', `ล่าเสื้อผ้ามือสองและสตรีทแวร์ย่านอเมริกามูระ (Amerikamura):
      • เดินจากตลาดคุโรมงมุ่งหน้าทิศตะวันตกเฉียงเหนือประมาณ 10-15 นาที สู่ย่านอเมริกามูระ
      • ลุยขุมทรัพย์เสื้อผ้ามือสองราคาดี: ร้าน **JAM**, **2nd STREET Amerikamura**, **KINJI**, และ **Kindal**
      • ขุดค้นเสื้อผ้าวินเทจแนว 90s, แจ็กเก็ตยีนส์, เสื้อยืดวงดนตรี, รองเท้าผ้าใบมือสองสภาพดีราคาคุ้มค่า
      • พักทานขนม: ทาโกะยากิร้านดัง Kogaryu (甲賀流) ทาโกะยากิแป้งนุ่มราดมายองเนสซิกเนเจอร์`],

      ['13:00 - 14:30', 'LUNCH & HORIE SHOPPING STREET', `มื้อเที่ยงและเดินช้อปย่านโฮริเอะ (Horie / Orange Street):
      • เดินข้ามฝั่งไปย่าน Horie (Orange Street) ย่านสุดชิคที่เต็มไปด้วยร้านคาเฟ่ คอนเซปต์สโตร์ และสินค้าดีไซน์
      • มื้อเที่ยง: ทานข้าวหน้าเนื้อราเมง หรือคาเฟ่สไตล์แฟชั่นในย่านโฮริเอะ (งบประมาณ ~1,500 เยน/คน)
      • เดินส่องร้านเลือกซื้อสินค้าแฟชั่นมินิมอล, แบรนด์สตรีทชั้นนำ (Supreme, BAPE, Stussy) และเฟอร์นิเจอร์/ของแต่งบ้านมือสอง`],

      ['14:30 - 17:00', 'NIPPONBASHI OTA ROAD & SECOND-HAND TREASURES', `สวรรค์ของมือสอง ฟิกเกอร์ แบรนด์เนม และสินค้าไอที ย่านนิปปอนบาชิ:
      • เดินย้อนกลับมาทางย่าน Nipponbashi (Ota Road)
      • **โมเดล/ฟิกเกอร์/เกมมือสอง:** แวะร้าน **Mandarake Complex**, **Animate**, **K-Books**, และ **駿河屋 (Surugaya)** แหล่งรวมของสะสมมือสองสภาพนางฟ้าในราคาประหยัด
      • **กล้อง/อุปกรณ์ไอทีมือสอง:** แวะร้าน **Sofmap** และ **Janpara** ขุดหากล้องดิจิทัล, เลนส์มือสอง, และแก็ดเจ็ตสภาพดี
      • **สินค้าแบรนด์เนมมือสอง (Used Luxury):** หากสนใจกระเป๋า/นาฬิกาแบรนด์เนม แวะร้าน **Komehyo** หรือ **Daikokuya** ย่านใกล้เคียง`],

      ['17:00 - 19:00', 'SHINSAIBASHI-SUJI SHOPPING STREET', `ช้อปปิ้งส่งท้ายย่านถนนคนเดินชินไซบาชิ:
      • เดินเข้าสู่ถนนคนเดิน Shinsaibashi-suji Shopping Street
      • แวะช้อปปิ้งร้านค้าแบรนด์ชั้นนำ: Uniqlo Global Flagship Store, GU, Zara, ร้านขายยาและเครื่องสำอางชั้นนำ (Matsumoto Kiyoshi / Don Quijote)
      • แวะชิมขนมชีสทาร์ต Pablo หรือไทยากิมะพร้าวสังขยา/ถั่วแดงร้อนๆ ริมทาง`],

      ['19:00 - 21:00', 'DINNER @ DOTONBORI STREET FOOD', `ตลุยทานมื้อค่ำย่านโดตงโบริ (Dotonbori) และเช็กอินป้ายกูลิโกะ:
      • ถ่ายรูปเช็กอินกับป้ายกูลิโกะ (Glico Running Man) ยามค่ำคืนริมคลอง
      • ลิ้มลองอาหารขึ้นชื่อของโอซากะ:
        - **Kushikatsu:** ของทอดเสียบไม้ร้าน Kushikatsu Daruma
        - **Ramen:** Ichiran Ramen (ราเมงข้อสอบ) หรือ Kinryu Ramen (ราเมงมังกร)
        - **Okonomiyaki:** พิซซ่าญี่ปุ่นร้าน Mizuno หรือ Chibo
      • (งบประมาณมื้อเย็น: ประมาณ 2,500 - 4,000 เยน/คน)`],

      ['21:00 - 21:30', 'RETURN TO HOTEL', `เดินทางกลับที่พัก:
    • เดินจากโดตงโบริกลับที่พักย่าน Imamiyaebisu (ระยะทางประมาณ 1.5 กม. ใช้เวลาเดินประมาณ 18-20 นาที) หรือนั่งรถไฟใต้ดินสาย Namboku/Subway กลับ 1 สถานี`]
    ],
    budget_summary: {
      transportation: 'ประมาณ 380 - 500 เยน / คน (เน้นเดินเชื่อมต่อย่านหลักใกล้เคียงกัน)',
      shopping: 'ขึ้นอยู่กับงบประมาณส่วนบุคคล (เสื้อผ้ามือสองเริ่มที่ 1,000 - 5,000 เยน/ชิ้น)',
      food_drinks: 'ประมาณ 6,500 - 9,500 เยน / คน (ตะเวนกินตลอดทั้งวัน 4-5 มื้อ)'
    },
    links: [
      ['Kuromon Ichiba Market', 'https://kuromon.com/'],
      ['2nd STREET Japan', 'https://www.2ndstreet.jp/'],
      ['KINJI Used Clothing', 'https://www.kinji.jp/'],
      ['Mandarake Nipponbashi', 'https://www.mandarake.co.jp/']
    ]
  },
  {
    id: 'd20',
    date: '20',
    month: 'ตุลาคม 2569',
    title: 'WAKAYAMA SEAFOOD & RINKU OUTLET BEFORE FLIGHT',
    subtitle: '10:00 เช็กเอาต์ • ฝากกระเป๋าตู้ Rinku-Town • ลุยตลาดอาหารทะเล Kuroshio Market (Wakayama) • ช้อป Rinku Premium Outlets • 18:00 ถึงสนามบิน KIX',
    image: 'assets/09.webp',
    chips: ['Wakayama', 'Kuroshio Market', 'Tuna Show', 'Rinku Outlets', 'Kansai Airport'],
    story: 'ปรับแผนวันสุดท้ายให้ฟินขั้นสุด เช็กเอาต์แล้วขนกระเป๋าไปฝากที่สถานี Rinku-Town ครั้งเดียวจบ จากนั้นนั่งรถไฟตรงเข้าวากายามะ ตะลุยตลาด Kuroshio Market ชมการแล่ปลาทูน่าสดๆ และกินอาหารทะเลปิ้งย่างริมทะเล ก่อนกลับมาเดินช้อปปิ้งส่งท้ายที่ Rinku Outlets แล้วมุ่งหน้าสู่สนามบินคันไซเวลา 18:00 น.',
    events: [
      ['10:00 - 11:00', 'CHECK-OUT & DROP LUGGAGE AT RINKU-TOWN', `เช็กเอาต์และนำกระเป๋าไปฝากที่สถานี Rinku-Town (ฝากครั้งเดียว ไม่ต้องย้อนกลับมาเอาที่พัก):
    • เช็กเอาต์ออกจากที่พักเวลา 10:00 น.
    • เดินทางไปสถานี Nankai Shin-Imamiya หรือ Namba
    • ขึ้นรถไฟสาย Nankai Airport Express มุ่งหน้าสนามบินคันไซ ลงที่สถานี Rinku-Town Station (NK31) (780 เยน, ~40 นาที)
    • ฝากกระเป๋าเดินทางไว้ที่ตู้ล็อกเกอร์หยอดเหรียญ (Coin Lockers) หรือจุดรับฝากกระเป๋าภายในสถานี Rinku-Town`],

      ['11:00 - 11:50', 'TRAVEL TO WAKAYAMA (KUROSHIO MARKET)', `เดินทางจาก Rinku-Town มุ่งหน้าวากายามะ:
    • จากสถานี Rinku-Town ขึ้นรถไฟสาย Nankai Main Line (Southern Express หรือ Local) ไปลงที่สถานี Wakayamashi Station (NK45) (570 เยน, ~30 นาที)
    • จากสถานี Wakayamashi ต่อรถบัส Wakayama Bus (สาย 42 หรือ 94) ไปลงป้าย Kuroshio Market (ค่ารถบัสประมาณ 520 เยน, ~30 นาที)`],

      ['11:50 - 14:00', 'KUROSHIO MARKET & WAKAYAMA MARINA CITY', `ตะลุยทานอาหารทะเลสดๆ และเที่ยววากายามะ:
    • **ไฮไลต์ชมการแล่ปลาทูน่า (Tuna Dissection Show):** ชมการแล่ปลาทูน่าตัวยักษ์สดๆ โดยเชฟผู้เชี่ยวชาญ (การแสดงมีรอบ 12:30 น.)
    • **ทานมื้อเที่ยง:** ลิ้มลองข้าวหน้าปลาทูน่าสด (Maguro Don), ซูชิหน้าอาหารทะเลสดใหม่ และโซนบาร์บีคิวปิ้งย่างริมทะเล (Seafood BBQ) ที่เลือกวัตถุดิบสดๆ จากตลาดมาปิ้งย่างเองได้ทันที
    • เดินเล่นถ่ายรูปบรรยากาศจำลองเมืองยุโรปที่ Porto Europa ซึ่งอยู่ติดกับตลาด (เข้าฟรี)`],

      ['14:00 - 15:00', 'TRAVEL BACK TO RINKU-TOWN', `เดินทางกลับมายัง Rinku-Town:
    • นั่งรถบัส Wakayama Bus กลับมายังสถานี Wakayamashi Station (~520 เยน)
    • ขึ้นรถไฟสาย Nankai Main Line กลับมาลงที่สถานี Rinku-Town Station (~570 เยน)`],

      ['15:00 - 17:30', 'SHOPPING @ RINKU PREMIUM OUTLETS', `ช้อปปิ้งส่งท้ายที่ Rinku Premium Outlets:
    • เดินจากสถานี Rinku-Town ผ่านทางเชื่อมลอยฟ้าประมาณ 6 นาที เข้าสู่เอาต์เล็ต
    • ช้อปปิ้งสินค้าแบรนด์เนมและสปอร์ตแวร์ราคาสุดพิเศษ (ส่วนลด 30% - 70%): Nike, Adidas, Onitsuka Tiger, Coach, Tommy Hilfiger, Beams ฯลฯ
    • อย่าลืมยื่นพาสปอร์ตเพื่อขอทำ Tax-Free รับส่วนลดภาษีนักท่องเที่ยว`],

      ['17:30 - 18:00', 'PICK UP LUGGAGE & ARRIVE AT KIX', `ไขตู้รับกระเป๋าและเดินทางถึงสนามบินคันไซ:
    • เดินกลับมายังสถานี Rinku-Town ไขตู้รับกระเป๋าเดินทางที่ฝากไว้
    • ขึ้นรถไฟสาย Nankai Airport Express หรือ JR 1 สถานี ไปลงที่สถานี Kansai Airport Station (NK32) (370 เยน, 6 นาที)
    • เดินทางถึงสนามบินคันไซเวลา 18:00 น. พอดี เพื่อทำเรื่องเช็กอิน โหลดกระเป๋า และผ่านด่านตรวจคนเข้าเมืองก่อนขึ้นเครื่องกลับไทย`]
    ],
    budget_summary: {
      transportation: 'ประมาณ 3,330 เยน / คน (ค่ารถไฟ Nankai + ค่ารถบัสวากายามะ ตลอดวัน)',
      luggage_storage: 'ประมาณ 700 - 1,000 เยน / ตู้ล็อกเกอร์ขนาดใหญ่',
      entrances: 'ฟรี (Porto Europa และ ตลาด Kuroshio Market เข้าฟรี)',
      food_drinks: 'ประมาณ 3,000 - 5,000 เยน / คน (มื้อเที่ยงอาหารทะเล/บาร์บีคิว)'
    },
    links: [
      ['Kuroshio Market Wakayama', 'https://www.kuroshioichiba.co.jp/'],
      ['Wakayama Marina City', 'https://www.marinacity.com/'],
      ['Rinku Premium Outlets', 'https://www.premiumoutlets.co.jp/en/rinku/'],
      ['Nankai Railway Route', 'https://www.howto-osaka.com/']
    ]
  }

// วันต่อไป


];

const packing = [
  ['passport', 'พาสปอร์ตตัวจริง + ตรวจวันหมดอายุ'],
  ['ticket', 'ตั๋วเครื่องบิน / Boarding pass'],
  ['hotel', 'เอกสารที่พัก + ที่อยู่ในญี่ปุ่น'],
  ['vjw', 'ลงทะเบียน Visit Japan Web + เตรียม QR'],
  ['cash', 'เงินเยน + บัตรเครดิต/เดบิต'],
  ['phone', 'มือถือ + eSIM/SIM + อินเทอร์เน็ต'],
  ['charger', 'หัวชาร์จ + สายชาร์จ'],
  ['plug', 'ปลั๊กแปลงไฟญี่ปุ่น (Type A)'],
  ['power', 'แบตสำรอง / Power Bank'],
  ['camera', 'กล้อง + SD card'],
  ['tripod', 'ขาตั้งกล้อง'],
  ['battery', 'แบตกล้องสำรอง / ชาร์จเต็ม'],
  ['medicine', 'ยาประจำตัว / ของใช้จำเป็น'],
  ['wallet', 'บัตรประชาชน / เอกสารสำรอง'],
  ['photo', 'ถ่ายรูป/สแกนเอกสารสำคัญเก็บในมือถือ']
];

const $ = s => document.querySelector(s);
const timeline = $('#timeline');
const dayMenu = $('#dayMenu');

function esc(s){ return String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\\':'&bsol;','"':'&quot;'}[c])); }

function render() {
  timeline.innerHTML = tripData
    .map(
      (d) => `
    <article class="day" id="${d.id}">
      <span class="day-dot"></span>
      <div class="day-card">
        <div class="day-photo" style="background-image:url('${d.image}')"></div>
        <div class="day-body">
          <div class="day-head">
            <div>
              <div class="day-label">${esc(d.date)} • ${esc(d.month)}</div>
              <h3>${esc(d.title)}</h3>
              <div class="date">${esc(d.subtitle)}</div>
            </div>
          </div>
          <p class="story">${esc(d.story)}</p>
          <div class="chips">
            ${d.chips.map((x) => `<span class="chip">${esc(x)}</span>`).join('')}
          </div>
          <div class="events">
            ${d.events
              .map(
                (e) => `
              <div class="event">
                <time>${esc(e[0])}</time>
                <div>
                  <h4>${esc(e[1])}</h4>
                  <p>${esc(e[2]).replace(/\n/g, '<br>')}</p>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
          <div class="links">
            ${d.links
              .map(
                (l, i) =>
                  `<a class="link-btn ${i ? 'dark' : ''}" href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])} ↗</a>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </article>
  `
    )
    .join('');

  dayMenu.innerHTML = tripData
    .map(
      (d) => `
    <a href="#${d.id}" data-day="${d.id}">
      <span>${esc(d.date)} · ${esc(d.title)}</span>
      <small>›</small>
    </a>
  `
    )
    .join('');
}

function renderPacking(){
  const saved = JSON.parse(localStorage.getItem('japanTripPacking') || '{}');
  $('#packingList').innerHTML = packing.map(([id,text]) => `<label class="pack-item ${saved[id] ? 'checked' : ''}" data-id="${id}"><input type="checkbox" ${saved[id] ? 'checked' : ''}><span class="check">✓</span><span class="text">${esc(text)}</span></label>`).join('');
  document.querySelectorAll('.pack-item').forEach(item => item.addEventListener('click', () => {
    const input = item.querySelector('input');
    input.checked = !input.checked;
    item.classList.toggle('checked', input.checked);
    saved[item.dataset.id] = input.checked;
    localStorage.setItem('japanTripPacking', JSON.stringify(saved));
    updateProgress();
  }));
  updateProgress();
}

function updateProgress(){
  const n = document.querySelectorAll('.pack-item').length || 1, c = document.querySelectorAll('.pack-item.checked').length, p = Math.round(c/n*100);
  $('#packProgress').textContent = p + '%';
  $('#packBar').style.width = p + '%';
}

function openDrawer(){ $('#drawer').classList.add('open'); $('#scrim').classList.add('show'); }
function closeDrawer(){ $('#drawer').classList.remove('open'); $('#scrim').classList.remove('show'); }

$('#menuBtn').onclick = openDrawer;
$('#closeMenu').onclick = closeDrawer;
$('#scrim').onclick = closeDrawer;
document.addEventListener('click', e => { const a = e.target.closest('#drawer nav a'); if(a) closeDrawer(); });
$('#scrollTopBtn').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
$('#todayBtn').onclick = () => document.querySelector('#d15').scrollIntoView({behavior:'smooth', block:'start'});
$('#checkBtn').onclick = () => document.querySelector('#packing').scrollIntoView({behavior:'smooth'});

render();
renderPacking();