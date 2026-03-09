// Album art manifest - Maps song names to album art images
const ALBUM_ART_MANIFEST = {
  ",, Isus iubit ,, Nelu Gabor, Nicu Chereji si Otniel Știrb": "album-art-cache/,, Isus iubit ,, Nelu Gabor, Nicu Chereji si Otniel Știrb.jpg",
  "Am fost odata tanar ,Nicu Chereji": "album-art-cache/Am fost odata tanar ,Nicu Chereji.jpg",
  "Astăzi Ești o Floare Rară": "album-art-cache/Astăzi Ești o Floare Rară.jpg",
  "Bagă sabia in teaca ⧸ versiune originală . - Nicu Chereji": "album-art-cache/Bagă sabia in teaca ⧸ versiune originală . - Nicu Chereji.jpg",
  "Ce-i tineretea - Nicu Chereji": "album-art-cache/Ce-i tineretea - Nicu Chereji.jpg",
  "Cine s-a atins - Nicu Chereji": "album-art-cache/Cine s-a atins - Nicu Chereji.jpg",
  "Cine-i mai puternic": "album-art-cache/Cine-i mai puternic.jpg",
  "Dacă ai părinți în viață - Nicu Chereji": "album-art-cache/Dacă ai părinți în viață - Nicu Chereji.jpg",
  "Dacă treci prin încercare (Nicu Chereji": "album-art-cache/Dacă treci prin încercare (Nicu Chereji.jpg",
  "De ce a trebuit să înduri Isuse , Nicu Chereji": "album-art-cache/De ce a trebuit să înduri Isuse , Nicu Chereji.jpg",
  "Doamne cu ce-s eu mai bun": "album-art-cache/Doamne cu ce-s eu mai bun.jpg",
  "Duhul Sfint - Nicu Chereji": "album-art-cache/Duhul Sfint - Nicu Chereji.jpg",
  "Fiecare Clipa ( Cantare de nunta ) - Nicu Chereji": "album-art-cache/Fiecare Clipa ( Cantare de nunta ) - Nicu Chereji.jpg",
  "Gata de zbor - Nicu Chereji": "album-art-cache/Gata de zbor - Nicu Chereji.jpg",
  "Isus  inca are răbdare - Nicu Chereji": "album-art-cache/Isus  inca are răbdare - Nicu Chereji.jpg",
  "Iubire fara de margini": "album-art-cache/Iubire fara de margini.jpg",
  "Lovit de valurile marii - Nicu Chereji": "album-art-cache/Lovit de valurile marii - Nicu Chereji.jpg",
  "Mare Imparat": "album-art-cache/Mare Imparat.jpg",
  "May 25, 2024": "album-art-cache/May 25, 2024.jpg",
  "Muzica Crestina Nicu Chereji Petru umbla deasupra apei": "album-art-cache/Muzica Crestina Nicu Chereji Petru umbla deasupra apei.jpg",
  "Muzica crestina- Nicu Chereji - Sa te binecuvinteze": "album-art-cache/Muzica crestina- Nicu Chereji - Sa te binecuvinteze.jpg",
  "Nainte-i Domnul - Nicu Chereji": "album-art-cache/Nainte-i Domnul - Nicu Chereji.jpg",
  "Nicu Chereji   Toamna Dragostei": "album-art-cache/Nicu Chereji   Toamna Dragostei.jpg",
  "Nicu Chereji - ,, Ca funia impletita- n trei ,,": "album-art-cache/Nicu Chereji - ,, Ca funia impletita- n trei ,,.jpg",
  "Nicu Chereji - Betlehem": "album-art-cache/Nicu Chereji - Betlehem.jpg",
  "Nicu Chereji - Catre Tine (muzica crestina)": "album-art-cache/Nicu Chereji - Catre Tine (muzica crestina).jpg",
  "Nicu Chereji - Când nu mai ai nici un răspuns": "album-art-cache/Nicu Chereji - Când nu mai ai nici un răspuns.jpg",
  "Nicu Chereji - Daca Mama-ti Mai Traieste": "album-art-cache/Nicu Chereji - Daca Mama-ti Mai Traieste.jpg",
  "Nicu Chereji - Daca treci prin incercare NEGATIV cu versuri": "album-art-cache/Nicu Chereji - Daca treci prin incercare NEGATIV cu versuri.jpg",
  "Nicu Chereji - E Iarasi Primavara": "album-art-cache/Nicu Chereji - E Iarasi Primavara.jpg",
  "Nicu Chereji - Mare-i Dumnezeu": "album-art-cache/Nicu Chereji - Mare-i Dumnezeu.jpg",
  "Nicu Chereji - Mi-ai Daruit Inca O Zi": "album-art-cache/Nicu Chereji - Mi-ai Daruit Inca O Zi.jpg",
  "Nicu Chereji - O Ce Greu": "album-art-cache/Nicu Chereji - O Ce Greu.jpg",
  "Nicu Chereji - O cetate-n sarbatoare": "album-art-cache/Nicu Chereji - O cetate-n sarbatoare.jpg",
  "Nicu Chereji - Ostas in oastea Domnului": "album-art-cache/Nicu Chereji - Ostas in oastea Domnului.jpg",
  "Nicu Chereji - Precum iarba (muzica crestina)": "album-art-cache/Nicu Chereji - Precum iarba (muzica crestina).jpg",
  "Nicu Chereji - Roada Duhului": "album-art-cache/Nicu Chereji - Roada Duhului.jpg",
  "Nicu Chereji - Sunt Un Copil Sarman": "album-art-cache/Nicu Chereji - Sunt Un Copil Sarman.jpg",
  "Nicu Chereji - Sunt omul NEGATIV": "album-art-cache/Nicu Chereji - Sunt omul NEGATIV.jpg",
  "Nicu Chereji - Sus la templu NEGATIV": "album-art-cache/Nicu Chereji - Sus la templu NEGATIV.jpg",
  "Nicu Chereji - Tu mai dinainte (muzica crestina)": "album-art-cache/Nicu Chereji - Tu mai dinainte (muzica crestina).jpg",
  "Nicu Chereji - Vestea bună": "album-art-cache/Nicu Chereji - Vestea bună.jpg",
  "Nicu Chereji - Vorbea Isus NEGATIV": "album-art-cache/Nicu Chereji - Vorbea Isus NEGATIV.jpg",
  "O cât de binecuvântat sunt - Nicu Chereji": "album-art-cache/O cât de binecuvântat sunt - Nicu Chereji.jpg",
  "Poporule Rascumparat - Nicu Chereji": "album-art-cache/Poporule Rascumparat - Nicu Chereji.jpg",
  "Ridica-ți privirea spre ceruri ,Nicu Chereji (Nou)": "album-art-cache/Ridica-ți privirea spre ceruri ,Nicu Chereji (Nou).jpg",
  "Se-aude corul ingeresc - Nicu Chereji": "album-art-cache/Se-aude corul ingeresc - Nicu Chereji.jpg",
  "Shema Israel , Nicu Chereji": "album-art-cache/Shema Israel , Nicu Chereji.jpg",
  "Sunt omul care striga catre cer - Nicu Chereji": "album-art-cache/Sunt omul care striga catre cer - Nicu Chereji.jpg",
  "Trece Timpul, Nicu Chereji": "album-art-cache/Trece Timpul, Nicu Chereji.jpg",
  "Tu Esti calea - Nicu Chereji": "album-art-cache/Tu Esti calea - Nicu Chereji.jpg",
  "Umblat-ai pe pamant - Nicu Chereji": "album-art-cache/Umblat-ai pe pamant - Nicu Chereji.jpg",
  "Unii au pe mese - Nicu Chereji ( Nou)": "album-art-cache/Unii au pe mese - Nicu Chereji ( Nou).jpg",
  "Vorbea Isus - Nicu Chereji": "album-art-cache/Vorbea Isus - Nicu Chereji.jpg",
  "Vreau pacea Ta - Nicu Chereji": "album-art-cache/Vreau pacea Ta - Nicu Chereji.jpg",
  "＂Daca treci prin incercare＂ - Nicu Chereji": "album-art-cache/＂Daca treci prin incercare＂ - Nicu Chereji.jpg"
};

// Track mapping for downloads (individual singles) - Auto-generated from song files
const TRACKS_MAP = {
  ',, Isus iubit ,, Nelu Gabor, Nicu Chereji si Otniel Știrb': 'ncmusic/,, Isus iubit ,, Nelu Gabor, Nicu Chereji si Otniel Știrb.mp3',
  'Am fost odata tanar ,Nicu Chereji': 'ncmusic/Am fost odata tanar ,Nicu Chereji.mp3',
  'Astăzi Ești o Floare Rară': 'ncmusic/Astăzi Ești o Floare Rară.mp3',
  'Bagă sabia in teaca ⧸ versiune originală . - Nicu Chereji': 'ncmusic/Bagă sabia in teaca ⧸ versiune originală . - Nicu Chereji.mp3',
  'Ce-i tineretea - Nicu Chereji': 'ncmusic/Ce-i tineretea - Nicu Chereji.mp3',
  'Cine s-a atins - Nicu Chereji': 'ncmusic/Cine s-a atins - Nicu Chereji.mp3',
  'Cine-i mai puternic': 'ncmusic/Cine-i mai puternic.mp3',
  'Dacă ai părinți în viață - Nicu Chereji': 'ncmusic/Dacă ai părinți în viață - Nicu Chereji.mp3',
  'Dacă treci prin încercare (Nicu Chereji': 'ncmusic/Dacă treci prin încercare (Nicu Chereji.mp3',
  'De ce a trebuit să înduri Isuse , Nicu Chereji': 'ncmusic/De ce a trebuit să înduri Isuse , Nicu Chereji.mp3',
  'Doamne cu ce-s eu mai bun': 'ncmusic/Doamne cu ce-s eu mai bun.mp3',
  'Duhul Sfint - Nicu Chereji': 'ncmusic/Duhul Sfint - Nicu Chereji.mp3',
  'Fiecare Clipa ( Cantare de nunta ) - Nicu Chereji': 'ncmusic/Fiecare Clipa ( Cantare de nunta ) - Nicu Chereji.mp3',
  'Gata de zbor - Nicu Chereji': 'ncmusic/Gata de zbor - Nicu Chereji.mp3',
  'Isus  inca are răbdare - Nicu Chereji': 'ncmusic/Isus  inca are răbdare - Nicu Chereji.mp3',
  'Iubire fara de margini': 'ncmusic/Iubire fara de margini.mp3',
  'Lovit de valurile marii - Nicu Chereji': 'ncmusic/Lovit de valurile marii - Nicu Chereji.mp3',
  'Mare Imparat': 'ncmusic/Mare Imparat.mp3',
  'May 25, 2024': 'ncmusic/May 25, 2024.mp3',
  'Muzica Crestina Nicu Chereji Petru umbla deasupra apei': 'ncmusic/Muzica Crestina Nicu Chereji Petru umbla deasupra apei.mp3',
  'Muzica crestina- Nicu Chereji - Sa te binecuvinteze': 'ncmusic/Muzica crestina- Nicu Chereji - Sa te binecuvinteze.mp3',
  'Nainte-i Domnul - Nicu Chereji': 'ncmusic/Nainte-i Domnul - Nicu Chereji.mp3',
  'Nicu Chereji   Toamna Dragostei': 'ncmusic/Nicu Chereji   Toamna Dragostei.mp3',
  'Nicu Chereji - ,, Ca funia impletita- n trei ,,': 'ncmusic/Nicu Chereji - ,, Ca funia impletita- n trei ,,.mp3',
  'Nicu Chereji - Betlehem': 'ncmusic/Nicu Chereji - Betlehem.mp3',
  'Nicu Chereji - Catre Tine (muzica crestina)': 'ncmusic/Nicu Chereji - Catre Tine (muzica crestina).mp3',
  'Nicu Chereji - Când nu mai ai nici un răspuns': 'ncmusic/Nicu Chereji - Când nu mai ai nici un răspuns.mp3',
  'Nicu Chereji - Daca Mama-ti Mai Traieste': 'ncmusic/Nicu Chereji - Daca Mama-ti Mai Traieste.mp3',
  'Nicu Chereji - Daca treci prin incercare NEGATIV cu versuri': 'ncmusic/Nicu Chereji - Daca treci prin incercare NEGATIV cu versuri.mp3',
  'Nicu Chereji - E Iarasi Primavara': 'ncmusic/Nicu Chereji - E Iarasi Primavara.mp3',
  'Nicu Chereji - Mare-i Dumnezeu': 'ncmusic/Nicu Chereji - Mare-i Dumnezeu.mp3',
  'Nicu Chereji - Mi-ai Daruit Inca O Zi': 'ncmusic/Nicu Chereji - Mi-ai Daruit Inca O Zi.mp3',
  'Nicu Chereji - O Ce Greu': 'ncmusic/Nicu Chereji - O Ce Greu.mp3',
  'Nicu Chereji - O cetate-n sarbatoare': 'ncmusic/Nicu Chereji - O cetate-n sarbatoare.mp3',
  'Nicu Chereji - Ostas in oastea Domnului': 'ncmusic/Nicu Chereji - Ostas in oastea Domnului.mp3',
  'Nicu Chereji - Precum iarba (muzica crestina)': 'ncmusic/Nicu Chereji - Precum iarba (muzica crestina).mp3',
  'Nicu Chereji - Roada Duhului': 'ncmusic/Nicu Chereji - Roada Duhului.mp3',
  'Nicu Chereji - Sunt Un Copil Sarman': 'ncmusic/Nicu Chereji - Sunt Un Copil Sarman.mp3',
  'Nicu Chereji - Sunt omul NEGATIV': 'ncmusic/Nicu Chereji - Sunt omul NEGATIV.mp3',
  'Nicu Chereji - Sus la templu NEGATIV': 'ncmusic/Nicu Chereji - Sus la templu NEGATIV.mp3',
  'Nicu Chereji - Tu mai dinainte (muzica crestina)': 'ncmusic/Nicu Chereji - Tu mai dinainte (muzica crestina).mp3',
  'Nicu Chereji - Vestea bună': 'ncmusic/Nicu Chereji - Vestea bună.mp3',
  'Nicu Chereji - Vorbea Isus NEGATIV': 'ncmusic/Nicu Chereji - Vorbea Isus NEGATIV.mp3',
  'O cât de binecuvântat sunt - Nicu Chereji': 'ncmusic/O cât de binecuvântat sunt - Nicu Chereji.mp3',
  'Poporule Rascumparat - Nicu Chereji': 'ncmusic/Poporule Rascumparat - Nicu Chereji.mp3',
  'Ridica-ți privirea spre ceruri ,Nicu Chereji (Nou)': 'ncmusic/Ridica-ți privirea spre ceruri ,Nicu Chereji (Nou).mp3',
  'Se-aude corul ingeresc - Nicu Chereji': 'ncmusic/Se-aude corul ingeresc - Nicu Chereji.mp3',
  'Shema Israel , Nicu Chereji': 'ncmusic/Shema Israel , Nicu Chereji.mp3',
  'Sunt omul care striga catre cer - Nicu Chereji': 'ncmusic/Sunt omul care striga catre cer - Nicu Chereji.mp3',
  'Trece Timpul, Nicu Chereji': 'ncmusic/Trece Timpul, Nicu Chereji.mp3',
  'Tu Esti calea - Nicu Chereji': 'ncmusic/Tu Esti calea - Nicu Chereji.mp3',
  'Umblat-ai pe pamant - Nicu Chereji': 'ncmusic/Umblat-ai pe pamant - Nicu Chereji.mp3',
  'Unii au pe mese - Nicu Chereji ( Nou)': 'ncmusic/Unii au pe mese - Nicu Chereji ( Nou).mp3',
  'Vorbea Isus - Nicu Chereji': 'ncmusic/Vorbea Isus - Nicu Chereji.mp3',
  'Vreau pacea Ta - Nicu Chereji': 'ncmusic/Vreau pacea Ta - Nicu Chereji.mp3',
  '＂Daca treci prin incercare＂ - Nicu Chereji': 'ncmusic/＂Daca treci prin incercare＂ - Nicu Chereji.mp3'
};

// Array of all individual songs for displaying as grid tiles
const ALL_SONGS = [
  { name: ',, Isus iubit ,, Nelu Gabor, Nicu Chereji si Otniel Știrb', path: 'ncmusic/,, Isus iubit ,, Nelu Gabor, Nicu Chereji si Otniel Știrb.mp3' },
  { name: 'Am fost odata tanar ,Nicu Chereji', path: 'ncmusic/Am fost odata tanar ,Nicu Chereji.mp3' },
  { name: 'Astăzi Ești o Floare Rară', path: 'ncmusic/Astăzi Ești o Floare Rară.mp3' },
  { name: 'Bagă sabia in teaca ⧸ versiune originală . - Nicu Chereji', path: 'ncmusic/Bagă sabia in teaca ⧸ versiune originală . - Nicu Chereji.mp3' },
  { name: 'Ce-i tineretea - Nicu Chereji', path: 'ncmusic/Ce-i tineretea - Nicu Chereji.mp3' },
  { name: 'Cine s-a atins - Nicu Chereji', path: 'ncmusic/Cine s-a atins - Nicu Chereji.mp3' },
  { name: 'Cine-i mai puternic', path: 'ncmusic/Cine-i mai puternic.mp3' },
  { name: 'Dacă ai părinți în viață - Nicu Chereji', path: 'ncmusic/Dacă ai părinți în viață - Nicu Chereji.mp3' },
  { name: 'Dacă treci prin încercare (Nicu Chereji', path: 'ncmusic/Dacă treci prin încercare (Nicu Chereji.mp3' },
  { name: 'De ce a trebuit să înduri Isuse , Nicu Chereji', path: 'ncmusic/De ce a trebuit să înduri Isuse , Nicu Chereji.mp3' },
  { name: 'Doamne cu ce-s eu mai bun', path: 'ncmusic/Doamne cu ce-s eu mai bun.mp3' },
  { name: 'Duhul Sfint - Nicu Chereji', path: 'ncmusic/Duhul Sfint - Nicu Chereji.mp3' },
  { name: 'Fiecare Clipa ( Cantare de nunta ) - Nicu Chereji', path: 'ncmusic/Fiecare Clipa ( Cantare de nunta ) - Nicu Chereji.mp3' },
  { name: 'Gata de zbor - Nicu Chereji', path: 'ncmusic/Gata de zbor - Nicu Chereji.mp3' },
  { name: 'Isus  inca are răbdare - Nicu Chereji', path: 'ncmusic/Isus  inca are răbdare - Nicu Chereji.mp3' },
  { name: 'Iubire fara de margini', path: 'ncmusic/Iubire fara de margini.mp3' },
  { name: 'Lovit de valurile marii - Nicu Chereji', path: 'ncmusic/Lovit de valurile marii - Nicu Chereji.mp3' },
  { name: 'Mare Imparat', path: 'ncmusic/Mare Imparat.mp3' },
  { name: 'May 25, 2024', path: 'ncmusic/May 25, 2024.mp3' },
  { name: 'Muzica Crestina Nicu Chereji Petru umbla deasupra apei', path: 'ncmusic/Muzica Crestina Nicu Chereji Petru umbla deasupra apei.mp3' },
  { name: 'Muzica crestina- Nicu Chereji - Sa te binecuvinteze', path: 'ncmusic/Muzica crestina- Nicu Chereji - Sa te binecuvinteze.mp3' },
  { name: 'Nainte-i Domnul - Nicu Chereji', path: 'ncmusic/Nainte-i Domnul - Nicu Chereji.mp3' },
  { name: 'Nicu Chereji   Toamna Dragostei', path: 'ncmusic/Nicu Chereji   Toamna Dragostei.mp3' },
  { name: 'Nicu Chereji - ,, Ca funia impletita- n trei ,,', path: 'ncmusic/Nicu Chereji - ,, Ca funia impletita- n trei ,,.mp3' },
  { name: 'Nicu Chereji - Betlehem', path: 'ncmusic/Nicu Chereji - Betlehem.mp3' },
  { name: 'Nicu Chereji - Catre Tine (muzica crestina)', path: 'ncmusic/Nicu Chereji - Catre Tine (muzica crestina).mp3' },
  { name: 'Nicu Chereji - Când nu mai ai nici un răspuns', path: 'ncmusic/Nicu Chereji - Când nu mai ai nici un răspuns.mp3' },
  { name: 'Nicu Chereji - Daca Mama-ti Mai Traieste', path: 'ncmusic/Nicu Chereji - Daca Mama-ti Mai Traieste.mp3' },
  { name: 'Nicu Chereji - Daca treci prin incercare NEGATIV cu versuri', path: 'ncmusic/Nicu Chereji - Daca treci prin incercare NEGATIV cu versuri.mp3' },
  { name: 'Nicu Chereji - E Iarasi Primavara', path: 'ncmusic/Nicu Chereji - E Iarasi Primavara.mp3' },
  { name: 'Nicu Chereji - Mare-i Dumnezeu', path: 'ncmusic/Nicu Chereji - Mare-i Dumnezeu.mp3' },
  { name: 'Nicu Chereji - Mi-ai Daruit Inca O Zi', path: 'ncmusic/Nicu Chereji - Mi-ai Daruit Inca O Zi.mp3' },
  { name: 'Nicu Chereji - O Ce Greu', path: 'ncmusic/Nicu Chereji - O Ce Greu.mp3' },
  { name: 'Nicu Chereji - O cetate-n sarbatoare', path: 'ncmusic/Nicu Chereji - O cetate-n sarbatoare.mp3' },
  { name: 'Nicu Chereji - Ostas in oastea Domnului', path: 'ncmusic/Nicu Chereji - Ostas in oastea Domnului.mp3' },
  { name: 'Nicu Chereji - Precum iarba (muzica crestina)', path: 'ncmusic/Nicu Chereji - Precum iarba (muzica crestina).mp3' },
  { name: 'Nicu Chereji - Roada Duhului', path: 'ncmusic/Nicu Chereji - Roada Duhului.mp3' },
  { name: 'Nicu Chereji - Sunt Un Copil Sarman', path: 'ncmusic/Nicu Chereji - Sunt Un Copil Sarman.mp3' },
  { name: 'Nicu Chereji - Sunt omul NEGATIV', path: 'ncmusic/Nicu Chereji - Sunt omul NEGATIV.mp3' },
  { name: 'Nicu Chereji - Sus la templu NEGATIV', path: 'ncmusic/Nicu Chereji - Sus la templu NEGATIV.mp3' },
  { name: 'Nicu Chereji - Tu mai dinainte (muzica crestina)', path: 'ncmusic/Nicu Chereji - Tu mai dinainte (muzica crestina).mp3' },
  { name: 'Nicu Chereji - Vestea bună', path: 'ncmusic/Nicu Chereji - Vestea bună.mp3' },
  { name: 'Nicu Chereji - Vorbea Isus NEGATIV', path: 'ncmusic/Nicu Chereji - Vorbea Isus NEGATIV.mp3' },
  { name: 'O cât de binecuvântat sunt - Nicu Chereji', path: 'ncmusic/O cât de binecuvântat sunt - Nicu Chereji.mp3' },
  { name: 'Poporule Rascumparat - Nicu Chereji', path: 'ncmusic/Poporule Rascumparat - Nicu Chereji.mp3' },
  { name: 'Ridica-ți privirea spre ceruri ,Nicu Chereji (Nou)', path: 'ncmusic/Ridica-ți privirea spre ceruri ,Nicu Chereji (Nou).mp3' },
  { name: 'Se-aude corul ingeresc - Nicu Chereji', path: 'ncmusic/Se-aude corul ingeresc - Nicu Chereji.mp3' },
  { name: 'Shema Israel , Nicu Chereji', path: 'ncmusic/Shema Israel , Nicu Chereji.mp3' },
  { name: 'Sunt omul care striga catre cer - Nicu Chereji', path: 'ncmusic/Sunt omul care striga catre cer - Nicu Chereji.mp3' },
  { name: 'Trece Timpul, Nicu Chereji', path: 'ncmusic/Trece Timpul, Nicu Chereji.mp3' },
  { name: 'Tu Esti calea - Nicu Chereji', path: 'ncmusic/Tu Esti calea - Nicu Chereji.mp3' },
  { name: 'Umblat-ai pe pamant - Nicu Chereji', path: 'ncmusic/Umblat-ai pe pamant - Nicu Chereji.mp3' },
  { name: 'Unii au pe mese - Nicu Chereji ( Nou)', path: 'ncmusic/Unii au pe mese - Nicu Chereji ( Nou).mp3' },
  { name: 'Vorbea Isus - Nicu Chereji', path: 'ncmusic/Vorbea Isus - Nicu Chereji.mp3' },
  { name: 'Vreau pacea Ta - Nicu Chereji', path: 'ncmusic/Vreau pacea Ta - Nicu Chereji.mp3' },
  { name: '＂Daca treci prin incercare＂ - Nicu Chereji', path: 'ncmusic/＂Daca treci prin incercare＂ - Nicu Chereji.mp3' }
];

// EMPTY ALBUMS CONFIG - kept for miniplayer functionality but no longer used for display
// Can be used in future for album groupings
const ALBUMS = {};


let currentPopupAlbum = null;
let popupAudio = null;
let popupIsPlaying = false;
let popupUpdateTimeInterval = null;

// PayPal Configuration
// NOTE: Replace 'YOUR_PAYPAL_CLIENT_ID' in index.html with your actual PayPal Client ID
// Get your Client ID from: https://developer.paypal.com/dashboard/

const PAYPAL_CLIENT_ID = 'YOUR_PAYPAL_CLIENT_ID';
const SINGLE_PRICE = 1.99;
// COMPLETE_COLLECTION_PRICE is now calculated dynamically in buyAll() based on ALL_SONGS.length

let currentAudio = null;
let currentButton = null;
let isPlaying = false;
let updateTimeInterval = null;

/**
 * Play preview - shows mini player on the card
 * @param {HTMLElement} button - The preview button that was clicked
 * @param {string} trackPath - Path to the audio file
 */
function playPreview(button, trackPath) {
  // If clicking the same track's button
  if (currentButton === button && isPlaying) {
    togglePlayPause(button.parentElement.nextElementSibling.querySelector('.play-pause-btn'));
    return;
  }

  // Stop any existing audio
  if (currentAudio) {
    currentAudio.pause();
  }
  if (currentButton && currentButton !== button) {
    hideMiniPlayer(currentButton);
  }

  // Create or get audio element
  if (!currentAudio) {
    currentAudio = new Audio();
    currentAudio.addEventListener('play', onAudioPlay);
    currentAudio.addEventListener('pause', onAudioPause);
    currentAudio.addEventListener('timeupdate', onTimeUpdate);
    currentAudio.addEventListener('ended', onAudioEnded);
  }

  currentButton = button;
  currentAudio.src = trackPath;

  // Show mini player
  showMiniPlayer(button);

  // Play the audio
  currentAudio.play();
  isPlaying = true;
}

/**
 * Toggle play/pause from mini player
 * @param {HTMLElement} playBtn - The play/pause button
 */
function togglePlayPause(playBtn) {
  if (!currentAudio) return;

  if (currentAudio.paused) {
    currentAudio.play();
  } else {
    currentAudio.pause();
  }
}

/**
 * Seek through track
 * @param {HTMLElement} slider - The range input slider
 */
function seekTrack(slider) {
  if (!currentAudio) return;

  const percentage = parseFloat(slider.value);
  const newTime = (percentage / 100) * currentAudio.duration;
  currentAudio.currentTime = newTime;
}

/**
 * Update slider and time display as track plays
 */
function onTimeUpdate() {
  if (!currentButton || !currentAudio || currentAudio.duration === 0) return;

  const miniPlayer = currentButton.parentElement.nextElementSibling;
  if (!miniPlayer || !miniPlayer.classList.contains('mini-player')) return;

  const slider = miniPlayer.querySelector('.player-slider');
  const timeDisplay = miniPlayer.querySelector('.time-display');

  // Update slider position
  const percentage = (currentAudio.currentTime / currentAudio.duration) * 100;
  slider.value = percentage;

  // Update time display
  timeDisplay.textContent = formatTime(currentAudio.currentTime);
}

/**
 * Handle play event
 */
function onAudioPlay() {
  if (!currentButton) return;

  isPlaying = true;
  const miniPlayer = currentButton.parentElement.nextElementSibling;
  const playBtn = miniPlayer.querySelector('.play-pause-btn');
  playBtn.textContent = '⏸';

  // Start updating time
  if (updateTimeInterval) clearInterval(updateTimeInterval);
  updateTimeInterval = setInterval(onTimeUpdate, 100);
}

/**
 * Handle pause event
 */
function onAudioPause() {
  if (!currentButton) return;

  isPlaying = false;
  const miniPlayer = currentButton.parentElement.nextElementSibling;
  const playBtn = miniPlayer.querySelector('.play-pause-btn');
  playBtn.textContent = '▶';

  // Stop updating time
  if (updateTimeInterval) {
    clearInterval(updateTimeInterval);
    updateTimeInterval = null;
  }
}

/**
 * Handle audio end
 */
function onAudioEnded() {
  if (!currentButton) return;

  isPlaying = false;
  const miniPlayer = currentButton.parentElement.nextElementSibling;
  const playBtn = miniPlayer.querySelector('.play-pause-btn');
  const slider = miniPlayer.querySelector('.player-slider');

  playBtn.textContent = '▶';
  slider.value = 0;

  // Stop updating time
  if (updateTimeInterval) {
    clearInterval(updateTimeInterval);
    updateTimeInterval = null;
  }
}

/**
 * Show mini player
 * @param {HTMLElement} button - The preview button
 */
function showMiniPlayer(button) {
  const miniPlayer = button.parentElement.nextElementSibling;
  if (miniPlayer && miniPlayer.classList.contains('mini-player')) {
    miniPlayer.style.display = 'flex';
  }
}

/**
 * Hide mini player
 * @param {HTMLElement} button - The preview button
 */
function hideMiniPlayer(button) {
  const miniPlayer = button.parentElement.nextElementSibling;
  if (miniPlayer && miniPlayer.classList.contains('mini-player')) {
    miniPlayer.style.display = 'none';
  }
}

/**
 * Format time as MM:SS
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time string
 */
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Handle individual track purchase
 * @param {string} trackName - Name of the track
 * @param {number} price - Price of the track
 */
function buyTrack(trackName, price = SINGLE_PRICE) {
  const description = `${trackName} de Nicu Chereji`;
  initializePayPalCheckout(price, description, trackName);
}

/**
 * Handle "Buy All" complete collection purchase
 */
function buyAll() {
  const totalPrice = (ALL_SONGS.length * SINGLE_PRICE).toFixed(2);
  const description = `Colecția Completă de Muzică - Toate ${ALL_SONGS.length} cântecele de Nicu Chereji`;
  initializePayPalCheckout(parseFloat(totalPrice), description, 'Colecția Completă');
}

/**
 * Initialize PayPal Checkout
 * @param {number} amount - Amount in USD
 * @param {string} description - Description of purchase
 * @param {string} itemName - Name of item being purchased
 */
function initializePayPalCheckout(amount, description, itemName) {
  // Check if PayPal SDK is loaded
  if (typeof paypal === 'undefined') {
    alert('⚠️ PayPal nu este configurat. Te rog să înlocuiești YOUR_PAYPAL_CLIENT_ID cu ID-ul tău real în fișierul HTML.');
    console.log('Pentru a configura PayPal:');
    console.log('1. Mergi la https://developer.paypal.com/dashboard/');
    console.log('2. Creează un cont de afaceri');
    console.log('3. Obține ID-ul tău de client');
    console.log('4. Înlocuiește YOUR_PAYPAL_CLIENT_ID în index.html');
    return;
  }

  const container = document.getElementById('paypal-button-container');

  // Clear any existing buttons
  container.innerHTML = '';

  // Create new PayPal buttons
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          reference_id: itemName.replace(/\s+/g, '-').toLowerCase(),
          amount: {
            currency_code: 'USD',
            value: amount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: amount.toFixed(2)
              }
            }
          },
          items: [{
            name: itemName,
            description: description,
            sku: itemName.replace(/\s+/g, '-').toLowerCase(),
            unit_amount: {
              currency_code: 'USD',
              value: amount.toFixed(2)
            },
            quantity: '1'
          }]
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        console.log('Purchase successful!', orderData);
        showPurchaseNotification(itemName, amount, orderData.id);

        // COMMENTED: Logic for processing order and sending download link
        /*
        // Send order data to your backend/email service
        fetch('/api/process-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId: orderData.id,
            itemName: itemName,
            amount: amount,
            customerEmail: orderData.payer.email_address,
            downloadLink: generateDownloadLink(itemName)
          })
        })
        .then(response => response.json())
        .then(data => {
          // Handle response - could be download link, confirmation, etc.
          console.log('Order processed:', data);
        })
        .catch(error => console.error('Error:', error));
        */
      });
    },
    onError: function(err) {
      console.error('Eroare la plată:', err);
      alert('A apărut o eroare în timpul plății. Te rog încearcă din nou.');
    },
    onCancel: function(data) {
      console.log('Plată anulată:', data);
      container.style.display = 'none';
    }
  }).render('#paypal-button-container');

  // Show the payment container
  container.style.display = 'block';

  // Scroll to payment section
  setTimeout(() => {
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

/**
 * Show purchase notification with download link
 * @param {string} itemName - Name of purchased item
 * @param {number} amount - Amount paid
 * @param {string} orderId - PayPal order ID
 */
function showPurchaseNotification(itemName, amount, orderId) {
  const modal = document.getElementById('purchase-notification');
  const downloadLink = document.getElementById('download-link');
  const orderIdSpan = document.getElementById('order-id');
  const itemNameSpan = document.getElementById('purchase-item-name');

  // Set item name
  itemNameSpan.textContent = itemName;

  // Generate download link
  const downloadUrl = generateDownloadLink(itemName);
  downloadLink.href = downloadUrl;

  // Set order ID (truncate for display)
  orderIdSpan.textContent = orderId.substring(0, 12) + '...';

  // Show modal
  modal.style.display = 'flex';

  // Auto-download for single tracks (trigger download)
  if (itemName !== 'Colecția Completă') {
    // Simulate clicking the download link after a short delay
    setTimeout(() => {
      downloadLink.click();
    }, 500);
  }

  // Prevent scrolling while modal is open
  document.body.style.overflow = 'hidden';
}

/**
 * Generate download URL for a track or all tracks
 * @param {string} itemName - Name of item (track name or "Colecția Completă")
 * @returns {string} Download URL
 */
function generateDownloadLink(itemName) {
  if (itemName === 'Colecția Completă') {
    // For complete collection, create a download URL that points to a zip
    // Since this is static hosting, we'll create a data URL with instructions
    // In production, this would be a real zip file
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(
      'Colecția Completă - Descarcă Toate Cântecele\n\n' +
      'Te rog să descarci fiecare cântec individual:\n\n' +
      ALL_TRACKS.map((track, idx) => `${idx + 1}. ${track}\n   ${window.location.origin}/${TRACKS_MAP[track]}`).join('\n\n')
    );
  } else {
    // Return direct link to the MP3 file
    if (TRACKS_MAP[itemName]) {
      return TRACKS_MAP[itemName];
    }
    return '#';
  }
}

/**
 * Close purchase notification modal
 */
function closePurchaseModal() {
  const modal = document.getElementById('purchase-notification');
  modal.style.display = 'none';
  
  // Re-enable scrolling
  document.body.style.overflow = 'auto';
}

/**
 * Open track list popup for an album
 * @param {string} albumName - Name of the album to preview
 */
function openTrackListPopup(albumName) {
  const album = ALBUMS[albumName];
  if (!album) {
    console.error(`Album "${albumName}" not found in ALBUMS config`);
    return;
  }

  currentPopupAlbum = albumName;
  const popup = document.getElementById('track-list-popup');
  const albumTitle = document.getElementById('popup-album-title');
  const trackCount = document.getElementById('popup-track-count');
  const trackListContainer = document.getElementById('track-list-container');

  // Set popup header
  albumTitle.textContent = albumName;
  trackCount.textContent = `${album.tracks.length} cântec${album.tracks.length !== 1 ? 'e' : ''}`;

  // Clear and rebuild track list
  trackListContainer.innerHTML = '';
  album.tracks.forEach((track, index) => {
    const trackElement = document.createElement('div');
    trackElement.className = 'track-item';
    trackElement.innerHTML = `
      <button class="track-play-btn" onclick="playPopupTrack(${index}, '${albumName}')">▶</button>
      <div class="track-info">
        <span class="track-number">${track.number}</span>
        <span class="track-name">${track.name}</span>
      </div>
    `;
    trackListContainer.appendChild(trackElement);
  });

  // Show popup with fade-in animation
  popup.style.display = 'flex';
  popup.style.opacity = '0';
  popup.offsetHeight; // Trigger reflow
  popup.style.transition = 'opacity 0.3s ease';
  popup.style.opacity = '1';
}

/**
 * Close track list popup
 */
function closeTrackListPopup() {
  const popup = document.getElementById('track-list-popup');
  const playerDiv = document.getElementById('current-track-player');

  // Fade out animation
  popup.style.opacity = '0';
  setTimeout(() => {
    popup.style.display = 'none';
    popup.style.opacity = '1'; // Reset for next opening
  }, 300);

  // Stop popup audio if playing
  if (popupAudio) {
    popupAudio.pause();
    popupAudio.currentTime = 0;
  }
  
  // Hide player
  playerDiv.style.display = 'none';
  
  // Clear state
  currentPopupAlbum = null;
  popupIsPlaying = false;
  if (popupUpdateTimeInterval) {
    clearInterval(popupUpdateTimeInterval);
    popupUpdateTimeInterval = null;
  }
}

/**
 * Play a specific track from popup
 * @param {number} trackIndex - Index of track in album's track array
 * @param {string} albumName - Name of the album
 */
function playPopupTrack(trackIndex, albumName) {
  const album = ALBUMS[albumName];
  if (!album || !album.tracks[trackIndex]) {
    console.error('Invalid track index or album');
    return;
  }

  const track = album.tracks[trackIndex];
  const playerDiv = document.getElementById('current-track-player');
  const playBtn = document.getElementById('popup-play-btn');
  const slider = document.getElementById('popup-slider');
  const timeDisplay = document.getElementById('popup-time');

  // Stop previous audio if any
  if (popupAudio) {
    popupAudio.pause();
  }

  // Create new audio element for popup
  if (!popupAudio) {
    popupAudio = new Audio();
    popupAudio.addEventListener('play', onPopupAudioPlay);
    popupAudio.addEventListener('pause', onPopupAudioPause);
    popupAudio.addEventListener('timeupdate', onPopupTimeUpdate);
    popupAudio.addEventListener('ended', onPopupAudioEnded);
    popupAudio.addEventListener('loadedmetadata', onPopupAudioLoaded);
  }

  // Load and play track
  popupAudio.src = track.path;
  popupAudio.play();
  popupIsPlaying = true;

  // Update player UI
  playBtn.textContent = '⏸';
  timeDisplay.textContent = '0:00';
  slider.value = 0;

  // Show player
  playerDiv.style.display = 'flex';

  // Start time update interval
  if (popupUpdateTimeInterval) clearInterval(popupUpdateTimeInterval);
  popupUpdateTimeInterval = setInterval(onPopupTimeUpdate, 100);
}

/**
 * Handle popup audio play event
 */
function onPopupAudioPlay() {
  const playBtn = document.getElementById('popup-play-btn');
  playBtn.textContent = '⏸';
  popupIsPlaying = true;

  if (popupUpdateTimeInterval) clearInterval(popupUpdateTimeInterval);
  popupUpdateTimeInterval = setInterval(onPopupTimeUpdate, 100);
}

/**
 * Handle popup audio pause event
 */
function onPopupAudioPause() {
  const playBtn = document.getElementById('popup-play-btn');
  playBtn.textContent = '▶';
  popupIsPlaying = false;

  if (popupUpdateTimeInterval) {
    clearInterval(popupUpdateTimeInterval);
    popupUpdateTimeInterval = null;
  }
}

/**
 * Update popup slider and time display
 */
function onPopupTimeUpdate() {
  if (!popupAudio || popupAudio.duration === 0) return;

  const slider = document.getElementById('popup-slider');
  const timeDisplay = document.getElementById('popup-time');

  // Update slider position
  const percentage = (popupAudio.currentTime / popupAudio.duration) * 100;
  slider.value = percentage;

  // Update time display
  timeDisplay.textContent = formatTime(popupAudio.currentTime);
}

/**
 * Handle popup audio loaded (for duration)
 */
function onPopupAudioLoaded() {
  if (!popupAudio) return;
  
  // Duration is now available
  // Could update UI to show total duration if desired
}

/**
 * Handle popup audio ended
 */
function onPopupAudioEnded() {
  const playBtn = document.getElementById('popup-play-btn');
  const slider = document.getElementById('popup-slider');
  
  playBtn.textContent = '▶';
  slider.value = 0;
  popupIsPlaying = false;

  if (popupUpdateTimeInterval) {
    clearInterval(popupUpdateTimeInterval);
    popupUpdateTimeInterval = null;
  }
}

/**
 * Toggle popup audio play/pause
 */
function togglePopupPlayPause() {
  if (!popupAudio) return;

  if (popupAudio.paused) {
    popupAudio.play();
  } else {
    popupAudio.pause();
  }
}

/**
 * Seek popup track
 * @param {HTMLElement} slider - The range slider element
 */
function seekPopupTrack(slider) {
  if (!popupAudio) return;

  const percentage = parseFloat(slider.value);
  const newTime = (percentage / 100) * popupAudio.duration;
  popupAudio.currentTime = newTime;
}

/**
 * Generate song grid tiles dynamically
 */
function generateSongGrid() {
  const grid = document.getElementById('songs-grid');
  if (!grid) return;

  // Get the "Buy All" card (it's already in the grid)
  const buyAllCard = grid.querySelector('.buy-all-card');
  const popupDiv = grid.querySelector('#track-list-popup');
  
  // Generate a random gradient color for each song
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8ec5e 0%, #ff7d73 100%)',
    'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
    'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)'
  ];

  // Create song cards
  ALL_SONGS.forEach((song, index) => {
    const gradient = gradients[index % gradients.length];
    const albumArt = ALBUM_ART_MANIFEST[song.name];
    const songCard = document.createElement('div');
    songCard.className = 'album-card';
    
    // Use album art if available, otherwise use gradient
    let coverHTML;
    if (albumArt) {
      coverHTML = `<img src="${albumArt}" alt="${song.name}" class="album-cover-image" style="width: 100%; height: 100%; object-fit: cover;">`;
    } else {
      coverHTML = `<div class="cover-placeholder" style="background: ${gradient}"></div>`;
    }
    
    songCard.innerHTML = `
      <div class="album-cover">
        ${coverHTML}
      </div>
      <div class="album-info">
        <h3>${song.name}</h3>
        <p class="album-type">Single</p>
        <p class="price">$${SINGLE_PRICE.toFixed(2)}</p>
        <div class="album-actions">
          <button class="btn btn-secondary btn-listen" onclick="playPreview(this, '${song.path}')">
            ▶ Ascultă
          </button>
          <button class="btn btn-primary" onclick="buyTrack('${song.name}', ${SINGLE_PRICE})">
            Cumpără
          </button>
        </div>
        <div class="mini-player" style="display: none;">
          <button class="play-pause-btn" onclick="togglePlayPause(this)">▶</button>
          <input type="range" class="player-slider" min="0" max="100" value="0" onchange="seekTrack(this)" oninput="seekTrack(this)">
          <span class="time-display">0:00</span>
        </div>
      </div>
    `;
    
    grid.appendChild(songCard);
  });
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎵 Magazinul de Muzică Nicu Chereji a fost încărcat');

  // Generate individual song grid tiles
  generateSongGrid();

  // Update store subtitle with song count
  const totalSongs = ALL_SONGS.length;
  const totalPrice = (totalSongs * SINGLE_PRICE).toFixed(2);
  document.getElementById('store-subtitle').textContent = `Toate cântecele: ${SINGLE_PRICE.toFixed(2)}$ fiecare | Cumpără toate ${totalSongs} pentru ${totalPrice}$`;
  document.getElementById('buy-all-count').textContent = `Toate ${totalSongs} cântecele`;
  document.getElementById('buy-all-price').textContent = `${totalPrice}$`;

  // Check if PayPal is configured
  if (PAYPAL_CLIENT_ID === 'YOUR_PAYPAL_CLIENT_ID') {
    console.warn('⚠️ PayPal nu este configurat. Actualizează YOUR_PAYPAL_CLIENT_ID în index.html');
  }

  // Add smooth scroll behavior for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Close mini players when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.album-card')) {
      // Optional: auto-pause when clicking outside
      // Uncomment if you want this behavior:
      // if (currentAudio && !currentAudio.paused) {
      //   currentAudio.pause();
      // }
    }
  });

  // Setup popup slider event listeners
  const popupSlider = document.getElementById('popup-slider');
  if (popupSlider) {
    popupSlider.addEventListener('input', function() {
      seekPopupTrack(this);
    });
    popupSlider.addEventListener('change', function() {
      seekPopupTrack(this);
    });
  }

  // Setup popup play button
  const popupPlayBtn = document.getElementById('popup-play-btn');
  if (popupPlayBtn) {
    popupPlayBtn.addEventListener('click', togglePopupPlayPause);
  }
});

/**
 * COMMENTED: Future functionality for album management
 *
 * This function shows how albums can be managed dynamically
 * as you add more full albums (with multiple tracks) to your store.
 *
 * Uncomment and use when you have album data to load:
 */
/*
const albumsData = [
  {
    id: 'album-1',
    title: 'Album Title',
    type: 'Full Album',
    trackCount: 12,
    price: 9.99,
    coverGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    preview: 'albums/album-1/preview.mp3',
    tracks: [
      { name: 'Track 1', path: 'albums/album-1/track-1.mp3' },
      { name: 'Track 2', path: 'albums/album-1/track-2.mp3' },
      // Add more tracks
    ]
  },
  // Add more albums as needed
];

function loadAlbumsFromData() {
  const grid = document.querySelector('.albums-grid');

  // Keep the buy-all card at the top
  const buyAllCard = grid.querySelector('.buy-all-card');
  grid.innerHTML = '';
  grid.appendChild(buyAllCard);

  albumsData.forEach(album => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.innerHTML = `
      <div class="album-cover">
        <div class="cover-placeholder" style="background: ${album.coverGradient}"></div>
      </div>
      <div class="album-info">
        <h3>${album.title}</h3>
        <p class="album-type">${album.type}</p>
        ${album.trackCount ? `<p class="album-tracks">${album.trackCount} tracks</p>` : ''}
        <p class="price">$${album.price.toFixed(2)}</p>
        <div class="album-actions">
          <button class="btn btn-secondary btn-listen" onclick="playPreview(this, '${album.preview}')">
            ▶ Preview
          </button>
          <button class="btn btn-primary" onclick="buyTrack('${album.title}', ${album.price})">
            Buy Album
          </button>
        </div>
        <div class="mini-player" style="display: none;">
          <button class="play-pause-btn" onclick="togglePlayPause(this)">▶</button>
          <input type="range" class="player-slider" min="0" max="100" value="0" onchange="seekTrack(this)" oninput="seekTrack(this)">
          <span class="time-display">0:00</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
*/

/**
 * COMMENTED: Future functionality for batch/bundle pricing
 *
 * Use this to create special promotions or album bundles:
 */
/*
const bundles = [
  {
    name: 'Starter Pack',
    items: ['Track 1', 'Track 2', 'Track 3'],
    price: 3.99
  },
  {
    name: 'Collector\'s Edition',
    items: ['All Current Tracks'],
    price: 11.94
  }
];

function createBundleCheckout(bundleName) {
  const bundle = bundles.find(b => b.name === bundleName);
  if (bundle) {
    initializePayPalCheckout(bundle.price, `${bundleName} - ${bundle.items.join(', ')}`, bundleName);
  }
}
*/
