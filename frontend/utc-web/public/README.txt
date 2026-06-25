UTC Yazılım ve Danışmanlık - Favicon Paketi

Kullanım:
1. ZIP içindeki tüm dosyaları React/Vite projenizdeki public klasörüne kopyalayın.
2. index.html içindeki eski favicon satırını kaldırın:
   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
3. index-head-snippet.html dosyasındaki kodları index.html içindeki <head> bölümüne ekleyin.
4. Git işlemleri:
   git add .
   git commit -m "Update favicon and social preview assets"
   git push
5. Vercel otomatik deploy edecektir.
6. Tarayıcıda Ctrl + F5 ile kontrol edin.
7. Google arama sonucundaki favicon'un değişmesi birkaç gün sürebilir.
