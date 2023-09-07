import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Button from './components/Button';
import SendForm from './components/SendForm';
import Counter from './components/Counter';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/unit test/i);
  expect(linkElement).toBeInTheDocument();
});

// Buton ilk basta kirmizi olacak
// Icerisinde Maviye cevir yazacak
// Uzerine tiklandiktan sonra maci olacak ve icerisinde kirmiziya cevir yazacak 

test('buton dogru renge yaziya sahip ', () => {
  render(<Button/>) // butonumuzu kaplayan Button bileseni oldugu icin renderin icine o yazildi 

  // test edecegimiz elementi secmek
  const colorBtn = screen.getByRole('button', {
    name: "maviye cevir",
  })

// butonun rengi kirmizi mi?

expect(colorBtn).toHaveStyle({background: 'red'});

// butona tiklanir 

fireEvent.click(colorBtn);

//yeni rengini kontrol eder
expect(colorBtn).toHaveStyle({background: 'blue'});
 
// yeni yaazi dogru mu?
expect(colorBtn).toHaveTextContent('kirmiziya cevir')  
// toHaveTextContent yazinin iceriginin dogru olup olmadigini kontrol eder noktadan sonra bircok ozellik cikiyor zaten 

})

// checkbox tiklenmeden once buton inaktif 
// sonra aktif olmasini kontrol etme 
test('chexkboxa gore buton aktifligi', ()=>{
  render(<SendForm/>);

// test edilecek butonu cagirma
const button = screen.getByRole('button');

// butonun inaktif olmasini kontrol etme 
expect(button).toBeDisabled();

// checkboxi cagirma
const checkbox = screen.getByRole('checkbox')

// checkboxa tiklama 
fireEvent.click(checkbox);

// butonun aktif oldugunu kontrol etme 
expect(button).toBeEnabled();
})

// sayac testi

test("baslangic degeri 0 olamli", () => {
render(<Counter/>);

// test edecegim elemani cagirma
const count = screen.getByTestId("sayi")

// yazi icerigini kontrol etme 
expect(count).toHaveTextContent("0")

})
