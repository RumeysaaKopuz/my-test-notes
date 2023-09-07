# Expect: 
- Elementlerin beklenildigi sekilde calisip calismadigini kontrol eder.

- Elementin beklenildigi sekilde davranip davranmadigini kontrol etmek icin fonksiyonlar sunar biz bu fonksiyonlara > Matchers (Eslestiriciler) diyoruz

- Test edilecek ifadeyi parametre olarak alır. Biz metodu çalıştırıp sonucunu expect’e vermiş olduk

- Meatcehrlar element uzerindeki beklentimizi belirtir. Bu noktada matcherlara gitmemiz lazim nereden bulacagiz matcherlari -> jest-dom kutuphanesinden 

- https://github.com/testing-library/jest-dom -> bu linkle ulasabiliriz 

- testi hangi kutuphane ile kullandigimiz onemli hata aldigimizda daha cabuk cozumlemek icin biri ->jest-dom kutuphanesi digeri ise -> react testing library bu da farkli ozelliklere sahip bu iki kutuphane ile testlerimizi yurutecegiz 

# Test Yaparken Kullanabilecegimiz Yontemler 

- Birtinci yolumuz TDD (Test-Driven Development): tdd de olay soyle calisir, once test yazilir ondan sonra uygulamanin ozelligi yazilir. Peki bize bunun artilari neler;
- Testleri yazmak bir yuk gibi gelmiyor, yazilimin bir parcasi oldugunu anliyoruz

- Ikinci ozelligimiz ise BDD (Behaviour-Driven Development) -> once ozellik gelistirilir ondan sonra testi yazilir.

- Hangisinin tercihn edilecegi kisisel bir tercihtir. Ikisini de kullanabilirsiniz.

# Notlar 
- Eger ben bir elemani test edeceksem dogru algoritmayi kurmam gerek.
- Test: Testin tanımlanmasını sağlar ve içine aldığı parametre ile birlikte açıklayıcı bir metin girilmesi beklenir. ‘2 + 2 = 4 eder’ ifadesi de ilgili testi nitelemektedir.
- toBe: expect’ten dönen değer ile karşılaştırılacak değeri belirlenmesi içindir. Matcher olarak da ifade edilir. toEqual, toBeNull, toBeDefined gibi pek çok farklı matcher bulunur.
- fireEvent --> biz kullanici etkilesimi olmasi icin kullanicinin butona tiklamasini, inputa yazi yazmasini, bir slideri suruklemesini isteyebiliriz bu taz etkilesimleri hayata gecirmenin yolu fireEvent iledir. Olay tetiklemek. 