let a = 0;
let b = 1;
let c;
for (count = 0; count < 20; count++) {
    c = b;
    b = b + a;
    a = c;
    document.write(a + " ; ");
}
