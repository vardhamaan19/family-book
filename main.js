var images=[
    "WATSApp image 2021-05-10 at 6. 12 PM (2).jpeg",
    "WATSApp image 2021-05-10 at 6. 12 PM (4).jpeg",
    "WATSApp image 2021-05-10 at 6. 12 PM (5).jpeg",
    "WATSApp image 2021-05-10 at 6. 12 PM.jpeg",
    "WATSApp image 2021-05-10 at 6. 12 PM (3).jpeg",
    " WATSApp image 2021-05-10 at 6. 12 PM (1).jpeg,"
];
var names=[
    "Rupchand menghani()MY grandfather",
    "Bina menghani(My grandmother)",
    "Sumit menghani(My father)",
    "Mahak menghnai( My mother)",
    "Vardhamaan 19 (ME)",
    "Vandan(My brother)"
];
var i=0;

function update()
{
    i++;
 var number_of_members=6;
 if(i > number_of_members)
 {
     i=0;
}
var updated_image= images[i];
var updated_name= names[i];
document.getElementById("family_member").src=images[i];
document.getElementById("family_member").innerHTML=names[i];
}