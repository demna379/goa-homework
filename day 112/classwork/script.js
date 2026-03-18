// 1) მოკლედ სიტყვებით ახსენით რა არის stack & heap
// stackshi inaxeba advili informacia vtqvat Number, string da ase shemdeg romelic male ishleba
// heap ki ufro dznel informacias inaxavs da ar shlis magas. magalitad Object, Array da ase shemdeg

// 2) ახსენით რა არის მოდულარულობა
// modularoba aris kodis weris wesi. kodi am shemtxvevashi unda iyos advilad gamoyenebadi. 
// vtqvat davwere kodi romelic calculacias aketebs funqciis shignit romlis tavidan gamoyeneba shemidzlia

// 3) ახსენით რა არის hoisting და მოიყვანეთ მაგალითები
// hoisting aris tu rogor amzadebs js shen kods sanam gaushvebs. magalitad:
vertexCoord(1, 4, -5);

function vertexCoord(a, b, c) {
    const D = b**2 - 4 * a * c;
    const x_coordinate = -(b / (2 * a));
    const y_coordinate = -(D / (4 * a));

    console.log(`Discriminant = b^2 - 4*a*c = ${D}`);
    console.log('=======================');
    console.log('starting point of parabola');
    console.log(`x coordinate = -(${b}/(${2*a})) = ${x_coordinate}`);
    console.log(`y coordinate = -(${D}/(${4*a})) = ${y_coordinate}`);
    console.log('======================');
    console.log(`symmetric line at ${x_coordinate}`);
    console.log(`passes through y line at ${c}`);
    console.log('======================');

    if (D > 0) {
        const x_one = (-b + Math.sqrt(D)) / (2 * a);
        const x_two = (-b - Math.sqrt(D)) / (2 * a);
        console.log('two possible y zeros');
        console.log(`x one = ${x_one}`);
        console.log(`x two = ${x_two}`);
    } 
    else if (D === 0) {
        const x = (-b + Math.sqrt(D)) / (2 * a);
        console.log(`only one possible y zero ${x}`);
        console.log(`x = ${x}`);
    } 
    else {
        console.log('y does not equal 0');
    }
}
// chemi dawerili kodia trust

// 4) რომელ ძრავაზე მუშაობს js
// v8

// 5) მოკლედ ახსენით რა არის react
// react aris javascript biblioteka