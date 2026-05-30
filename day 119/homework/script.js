// 1) შექმენი try/catch ბლოკი სადაც ცვლადს მინიჭების შემდეგ შეცვლი const-ს მნიშვნელობას და catch-ში გამოიტანე ერორის message.

// 2) try ბლოკში სცადე JSON.parse() არასწორი string-ის (მაგ: "{name: 'nika'}") და catch-ში გამოიტანე "Invalid JSON".

// 3) შექმენი ფუნქცია divide(a, b), რომელიც try/catch-ს იყენებს:
//    - თუ b = 0, throw ახალი Error("Cannot divide by zero")
//    - catch-ში გამოიტანე error.message

// 4) try ბლოკში მიმართე ობიექტის property-ს რომელიც არ არსებობს (მაგ: obj.name როცა obj = null)
//    - catch-ში დაბეჭდე "Property error"

// 5) შექმენი მასივი და try ბლოკში სცადე ისეთი index-ის აღება რომელიც არ არსებობს და შემდეგ მასზე .toUpperCase() გამოძახება
//    - catch-ში გამოიტანე "Out of bounds or invalid operation"