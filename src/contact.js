export const showContact = function showHome(){
    const box = document.querySelector("#box");
    const p = document.createElement("p");
    while (box.hasChildNodes()) {
        box.removeChild(box.firstChild);
    }
    for (let i = 1; i < 3; i++){
        const div = document.createElement("div");
        let contactContent = box.appendChild(div);
        contactContent.id = "contact-" + i;
    }
    const contact1 = document.querySelector("#contact-1");
    const contact1Content = contact1.appendChild(p);
    contact1Content.textContent = "Contact";
    const contact2 = document.querySelector("#contact-2");
    for (let i = 0; i < 3; i++){
        const p = document.createElement("p");
        const contact2Content = contact2.appendChild(p);
        contact2Content.id = "contact-info-" + i;
    }
    const contactInfo1 = document.querySelector("#contact-info-0");
    const contactInfo2 = document.querySelector("#contact-info-1");
    const contactInfo3 = document.querySelector("#contact-info-2");

    contactInfo1.textContent = "Imaginestreen 14, Testtown";
    contactInfo2.textContent = "012 345 67 89";
    const a = document.createElement("a");
    const linkText = document.createTextNode("dennisfyren @ github");
    a.appendChild(linkText);
    a.title = "https://github.com/dennisfyren";
    a.href = "https://github.com/dennisfyren";
    a.style = "font-weight: 500;"
    contactInfo3.appendChild(a);
}